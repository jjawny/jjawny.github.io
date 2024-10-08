import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Vector3 } from "three";
import {
  DOTS_CIRCLE_SPEED,
  DOTS_CIRCLE_X_TRAVEL_RATE,
  DOTS_CIRCLE_Y_TRAVEL_RATE,
  DOTS_CIRCLE_Z_TRAVEL_RATE,
} from "~/constants/defaults";
import { pointsInner, pointsOuter } from "../utils/three.utils";

const DotsCircle = () => {
  const ref = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Spin
      ref.current.rotation.z = clock.getElapsedTime() * DOTS_CIRCLE_SPEED;

      // On scroll
      if (scroll) {
        ref.current.rotation.x = scroll.offset * DOTS_CIRCLE_X_TRAVEL_RATE;
        ref.current.rotation.y = scroll.offset * DOTS_CIRCLE_Y_TRAVEL_RATE;
        ref.current.position.z = scroll.offset * DOTS_CIRCLE_Z_TRAVEL_RATE;
      }
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Dot key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Dot key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Dot = ({ position, color }: { position: Vector3; color: string }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial emissive={color} emissiveIntensity={0.8} roughness={1.0} color={color} />
    </Sphere>
  );
};

export default DotsCircle;
