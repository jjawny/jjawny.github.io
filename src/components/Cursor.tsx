import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

// recreation of blendmode cursor from: https://stephenscaff.github.io/react-animated-cursor/?cursor=blendmode
// but in react three fibre!
const Cursor = () => {
  const lagMeshRef = useRef<Mesh>(null);
  const [mousePos, setMousePos] = useState(new Vector3(0, 0, 0));

  useFrame((state) => {
    if (lagMeshRef.current) {
      // Update the lagging mesh position with a delay
      lagMeshRef.current.position.lerp(mousePos, 0.09);

      // Update the state to the current mouse position
      setMousePos(
        new Vector3(
          (state.mouse.x * state.viewport.width) / 2,
          (state.mouse.y * state.viewport.height) / 2,
          0
        )
      );
    }
  });

  return (
    <group>
      <mesh ref={lagMeshRef}>
        <circleGeometry args={[1.7, 32]} />
        <meshBasicMaterial color="white" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Cursor;
