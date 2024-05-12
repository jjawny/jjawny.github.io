import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import Link from "next/link";

const Credits = ({}: {}) => {
  return (
    <div className="grid h-screen w-screen items-center justify-center">
      <div className="flex w-[37vw] min-w-[fit-content] flex-col items-center justify-center justify-items-center space-y-1">
        {/*
         * ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
         * SOLUTION: Extract into separate components that rely on 'useInView' hook
         */}
        <CreditText />
      </div>
    </div>
  );
};

const CreditText = () => {
  const creditsRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(creditsRef);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentText, startAnimation } = useStartTextAnimation(
    "Johnny Madigan",
    0.25
  );

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    }
  }, [isHovered, startAnimation]);

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView, startAnimation]);

  return (
    <div
      ref={creditsRef}
      className={`flex w-full select-text flex-col whitespace-nowrap text-center font-monument tracking-tight text-white ${
        isInView ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <p className={`self-start text-[1.75vw] sm:text-[1.25vw]`}>Created by</p>
      <h2
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`self-end text-[3.75vw] font-extrabold sm:text-[2.75vw]`}
      >
        {currentText}
      </h2>
      <Link
        target="_blank"
        href="https://skfb.ly/MWtY"
        className={`text-[1vw] sm:text-[1vw]`}
      >
        <i>Macbook Pro 13 inch</i> model by
      </Link>
      <p className={`self-end text-[1.5vw] sm:text-[1.5vw]`}>
        chrisgreig (CC BY)
      </p>
    </div>
  );
};

export default Credits;
