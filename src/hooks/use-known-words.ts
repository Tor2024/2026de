
'use client';

import { useState, useEffect, useCallback } from 'react';

const KNOWN_WORDS_KEY = 'knownWords';

const getInitialKnownWords = (): string[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const item = window.localStorage.getItem(KNOWN_WORDS_KEY);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error('Error reading known words from localStorage', error);
    return [];
  }
};

let knownWordsState: string[] = getInitialKnownWords();

const listeners = new Set<(words: string[]) => void>();

const emitChange = (newWords: string[]) => {
    knownWordsState = newWords;
    try {
        window.localStorage.setItem(KNOWN_WORDS_KEY, JSON.stringify(knownWordsState));
        window.dispatchEvent(new StorageEvent('storage', {
            key: KNOWN_WORDS_KEY,
            newValue: JSON.stringify(knownWordsState),
        }));
    } catch (error) {
        console.error('Error writing known words to localStorage', error);
    }
    listeners.forEach(listener => listener(knownWordsState));
};

export function useKnownWords() {
  const [knownWords, setKnownWords] = useState<string[]>(knownWordsState);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === KNOWN_WORDS_KEY && event.newValue) {
        try {
            const newWords = JSON.parse(event.newValue);
            knownWordsState = newWords;
            setKnownWords(newWords);
        } catch (e) {
            console.error("Failed to parse known words from storage", e);
        }
      }
    };
    
    const handleInternalChange = (newWords: string[]) => {
        setKnownWords(newWords);
    }
    
    listeners.add(handleInternalChange);
    window.addEventListener('storage', handleStorageChange);
    setKnownWords(getInitialKnownWords());

    return () => {
      listeners.delete(handleInternalChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addKnownWord = useCallback((word: string) => {
    if (!knownWordsState.includes(word)) {
        const newWords = [...knownWordsState, word];
        emitChange(newWords);
    }
  }, []);
  
  const isKnown = useCallback((word: string) => {
    return knownWords.includes(word);
  }, [knownWords]);

  return { knownWords, addKnownWord, isKnown };
}
