import { createFileRoute } from "@tanstack/react-router";
import Footer from "~/features/footer/components/Footer";
import Scene from "~/features/r3f/components/Scene";
import { ThemeProvider } from "~/features/theme/hooks/useThemeContext";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ThemeProvider fallbackTheme="light">
      <Scene />
      <Footer />
    </ThemeProvider>
  );
}
