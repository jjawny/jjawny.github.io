export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  timeWindow: number,
) {
  let lastTime = 0;
  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastTime >= timeWindow) {
      func(...args);
      lastTime = now;
    }
  };
}
