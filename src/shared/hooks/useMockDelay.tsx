import { useEffect, useState } from "react";

const useMockDelay = (delay = 2500) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDone(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return { isDone };
};

export default useMockDelay;
