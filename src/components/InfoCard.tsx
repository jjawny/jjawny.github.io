import React, { useState } from "react";
import Socials from "~/components/Socials";
import InfoCardName from "./InfoCard.Name";
import ScrollIndicator from "./ScrollIndicator";

const InfoCard: React.FC = () => {
  const [isBlurry, setIsBlurry] = useState<boolean>(false);

  const IntroductionFragment = () => {
    return (
      <p
        className="animate-[fadeIn_300ms_ease-in_forwards] self-start text-[1.75vw]"
        style={{ transform: "translateX(-50px) translateY(5px)" }}
      >
        Hey! I&rsquo;m…
      </p>
    );
  };

  const TitleFragment = () => {
    return <h2 className="animate-[fadeIn_1000ms_ease-in_forwards] text-[1.5vw]">Full Stack Software Developer</h2>;
  };

  const SubTitleTextFragment = () => {
    return (
      <div className="flex w-[85%] animate-[fadeIn_1400ms_ease-in_forwards] justify-end pl-[15%]">
        <div className="flex flex-col">
          <Socials />
        </div>
      </div>
    );
  };

  return (
    <div className="feature-for-sticky-content-inside-r3f-container grid">
      <div className="feature-for-sticky-content-inside-r3f-content justify-self-center">
        <div
          className={`
            transition-filter relative z-50 flex w-full select-text flex-col whitespace-nowrap pt-14 text-center font-monument tracking-tight text-white duration-300 ease-in-out 
            ${isBlurry && "pointer-events-none !opacity-25 blur"}
            `}
        >
          <ScrollIndicator />
          <IntroductionFragment />
          <InfoCardName toggleIsBlurry={setIsBlurry} />
          <TitleFragment />
          <SubTitleTextFragment />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
