import { ReactNode, useEffect, useState } from "react";
import InfoCardAttribution from "~/features/info/components/InfoCardAttribution";
import { cn } from "~/features/shared/helpers/cn";
import Socials from "~/features/socials/components/Socials";
import InfoCardIntroduction from "./InfoCardIntroduction";
import InfoCardName from "./InfoCardName";
import InfoCardTitle from "./InfoCardTitle";
import ScrollIndicator from "./ScrollIndicator";

export default function InfoCard({ isShowSurroundingContent = false }: { isShowSurroundingContent?: boolean }) {
  return (
    <div className="feature-for-sticky-content-inside-r3f-container grid">
      <div className="feature-for-sticky-content-inside-r3f-content justify-self-center">
        <div
          className={cn(
            "relative",
            "z-50 flex w-full flex-col text-center select-text",
            "transition-filter duration-300 ease-in-out",
            "font-syne tracking-tight whitespace-nowrap text-white",
            "perspective-dramatic",
          )}
        >
          <FadingContainer isShowContent={isShowSurroundingContent}>
            <InfoCardIntroduction />
          </FadingContainer>
          <ScrollIndicator />
          <InfoCardName />
          <FadingContainer isShowContent={isShowSurroundingContent}>
            <InfoCardTitle />
            <InfoCardAttribution />
            <Socials />
          </FadingContainer>
        </div>
      </div>
    </div>
  );
}

function FadingContainer({ children, isShowContent = false }: { children: ReactNode; isShowContent?: boolean }) {
  const [isVisible, setIsVisible] = useState(isShowContent);
  const [keyToTriggerReRenders, setKeyToTriggerReRenders] = useState<number>(0);

  const triggerReRenders = () => {
    setKeyToTriggerReRenders((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    if (isShowContent) {
      triggerReRenders(); // When visible, immediately show and trigger animations (if any inside children)
      setIsVisible(true);
    }

    if (!isShowContent) {
      setIsVisible(false);
    }
  }, [isShowContent]);

  return (
    <div className={cn(isVisible ? "opacity-100" : "opacity-0", "transition-opacity duration-200 ease-in-out")}>
      <div className="flex flex-col" key={keyToTriggerReRenders}>
        {children}
      </div>
    </div>
  );
}
