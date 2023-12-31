import React, { useEffect, useRef, useState } from "react";
import MacbookKeyboard from "./Macbook.Keyboard";
import { useGesture } from "react-use-gesture";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import MacbookScreen from "./Macbook.Screen";
import _debounce from "lodash/debounce";
import { Group } from "three";

type MacbookProps = {
  videoSource: string;
};

export function Macbook({ videoSource }: MacbookProps) {
  const groupRef = useRef<Group>(null);

  // ANIMATIONS
  const debounceMs = 0; // debouncing animation frames causes jittery movements, but option here when testing new animations and need to improve performance

  // For mouse movement
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const debouncedHandleMouseMove = _debounce((event) => {
      setMouseCoords({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    }, debounceMs);

    window.addEventListener("mousemove", debouncedHandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", debouncedHandleMouseMove);
    };
  }, []);

  // For gyroscope orientation
  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      const debouncedHandleOrientation = _debounce((event) => {
        const { beta, gamma } = event;
        if (groupRef.current) {
          groupRef.current.rotation.x = (beta || 0) * (Math.PI / 180);
          groupRef.current.rotation.y = (gamma || 0) * (Math.PI / 180);
        }
      }, debounceMs);

      window.addEventListener("deviceorientation", debouncedHandleOrientation);

      return () => {
        window.removeEventListener(
          "deviceorientation",
          debouncedHandleOrientation
        );
      };
    }
  }, []);

  // Update the model's rotation based on mouse movement
  useFrame(() => {
    const targetRotationX = -(mouseCoords.y * (Math.PI / 8));
    const targetRotationY = mouseCoords.x * (Math.PI / 8);

    if (groupRef.current) {
      groupRef.current.rotation.x +=
        0.04 * (targetRotationX - groupRef.current.rotation.x);
      groupRef.current.rotation.y +=
        0.04 * (targetRotationY - groupRef.current.rotation.y);
    }
  });

  // GESTURES
  const scroll = useScroll();

  const minDistance = -50;
  const maxDistance = 30;
  const travelSpeed = 0.4;

  // % of site height (document.body.clientHeight)
  // TODO: calc this dynamically, determine the scroll height needed to reach MAX DISTANCE at the TRAVEL SPEED
  const maxHeightPercent = 0.1;

  const bind = useGesture(
    {
      onWheel: ({ delta: [, deltaY] }) => {
        // Zoom in model's z-axis on scroll up until maxHeightPercent
        if (groupRef.current && scroll.offset < maxHeightPercent) {
          const newPositionZ = Math.max(
            Math.min(
              groupRef.current.position.z + deltaY * travelSpeed,
              maxDistance
            ),
            minDistance
          );
          groupRef.current.position.z = newPositionZ;
        }
      },
    },
    { domTarget: window }
  );

  return (
    // @ts-ignore TODO: research this TS error more...
    <group
      dispose={null}
      ref={groupRef}
      position={[0, -1, -50]}
      scale={[0.01, 0.01, 0.01]}
      rotation={[0, Math.PI / 2, 0]}
      {...bind()}
    >
      <MacbookScreen videoSource={videoSource} />
      <MacbookKeyboard />
    </group>
  );
}
