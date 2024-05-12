import { useDynamicFontSize } from "~/hooks/useDynamicFontSize";
import { useIsInView } from "~/hooks/useIsInView";
import Socials from "./Socials";
import { useRef } from "react";

const Hero = () => {
  const heroContainerRef = useRef(null);
  const isInView = useIsInView(heroContainerRef);
  const fontSize = useDynamicFontSize();

  // Extracted for more complex styles:
  //  - No support for text-shadow in tailwind
  const heroStyle = {
    textShadow: "0 0 10px rgba(255,255,255,0.15)",
    fontSize: `${fontSize}px`,
    transform: "scaleY(2)",
    paddingRight: "5vw",
    paddingLeft: "5vw",
    cursor: "default",
    lineHeight: 0.8,
    fontWeight: 800,
    color: "white",
  };

  return (
    <>
      <main className="grid h-screen w-screen items-center justify-center">
        <div
          ref={heroContainerRef}
          className={`flex flex-col items-center justify-center justify-items-center
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
          `}
        >
          <h1
            className="select-none text-center font-monument"
            style={heroStyle}
          >
            JOHNNY MADIGAN
          </h1>
          {/* <Socials /> */}
        </div>
      </main>
    </>
  );
};

export default Hero;
