import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a11y")({
  component: A11y,
});

function A11y() {
  return <div>hey</div>;
}
