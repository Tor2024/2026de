
'use client';

import type { VocabularyWord } from '@/lib/types';
import { useState, useEffect } from 'react';
import { WordCard } from '@/components/word-card';
import { useKnownWords } from '@/hooks/use-known-words';

export function TopicVocabulary({ words }: { words: VocabularyWord[] }) {
  const { isKnown } = useKnownWords();
  const [wordsForLearning, setWordsForLearning] = useState(words);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setWordsForLearning(words.filter(word => !isKnown(word.german)));
    }
  }, [words, isKnown, isClient]);

  if (!isClient) {
     return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {words.map((word, i) => (
                <WordCard key={word.german + i} word={word} />
            ))}
        </div>
    );
  }
  
  if (wordsForLearning.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-4">
        <p>Вы уже отметили все слова из этой темы как известные. Отличная работа!</p>
        <p className="text-sm">Они будут доступны для повторения в общем словарном тренажере.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wordsForLearning.map((word, i) => (
            <WordCard key={word.german + i} word={word} />
        ))}
    </div>
  );
}
