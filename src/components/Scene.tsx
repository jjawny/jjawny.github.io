import React, { Suspense, useCallback, useRef, useState } from "react";
import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import InfoSection from "~/components/InfoSection";
import HeroSection from "~/components/HeroSection";
import DotsCircle from "~/components/DotsCircle";
import { Canvas } from "@react-three/fiber";
import Macbook from "~/components/Macbook";
import _debounce from "lodash/debounce";

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isShowAbout, setIsShowAbout] = useState<boolean>(false);
  const isShowAboutCallback = useCallback((isShow: boolean) => setIsShowAbout(isShow), [setIsShowAbout]);
  const Lighting = () => (
    <>
      <ambientLight />
      <directionalLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
    </>
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 35] }} className="h-screen w-screen">
        {/* <OrbitControls /> */}
        <Lighting />

        <ScrollControls pages={0.8}>
          {/* MODELS */}
          <Suspense fallback={null}>
            <DotsCircle />
          </Suspense>
          <Suspense fallback={null}>
            <Macbook isShowAbout={isShowAbout} />
          </Suspense>

          {/* HTML */}
          {/* NOTE: zIndexRange prop required to allow setting z-index to items within */}
          {/* (resolves bug where shadcn drawer content cannot be interacted with after resize) */}
          <Html fullscreen zIndexRange={[1, 1000]}>
            <HeroSection />
            <InfoSection isShowAboutCallback={isShowAboutCallback} />
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Scene;
