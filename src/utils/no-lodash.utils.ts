export function throttle<T extends (...args: any[]) => void>(func: T, timeWindow: number) {
  var lastTime = 0;
  return function (...args: Parameters<T>) {
    var now = Date.now();
    if (now - lastTime >= timeWindow) {
      func(...args);
      lastTime = now;
    }
  };
}
