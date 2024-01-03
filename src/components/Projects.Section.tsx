import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { PROJECTS_SOURCE } from "~/constants/defaults";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "~/types/project.type";
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

const Projects: React.FC<ProjectsProps> = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}) => {
  const [data, setData] = useState<ProjectType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid h-screen w-screen items-center">
      <div
        className={`flex flex-col items-center justify-center justify-items-center space-y-2 px-[5vw] transition-opacity duration-300 ease-in-out sm:items-start
        ${isDrawerOpen ? "pointer-events-none opacity-10" : ""}`}
      >
        {data.length > 0 &&
          data.map((p) => (
            <Project
              key={p.name}
              name={p.name}
              videoSource={p.videoSource}
              color={p.color}
              desc={p.desc}
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
              changeIsDrawerOpenCallback={setIsDrawerOpen}
            />
          ))}
      </div>
    </div>
  );
};

const Project = ({
  name,
  videoSource,
  color,
  desc,
  changeBackgroundCallback,
  changeLaptopScreenCallback,
  changeIsDrawerOpenCallback,
}: {
  name: string;
  videoSource: string;
  color: string;
  desc: string;
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
  changeIsDrawerOpenCallback: (isOpen: boolean) => void;
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(name, 1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(titleRef);

  useEffect(() => {
    changeIsDrawerOpenCallback(isDrawerOpen);

    if (!isDrawerOpen && isHovered) {
      startAnimation();
    }

    if (isDrawerOpen || isHovered) {
      changeBackgroundCallback(color);
      changeLaptopScreenCallback(videoSource);
    } else {
      changeBackgroundCallback(null);
      changeLaptopScreenCallback(null);
    }
  }, [
    isDrawerOpen,
    isHovered,
    color,
    videoSource,
    changeBackgroundCallback,
    changeLaptopScreenCallback,
    startAnimation,
  ]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger>
        <h1
          ref={titleRef}
          className={`whitespace-nowrap rounded-lg px-[1vw] font-geistmono text-[7vw] font-extrabold leading-tight tracking-tight sm:text-[6vw]
          ${
            isHovered || isDrawerOpen
              ? "bg-white text-black"
              : "bg-black text-white"
          }
          ${isInView ? "animate-fadeInSlide" : "animate-fadeOut"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="px-2">
        <DrawerHeader>
          <DrawerTitle className="font-geistmono text-2xl text-white">
            {name}
          </DrawerTitle>
          <DrawerDescription className="py-5 text-lg text-white">
            {desc}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
