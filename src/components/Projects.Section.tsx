import { useContext, useEffect, useRef, useState } from "react";
import { PROJECTS_SOURCE } from "~/constants/defaults";
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
  changeLaptopScreenCallback: (videoSource: string | null) => void;
};

const Projects: React.FC<ProjectsProps> = ({ changeLaptopScreenCallback }) => {
  const [data, setData] = useState<ProjectType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const sectionRef = useRef(null);
  const isInView = useIsInView(sectionRef);

  useEffect(() => {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // useEffect(() => {
  //   if (isInView) {
  //     changeCameraPosCallback(5);
  //   } else {
  //     changeCameraPosCallback(0);
  //   }
  // }, []);

  return (
    <div className="grid h-screen w-screen items-center">
      <div
        ref={sectionRef}
        className={`flex flex-col items-center justify-center justify-items-center space-y-1 transition-all duration-300 ease-in-out sm:items-start sm:px-[5vw]
          ${isDrawerOpen ? "pointer-events-none opacity-5" : ""}
        `}
      >
        {data.length > 0 &&
          data.map((p) => (
            <ProjectDrawer
              key={p.name}
              project={p}
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
  changeLaptopScreenCallback: (videoSource: string | null) => void;
  changeIsDrawerOpenCallback: (isOpen: boolean) => void;
};

// ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
// SOLUTION: Extract component that relies on 'useInView' hook
const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  changeLaptopScreenCallback,
  changeIsDrawerOpenCallback,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const drawerTriggerRef = useRef<HTMLButtonElement>(null);
  const isInView = useIsInView(drawerTriggerRef);

  useEffect(() => {
    changeIsDrawerOpenCallback(isDrawerOpen);

    if (isDrawerOpen || isHovered) {
      changeLaptopScreenCallback(project.videoSource);
    } else {
      changeLaptopScreenCallback(null);
    }
  }, [isDrawerOpen, isHovered, project, changeLaptopScreenCallback]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger
        ref={drawerTriggerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-white transition-all duration-100 ease-in-out hover:scale-x-105
          ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
        `}
      >
        <h1 className="whitespace-nowrap rounded-sm px-[1vw] font-monument text-[6vw] leading-tight tracking-tight sm:text-[5vw]">
          {project.name}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="z-50 px-2 text-white">
        <DrawerHeader>
          <DrawerTitle className="font-geistmono text-2xl">
            {project.name}
          </DrawerTitle>
          <DrawerDescription className="py-5 font-geistmono">
            {project.desc}
            <span className="flex justify-center pt-5 sm:justify-start">
              <Link href={project.link} target="_blank">
                <Image
                  src={"/images/link.png"}
                  alt="link"
                  height={32}
                  width={32}
                  className="invert filter duration-200 hover:scale-110"
                />
              </Link>
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
