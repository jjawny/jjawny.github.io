// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(func: T, timeWindow: number) {
  let lastTime = 0;
  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastTime >= timeWindow) {
      func(...args);
      lastTime = now;
    }
  };
}
