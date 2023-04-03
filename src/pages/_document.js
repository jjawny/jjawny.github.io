import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-[url('/bg.gif')] bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
