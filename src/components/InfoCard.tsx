import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Socials from "~/components/Socials";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/Drawer";
import { useSceneContext } from "~/stores/sceneAtom";

const InfoCard: React.FC = () => {
  const [isBlurry, setIsBlurry] = useState<boolean>(false);

  return (
    <div className="feature-for-sticky-content-inside-r3f-container grid">
      <div className="feature-for-sticky-content-inside-r3f-content justify-self-center">
        <div
          className={`
            transition-filter z-50 flex w-full select-text flex-col whitespace-nowrap text-center font-monument tracking-tight text-white duration-300 ease-in-out 
            ${isBlurry && "pointer-events-none !opacity-25 blur"}
            `}
        >
          <Hello />
          <main>
            <Name toggleIsBlurry={setIsBlurry} />
            <Title />
          </main>
          <Attribution />
          <Socials />
        </div>
      </div>
    </div>
  );
};

const Hello: React.FC = () => {
  return <p className="hello self-start">Hey! I&rsquo;m…</p>;
};

type NameProps = {
  toggleIsBlurry: (isBlurry: boolean) => void;
};

const Name: React.FC<NameProps> = (props) => {
  const { toggleIsShowPersonalScreen } = useSceneContext();
  const { toggleIsBlurry } = props;

  const handleDrawerOpenSideEffects = (isOpen: boolean) => {
    toggleIsBlurry(isOpen);
    toggleIsShowPersonalScreen(isOpen);
  };

  return (
    <Drawer onOpenChange={handleDrawerOpenSideEffects}>
      <DrawerTrigger>
        <h1 className="name relative px-[2vw] font-extrabold duration-150 hover:scale-105">
          Johnny Madigan
          <div
            className="duration-200 hover:scale-125"
            style={{ width: "5vw", height: "5vw", position: "absolute", right: 0, bottom: 0 }}
          >
            {/* TODO: revise dynamic size (see current NextJS recommendation), then apply to social icons */}
            <Image
              src={"/images/click.gif"}
              alt="click to learn more about my career as a full stack software/web engineer/developer"
              fill
              sizes="5vw"
              className="select-none"
              style={{ rotate: "-30deg", objectFit: "cover", height: "" }}
            />
          </div>
        </h1>
      </DrawerTrigger>
      <DrawerContent className="bottom-[-50px] z-50 !select-text px-2 pb-[50px] text-white">
        <DrawerHeader>
          <DrawerTitle className="font-monument text-2xl">WHO AM I ?</DrawerTitle>
          <DrawerDescription className="py-5 font-default">
            <span className="block space-y-3">
              <span className="block">
                I&apos;m a <strong>Full Stack Software Developer</strong>.
              </span>
              <span className="block">I love the web, UX, DX, and getting $h1t done.</span>
              <span className="block">
                I&apos;m currently working for my state government on a portfolio of enterprise apps.
              </span>
              <span className="block">
                As someone who <strong>thrives</strong> on mastering their stack, building <strong>long-term</strong>{" "}
                solutions, and <strong>sharing</strong> knowledge, I believe I can bring <strong>value</strong> to any{" "}
                team.
              </span>
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Title: React.FC = () => {
  return <h2 className="title">Full Stack Software Developer</h2>;
};

const Attribution: React.FC = () => {
  return (
    <p className="attribution self-end pr-16">
      <Link target="_blank" href="https://skfb.ly/MWtY">
        <i className="underline">MacBook</i>
      </Link>{" "}
      {/* CC Attribution (CC BY 4.0) */}
      by chrisgreig
    </p>
  );
};

export default InfoCard;
