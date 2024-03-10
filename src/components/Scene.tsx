import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import { DEFAULT_VIDEO_SOURCE } from "~/constants/defaults";
import { useIsMobile } from "~/hooks/useIsMobile";
import { Canvas } from "@react-three/fiber";
import Projects from "./Projects.Section";
import _debounce from "lodash/debounce";
import Credits from "./Credits.Section";
import DotsCircle from "./DotsCircle";
import About from "./About.Section";
import Hero from "./Hero.Section";
import Macbook from "./Macbook";
import Cursor from "./Cursor";

const DEBOUNCED_DELAY_MS = 10;

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [videoSource, setVideoSource] = useState<string>(
    `/videos/${DEFAULT_VIDEO_SOURCE}`
  );

  const changeLaptopScreenCallback = useCallback(
    _debounce((videoSource: string | null) => {
      setVideoSource(
        `/videos/${videoSource ? videoSource : DEFAULT_VIDEO_SOURCE}`
      );
    }, DEBOUNCED_DELAY_MS),
    [setVideoSource]
  );

  useEffect(() => {
    // Cleanup
    return () => {
      changeLaptopScreenCallback.cancel();
    };
  }, [changeLaptopScreenCallback]);

  return (
    <div className="relative h-screen w-screen select-none overflow-hidden">
      <div className="overlay"></div>

      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 35] }}
        className="h-screen w-screen"
      >
        <Lighting />
        {/* {!isMobile && <Cursor />} */}
        {/* <OrbitControls enableZoom={false}/> */}

        <ScrollControls pages={3}>
          {/* MODELS */}
          <Suspense fallback={<CircleLoader />}>
            <DotsCircle />
          </Suspense>

          <Suspense fallback={null}>
            <Macbook videoSource={videoSource} />
          </Suspense>

          {/* HTML */}
          {/* NOTE: zIndexRange prop required to allow setting z-index to items within */}
          {/* (resolves bug where shadcn drawer content cannot be interacted with after resize) */}
          <Html fullscreen zIndexRange={[1, 1000]}>
            <Hero />
            <About changeLaptopScreenCallback={changeLaptopScreenCallback} />
            <Projects changeLaptopScreenCallback={changeLaptopScreenCallback} />
            <Credits />
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const Lighting = () => {
  return (
    <>
      {/* <ambientLight /> */}
      <directionalLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
    </>
  );
};

const CircleLoader = () => {
  return (
    <Html fullscreen style={{ height: "400vh" }}>
      <div className="sticky top-[-18.5%] ">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div
              className={`h-[30vh] w-[30vh] rounded-full border-t-2 border-b-2 border-gray-100`}
            ></div>
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
