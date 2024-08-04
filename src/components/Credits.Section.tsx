import { useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import Socials from "~/components/Socials";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "~/components/ui/Drawer";

const Credits = ({}: {}) => {
  return (
    <div className="grid h-[80vh] w-screen items-end justify-center">
      <div className="flex w-[50vw] min-w-[fit-content] flex-col items-center justify-center justify-items-center space-y-1">
        {/*
         * ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
         * SOLUTION: Extract into separate components that rely on 'useInView' hook
         */}
        <CreditText />
      </div>
    </div>
  );
};

const CreditText = () => {
  const creditsRef = useRef<HTMLHeadingElement>(null);
  const isInView = useIsInView(creditsRef);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div
      ref={creditsRef}
      className={`flex w-full select-text flex-col whitespace-nowrap pb-24 text-center font-monument tracking-tight text-white
        ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
        ${isDrawerOpen ? "pointer-events-none !opacity-25" : ""}`}
    >
      <p className={`self-start text-[2.5vw] sm:text-[2vw]`}>Hey! I'm…</p>

      <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
        <DrawerTrigger
          className={`text-white transition-all duration-100 ease-in-out 
          ${isInView ? "animate-fadeIn" : "animate-fadeOut"}  
        `}
        >
          <h2 className={`relative self-end text-[4.5vw] font-extrabold  sm:text-[3.75vw]`}>
            Johnny Madigan
            <div
              className="duration-200 hover:scale-125"
              style={{ width: "3vw", height: "3vw", position: "absolute", right: 0, bottom: 0 }}
            >
              {/* TODO: revise dynamic size (see current NextJS recommendation), then apply to social icons */}
              <Image
                src={"/images/click.gif"}
                alt="Click to learn more about me!"
                fill
                sizes="3vw"
                style={{ rotate: "-30deg", objectFit: "cover", height: "" }}
              />
            </div>
          </h2>
        </DrawerTrigger>
        <DrawerContent className="bottom-[-50px] z-50 px-2 pb-[50px] text-white">
          <DrawerHeader>
            <DrawerTitle className="font-monument text-2xl">WHO AM I ?</DrawerTitle>
            <DrawerDescription className="py-5 font-geistmono">
              I&apos;m a {BoldText("Full Stack Software Developer")} currently working for Queensland Government on a
              portfolio of enterprise apps.
              <br />
              <br />
              As someone who {BoldText("thrives")} on mastering their stack, finding solutions to complex problems, and
              sharing knowledge, I believe I can bring {BoldText("value")} to any team.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <p className={`text-[2vw] sm:text-[1.75vw]`}>Full Stack Software Developer</p>
      <p className={`self-end pr-4 text-[1.5vw] sm:text-[1.15vw]`}>
        <Link target="_blank" href="https://skfb.ly/MWtY">
          <i>MacBook</i>
        </Link>{" "}
        by chrisgreig <span className="text-[1vw] sm:text-[0.75vw]">(CC BY)</span>
      </p>
      <Socials />
    </div>
  );
};

const BoldText = (text: string) => <span className="font-extrabold">{text}</span>;

export default Credits;
