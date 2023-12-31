import React, { Suspense, useCallback, useRef, useState } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Projects from "./Projects.Section";
import _debounce from "lodash/debounce";
import { Macbook } from "./Macbook";
import About from "./About.Section";
import Hero from "./Hero.Section";
import DotsCircle from "./Dots";

const Scene = () => {
  const debounceDelayInMs = 15;
  const defaultVideoUrl = "default.mp4";
  const defaultBackgroundColor = "#111111";

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [videoUrl, setVideoUrl] = useState(defaultVideoUrl);

  const changeBackgroundCallback = _debounce((newColor: string) => {
    let newColorValidated = newColor.trim();
    if (newColorValidated === "") newColorValidated = defaultBackgroundColor;
    document.body.style.backgroundColor = newColorValidated;
  }, debounceDelayInMs);

  const changeLaptopScreenCallback = useCallback(
    _debounce((videoUrl: string) => {
      let videoUrlValidated = videoUrl.trim();
      if (videoUrlValidated === "") videoUrlValidated = defaultVideoUrl;
      setVideoUrl(videoUrlValidated);
    }, debounceDelayInMs),
    [setVideoUrl]
  );

  return (
    <div className="h-screen w-screen">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 35] }}
        className="h-screen w-screen"
      >
        {/* TODO: test the suspense */}
        <Suspense fallback={null}>
          <Lighting />
          {/* <OrbitControls enableZoom={false}/> */}
          <ScrollControls pages={2.8}>
            <DotsCircle />
            <Macbook videoSource={videoUrl} />
            <Hero />
            <About
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
            <Projects
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
            />
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
