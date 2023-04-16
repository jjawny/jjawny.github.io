import Projects from "~/components/projects";
import Credits from "~/components/credits";
import Socials from "~/components/socials";
import WhoAmI from "~/components/whoami";
import { type NextPage } from "next";
import Hero from "~/components/hero";
import Head from "next/head";

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
      {/* relative for socials */}
      <div className="relative flex w-screen flex-col">
        <Socials />
        <Hero />
        <WhoAmI />
        <Projects />
        <Credits />
      </div>
    </>
  );
};

export default Home;
