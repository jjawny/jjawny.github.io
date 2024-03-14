import { ABOUT_SECTION_VIDEO } from "~/constants/defaults";
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
  changeLaptopScreenCallback: (videoSource: string | null) => void;
};

const About: React.FC<ProjectsProps> = ({ changeLaptopScreenCallback }) => {
  return (
    <div className="grid h-screen w-screen items-center justify-center">
      <AboutText changeLaptopScreenCallback={changeLaptopScreenCallback} />
    </div>
  );
};

// ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
// SOLUTION: Extract component that relies on 'useInView' hook
const AboutText = ({
  changeLaptopScreenCallback,
}: {
  changeLaptopScreenCallback: (videoSource: string | null) => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isInView = useIsInView(triggerRef);

  useEffect(() => {
    if (isDrawerOpen || isHovered) {
      changeLaptopScreenCallback(ABOUT_SECTION_VIDEO);
    } else {
      changeLaptopScreenCallback(null);
    }
  }, [isDrawerOpen, isHovered, changeLaptopScreenCallback]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger
        ref={triggerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-white transition-all duration-100 ease-in-out hover:scale-110
          ${isInView ? "animate-fadeIn" : "animate-fadeOut"}  
        `}
      >
        <h1
          className={`whitespace-nowrap rounded-sm px-[2vw] font-monument text-[10vw] leading-tight tracking-tight transition-all duration-300 ease-in-out sm:text-[6vw]
            ${isDrawerOpen ? "pointer-events-none opacity-5" : ""}
          `}
        >
          WHO AM I ?
        </h1>
      </DrawerTrigger>
      <DrawerContent className="z-50 px-2 text-white">
        <DrawerHeader>
          <DrawerTitle className="font-geistmono text-2xl">
            WHO AM I ?
          </DrawerTitle>
          <DrawerDescription className="py-5 font-geistmono">
            I&apos;m a {BoldText("full stack software developer")} currently
            working at Queensland Health on a portfolio of enterprise apps.
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
