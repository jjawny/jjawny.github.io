import { Html, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useState } from "react";
import DotsCircle from "~/components/DotsCircle";
import InfoSection from "~/components/InfoSection";
import Macbook from "~/components/Macbook";

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
    <div className="r3f-scene relative w-screen overflow-hidden">
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
          {/* NOTE: 'zIndexRange' prop required so all z-index css applied inside works (otherwise does nothing) */}
          {/* (resolves bug where shadcn drawer content cannot be interacted with after resize) */}
          <Html fullscreen zIndexRange={[1, 1000]} className="feature-for-sticky-content-inside-r3f-html-overrides">
            {/* <HeroSection /> */}
            <InfoSection isShowAboutCallback={isShowAboutCallback} />
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Scene;
