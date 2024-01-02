import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";

const Credits = ({}: {}) => {
  return (
    <div className={`grid h-screen w-screen items-center justify-center`}>
      <div
        className={`flex flex-col items-center justify-center justify-items-center px-[5vw]`}
      >
        <CreditsText />
        <CreditsSubtext />
      </div>
    </div>
  );
};

// TODO: research why when this is in 1 component the useIsInView does not work properly and the text never triggers/shows
const CreditsText = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "Created by Johnny Madigan",
    1.5
  );
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [isHovered, startAnimation]);

  return (
    <h2
      ref={textRef}
      className={`rounded-md px-[1vw] text-center font-rubik text-[3vw] font-extrabold tracking-tight sm:text-[2vw]
            ${isHovered ? "bg-white text-slate-900" : "bg-black text-white"}
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}`}
      style={{ textWrap: "nowrap" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentWord}
    </h2>
  );
};

const CreditsSubtext = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "'Macbook Pro 13 inch' by chrisgreig (CC BY)",
    2.6
  );
  const textRef = useRef<HTMLAnchorElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [isHovered, startAnimation]);

  return (
    <a
      ref={textRef}
      href="https://skfb.ly/MWtY"
      target="_blank"
      className={`rounded-md px-[1vw] text-center font-rubik text-[1.5vw] tracking-tight sm:text-[1vw]
            ${isHovered ? "bg-white text-slate-900" : "bg-black text-white"}
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}`}
      style={{ textWrap: "nowrap" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentWord}
    </a>
  );
};

export default Credits;
