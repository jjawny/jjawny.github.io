import { ReactNode, useState } from "react";
import InfoCardAttribution from "~/features/info/components/InfoCardAttribution";
import { cn } from "~/features/shared/helpers/cn";
import Socials from "~/features/socials/components/Socials";
import InfoCardIntroduction from "./InfoCardIntroduction";
import InfoCardName from "./InfoCardName";
import InfoCardTitle from "./InfoCardTitle";
import ScrollIndicator from "./ScrollIndicator";

export default function InfoCard({ isShowSurroundingContent = false }: { isShowSurroundingContent?: boolean }) {
  const [isBlurry, setIsBlurry] = useState<boolean>(false);

  const FadingContainer = ({ children }: { children: ReactNode }) => {
    return (
      <span
        className={cn(
          isShowSurroundingContent
            ? "animate-[fade-in_400ms_ease-in_forwards]"
            : "animate-[fade-out_400ms_ease-out_forwards]",
        )}
      >
        {children}
      </span>
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
          <FadingContainer>
            <InfoCardIntroduction />
          </FadingContainer>
          <ScrollIndicator />
          <InfoCardName />
          <FadingContainer>
            <InfoCardTitle />
            <InfoCardAttribution />
            <Socials />
          </FadingContainer>
        </div>
      </div>
    </div>
  );
}
