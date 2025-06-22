import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useRef } from "react";
import { Group, Vector3 } from "three";
import {
  DOTS_CIRCLE_SPEED,
  DOTS_CIRCLE_X_TRAVEL_RATE,
  DOTS_CIRCLE_Y_TRAVEL_RATE,
  DOTS_CIRCLE_Z_TRAVEL_RATE,
} from "~/features/dots/constants/dots";
import { pointsInner, pointsOuter } from "~/features/dots/helpers/dots";

// TODO: Resolve "[Violation] 'setTimeout' handler took Xms" (not a useFrame issue, but a rendering large number of dots issue, preload?)
export default function DotsCircle() {
  const groupRef = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Spin
      groupRef.current.rotation.z = clock.getElapsedTime() * DOTS_CIRCLE_SPEED;

      // On scroll
      if (scroll) {
        groupRef.current.rotation.x = scroll.offset * DOTS_CIRCLE_X_TRAVEL_RATE;
        groupRef.current.rotation.y = scroll.offset * DOTS_CIRCLE_Y_TRAVEL_RATE;
        groupRef.current.position.z = scroll.offset * DOTS_CIRCLE_Z_TRAVEL_RATE;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {pointsInner.map((point) => (
        <Dot key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Dot key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
}

const Dot = memo(({ position, color }: { position: Vector3; color: string }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial emissive={color} emissiveIntensity={0.8} roughness={1.0} color={color} />
    </Sphere>
  );
});
