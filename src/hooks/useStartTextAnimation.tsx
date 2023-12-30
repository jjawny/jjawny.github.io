import { useEffect, useRef, useState } from "react";

export const useStartTextAnimation = (
  word: string,
  speed: number = 0.3,
  isPlayOnRender: boolean = false
) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const frameRef = useRef<number | null>(null);
  const [currentWord, setCurrentWord] = useState(word);

  let iteration = 0;

  const startAnimation = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      setCurrentWord(word);
    }

    iteration = 0;

    const animate = () => {
      const newWord = word
        .split("")
        .map((letter, index) => {
          // return the original letters as we iterate
          if (index < iteration) return word[index];

          // always return space when there is a space
          if (letter.trim() === "") return " ";

          // the randomized letter
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      setCurrentWord(newWord);

      if (iteration < word.length) {
        iteration += speed;
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlayOnRender) startAnimation();

    // Clean up
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { currentWord, startAnimation };
};
