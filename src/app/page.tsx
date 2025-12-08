
'use client';

import { curriculum } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import {
  getLevelImage,
} from '@/lib/placeholder-images';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useEffect, useState } from 'react';
import { ProgressCircle } from '@/components/progress-circle';
import { GlobalVocabularyTrainer } from '@/components/global-vocabulary-trainer';
import type { VocabularyWord } from '@/lib/types';
import { commonWords } from '@/lib/common-words';


export default function DashboardPage() {
  const { progress, getTopicProficiency } = useUserProgress();
  const [isClient, setIsClient] = useState(false);
  const [allLearnedWords, setAllLearnedWords] = useState<VocabularyWord[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const wordsFromTopics: VocabularyWord[] = [];
      const seenWords = new Set<string>();

      // Add words from topics with progress
      curriculum.levels.forEach(level => {
        level.topics.forEach(topic => {
          if (progress[topic.id] > 0) {
            topic.vocabulary.forEach(theme => {
              theme.words.forEach(word => {
                if (!seenWords.has(word.german)) {
                  wordsFromTopics.push(word);
                  seenWords.add(word.german);
                }
              });
            });
          }
        });
      });

      // Add common words if they are not already in the list
      commonWords.forEach(commonWord => {
        if (!seenWords.has(commonWord.german)) {
          wordsFromTopics.push(commonWord);
          seenWords.add(commonWord.german);
        }
      });
      
      setAllLearnedWords(wordsFromTopics);
    }
  }, [progress, isClient]);
  
  const calculateLevelProgress = (levelId: string) => {
    const level = curriculum.levels.find(l => l.id === levelId);
    if (!level || level.topics.length === 0) {
      return 0;
    }
    const totalProficiency = level.topics.reduce((sum, topic) => {
      return sum + (getTopicProficiency(topic.id) || 0);
    }, 0);
    return Math.round(totalProficiency / level.topics.length);
  };

  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
          Lernen Deutsch mit Oleh
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          Ваш персональный путь к овладению немецким языком
        </p>
      </header>

      <div className="mb-12">
        <GlobalVocabularyTrainer words={allLearnedWords} />
      </div>

      <h2 className="text-3xl font-bold font-headline mb-6 text-center">Уровни обучения</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {curriculum.levels.map((level) => {
          const levelImage = getLevelImage(level.id);
          const levelProgress = isClient ? calculateLevelProgress(level.id) : 0;
          return (
            <Card
              key={level.id}
              className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="relative h-48 w-full">
                {levelImage && (
                  <Image
                    src={levelImage.imageUrl}
                    alt={levelImage.description}
                    data-ai-hint={levelImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <CardTitle className="text-2xl font-bold text-primary-foreground font-headline">
                    {level.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col p-6">
                <CardDescription className="flex-grow">{level.description}</CardDescription>
                <div className="mt-6 flex items-center justify-center">
                  <ProgressCircle value={levelProgress} />
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full" variant="default">
                  <Link href={`/${level.id}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Начать обучение
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
