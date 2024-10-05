import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Scene from "~/components/Scene";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>johnnymadigan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="an introduction" />
        <meta property="og:title" content="johnnymadigan" />
        <meta property="og:description" content="an introduction" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="j" />
      </Head>
      <Scene />
      <Footer />
    </>
  );
};

export default Home;
