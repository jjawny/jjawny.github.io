import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { PROJECTS_SOURCE } from "~/constants/defaults";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "~/types/project.type";
import { useIsInView } from "~/hooks/useIsInView";
import Image from "next/image";
import Link from "next/link";
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
            <ProjectDrawer
              key={p.name}
              project={p}
              changeBackgroundCallback={changeBackgroundCallback}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
              changeIsDrawerOpenCallback={setIsDrawerOpen}
            />
          ))}
      </div>
    </div>
  );
};

type ProjectDrawerProps = {
  project: ProjectType;
  changeBackgroundCallback: (newColor: string | null) => void;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
  changeIsDrawerOpenCallback: (isOpen: boolean) => void;
};

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  changeBackgroundCallback,
  changeLaptopScreenCallback,
  changeIsDrawerOpenCallback,
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(
    project.name,
    1
  );
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
      changeBackgroundCallback(project.color);
      changeLaptopScreenCallback(project.videoSource);
    } else {
      changeBackgroundCallback(null);
      changeLaptopScreenCallback(null);
    }
  }, [
    isDrawerOpen,
    isHovered,
    project,
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
            {project.name}
          </DrawerTitle>
          <DrawerDescription className="py-5 text-lg text-white">
            {project.desc}
            <div className="flex content-start pt-5">
              <Link href={project.link} target="_blank">
                <Image
                  src={"/images/link.png"}
                  alt="link"
                  height={32}
                  width={32}
                  className="duration-200 hover:scale-110"
                />
              </Link>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
