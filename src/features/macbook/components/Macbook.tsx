import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group } from "three";
import MacbookKeyboard from "~/features/macbook/components/MacbookKeyboard";
import MacbookScreen from "~/features/macbook/components/MacbookScreen";
import {
  MACBOOK_Z_MAX,
  MACBOOK_Z_TRAVEL_RATE,
  SCROLL_INDICATOR_THRESHOLD,
} from "~/features/macbook/constants/macbook.constants";
import useLoopVideoSources from "~/features/macbook/hooks/useLoopVideoSources";
import useMouseCoords from "~/features/macbook/hooks/useMouseCoords";
import useManageScrollIndicator from "~/shared/hooks/useManageScrollIndicator";

const Macbook: React.FC = () => {
  const { isShowScrollIndicator, toggleIsShowScrollIndicator } = useManageScrollIndicator();
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
      if (isShowScrollIndicator && scroll.offset > SCROLL_INDICATOR_THRESHOLD) {
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
