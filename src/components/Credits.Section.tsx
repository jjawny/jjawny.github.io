import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import Link from "next/link";

const Credits = ({}: {}) => {
  return (
    <div className="grid h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center justify-items-center space-y-1 px-[5vw]">
        {/*
         * ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
         * SOLUTION: Extract into separate components that rely on 'useInView' hook
         */}
        <DevCredits />
        <ModelCredits />
      </div>
    </div>
  );
};

const DevCredits = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "Created by Johnny Madigan",
    0.6
  );
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [isHovered, startAnimation]);

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView, startAnimation]);

  return (
    <h2
      ref={textRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`select-text whitespace-nowrap rounded-sm bg-black px-[0.75vw] text-center font-geistmono text-[4vw] tracking-tight text-white hover:bg-white hover:text-black sm:text-[3vw]
        ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
      `}
    >
      {currentWord}
    </h2>
  );
};

const ModelCredits = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "'Macbook Pro 13 inch' by chrisgreig (CC BY)",
    0.9
  );
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isInView = useIsInView(linkRef);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [isHovered, startAnimation]);

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView, startAnimation]);

  return (
    <Link
      ref={linkRef}
      target="_blank"
      href="https://skfb.ly/MWtY"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`whitespace-nowrap rounded-sm bg-black px-[0.75vw] text-center font-geistmono text-[2vw] tracking-tight text-white hover:bg-white hover:text-black sm:text-[1.5vw]
        ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
      `}
    >
      {currentWord}
    </Link>
  );
};

export default Credits;
