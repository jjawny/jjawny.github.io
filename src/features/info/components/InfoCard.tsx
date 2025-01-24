import { useState } from "react";
import InfoCardAttribution from "~/features/info/components/InfoCardAttribution";
import Socials from "~/features/info/components/Socials";
import { cn } from "~/features/shared/helpers/cn";
import InfoCardName from "./InfoCardName";
import ScrollIndicator from "./ScrollIndicator";

export default function InfoCard() {
  const [isBlurry, setIsBlurry] = useState<boolean>(false);

  const IntroductionFragment = () => {
    return (
      <p className={cn(`hello animate-[fade-in_200ms_ease-in_forwards] self-start`, "rotate-x-10 transform-3d")}>
        Hey! I&rsquo;m…
      </p>
    );
  };

  const TitleFragment = () => {
    return (
      <h2 className={cn(`title animate-[fade-in_600ms_ease-in_forwards]`, "-rotate-x-10 transform-3d")}>
        Full Stack Software Developer
      </h2>
    );
  };

  const AttributionFragment = () => {
    return (
      <div
        className={cn("flex w-[85%] animate-[fade-in_800ms_ease-in_forwards] justify-end", "-rotate-x-10 transform-3d")}
      >
        <div className="flex flex-col">
          <InfoCardAttribution />
        </div>
      </div>
    );
  };

  const SocialsFragment = () => {
    return (
      <div
        className={cn(
          "flex w-[80%] animate-[fade-in_1000ms_ease-in_forwards] justify-end",
          "-rotate-x-20 transform-3d",
        )}
      >
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
          className={cn(
            `transition-filter font-syne relative z-50 flex w-full flex-col text-center tracking-tight whitespace-nowrap text-white duration-300 ease-in-out select-text`,
            isBlurry && "pointer-events-none opacity-25! blur-sm",
            "perspective-dramatic",
          )}
        >
          <ScrollIndicator />
          <IntroductionFragment />
          <InfoCardName toggleIsBlurry={setIsBlurry} />
          <TitleFragment />
          <AttributionFragment />
          <SocialsFragment />
        </div>
      </div>
    </div>
  );
}
