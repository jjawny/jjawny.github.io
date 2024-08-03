import React, { Suspense, useRef } from "react";
import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import _debounce from "lodash/debounce";
import Credits from "./Credits.Section";
import DotsCircle from "./DotsCircle";
import Hero from "./Hero.Section";
import Macbook from "./Macbook";

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 35] }} className="h-screen w-screen">
        {/* <OrbitControls/> */}
        {/* LIGHTING */}
        <ambientLight />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />

        <ScrollControls pages={0.8}>
          {/* MODELS */}
          <Suspense fallback={<CircleLoader />}>
            <DotsCircle />
          </Suspense>
          <Suspense fallback={null}>
            <Macbook />
          </Suspense>

          {/* HTML */}
          {/* NOTE: zIndexRange prop required to allow setting z-index to items within */}
          {/* (resolves bug where shadcn drawer content cannot be interacted with after resize) */}
          <Html fullscreen zIndexRange={[1, 1000]}>
            <Hero />
            <Credits />
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const CircleLoader = () => {
  return (
    <Html fullscreen style={{ height: "300vh" }}>
      <div className="sticky top-[-18.5%] ">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className={`h-[30vh] w-[30vh] rounded-full border-t-2 border-b-2 border-gray-100`}></div>
            <div
              className={`absolute top-0 left-0 h-[30vh] w-[30vh] animate-spin rounded-full border-t-2 border-b-2 border-gray-200`}
            ></div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Scene;
