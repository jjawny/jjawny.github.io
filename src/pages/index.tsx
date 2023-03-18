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
          <div className="flex w-screen flex-col py-20">
            <h1 className="text-center text-8xl font-extrabold tracking-tighter text-white sm:text-[19vw]">
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
            <div className="flex flex-row justify-center pb-20">
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
            <h1 className="text-center text-5xl font-extrabold tracking-tighter text-white">
              who am i?
            </h1>
            <p className="max-w-2xl self-center text-center text-lg text-white">
              I'm a Full Stack Software Developer currently working at
              Queensland Health on a portfolio of enterprise apps. As someone
              who thrives on learning, building, and finding solutions to
              complex problems, I believe I can bring value to any team.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

const Lighting = () => (
  <>
    <directionalLight position={[0, 0, 1]} />
    <ambientLight />
  </>
);

export default Home;
