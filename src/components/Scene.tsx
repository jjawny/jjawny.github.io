import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import DotsCircle from "~/components/DotsCircle";
import InfoCard from "~/components/InfoCard";
import Macbook from "~/components/Macbook";

const Scene = () => {
  const [isAllowOrbitControls] = useState(false);

  const Lighting = () => (
    <>
      <ambientLight />
      <directionalLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
    </>
  );

  return (
    <div className="r3f-scene">
      <Canvas
        camera={{ position: [0, 0, 35] }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 50 } }}
        className="h-screen w-screen"
      >
        {isAllowOrbitControls && <OrbitControls />}
        <Lighting />
        <ScrollControls pages={1}>
          <Models />
          <R3fHtml />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const Models: React.FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <DotsCircle />
      </Suspense>
      <Suspense fallback={null}>
        <Macbook />
      </Suspense>
    </>
  );
};
const R3fHtml: React.FC = () => {
  // Gotcha: 'zIndexRange' prop required to allow drawer to be interactive [drag, select, ...]
  return (
    <Html fullscreen zIndexRange={[1, 1000]} className="feature-for-sticky-content-inside-r3f-html-overrides">
      <InfoCard />
    </Html>
  );
};

export default Scene;
