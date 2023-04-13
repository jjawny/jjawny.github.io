import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 h-screen w-screen object-cover"
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
