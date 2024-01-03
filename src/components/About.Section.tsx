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

// ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
// SOLUTION: Extract component that relies on 'useInView' hook
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
    "WHO AM I ?",
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

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView, startAnimation]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger
        className={`transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "pointer-events-none opacity-10" : ""
        }`}
      >
        <h1
          ref={textRef}
          className={`whitespace-nowrap rounded-lg px-[2vw] font-geistmono text-[10vw] font-extrabold leading-tight tracking-tight transition-opacity duration-300 ease-in-out sm:text-[8vw]
            ${
              isHovered || isDrawerOpen
                ? "bg-white text-black"
                : "bg-black text-white"
            }
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="z-50 px-2">
        <DrawerHeader>
          <DrawerTitle className="font-geistmono text-2xl text-white">
            WHO AM I ?
          </DrawerTitle>
          <DrawerDescription className=" py-5 text-lg text-white ">
            I&apos;m a {BoldText("full stack software developer")} (.NET, React)
            currently working at Queensland Health on a portfolio of enterprise
            apps.
            <br />
            <br />
            As someone who {BoldText("thrives")} on mastering their stack,
            finding solutions to complex problems, and sharing knowledge, I
            believe I can bring {BoldText("value")} to any team.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const BoldText = (text: string) => (
  <span className="font-extrabold">{text}</span>
);

export default About;
