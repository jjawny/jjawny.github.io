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

const PROJECTS_SOURCE = "/data/projects.json";

type ProjectType = {
  name: string;
  videoSource: string;
  color: string;
  desc: string;
};

const Projects = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
}) => {
  const [data, setData] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid h-screen w-screen items-center">
      <div
        className={`flex flex-col items-center justify-center justify-items-center px-[5vw] sm:items-start`}
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
}: {
  name: string;
  videoSource: string;
  color: string;
  desc: string;
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(name, 1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(titleRef);

  useEffect(() => {
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
          className={` rounded-md px-[1vw] font-rubik text-[5vw] font-extrabold tracking-tight sm:text-[4vw]
          ${
            isHovered || isDrawerOpen
              ? "bg-white text-slate-900"
              : "bg-black text-white"
          }
          ${isInView ? "animate-fadeInSlide" : "animate-fadeOut"}`}
          style={{ textWrap: "nowrap" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="px-2">
        <DrawerHeader>
          <DrawerTitle className="font-rubik text-2xl text-white">
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
