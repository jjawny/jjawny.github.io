import { ReactNode } from "react";
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
  return (
    <div
      className={cn(
        "flex flex-col",
        "transition-opacity duration-400 ease-in-out",
        isShowContent ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
}
