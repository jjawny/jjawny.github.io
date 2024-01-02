import { ABOUT_SECTION_COLOR, ABOUT_SECTION_VIDEO } from "~/constants/defaults";
import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";

type ProjectsProps = {
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
};

const About: React.FC<ProjectsProps> = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}) => {
  return (
    <div className={`grid h-screen w-screen items-center justify-center`}>
      <AboutText
        changeBackgroundCallback={changeBackgroundCallback}
        changeLaptopScreenCallback={changeLaptopScreenCallback}
      />
    </div>
  );
};

const AboutText = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(
    "ABOUT ME",
    0.7
  );
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (!isDrawerOpen && isHovered) {
      startAnimation();
    }

    if (isDrawerOpen || isHovered) {
      changeBackgroundCallback(ABOUT_SECTION_COLOR);
      changeLaptopScreenCallback(ABOUT_SECTION_VIDEO);
    } else {
      changeBackgroundCallback(null);
      changeLaptopScreenCallback(null);
    }
  }, [
    isDrawerOpen,
    isHovered,
    changeBackgroundCallback,
    changeLaptopScreenCallback,
    startAnimation,
  ]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger>
        <h1
          ref={textRef}
          className={`whitespace-nowrap rounded-xl px-[2vw] font-rubik text-[10vw] font-extrabold tracking-tight sm:rounded-2xl sm:text-[8vw]
            ${
              isHovered || isDrawerOpen
                ? "bg-white text-slate-900"
                : "bg-slate-900 text-white"
            }
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="z-px-2">
        <DrawerHeader>
          <DrawerTitle className="font-rubik text-2xl text-white">
            ABOUT ME
          </DrawerTitle>
          <DrawerDescription className=" py-5 text-lg text-white ">
            I&apos;m a{" "}
            <span className="font-extrabold">
              full stack software developer
            </span>
            (.NET, React) currently working at Queensland Health on a portfolio
            of enterprise apps.
            <br />
            <br />
            As someone who <span className="font-extrabold">thrives</span> on
            mastering their stack, finding solutions to complex problems, and
            sharing knowledge, I believe I can bring{" "}
            <span className="font-extrabold">value</span> to any team.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default About;
