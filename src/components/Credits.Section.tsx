import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import { Html } from "@react-three/drei";

const Credits = ({}: {}) => {
  return (
    <Html fullscreen style={{ marginTop: "300vh" }}>
      <div className={`grid h-screen w-screen items-center justify-center`}>
        <CreditsText />
      </div>
    </Html>
  );
};

// TODO: research why when this is in 1 component the useIsInView does not work properly and the text never triggers/shows
const CreditsText = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "Created by Johnny Madigan",
    0.9
  );
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [, isHovered]);

  return (
    <h2
      ref={textRef}
      className={`rounded-md px-[2vw] font-rubik text-[1vw] font-extrabold tracking-tight sm:text-[2vw]
            ${isHovered ? "bg-white text-slate-900" : "bg-black text-white"}
            ${isInView ? "animate-fadeIn" : "invisible"}`}
      style={{ textWrap: "nowrap" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentWord}
    </h2>
  );
};

export default Credits;
