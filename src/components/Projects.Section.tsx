import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useEffect, useRef, useState } from "react";
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

const Projects = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  changeBackgroundCallback: (newColor: string) => void;
  changeLaptopScreenCallback: (videoUrl: string) => void;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Html fullscreen style={{ marginTop: "200vh" }}>
      <div
        ref={sectionRef}
        className="mb-40 grid h-screen w-screen items-center"
      >
        <div
          className={`flex flex-col  items-center justify-center justify-items-center space-y-3 px-[5vw] sm:items-start`}
        >
          <Project
            name="JJ's DELIVERY SERVICE"
            backgroundColor="#5c1138"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="CUBE SOLVER"
            backgroundColor="#4b0f2e"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="GAME OF LIFE"
            backgroundColor="#400c27"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="CAR PARK SIMULATOR"
            backgroundColor="#34071e"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
        </div>
      </div>
    </Html>
  );
};

const Project = ({
  name,
  backgroundColor,
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  name: string;
  backgroundColor: string;
  changeBackgroundCallback: (newColor: string) => void;
  changeLaptopScreenCallback: (videoUrl: string) => void;
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(name, 1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isDrawerOpen && isHovered) {
      startAnimation();
    }

    if (isDrawerOpen || isHovered) {
      changeBackgroundCallback(backgroundColor);
      changeLaptopScreenCallback("jjds.mp4");
    } else {
      changeBackgroundCallback("");
      changeLaptopScreenCallback("");
    }
  }, [isDrawerOpen, isHovered]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger>
        <h1
          className={` rounded-md px-[1vw] font-rubik text-[4vw] font-extrabold tracking-tight
          ${
            isHovered || isDrawerOpen
              ? "bg-white text-slate-900"
              : "bg-black text-white"
          }`}
          style={{ textWrap: "nowrap" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-rubik text-white">{name}</DrawerTitle>
          <DrawerDescription className=" py-10 text-white">
            I&apos;m a{" "}
            <span className="font-bold">full stack software developer</span>
            (.NET, React) currently working at Queensland Health on a portfolio
            of enterprise apps.
            <br />
            <br />
            As someone who <span className="font-bold">thrives</span> on
            mastering their stack, finding solutions to complex problems, and
            sharing knowledge, I believe I can bring{" "}
            <span className="font-bold">value</span> to any team.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
