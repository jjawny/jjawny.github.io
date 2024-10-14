import React, { useState } from "react";
import Socials from "~/components/Socials";
import InfoCardAttribution from "./InfoCard.Attribution";
import InfoCardName from "./InfoCard.Name";
import ScrollIndicator from "./ScrollIndicator";

const InfoCard: React.FC = () => {
  const [isBlurry, setIsBlurry] = useState<boolean>(false);

  const IntroductionFragment = () => {
    return <p className={`hello animate-[fadeIn_200ms_ease-in_forwards] self-start`}>Hey! I&rsquo;m…</p>;
  };

  const TitleFragment = () => {
    return <h2 className={`title animate-[fadeIn_600ms_ease-in_forwards]`}>Full Stack Software Developer</h2>;
  };

  const SubTitleTextFragment = () => {
    return (
      <div className="flex w-[85%] animate-[fadeIn_800ms_ease-in_forwards] justify-end pl-[15%]">
        <div className="flex flex-col">
          <InfoCardAttribution />
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
              transition-filter relative z-50 flex w-full select-text flex-col whitespace-nowrap text-center font-monument tracking-tight text-white duration-300 ease-in-out 
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
