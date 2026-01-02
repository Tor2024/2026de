
'use client';

import { useState, useEffect, useCallback } from 'react';
import { storage, ProgressData } from '@/lib/storage';

// In-memory cache to sync across hook instances
let progressState: ProgressData = storage.getProgress();
const listeners = new Set<(progress: ProgressData) => void>();

const emitChange = (newProgress: ProgressData) => {
  progressState = newProgress;
  storage.setProgress(newProgress);
  listeners.forEach(listener => listener(progressState));
};

export function useUserProgress(initialTopicId?: string) {
  const [progress, setProgress] = useState<ProgressData>(progressState);

  useEffect(() => {
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

    const handleInternalChange = (newProgress: ProgressData) => {
      setProgress(newProgress);
    }

    listeners.add(handleInternalChange);
    window.addEventListener('storage', handleStorageChange);

    // Ensure we start with latest state
    setProgress(progressState);

    return () => {
      listeners.delete(handleInternalChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setTopicProficiency = useCallback(async (proficiency: number, topicIdToUpdate?: string) => {
    const id = topicIdToUpdate || initialTopicId;
    if (!id) return;

    const newProficiency = Math.max(0, Math.min(100, proficiency));

    // Update local state IMMEDIATELY for UI feedback
    if (progressState[id] !== newProficiency) {
      const newProgress = { ...progressState, [id]: newProficiency };
      emitChange(newProgress);
    }
  }, [initialTopicId]);

  const getTopicProficiency = useCallback((id: string) => {
    return progress[id] || 0;
  }, [progress]);

  const proficiency = initialTopicId ? getTopicProficiency(initialTopicId) : 0;

  return { progress, proficiency, setTopicProficiency, getTopicProficiency };
}

