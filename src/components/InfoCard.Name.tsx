import Image from "next/image";
import React from "react";
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

type NameProps = {
  toggleIsBlurry: (isBlurry: boolean) => void;
};

const InfoCardName: React.FC<NameProps> = (props) => {
  const { toggleIsShowPersonalScreen } = useSceneContext();
  const { toggleIsBlurry } = props;

  const handleDrawerOpenSideEffects = (isOpen: boolean) => {
    toggleIsBlurry(isOpen);
    toggleIsShowPersonalScreen(isOpen);
  };

  const ClickIndicatorFragment = () => {
    return (
      <div
        className="absolute right-[2px] bottom-0 duration-200 hover:scale-125"
        style={{ width: "5vw", height: "5vw" }}
      >
        <Image
          src={"/images/click.gif"}
          alt="click to learn more about my career as a full stack software/web engineer/developer"
          fill
          sizes="5vw"
          style={{ rotate: "-30deg", objectFit: "cover", userSelect: "none" }}
        />
      </div>
    );
  };

  const AboutMeFragment = () => {
    // TODO: add stack icons to first line trailing (fade away?)
    return (
      <span className="block space-y-3 py-6 font-default text-base">
        <span className="block">
          I&apos;m a <strong>Full Stack Software Developer</strong>.
        </span>
        <span className="block">I love the web, UX, DX, and getting $h1t done.</span>
        <span className="block">
          I&apos;m currently working for my state government on a portfolio of enterprise apps.
        </span>
        <span className="block">
          As someone who <strong>thrives</strong> on mastering their stack, building <strong>long-term</strong>{" "}
          solutions, and <strong>sharing</strong> knowledge, I believe I can bring <strong>value</strong> to any team.
        </span>
      </span>
    );
  };

  return (
    <main>
      <Drawer onOpenChange={handleDrawerOpenSideEffects}>
        <DrawerTrigger>
          <h1 className="relative scale-x-[1.69] animate-[fadeIn_700ms_ease-in_forwards] px-[2vw] text-[4vw] font-extrabold">
            Johnny
            <ClickIndicatorFragment />
          </h1>
        </DrawerTrigger>
        <DrawerContent className="bottom-[-50px] z-50 !select-text px-2 pb-[50px] text-white">
          <DrawerHeader>
            <DrawerTitle className="font-monument text-2xl">WHO AM I ?</DrawerTitle>
            <DrawerDescription>
              <AboutMeFragment />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
};

export default InfoCardName;
