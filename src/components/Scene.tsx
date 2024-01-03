import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_DOTS_SPEED,
  DEFAULT_VIDEO_SOURCE,
} from "~/constants/defaults";
import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import { useIsMobile } from "~/hooks/useIsMobile";
import { Canvas } from "@react-three/fiber";
import Projects from "./Projects.Section";
import _debounce from "lodash/debounce";
import Credits from "./Credits.Section";
import About from "./About.Section";
import Hero from "./Hero.Section";
import DotsCircle from "./Dots";
import Macbook from "./Macbook";
import Cursor from "./Cursor";

const DEBOUNCED_DELAY_MS = 10;

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [videoSource, setVideoSource] = useState<string>(
    `/videos/${DEFAULT_VIDEO_SOURCE}`
  );

  const changeBackgroundCallback = useCallback(
    _debounce((newColor: string | null) => {
      document.body.style.backgroundColor = newColor
        ? newColor
        : DEFAULT_BACKGROUND_COLOR;
    }, DEBOUNCED_DELAY_MS),
    []
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
      changeBackgroundCallback.cancel();
      changeLaptopScreenCallback.cancel();
    };
  }, [changeBackgroundCallback, changeLaptopScreenCallback]);

  return (
    <div className="h-screen w-screen select-none">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 35] }}
        className="h-screen w-screen"
      >
        <Lighting />
        {!isMobile && <Cursor />}
        {/* <OrbitControls enableZoom={false}/> */}

        <ScrollControls pages={3}>
          {/* Models */}
          <Suspense fallback={<Loader />}>
            <DotsCircle speed={DEFAULT_DOTS_SPEED} />
            <Macbook videoSource={videoSource} />
          </Suspense>

          {/* Sections */}
          {/* NOTE: zIndexRange prop required to allow setting z-index to items within */}
          {/* (resolves bug where shadcn drawer content cannot be interacted with after resize) */}
          <Html fullscreen zIndexRange={[1, 1000]}>
            <Hero />
          </Html>
          <Html
            fullscreen
            style={{ marginTop: "100vh" }}
            zIndexRange={[1, 1000]}
          >
            <About
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
          </Html>
          <Html
            fullscreen
            style={{ marginTop: "200vh" }}
            zIndexRange={[1, 1000]}
          >
            <Projects
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
          </Html>
          <Html
            fullscreen
            style={{ marginTop: "300vh" }}
            zIndexRange={[1, 1000]}
          >
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
      <ambientLight />
      <directionalLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
    </>
  );
};

const Loader = () => {
  return (
    <Html fullscreen>
      <div className="grid h-screen w-screen items-center justify-center">
        <div
          className="inline-block h-[30vh] w-[30vh] animate-spin rounded-full border-[1px] border-current border-t-transparent dark:text-gray-400"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </Html>
  );
};

// TODO: try out new loader and have 2 separate loaders (2x suspense) for the macbook and dots
const Loader2 = () => {
  return (
    <Html fullscreen>
      <div className="flex h-screen items-center justify-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 animate-spin rounded-full border-t-8 border-b-8 border-blue-500"></div>
        </div>
      </div>
    </Html>
  );
};

export default Scene;
