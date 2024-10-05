import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group } from "three";
import MacbookKeyboard from "~/components/Macbook.Keyboard";
import MacbookScreen from "~/components/Macbook.Screen";
import { MACBOOK_Z_MAX, MACBOOK_Z_TRAVEL_RATE, SCROLL_INDICATOR_THRESHOLD } from "~/constants/defaults";
import useLoopVideoSources from "~/hooks/useLoopVideoSources";
import useMouseCoords from "~/hooks/useMouseCoords";
import { useSceneContext } from "~/stores/sceneAtom";

const Macbook: React.FC = () => {
  const { sceneState, toggleIsShowScrollIndicator } = useSceneContext();
  const { videoSource } = useLoopVideoSources();
  const groupRef = useRef<Group>(null);
  const mouseCoords = useMouseCoords();
  const scroll = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      // Animate rotation (follow cursor)
      const targetRotationX = -(mouseCoords.y * (Math.PI / 8));
      const targetRotationY = mouseCoords.x * (Math.PI / 8);
      groupRef.current.rotation.x += 0.04 * (targetRotationX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.04 * (targetRotationY - groupRef.current.rotation.y);

      // Animate zoom on scroll
      if (sceneState.isShowScrollIndicator && scroll.offset > SCROLL_INDICATOR_THRESHOLD) {
        toggleIsShowScrollIndicator(false);
      }
      const newZ = scroll.offset * MACBOOK_Z_TRAVEL_RATE;
      groupRef.current.position.z = newZ > MACBOOK_Z_MAX ? MACBOOK_Z_MAX : scroll.offset * MACBOOK_Z_TRAVEL_RATE;
    }
  });

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
