import { LinearFilter, VideoTexture, RGBAFormat } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import React from "react";

const MacbookScreen = ({ videoSource }: { videoSource: string }) => {
  const { nodes, materials } = useGLTF("/models/macbook.glb") as any;

  const video = document.createElement("video");

  // Set video properties
  video.src = videoSource;
  video.loop = true;
  video.muted = true;
  video.play();

  // Create video texture
  const videoTexture = new VideoTexture(video);
  videoTexture.minFilter = LinearFilter;
  videoTexture.magFilter = LinearFilter;
  videoTexture.format = RGBAFormat;

  // Update texture on each frame
  useFrame(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      videoTexture.needsUpdate = true;
    }
  });

  return (
    <group position={[0.176, 107.661, -82.939]} rotation={[-0.123, 0, 0]}>
      <mesh castShadow receiveShadow position={[0.2, 3, 4]}>
        <planeGeometry args={[190, 120]} />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box014__0.geometry}
        material={materials.RootNode}
        position={[-1.196, -0.646, -2.029]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box015__0.geometry}
        material={materials.RootNode}
        position={[-4.192, 17.67, -2.029]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box002_08_-_Default_0"].geometry}
        material={materials["08_-_Default"]}
        position={[-54.434, 0, 1.929]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.907, 1.882, 0.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box019__0.geometry}
        material={materials.RootNode}
        position={[0.268, 3.824, 0.974]}
        scale={[0.971, 1.119, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001__0.geometry}
        material={materials.RootNode}
        position={[-0.646, -63.243, 3.106]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box018_15_-_Default_0"].geometry}
        material={materials["15_-_Default"]}
        position={[-52.719, 0.419, 3.368]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.885, 1.823, 0.043]}
      />
    </group>
  );
};

useGLTF.preload("/models/macbook.glb");

export default MacbookScreen;
