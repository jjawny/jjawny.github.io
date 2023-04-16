import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import React, { Suspense } from "react";
import Model from "~/components/model";

const Hero = () => (
  // specify z index so socials can be positioned on top
  <div className="-z-0 mb-40 h-screen w-screen select-none">
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 20] }} resize={{ debounce: 50 }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, -5, -1]} />
          <ambientLight intensity={0.7} />
          <Model />
          <Html center>
            {/* for smooth model movement, avoid cursor position jumping when mousing in/out element by making element full-screen */}
            <h1 className="z-40 flex h-screen w-screen animate-zoomIn cursor-default items-center justify-center justify-items-center text-center font-anton text-[24vw] font-extrabold tracking-tight text-white md:text-[11vw]">
              JOHNNY MADIGAN
            </h1>
          </Html>
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  </div>
);

export default Hero;
