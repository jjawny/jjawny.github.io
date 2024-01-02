import { pointsInner, pointsOuter } from "../utils/three.utils";
import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import _debounce from "lodash/debounce";
import { Group, Vector3 } from "three";
import React, { useRef } from "react";

type DotsCirleProps = {
  speed: number;
};

const DotsCircle: React.FC<DotsCirleProps> = ({ speed }) => {
  const ref = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (ref.current?.rotation)
      ref.current.rotation.z = clock.getElapsedTime() * speed;

    if (scroll && ref.current) ref.current.position.z = scroll.offset * 25; // TODO: figure this out Adjust this value to fit your needs
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
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.8}
        roughness={1.0}
        color={color}
      />
    </Sphere>
  );
};

export default DotsCircle;
