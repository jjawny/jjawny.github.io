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
import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";

const About = ({
  changeBackgroundCallback,
  changeLaptopScreenCallback,
}: {
  changeBackgroundCallback: (newColor: string) => void;
  changeLaptopScreenCallback: (videoUrl: string) => void;
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(
    "ABOUT ME",
    0.3
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isDrawerOpen && isHovered) {
      startAnimation();
    }

    if (isDrawerOpen || isHovered) {
      changeBackgroundCallback("#670e3c");
      changeLaptopScreenCallback("jjds.mp4");
    } else {
      changeBackgroundCallback("");
      changeLaptopScreenCallback("");
    }
  }, [isDrawerOpen, isHovered]);

  return (
    <Html fullscreen style={{ marginTop: "100vh" }}>
      <div className="grid h-screen w-screen items-center justify-center">
        <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
          <DrawerTrigger>
            <h1
              className={`rounded-md px-[2vw] font-rubik text-[8vw] font-extrabold tracking-tight 
                ${
                  isHovered || isDrawerOpen
                    ? "bg-white text-slate-900"
                    : "bg-black text-white"
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {currentWord}
            </h1>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="font-rubik text-white">
                ABOUT ME
              </DrawerTitle>
              <DrawerDescription className=" py-10 text-white">
                I&apos;m a{" "}
                <span className="font-bold">full stack software developer</span>
                (.NET, React) currently working at Queensland Health on a
                portfolio of enterprise apps.
                <br />
                <br />
                As someone who <span className="font-bold">thrives</span> on
                mastering their stack, finding solutions to complex problems,
                and sharing knowledge, I believe I can bring{" "}
                <span className="font-bold">value</span> to any team.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </Html>
  );
};

export default About;
