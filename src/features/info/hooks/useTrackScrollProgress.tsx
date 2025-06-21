import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { MACBOOK_Z_MAX, MACBOOK_Z_TRAVEL_RATE } from "~/features/macbook/constants/macbook";

export type ScrollWindow = {
  min: number;
  max: number;
  isScrollInside?: boolean;
};

export default function useTrackScrollProgress(scrollWindows: Record<string, ScrollWindow> = {}) {
  const [windows, setWindows] = useState<Record<string, ScrollWindow>>(scrollWindows);
  const scroll = useScroll();

  useFrame(() => {
    const newZ = scroll.offset * MACBOOK_Z_TRAVEL_RATE;
    const clampedZ = newZ > MACBOOK_Z_MAX ? MACBOOK_Z_MAX : newZ;
    const progress = clampedZ / MACBOOK_Z_MAX;

    setWindows((prev) => {
      let hasChanged = false;
      const updated = { ...prev };

      for (const [key, window] of Object.entries(prev)) {
        const newIsInside = progress >= window.min && progress <= window.max;
        if (window.isScrollInside !== newIsInside) {
          updated[key] = { ...window, isScrollInside: newIsInside };
          hasChanged = true;
        }
      }

      return hasChanged ? updated : prev; // return the same obj ref if no changes for perf
    });
  });

  return { scrollWindows: windows };
}
