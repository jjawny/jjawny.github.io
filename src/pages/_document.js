import { Html, Head, Main, NextScript } from "next/document";

const BODY_GRID_STYLE = {
  backgroundColor: "#101010",
  backgroundSize: "40px 40px",
  backgroundImage: `linear-gradient(to right, #8080801a 1px, transparent 1px),
                    linear-gradient(to bottom, #8080801a 1px, transparent 1px),
                    linear-gradient(to bottom right, #8080801a 1px, transparent 1px)`,
};

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className="transition-colors duration-150 ease-in"
        style={BODY_GRID_STYLE}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
