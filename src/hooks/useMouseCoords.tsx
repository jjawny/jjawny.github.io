import { useEffect, useState } from "react";
import _debounce from "lodash/debounce";

const ANIMATION_DEBOUNCE_MS = 0; // debouncing animation frames causes jittery movements, but option here when testing new animations and need to improve performance

const useMouseCoords = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const debouncedHandleMouseMove = _debounce((event) => {
      setMouseCoords({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    }, ANIMATION_DEBOUNCE_MS);

    window.addEventListener("mousemove", debouncedHandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", debouncedHandleMouseMove);
      debouncedHandleMouseMove.cancel();
    };
  }, []);

  return mouseCoords;
};

export default useMouseCoords;
