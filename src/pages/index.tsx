import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "~/components/model";
import { type NextPage } from "next";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useIsInView } from "~/hooks/useIsInView";

const Home: NextPage = (props) => {
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
      <main className="min-h-[100vh] bg-[url('/bg.gif')] bg-cover">
        <div className="grid h-full w-screen select-none place-items-center">
          <div className="flex w-screen flex-col">
            <ThreeScene />
            <Socials />
            <WhoAmI />
            <Credits />
          </div>
        </div>
      </main>
    </>
  );
};

const ThreeScene = () => (
  <div className="h-screen w-screen">
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 20] }} resize={{ debounce: 50 }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, -5, -1]} />
          <ambientLight intensity={0.7} />
          <Model />
          <Html center>
            {/* to keep model movement smooth, avoid cursor position changing when mousing over by setting element to full-screen */}
            <h1 className="flex h-screen w-screen cursor-default items-center justify-center justify-items-center text-center font-anton text-[24vw] font-extrabold tracking-tighter text-white md:text-[11vw]">
              JOHNNY MADIGAN
            </h1>
          </Html>
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  </div>
);

const Socials = () => (
  <div className="flex flex-row justify-center space-x-5">
    <Link href={"https://github.com/johnnymadigan"}>
      <Image
        src={"/github.png"}
        alt="github"
        height={40}
        width={40}
        className="duration-700 hover:scale-110"
      />
    </Link>
    <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
      <Image
        src={"/linkedin.png"}
        alt="linkedin"
        height={40}
        width={40}
        className="duration-700 hover:scale-110"
      />
    </Link>
  </div>
);

const WhoAmI = () => {
  const whoAmIRef = useRef<HTMLSpanElement>(null);
  const isInView = useIsInView(whoAmIRef);

  const Highlight = ({ words }: { words: string }) => (
    <span className="whitespace-nowrap rounded-full bg-gray-800 px-2 py-1 font-bold text-amber-400">
      {words}
    </span>
  );

  return (
    <span
      ref={whoAmIRef}
      className={`my-80 flex flex-col content-center text-center ${
        isInView ? "animate-fadeIn" : "invisible"
      }`}
    >
      <h1 className="font-anton text-5xl font-extrabold tracking-tight text-white">
        who am i ?
      </h1>
      <p className="text-md mt-5 max-w-4xl self-center px-10 text-gray-400">
        I'm a <Highlight words="full stack software developer" /> (.NET, React)
        currently working at Queensland Health on a portfolio of enterprise
        apps.
        <br />
        <br />
        As someone who <Highlight words="thrives" /> on mastering their stack,
        finding solutions to complex problems, and sharing knowledge, I believe
        I can bring <Highlight words="value" /> to any team.
      </p>
    </span>
  );
};

const Credits = () => (
  <div className="">
    <div className="content center flex h-80 flex-col space-y-3 text-center text-xs text-gray-700">
      <p>
        <a className="italic" href="https://skfb.ly/DXqI">
          Hotline Miami 2: Wrong Number - Tony mask
        </a>{" "}
        by down_limit
      </p>
      <p>
        <a
          className="italic"
          href="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc5MmVlNDNiMTc4Y2NmNjhmNzczNDFlMTRhNjQ5MmJiNmVhZGZiYiZjdD1n/g0gAJDvoNJBSwx8wP0/giphy.gif"
        >
          Glow Black And White
        </a>{" "}
        by Erica Anderson
      </p>
      <p>© Johnny Madigan</p>
    </div>
  </div>
);

export default Home;
