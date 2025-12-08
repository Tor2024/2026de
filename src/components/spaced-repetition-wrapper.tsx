
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Topic } from '@/lib/types';
import { useUserProgress } from '@/hooks/use-user-progress';
import { ExerciseEngine } from './exercise-engine';
import { Timer } from './timer';
import { Button } from './ui/button';
import { Loader2, Brain, RefreshCw, SkipForward } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { curriculum } from '@/lib/data';
import Link from 'next/link';

type RepetitionState = {
  nextReviewDate: string | null;
  lastReviewTime: number | null;
};

export function SpacedRepetitionWrapper({ topic }: { topic: Topic }) {
  const { getTopicProficiency, setTopicProficiency } = useUserProgress(topic.id);
  const [repetitionState, setRepetitionState] = useState<RepetitionState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isReadyForReview, setIsReadyForReview] = useState(false);
  const [nextReviewDate, setNextReviewDate] = useState<Date | null>(null);

  const getRepetitionState = useCallback((): RepetitionState => {
    try {
      const item = window.localStorage.getItem(`repetition-${topic.id}`);
      return item ? JSON.parse(item) : { nextReviewDate: null, lastReviewTime: null };
    } catch (error) {
      console.error('Error reading repetition state from localStorage', error);
      return { nextReviewDate: null, lastReviewTime: null };
    }
  }, [topic.id]);

  useEffect(() => {
    const state = getRepetitionState();
    setRepetitionState(state);
    
    if (state.nextReviewDate) {
      const reviewDate = new Date(state.nextReviewDate);
      setNextReviewDate(reviewDate);
      setIsReadyForReview(new Date() >= reviewDate);
    } else {
      setIsReadyForReview(true);
    }

    setIsLoading(false);
  }, [getRepetitionState]);

  const onMastered = useCallback(() => {
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + 1); // Simple 1 day interval

    const newState: RepetitionState = {
      nextReviewDate: nextReviewDate.toISOString(),
      lastReviewTime: new Date().getTime(),
    };

    window.localStorage.setItem(`repetition-${topic.id}`, JSON.stringify(newState));
    setRepetitionState(newState);
    setNextReviewDate(nextReviewDate);
    setIsReadyForReview(false);
  }, [topic.id]);

  const handleReset = () => {
    setIsLoading(true);
    window.localStorage.removeItem(`repetition-${topic.id}`);
    setTopicProficiency(0, topic.id);
    const state = getRepetitionState();
    setRepetitionState(state);
    setNextReviewDate(null);
    setIsReadyForReview(true);
    setIsLoading(false);
  };
  
  const handleReviewNow = () => {
     setIsReadyForReview(true);
  }

  const getNextTopic = () => {
      const currentLevel = curriculum.levels.find(level => level.topics.some(t => t.id === topic.id));
      if (!currentLevel) return null;

      const currentTopicIndex = currentLevel.topics.findIndex(t => t.id === topic.id);
      if (currentTopicIndex > -1 && currentTopicIndex < currentLevel.topics.length - 1) {
          const nextTopic = currentLevel.topics[currentTopicIndex + 1];
          return `/${currentLevel.id}/${nextTopic.id}`;
      }
      return null;
  }

  const nextTopicUrl = getNextTopic();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isReadyForReview && nextReviewDate) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
            <Brain className="mx-auto h-16 w-16 text-primary bg-primary/10 rounded-full p-3 mb-4" />
            <h3 className="text-2xl font-bold text-foreground font-headline">Отличная работа!</h3>
            <p className="mt-2 text-muted-foreground mb-6">Чтобы знания лучше усвоились, мозгу нужен отдых. <br />Возвращайтесь к этой теме позже для закрепления.</p>
            
            <div className="flex justify-center my-8">
                <Timer targetDate={nextReviewDate} />
            </div>

            <div className="flex gap-4 justify-center">
                <Button onClick={handleReviewNow} variant="default">Все равно повторить</Button>
                {nextTopicUrl && (
                    <Button asChild variant="secondary">
                        <Link href={nextTopicUrl}>
                            Следующая тема <SkipForward className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                )}
                <Button onClick={handleReset} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Начать заново
                </Button>
            </div>
        </CardContent>
      </Card>
    );
  }

  return <ExerciseEngine topic={topic} onMastered={onMastered} />;
}
