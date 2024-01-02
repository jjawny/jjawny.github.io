import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

// recreation of blendmode cursor from: https://stephenscaff.github.io/react-animated-cursor/?cursor=blendmode
// but in react three fibre!
const Cursor = () => {
  const meshRef = useRef<Mesh>(null);
  const lagMeshRef = useRef<Mesh>(null);
  const [mousePos, setMousePos] = useState(new Vector3(0, 0, 0));
  const [innerCursorColor, setInnerCursorColor] = useState<string>("white");

  // This hook will be called every frame
  useFrame((state) => {
    if (meshRef.current && lagMeshRef.current) {
      // Update the mesh position to follow the mouse position
      meshRef.current.position.set(
        (state.mouse.x * state.viewport.width) / 2,
        (state.mouse.y * state.viewport.height) / 2,
        0.1 // IMPORTANT to ensure meshRef sits on top of lagmeshref
      );

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

      // Check the distance between meshRef and lagMeshRef
      if (
        meshRef.current.position.distanceTo(lagMeshRef.current.position) < 2
      ) {
        setInnerCursorColor("black");
      } else {
        // If they don't overlap, change the color of meshRef back to white
        setInnerCursorColor("white");
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color={innerCursorColor} />
      </mesh>
      <mesh ref={lagMeshRef}>
        <circleGeometry args={[1.7, 32]} />
        <meshBasicMaterial color="white" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Cursor;
