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
            transition-filter relative z-50 flex w-full select-text flex-col whitespace-nowrap text-center font-monument tracking-tight text-white duration-300 ease-in-out 
            ${isBlurry && "pointer-events-none !opacity-25 blur"}
            `}
        >
          <Image
            src={"/images/mouse.svg"}
            alt="scroll or swipe to see something cool..."
            height={50}
            width={50}
            className="absolute -top-1/4 left-[46%] animate-bounce grayscale invert filter"
          />
          <Hello />
          <Name toggleIsBlurry={setIsBlurry} />
          <Title />
          <div className="flex w-[85%] animate-[fadeIn_800ms_ease-in_forwards] justify-end pl-[15%]">
            <div className="flex flex-col">
              <Attribution />
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hello: React.FC = () => {
  return <p className="hello animate-[fadeIn_200ms_ease-in_forwards] self-start">Hey! I&rsquo;m…</p>;
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
    <main>
      <Drawer onOpenChange={handleDrawerOpenSideEffects}>
        <DrawerTrigger>
          <h1 className="name relative animate-[fadeIn_400ms_ease-in_forwards] px-[2vw] font-extrabold duration-150 hover:scale-105">
            Johnny Madigan
            <div
              className="duration-200 hover:scale-125"
              style={{ width: "5vw", height: "5vw", position: "absolute", right: 0, bottom: 0 }}
            >
              <Image
                src={"/images/click.gif"}
                alt="click to learn more about my career as a full stack software/web engineer/developer"
                fill
                sizes="5vw"
                style={{ rotate: "-30deg", objectFit: "cover", userSelect: "none" }}
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
    </main>
  );
};

const Title: React.FC = () => {
  return <h2 className="title animate-[fadeIn_600ms_ease-in_forwards]">Full Stack Software Developer</h2>;
};

const Attribution: React.FC = () => {
  return (
    <p className="attribution">
      <Link target="_blank" href="https://skfb.ly/MWtY">
        <i className="underline">MacBook</i>
      </Link>{" "}
      {/* CC Attribution (CC BY 4.0) */}
      by chrisgreig
    </p>
  );
};

export default InfoCard;
