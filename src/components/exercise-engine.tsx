
"use client";

import type { Topic } from "@/lib/types";
import { generateAdaptiveExercise, AdaptiveExerciseOutput } from "@/ai/flows/adaptive-exercise-generation";
import { verifyAnswer } from "@/ai/flows/verify-answer";
import { generateFeedback } from "@/ai/flows/generate-feedback";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, Loader2, ThumbsUp, XCircle, BookOpen, BrainCircuit, Pencil, Move, SkipForward, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { useUserProgress } from "@/hooks/use-user-progress";
import { useKnownWords } from "@/hooks/use-known-words";
import { curriculum } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Feedback = {
  type: "correct" | "incorrect";
  message: string;
} | null;

type Exercise = {
  question: string;
  answer: string;
}

type SentenceConstructionExercise = {
  words: string[];
  correctSentence: string;
}

type Step = 'vocabulary' | 'reading' | 'comprehension' | 'grammar' | 'sentence-construction' | 'explanation' | 'mastered' | 'loading' | 'error';


type ExerciseHistoryItem = {
  exercise: string;
  userAnswer: string;
  isCorrect: boolean;
};

type ExerciseEngineProps = {
  topic: Topic;
  onMastered: () => void;
}

export function ExerciseEngine({ topic, onMastered }: ExerciseEngineProps) {
  const [exerciseData, setExerciseData] = useState<AdaptiveExerciseOutput | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>('loading');
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const { proficiency, setTopicProficiency, getTopicProficiency } = useUserProgress(topic.id);
  const { isKnown, addKnownWord } = useKnownWords();
  const [exerciseHistory, setExerciseHistory] = useState<ExerciseHistoryItem[]>([]);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [finalFeedback, setFinalFeedback] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();


  const allWords = useMemo(() => topic.vocabulary.flatMap(v => v.words), [topic.vocabulary]);
  const [vocabularyExercises, setVocabularyExercises] = useState<Exercise[]>([]);
  const [comprehensionExercises, setComprehensionExercises] = useState<Exercise[]>([]);
  const [grammarExercises, setGrammarExercises] = useState<Exercise[]>([]);
  const [sentenceConstructionExercises, setSentenceConstructionExercises] = useState<SentenceConstructionExercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const exerciseHistoryRef = useRef(exerciseHistory);

  useEffect(() => {
    exerciseHistoryRef.current = exerciseHistory;
  }, [exerciseHistory]);

  const startExerciseCycle = useCallback(async () => {
    setIsGenerating(true);
    setApiError(null);
    setCurrentStep('loading');
    setFeedback(null);
    setUserAnswer('');
    setExerciseData(null);
    setIsSubmitting(false);
    setCurrentExerciseIndex(0);

    try {
      const currentLevel = curriculum.levels.find(level => level.topics.some(t => t.id === topic.id));
      const unknownWords = allWords.filter(word => !isKnown(word.german));
      const vocabularyToUse = unknownWords.length > 0 ? unknownWords : [];

      const response = await generateAdaptiveExercise({
        grammarConcept: topic.title,
        userLevel: (currentLevel?.id.toUpperCase() as 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2') || 'A1',
        pastErrors: exerciseHistoryRef.current.filter(e => !e.isCorrect).map(e => e.exercise).join(', '),
        exerciseHistory: exerciseHistoryRef.current, // Pass current session history from ref
        vocabulary: vocabularyToUse.map(word => ({
          german: word.german,
          russian: word.russian,
          example: 'example' in word ? word.example : (word as any).exampleSingular,
        })),
      });
      setExerciseData(response);
      setVocabularyExercises(response.vocabularyExercises || []);
      setComprehensionExercises(response.comprehensionExercises);
      setGrammarExercises(response.grammarExercises);
      setSentenceConstructionExercises(response.sentenceConstructionExercises || []);

      if (response.vocabularyExercises && response.vocabularyExercises.length > 0) {
        setCurrentStep('vocabulary');
      } else {
        setCurrentStep('reading');
      }

    } catch (error) {
      console.error("Error starting exercise cycle:", error);
      setApiError("Не удалось сгенерировать упражнение. Возможно, вы достигли суточного лимита запросов. Попробуйте снова.");
      setCurrentStep('error');
    } finally {
      setIsGenerating(false);
    }
  }, [topic.id, topic.title, allWords]); // Removed exerciseHistory from dependencies

  useEffect(() => {
    startExerciseCycle();
  }, [startExerciseCycle]);


  const steps: { id: Step, name: string, icon: React.ElementType }[] = useMemo(() => [
    { id: 'vocabulary', name: 'Словарь', icon: BookOpen },
    { id: 'reading', name: 'Чтение', icon: BookOpen },
    { id: 'comprehension', name: 'Понимание', icon: BrainCircuit },
    { id: 'grammar', name: 'Грамматика', icon: Pencil },
    { id: 'sentence-construction', name: 'Построение фраз', icon: Move },
    { id: 'explanation', name: 'Объяснение', icon: BookOpen },
  ], []);

  const currentStepIndex = useMemo(() => steps.findIndex(s => s.id === currentStep), [steps, currentStep]);


  const addHistoryAndProficiency = useCallback((question: string, userAnswer: string, isCorrect: boolean) => {
    setExerciseHistory(prev => [...prev, { exercise: question, userAnswer, isCorrect }]);
    const currentProficiency = getTopicProficiency(topic.id);
    const newProficiency = isCorrect ? currentProficiency + 5 : Math.max(0, currentProficiency - 7);
    setTopicProficiency(newProficiency);
  }, [getTopicProficiency, setTopicProficiency, topic.id]);

  const proceedToNextExercise = () => {
    setFeedback(null);
    setUserAnswer('');
    let currentExercises: (Exercise | SentenceConstructionExercise)[] = [];

    if (currentStep === 'vocabulary') currentExercises = vocabularyExercises;
    else if (currentStep === 'comprehension') currentExercises = comprehensionExercises;
    else if (currentStep === 'grammar') currentExercises = grammarExercises;
    else if (currentStep === 'sentence-construction') currentExercises = sentenceConstructionExercises;


    if (currentExerciseIndex < currentExercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      setCurrentExerciseIndex(0);
      if (currentStep === 'vocabulary') setCurrentStep('reading');
      else if (currentStep === 'comprehension') setCurrentStep('grammar');
      else if (currentStep === 'grammar') {
        if (sentenceConstructionExercises.length > 0) setCurrentStep('sentence-construction');
        else setCurrentStep('explanation');
      }
      else if (currentStep === 'sentence-construction') setCurrentStep('explanation');
    }
  }


  const handleSubmitExercise = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!exerciseData || !userAnswer || isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);
    setApiError(null);

    let currentExercise;

    if (currentStep === 'vocabulary') {
      currentExercise = vocabularyExercises[currentExerciseIndex];
    } else if (currentStep === 'comprehension') {
      currentExercise = comprehensionExercises[currentExerciseIndex];
    } else if (currentStep === 'grammar') {
      currentExercise = grammarExercises[currentExerciseIndex];
    } else if (currentStep === 'sentence-construction') {
      currentExercise = sentenceConstructionExercises[currentExerciseIndex];
    }

    if (!currentExercise) {
      setIsSubmitting(false);
      return;
    }

    const question = 'words' in currentExercise ? currentExercise.words.join(' / ') : currentExercise.question;
    const correctAnswer = 'correctSentence' in currentExercise ? currentExercise.correctSentence : currentExercise.answer;

    try {
      let verification;

      // OPTIMIZATION: Check for exact match locally to save AI calls
      const normalizedUser = userAnswer.trim().toLowerCase().replace(/[.,!?]/g, '');
      const normalizedCorrect = correctAnswer.trim().toLowerCase().replace(/[.,!?]/g, '');

      if (normalizedUser === normalizedCorrect) {
        verification = {
          isCorrect: true,
          explanation: `<p><strong>Отлично! Всё верно!</strong></p><p>Ваш ответ полностью совпадает с правильным: <strong class="text-primary">${correctAnswer}</strong>.</p>`
        };
      } else {
        verification = await verifyAnswer({
          question: question,
          userAnswer,
          correctAnswer: correctAnswer,
        });
      }

      const isCorrect = verification.isCorrect;
      addHistoryAndProficiency(question, userAnswer, isCorrect);

      if (isCorrect && currentStep === 'vocabulary') {
        // Find the word object to get the canonical German form
        // The question is the Russian word
        const wordObj = allWords.find(w => w.russian === question);
        if (wordObj) {
          addKnownWord(wordObj.german);
        }
      }

      setFeedback({ type: isCorrect ? 'correct' : 'incorrect', message: verification.explanation });

    } catch (error) {
      console.error("Error submitting answer:", error);
      setApiError("Не удалось проверить ответ. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGlobalContinue = async () => {
    if (feedback) {
      proceedToNextExercise();
      return;
    }

    if (currentStep === 'vocabulary') {
      setCurrentStep('reading');
    } else if (currentStep === 'reading') {
      setCurrentStep('comprehension');
    } else if (currentStep === 'explanation') {
      setIsGenerating(true);
      try {
        const isMastered = getTopicProficiency(topic.id) >= 100;

        const feedbackResponse = await generateFeedback({
          topicTitle: topic.title,
          exerciseHistory: exerciseHistory.map(h => ({ exercise: h.exercise, correct: h.isCorrect })),
        });
        setFinalFeedback(feedbackResponse.feedback);


        if (isMastered) {
          setCurrentStep('mastered');
          onMastered();
          setExerciseHistory([]); // Clear history after mastering
        } else {
          startExerciseCycle();
        }
      } catch (error) {
        console.error("Error in post-cycle phase:", error);
        setApiError("Не удалось получить итоговый отзыв. Вы можете начать новый цикл вручную.");
        setCurrentStep('error');
      } finally {
        setIsGenerating(false);
      }
    }
  };

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

  const renderContent = () => {
    if (currentStep === 'loading' && !apiError) return null;

    if (apiError) {
      let retryAction;
      if (currentStep === 'error' && !finalFeedback) { // Error during exercise generation
        retryAction = startExerciseCycle;
      } else if (currentStep === 'error' && finalFeedback) { // Error during feedback generation
        retryAction = handleGlobalContinue;
      } else { // Error during answer verification
        retryAction = () => handleSubmitExercise();
      }

      return (
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-destructive">Произошла ошибка</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{apiError}</p>
            <Button onClick={retryAction} className="mt-4" disabled={isSubmitting || isGenerating}>
              {(isSubmitting || isGenerating) ? <Loader2 className="animate-spin" /> : <RefreshCw />}
              Повторить запрос
            </Button>
          </CardContent>
        </Card>
      )
    }


    switch (currentStep) {
      case 'reading':
        if (!exerciseData) return null;
        return (
          <Card>
            <CardHeader><CardTitle>Прочитайте текст</CardTitle></CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{exerciseData.readingText}</p>
              <div className="mt-4 flex gap-4">
                <Button onClick={handleGlobalContinue}>Продолжить</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 'vocabulary':
      case 'comprehension':
      case 'grammar':
      case 'sentence-construction':
        let currentExercise, currentExercisesList;
        let title = '';
        if (currentStep === 'vocabulary') {
          currentExercisesList = vocabularyExercises;
          title = 'Переведите слово на немецкий (с артиклем)';
        } else if (currentStep === 'comprehension') {
          currentExercisesList = comprehensionExercises;
          title = 'Ответьте на вопрос (на немецком)';
        } else if (currentStep === 'grammar') {
          currentExercisesList = grammarExercises;
          title = 'Заполните пропуск (на немецком)';
        } else {
          currentExercisesList = sentenceConstructionExercises;
          title = 'Составьте предложение из слов';
        }

        if (!currentExercisesList || currentExercisesList.length === 0) {
          // This can happen if AI returns empty array, skip to next step.
          proceedToNextExercise();
          return null;
        }
        currentExercise = currentExercisesList[currentExerciseIndex];

        return (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{title}</CardTitle>
                <span className="text-sm font-medium text-muted-foreground">
                  {currentExerciseIndex + 1} / {currentExercisesList.length}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-foreground mb-4">
                {currentStep === 'sentence-construction' && currentExercise ? (
                  <p className="font-bold tracking-wider">{(currentExercise as SentenceConstructionExercise).words.join(' / ')}</p>
                ) : (currentExercise as Exercise)?.question}
              </div>

              <form onSubmit={handleSubmitExercise} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Введите ваш ответ на немецком..."
                  className="flex-grow"
                  disabled={isSubmitting || !!feedback}
                  autoCapitalize="none"
                  autoCorrect="off"
                />
                <Button type="submit" disabled={isSubmitting || !userAnswer || !!feedback}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Проверить'}
                </Button>
              </form>
            </CardContent>
          </Card>
        );
      case 'explanation':
        if (!exerciseData) return null;
        return (
          <Card>
            <CardHeader><CardTitle>Объяснение правила</CardTitle></CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: exerciseData.explanation }} />
              <Button onClick={handleGlobalContinue} className="mt-4" disabled={isGenerating}>
                {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Следующий цикл'}
              </Button>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  if ((currentStep === 'loading' || isGenerating) && !apiError) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">ИИ-тренер готовит ваше задание...</p>
      </div>
    );
  }

  if (currentStep === 'mastered') {
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-transparent">
        <CardHeader>
          <CardTitle className="text-center">
            <ThumbsUp className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-3 mb-4" />
            <h3 className="text-2xl font-bold text-foreground font-headline">Тема освоена!</h3>
          </CardTitle>
          <CardDescription className="text-center">Отличная работа! Вы продемонстрировали уверенное понимание этой темы.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {finalFeedback && (
            <Alert className="mt-4 text-left">
              <BrainCircuit className="h-4 w-4" />
              <AlertTitle>Персональный отзыв от AI-тренера</AlertTitle>
              <AlertDescription className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: finalFeedback }} />
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          {nextTopicUrl && (
            <Button asChild className="w-full">
              <Link href={nextTopicUrl}>
                Перейти к следующей теме <SkipForward className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }

  const currentProficiency = getTopicProficiency(topic.id);

  return (
    <div className="space-y-6">
      <div>
        <ol className="flex items-center w-full">
          {steps.map((step, index) => (
            <li key={step.id} className={`flex w-full items-center ${index < steps.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block" : ""} ${index <= currentStepIndex ? 'text-primary after:border-primary' : 'text-muted-foreground after:border-muted'}`}>
              <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${index <= currentStepIndex ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="mastery" className="text-sm font-medium text-muted-foreground">Уровень освоения</label>
          <span className="text-sm font-bold text-primary">{currentProficiency}%</span>
        </div>
        <Progress value={currentProficiency} id="mastery" />
      </div>

      {renderContent()}

      {feedback && (
        <Alert variant={feedback.type === 'incorrect' ? 'destructive' : 'default'} className="mt-4">
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                {feedback.type === 'correct' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                <AlertTitle className="font-headline">
                  {feedback.type === 'correct' ? 'Правильно!' : 'Обратите внимание'}
                </AlertTitle>
              </div>
              <AlertDescription className="prose prose-sm max-w-none dark:prose-invert pl-6" dangerouslySetInnerHTML={{ __html: feedback.message }} />
            </div>
            <Button onClick={handleGlobalContinue} size="sm">Продолжить</Button>
          </div>
        </Alert>
      )}
    </div>
  );
}
