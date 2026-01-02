'use client';

import { useUnifiedSRS } from '@/hooks/use-unified-srs';
import { ExerciseEngine } from '@/components/exercise-engine';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Calendar, CheckCircle, Loader2, ArrowLeft, Zap, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

export default function ReviewPage() {
    const { dueWords, isLoading, updateGlobalSRS, allWords } = useUnifiedSRS();
    const [isReviewing, setIsReviewing] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Собираем слова из всех уровней...</p>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="container mx-auto py-12 max-w-2xl px-4 text-center">
                <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background border-green-200 dark:border-green-900 border-2 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="h-24 w-24 text-green-500" />
                    </div>
                    <CardHeader className="pt-12">
                        <div className="mx-auto bg-green-100 dark:bg-green-900/50 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-6 shadow-inner">
                            <CheckCircle className="h-14 w-14 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-4xl font-headline font-bold text-green-800 dark:text-green-300">Миссия выполнена!</CardTitle>
                        <CardDescription className="text-xl mt-2">Ваша долгосрочная память стала еще крепче.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-green-100 dark:border-green-900">
                                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Повторено</div>
                                <div className="text-3xl font-bold text-green-700 dark:text-green-400">{dueWords.length} слов</div>
                            </div>
                            <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-green-100 dark:border-green-900">
                                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Прогресс</div>
                                <div className="text-3xl font-bold text-green-700 dark:text-green-400">100%</div>
                            </div>
                        </div>
                        <Button asChild size="lg" className="w-full h-14 text-lg shadow-lg hover:shadow-green-500/20 transition-all">
                            <Link href="/">Вернуться на главную</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (isReviewing && dueWords.length > 0) {
        return (
            <div className="container mx-auto py-8 max-w-4xl px-4 min-h-screen">
                <header className="mb-8 flex justify-between items-center group">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" onClick={() => setIsReviewing(false)} className="rounded-full">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold font-headline leading-none">Ежедневный Хаб</h1>
                            <p className="text-sm text-muted-foreground">Интервальное повторение</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full border shadow-sm">
                        <Zap className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <span className="font-bold">{dueWords.length} слов в очереди</span>
                    </div>
                </header>

                <ExerciseEngine
                    customWords={dueWords}
                    onMastered={() => setIsFinished(true)}
                    onWordUpdate={updateGlobalSRS}
                />
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 max-w-4xl px-4">
            <header className="mb-12 text-center relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10 blur-3xl bg-primary h-32 w-32 rounded-full -z-10" />
                <h1 className="text-5xl font-bold tracking-tight text-foreground font-headline mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Центр повторения
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Алгоритм <span className="text-primary font-bold">SM-2</span> анализирует ваши ответы и подбирает идеальный момент для повторения слов.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-2 transition-all hover:border-primary/50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">К повторению</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-primary">{dueWords.length}</span>
                            <span className="text-muted-foreground">слов</span>
                        </div>
                        <Progress value={Math.min(100, (dueWords.length / (allWords.length || 1)) * 100)} className="h-1.5 mt-4" />
                    </CardContent>
                </Card>

                <Card className="border-2 transition-all hover:border-primary/50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Всего выучено</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black">{allWords.length}</span>
                            <span className="text-muted-foreground">слов</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-green-500 font-bold mt-4">
                            <TrendingUp className="h-3 w-3" />
                            <span>Прогресс растет</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-2 transition-all hover:border-primary/50 bg-primary/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Метод</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xl font-bold flex items-center gap-2">
                            <Brain className="h-5 w-5 text-primary" />
                            <span>Spaced Repetition</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">Интервалы увеличиваются с каждым правильным ответом</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-0 bg-gradient-to-br from-card to-muted shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-12 pb-12 text-center relative z-10">
                    {dueWords.length > 0 ? (
                        <>
                            <div className="inline-block p-4 bg-primary/20 rounded-2xl mb-6 mb-6">
                                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 font-headline">Готовы к тренировке?</h3>
                            <p className="text-muted-foreground mb-10 text-xl max-w-lg mx-auto">
                                Сегодня в программе <strong>{dueWords.length}</strong> слов. Мы собрали их из всех ваших уровней и личных лекций.
                            </p>
                            <Button
                                size="lg"
                                className="px-16 h-16 text-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all rounded-full font-headline font-bold"
                                onClick={() => setIsReviewing(true)}
                            >
                                <Zap className="mr-2 h-5 w-5 fill-current" /> Начать сейчас
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="mx-auto bg-green-100 dark:bg-green-900/30 rounded-full h-24 w-24 flex items-center justify-center mb-8 shadow-inner">
                                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 font-headline">На сегодня всё чисто!</h3>
                            <p className="text-muted-foreground mb-10 text-lg">
                                Вы повторили все необходимые слова. Ваша память в отличной форме.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild variant="default" size="lg" className="rounded-full px-8">
                                    <Link href="/">Изучать новые темы</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                                    <Link href="/my-lectures">Мои лекции</Link>
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            <footer className="mt-16 text-center text-sm text-muted-foreground">
                <p>SRS (Spaced Repetition System) — самый эффективный способ учить языки навсегда.</p>
            </footer>
        </div>
    );
}
