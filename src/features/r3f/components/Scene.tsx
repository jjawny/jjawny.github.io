import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import DotsCircle from "~/features/dots/components/DotsCircle";
import InfoCard from "~/features/info/components/InfoCard";
import useTrackScrollProgress from "~/features/info/hooks/useTrackScrollProgress";
import Macbook from "~/features/macbook/components/Macbook";
import { useManageIsShowPersonalScreen } from "~/features/shared/hooks/useManageIsShowPersonalScreen";

export default function Scene() {
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
}

function Models() {
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
}

function R3fHtml() {
  const { scrollProgress, isScrolledIntoCustomWindow } = useTrackScrollProgress();
  const { isShowPersonalScreen, toggleIsShowPersonalScreen } = useManageIsShowPersonalScreen();

  useEffect(
    function showPersonalScreen() {
      if (scrollProgress >= 0.99 && !isShowPersonalScreen) {
        toggleIsShowPersonalScreen(true);
      } else if (scrollProgress < 0.99 && isShowPersonalScreen) {
        toggleIsShowPersonalScreen(false);
      }
    },
    [scrollProgress],
  );

  // Gotcha: 'zIndexRange' prop required to allow drawer to be interactive [drag, select, ...]
  return (
    <Html fullscreen zIndexRange={[1, 1000]} className="feature-for-sticky-content-inside-r3f-html-overrides">
      <InfoCard isShowSurroundingContent={isScrolledIntoCustomWindow} />
    </Html>
  );
}
