import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { useRef, useState } from "react";
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
        <div className="flex flex-col items-start justify-center justify-items-center pl-20">
          <Project
            name="JJ's DELIVERY SERVICE"
            backgroundColor="slategray"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="CUBE SOLVER"
            backgroundColor="#647484"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="GAME OF LIFE"
            backgroundColor="gray"
            changeBackgroundCallback={changeBackgroundCallback}
            changeLaptopScreenCallback={changeLaptopScreenCallback}
          />
          <Project
            name="CAR PARK SIMULATOR"
            backgroundColor="dimgray"
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
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { currentWord, startAnimation } = useStartTextAnimation(name, 1);

  return (
    <Drawer>
      <DrawerTrigger>
        <h1
          style={{ fontFamily: "monospace" }}
          className={`z-10 cursor-default rounded-sm px-3  text-center text-[8vw] font-extrabold sm:text-[6vw] ${
            isHovered ? "bg-white text-slate-900" : "text-white"
          }`}
          onMouseEnter={() => {
            startAnimation();
            changeLaptopScreenCallback("jjds.mp4");
            changeBackgroundCallback(backgroundColor);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            changeLaptopScreenCallback("");
            changeBackgroundCallback("");
            setIsHovered(false);
          }}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ABOUT ME</DrawerTitle>
          <DrawerDescription>kasdjalksjdalksd</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
