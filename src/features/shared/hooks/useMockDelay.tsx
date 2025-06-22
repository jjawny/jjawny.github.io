import { useEffect, useState } from "react";

export default function useMockDelay(delay = 2500) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDone(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return { isDone };
}
