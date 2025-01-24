import { useEffect, useState } from "react";
import { ANIMATION_THROTTLE_MS } from "~/features/macbook/constants/macbook";
import { throttle } from "~/features/shared/helpers/no-lodash";

const useMouseCoords = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      setMouseCoords({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    }, ANIMATION_THROTTLE_MS);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mouseCoords;
};

export default useMouseCoords;
