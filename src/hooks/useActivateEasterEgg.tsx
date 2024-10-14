import { useEffect, useRef, useState } from "react";

const useActivateEasterEgg = (activationThreshold: number) => {
  const keyCountRef = useRef<number>(0); // don't trigger UI re-renders
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "j") {
      keyCountRef.current += 1;

      if (keyCountRef.current >= activationThreshold) {
        setIsActive(true);
      }
    }
  };

  useEffect(() => {
    if (!isActive) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  return { isActive };
};

export default useActivateEasterEgg;
