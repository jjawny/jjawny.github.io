import React, { useEffect, useRef, useState } from "react";
import MacbookKeyboard from "./Macbook.Keyboard";
import { useGesture } from "@use-gesture/react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import MacbookScreen from "./Macbook.Screen";
import _debounce from "lodash/debounce";
import { Group } from "three";

const ANIMATION_DEBOUNCE_MS = 0; // debouncing animation frames causes jittery movements, but option here when testing new animations and need to improve performance
const MIN_Z_VALUE = -50; // the min z-index for the model to travel from
const MAX_Z_VALUE = 30; // the max z-index for the model to travel to
const TRAVEL_SPEED = 0.4; // the speed the model travels at when zooming
const PERCENTAGE_TO_STOP_TRAVEL_AT = 0.1; // issues calculating this dynamically, the window.innerHeight (100vh) logs as the site height (bug with R3F?)

type MacbookProps = {
  videoSource: string;
};

const Macbook: React.FC<MacbookProps> = ({ videoSource }) => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const groupRef = useRef<Group>(null);
  const scroll = useScroll();

  // Mouse movement coords listener
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

  // Currently updates Macbook's rotation based on mouse coords
  useFrame(() => {
    if (groupRef.current) {
      const targetRotationX = -(mouseCoords.y * (Math.PI / 8));
      const targetRotationY = mouseCoords.x * (Math.PI / 8);

      groupRef.current.rotation.x += 0.04 * (targetRotationX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.04 * (targetRotationY - groupRef.current.rotation.y);
    }
  });

  useGesture(
    { onWheel: ({ delta: [, deltaY] }) => handleZoomCallback(deltaY) },
    { target: window }
  );

  // Handles Macbook's zoom effect on scroll
  const handleZoomCallback = (value: number) => {
    if (groupRef.current) {
      const newZ =
        scroll.offset >= PERCENTAGE_TO_STOP_TRAVEL_AT
          ? MAX_Z_VALUE
          : Math.max(
              Math.min(
                groupRef.current.position.z + value * TRAVEL_SPEED,
                MAX_Z_VALUE
              ),
              MIN_Z_VALUE
            );

      groupRef.current.position.z = newZ;
    }
  };

  return (
    <group
      dispose={null}
      ref={groupRef}
      position={[0, -1, -50]}
      scale={[0.01, 0.01, 0.01]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <MacbookScreen videoSource={videoSource} />
      <MacbookKeyboard />
    </group>
  );
};

export default Macbook;
