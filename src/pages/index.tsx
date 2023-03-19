import { Html, OrbitControls } from "@react-three/drei";
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
            <div className="h-screen w-screen">
              <div className="h-screen w-screen">
                <Canvas
                  camera={{ position: [0, 0, 20] }}
                  resize={{ debounce: 50 }}
                >
                  <Suspense fallback={null}>
                    <Lighting />
                    <Model />
                    <Html center>
                      <h1 className="w-screen self-center text-center text-7xl font-extrabold tracking-tighter text-white sm:text-[20vw]">
                        johnny madigan
                      </h1>
                    </Html>
                    {/* <OrbitControls /> */}
                  </Suspense>
                </Canvas>
              </div>
            </div>
            {/* socials */}
            <div className="mb-60 flex flex-row justify-center">
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
            {/* about */}
            <h1 className="text-center text-5xl font-extrabold tracking-tight text-white">
              who am i?
            </h1>
            <p className="text-md max-w-4xl self-center px-10 text-center text-gray-800">
              <br />
              I'm a{" "}
              <span className="rounded-full bg-white px-2 font-bold text-amber-300">
                Full Stack Software Developer
              </span>{" "}
              currently working at Queensland Health on a portfolio of
              enterprise apps.
              <br />
              <br />
              As someone who{" "}
              <span className="rounded-full bg-white px-2 font-semibold text-amber-300">
                thrives
              </span>{" "}
              on learning, building, and finding solutions to complex problems,
              I believe I can bring{" "}
              <span className="rounded-full bg-white px-2 font-semibold text-amber-300">
                value
              </span>{" "}
              to any team.
            </p>
            {/* credits */}
            <div className="mt-20 h-40 w-full bg-black py-10">
              <div className="w-full text-center text-xs text-gray-500">
                <a href="https://skfb.ly/DXqI">
                  "Hotline Miami 2: Wrong number - Tony mask"
                </a>{" "}
                by down_limit (CC-BY-NC-4.0)
                <br />
                <br />
                <a href="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZhNGFlZDliZWYyY2I4NzFjYzA4MDJkOWM2ODBjOTZjMzhkMjhkNiZjdD1n/aCCleAr6W1njtygxHC/giphy.gif">
                  Pink Glow
                </a>{" "}
                by Erica Anderson
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
    <directionalLight position={[0, -5, -1]} />
    <ambientLight intensity={0.7} />
  </>
);

export default Home;
