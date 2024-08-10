import { useDynamicFontSize } from "~/hooks/useDynamicFontSize";
import { useIsInView } from "~/hooks/useIsInView";
import { useRef } from "react";

const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const isInView = useIsInView(heroSectionRef);
  const fontSize = useDynamicFontSize();

  return (
    <>
      <main className="grid h-screen w-screen items-center justify-center">
        <div
          ref={heroSectionRef}
          className={`flex flex-col items-center justify-center justify-items-center
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
          `}
        >
          <h1
            className="cursor-default select-none py-[5vw] text-center font-monument font-extrabold text-white"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.15)",
              fontSize: `${fontSize}px`,
              transform: "scaleY(2)",
              lineHeight: 0.8,
            }}
          >
            JOHNNY MADIGAN
          </h1>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
