import { useElementWidth } from "~/hooks/use-is-mobile";
import { useIsInView } from "~/hooks/use-is-in-view";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Html } from "@react-three/drei";
import Model from "~/components/model";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <ThreeScene />
        <WhoAmI />
        <Credits />
      </div>
    </>
  );
};

const ThreeScene = () => (
  // specify z index so socials can be positioned on top
  <div className="-z-0 h-screen w-screen select-none">
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 20] }} resize={{ debounce: 50 }}>
        <Suspense fallback={null}>
          <directionalLight position={[0, -5, -1]} />
          <ambientLight intensity={0.7} />
          <Model />
          <Html center>
            {/* for smooth model movement, avoid cursor position jumping when mousing in/out element by making element full-screen */}
            <h1 className="flex h-screen w-screen animate-zoomIn cursor-default items-center justify-center justify-items-center text-center font-anton text-[24vw] font-extrabold tracking-tight text-white md:text-[11vw]">
              JOHNNY MADIGAN
            </h1>
          </Html>
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  </div>
);

const Socials = () => {
  return (
    // parent must be relative for positioning and z index max to keep on top
    <div className="fixed z-50 flex w-full select-none flex-row space-x-2 bg-black p-4">
      <h1 className="font-anton text-4xl font-extrabold tracking-tight text-white">
        JM
      </h1>
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/github.png"}
          alt="github"
          height={36}
          width={36}
          className="duration-700 hover:scale-110"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
        <Image
          src={"/linkedin.png"}
          alt="linkedin"
          height={36}
          width={36}
          className="duration-700 hover:scale-110"
        />
      </Link>
    </div>
  );
};

const WhoAmI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionIsInView = useIsInView(sectionRef);
  const isMobile = useElementWidth();

  const Highlight = ({ words }: { words: string }) => {
    return (
      <span className="whitespace-nowrap rounded-full bg-gray-800 px-2 py-1 font-bold text-amber-400">
        {words}
      </span>
    );
  };

  return (
    <main
      ref={sectionRef}
      className={`my-80 flex flex-col content-center text-center ${
        sectionIsInView ? "animate-fadeIn" : "invisible"
      }`}
    >
      <h1 className="font-anton text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        who am i ?
      </h1>
      <span className="mt-5 max-w-4xl space-y-5 self-center px-2 text-lg text-gray-400 sm:px-10">
        <p>
          I&apos;m a{" "}
          {isMobile ? (
            <Highlight words="full stack software developer" />
          ) : (
            <>
              <Highlight words="full stack" />{" "}
              <Highlight words="software developer" />
            </>
          )}{" "}
          (.NET, React) currently working at Queensland Health on a portfolio of
          enterprise apps.
        </p>
        <p>
          As someone who <Highlight words="thrives" /> on mastering their stack,
          finding solutions to complex problems, and sharing knowledge, I
          believe I can bring <Highlight words="value" /> to any team.
        </p>
      </span>
    </main>
  );
};

const Credits = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const elementIsInView = useIsInView(elementRef);

  return (
    <div
      ref={elementRef}
      className="content center flex h-40 flex-col space-y-3 text-center text-xs text-gray-600"
    >
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
      <p>
        ©{" "}
        <a className="italic" href="https:linkedin.com/in/johnnymadigan">
          Johnny Madigan
        </a>
      </p>
    </div>
  );
};

export default Home;
