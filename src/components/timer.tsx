
"use client";

import { useState, useEffect } from 'react';

const pluralize = (count: number, noun: string, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;
  
const pluralizeRussian = (count: number, one: string, two: string, five: string) => {
    let n = Math.abs(count);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
}

export function Timer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetDate.getTime() - new Date().getTime();
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        setTimeLeft(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  
  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        {days > 0 && (
            <div className="flex flex-col">
                <span className="font-mono text-5xl">{String(days).padStart(2, '0')}</span>
                {pluralizeRussian(days, "день", "дня", "дней")}
            </div>
        )}
        <div className="flex flex-col">
            <span className="font-mono text-5xl">{String(hours).padStart(2, '0')}</span>
            {pluralizeRussian(hours, "час", "часа", "часов")}
        </div>
        <div className="flex flex-col">
            <span className="font-mono text-5xl">{String(minutes).padStart(2, '0')}</span>
            {pluralizeRussian(minutes, "минута", "минуты", "минут")}
        </div>
        <div className="flex flex-col">
            <span className="font-mono text-5xl">{String(seconds).padStart(2, '0')}</span>
            {pluralizeRussian(seconds, "секунда", "секунды", "секунд")}
        </div>
    </div>
  );
}
