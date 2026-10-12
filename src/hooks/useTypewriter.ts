import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
) {
  const { speed = 38, delay = 600 } = options;
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let currentIndex = 0;

    setDisplayText('');
    setIsDone(false);

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return { displayText, isDone };
}
