import { Canvas } from "@react-three/fiber";
import { Model } from "~/components/model";
import { type NextPage } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>johnnymadigan</title>
        <meta name="johnnymadigan" content="an introduction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[100vh] bg-gradient-to-r from-[#BFC8DB] to-[#96AAC5]">
        <div className="grid h-full w-screen select-none place-items-center">
          <div className="flex w-screen flex-col pt-20">
            <div className="h-screen">
              <h1 className="self-center text-center text-8xl font-extrabold tracking-tighter text-white sm:text-[13vw]">
                johnny madigan
              </h1>
              <div className="h-60">
                <Canvas camera={{ position: [0, 0, 0] }}>
                  <Suspense fallback={null}>
                    <Lighting />
                    <Model />
                  </Suspense>
                </Canvas>
              </div>
              <div className="flex flex-row justify-center">
                <Link href={"https://github.com/johnnymadigan"}>
                  <Image
                    src={"/github.png"}
                    alt="github"
                    height={50}
                    width={50}
                    className="duration-700 hover:scale-110"
                  />
                </Link>
                <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
                  <Image
                    src={"/linkedin.png"}
                    alt="linkedin"
                    height={50}
                    width={50}
                    className="duration-700 hover:scale-110"
                  />
                </Link>
              </div>
            </div>
            <h1 className="text-center text-5xl font-extrabold tracking-tighter text-white">
              who am i?
            </h1>
            <p className="text-md max-w-4xl self-center px-10 text-center text-white">
              <br />
              I'm a{" "}
              <span className="font-semibold text-amber-300">
                Full Stack Software Developer
              </span>{" "}
              currently working at Queensland Health on a portfolio of
              enterprise apps.
              <br />
              <br />
              As someone who{" "}
              <span className="font-semibold text-amber-300">thrives</span> on
              learning, building, and finding solutions to complex problems, I
              believe I can bring value to any team.
            </p>
            <div className="mt-20 h-40 w-full bg-black py-10">
              <div className="w-full text-center text-xs text-gray-500">
                <a href="https://skfb.ly/6FWRT">"Hello my friends"</a> by Urpo
                (CC-BY-NC-4.0)
                <br />
                <br />© Johnny Madigan
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Lighting = () => (
  <>
    <directionalLight position={[-1, 1, 1]} />
    <ambientLight />
  </>
);

export default Home;
