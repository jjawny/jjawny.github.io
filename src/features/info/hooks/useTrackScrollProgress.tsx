import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { MACBOOK_Z_MAX, MACBOOK_Z_TRAVEL_RATE } from "~/features/macbook/constants/macbook";

export default function useTrackScrollProgress(windowMin = 0.8, windowMax = 1.0) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scroll = useScroll();

  useFrame(() => {
    const newZ = scroll.offset * MACBOOK_Z_TRAVEL_RATE;
    const clampedZ = newZ > MACBOOK_Z_MAX ? MACBOOK_Z_MAX : newZ;
    const progress = clampedZ / MACBOOK_Z_MAX;
    setScrollProgress(progress);
  });

  return {
    scrollProgress,
    isScrolledIntoCustomWindow: scrollProgress >= windowMin && scrollProgress <= windowMax,
  };
}
