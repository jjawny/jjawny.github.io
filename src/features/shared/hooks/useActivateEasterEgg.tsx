import { useCallback, useEffect, useRef, useState } from "react";

export default function useActivateEasterEgg(activationThreshold: number) {
  const keyCountRef = useRef<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "j") {
        keyCountRef.current += 1;

        if (keyCountRef.current >= activationThreshold) {
          setIsActive(true);
        }
      }
    },
    [activationThreshold],
  );

  useEffect(() => {
    if (!isActive) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, handleKeyDown]);

  return { isActive };
}
