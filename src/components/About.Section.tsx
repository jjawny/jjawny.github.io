import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import { Html } from "@react-three/drei";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";

const About = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
}) => {
  return (
    <Html fullscreen style={{ marginTop: "100vh" }}>
      <div className={`grid h-screen w-screen items-center justify-center`}>
        <AboutText
          changeBackgroundCallback={changeBackgroundCallback}
          changeLaptopScreenCallback={changeLaptopScreenCallback}
        />
      </div>
    </Html>
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
    0.3
  );
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(textRef);

  useEffect(() => {
    if (!isDrawerOpen && isHovered) {
      startAnimation();
    }

    if (isDrawerOpen || isHovered) {
      changeBackgroundCallback("#670e3c");
      changeLaptopScreenCallback("jjds.mp4");
    } else {
      changeBackgroundCallback(null);
      changeLaptopScreenCallback(null);
    }
  }, [isDrawerOpen, isHovered]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger>
        <h1
          ref={textRef}
          className={`rounded-md px-[2vw] font-rubik text-[10vw] font-extrabold tracking-tight sm:text-[8vw]
            ${
              isHovered || isDrawerOpen
                ? "bg-white text-slate-900"
                : "bg-black text-white"
            }
            ${isInView ? "animate-fadeIn" : "animate-fadeOut"}`}
          style={{ textWrap: "nowrap" }}
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
