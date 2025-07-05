import { createFileRoute } from "@tanstack/react-router";
import Footer from "~/features/footer/components/Footer";
import Scene from "~/features/r3f/components/Scene";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Scene />
      <Footer />
    </>
  );
}
