import { useIsInView } from "~/hooks/useIsInView";
import Socials from "./Socials";
import { useRef } from "react";

const Hero = () => {
  const triggerDivRef = useRef(null);
  const isInView = useIsInView(triggerDivRef);

  return (
    <>
      {/* 
        PROBLEM:
          - To achieve a fade-out animation on scroll, we ideally use a custom hook to get the scroll offset
          - Because we are using HTML in R3F, to keep the canvas centre/fixed in the BG, overflow is hidden
          - Because overflow has to be hidden, window.scrollY/X does not get reflected...
          - Hack-solution: detect when an invisible div leaves the viewport to trigger the animation
      */}
      <div
        ref={triggerDivRef}
        className="top-5vh invisible absolute left-1/2 min-h-[10vh] min-w-[100px] -translate-x-1/2 transform bg-pink-400"
      />
      <main className="grid h-screen w-screen items-center justify-center">
        <div
          className={`flex flex-col items-center justify-center justify-items-center ${
            isInView ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <h1
            className="
              cursor-default
              select-none
              px-[5vw]
              text-center
              font-centrion
              text-[15vw]
              text-white
              sm:whitespace-nowrap
              sm:text-[8vw]"
          >
            JOHNNY MADIGAN
          </h1>
          <Socials />
        </div>
      </main>
    </>
  );
};

export default Hero;
