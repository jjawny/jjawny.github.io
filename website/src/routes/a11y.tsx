import { createFileRoute } from "@tanstack/react-router";
import InfoCardAttribution from "~/features/info/components/InfoCardAttribution";
import InfoCardIntroduction from "~/features/info/components/InfoCardIntroduction";
import InfoCardName from "~/features/info/components/InfoCardName";
import InfoCardTitle from "~/features/info/components/InfoCardTitle";
import Socials from "~/features/socials/components/Socials";
import { ThemeProvider } from "~/features/theme/hooks/useThemeContext";

export const Route = createFileRoute("/a11y")({
  component: A11y,
});

function A11y() {
  return (
    <ThemeProvider initialTheme="light">
      <div className="grid min-h-screen place-content-center">
        <div className="flex flex-col text-center">
          <InfoCardIntroduction />
          <InfoCardName />
          <InfoCardTitle />
          <InfoCardAttribution />
          <Socials />
        </div>
      </div>
    </ThemeProvider>
  );
}
