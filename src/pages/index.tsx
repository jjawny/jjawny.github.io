import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Scene from "~/components/Scene";

// TODO: upgrade all npm packages
// TODO: convert to vite-app only, its a static site man
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>johnnymadigan</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Johnny Madigan" />
        <meta name="description" content="Who is Johnny Madigan?" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* open graph */}
        <meta property="og:title" content="johnnymadigan" />
        <meta property="og:description" content="Who is Johnny Madigan?" />
        <meta property="og:image" content="https://jjawny.github.io/favicon.ico" />
        <meta property="og:image:width" content="48" />
        <meta property="og:image:height" content="48" />
        <meta property="og:image:alt" content="johnnymadigan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jjawny.github.io" />

        {/* x (twitter) */}
        <meta name="twitter:title" content="johnnymadigan" />
        <meta name="twitter:description" content="Who is Johnny Madigan?" />
        <meta name="twitter:image" content="https://jjawny.github.io/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jjjawny" />
        <meta name="twitter:site" content="@jjjawny" />

        {/* See background colour in globals.css */}
        <meta name="theme-color" content="#0e0000" />
      </Head>
      <Scene />
      <Footer />
    </>
  );
};

export default Home;
