
'use client';

import { useState, useEffect, useCallback } from 'react';

type ProgressData = {
  [key: string]: number; // topicId: proficiency
};

const getInitialProgress = (): ProgressData => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const item = window.localStorage.getItem('userProgress');
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return {};
  }
};

let progressState: ProgressData = getInitialProgress();

// A simple event emitter to notify all hooks on the same page
const listeners = new Set<(progress: ProgressData) => void>();

const emitChange = (newProgress: ProgressData) => {
    progressState = newProgress;
    try {
        window.localStorage.setItem('userProgress', JSON.stringify(progressState));
        // This event is for other tabs/windows
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'userProgress',
            newValue: JSON.stringify(progressState),
        }));
    } catch (error) {
        console.error('Error writing to localStorage', error);
    }
    // This is for hooks on the same page
    listeners.forEach(listener => listener(progressState));
};


export function useUserProgress(initialTopicId?: string) {
  const [progress, setProgress] = useState<ProgressData>(progressState);

  useEffect(() => {
    // Sync with external changes (e.g., from other tabs)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'userProgress' && event.newValue) {
        try {
            const newProgress = JSON.parse(event.newValue);
            progressState = newProgress;
            setProgress(newProgress);
        } catch (e) {
            console.error("Failed to parse progress from storage", e);
        }
      }
    };
    
    // Sync with internal changes (from other hooks on the same page)
    const handleInternalChange = (newProgress: ProgressData) => {
        setProgress(newProgress);
    }
    
    listeners.add(handleInternalChange);
    window.addEventListener('storage', handleStorageChange);
    // Also set initial state on mount
    setProgress(getInitialProgress());


    return () => {
      listeners.delete(handleInternalChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setTopicProficiency = useCallback((proficiency: number, topicIdToUpdate?: string) => {
    const id = topicIdToUpdate || initialTopicId;
    if (id) {
        const newProficiency = Math.max(0, Math.min(100, proficiency));
        if (progressState[id] !== newProficiency) {
            const newProgress = { ...progressState, [id]: newProficiency };
            emitChange(newProgress);
        }
    }
  }, [initialTopicId]);
  
  const getTopicProficiency = useCallback((id: string) => {
    return progress[id] || 0;
  }, [progress]);

  const proficiency = initialTopicId ? getTopicProficiency(initialTopicId) : 0;

  return { progress, proficiency, setTopicProficiency, getTopicProficiency };
}

    