import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useIsMobile } from "~/hooks/useIsMobile";
import { Canvas } from "@react-three/fiber";
import Projects from "./Projects.Section";
import _debounce from "lodash/debounce";
import Credits from "./Credits.Section";
import { Macbook } from "./Macbook";
import About from "./About.Section";
import Hero from "./Hero.Section";
import DotsCircle from "./Dots";
import Cursor from "./Cursor";

const DEBOUNCED_DELAY_MS = 25;
const DEFAULT_VIDEO_SOURCE = "default.mp4";
const DEFAULT_BACKGROUND_COLOR = "#111111";

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [videoSource, setVideoSource] = useState(
    `/videos/${DEFAULT_VIDEO_SOURCE}`
  );

  const changeBackgroundCallback = _debounce((newColor: string | null) => {
    document.body.style.backgroundColor = newColor
      ? newColor
      : DEFAULT_BACKGROUND_COLOR;
  }, DEBOUNCED_DELAY_MS);

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
    <div className="h-screen w-screen">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 35] }}
        className="h-screen w-screen"
      >
        {!isMobile && <Cursor />}

        {/* TODO: test the suspense */}
        <Suspense fallback={null}>
          <Lighting />
          {/* <OrbitControls enableZoom={false}/> */}
          <ScrollControls pages={3}>
            <DotsCircle />
            <Macbook videoSource={videoSource} />
            <Hero />
            <About
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
            <Projects
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
            <Credits />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

const Lighting = () => {
  return (
    <>
      <directionalLight />
      <ambientLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
    </>
  );
};

export default Scene;
