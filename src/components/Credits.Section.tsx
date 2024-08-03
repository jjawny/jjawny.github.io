import { useRef, useState } from "react";
import { useIsInView } from "~/hooks/useIsInView";
import Socials from "~/components/Socials";
import Link from "next/link";
import {
  Drawer,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "./ui/Drawer";

const Credits = ({}: {}) => {
  return (
    <div className="grid h-screen w-screen items-end justify-center">
      <div className="flex w-[37vw] min-w-[fit-content] flex-col items-center justify-center justify-items-center space-y-1">
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
        ${isDrawerOpen ? "pointer-events-none !opacity-5" : ""}`}
    >
      <p className={`self-start text-[1.75vw] sm:text-[1.25vw]`}>Created by</p>

      <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
        <DrawerTrigger
          className={`text-white transition-all duration-100 ease-in-out 
          ${isInView ? "animate-fadeIn" : "animate-fadeOut"}  
        `}
        >
          <h2 className={`self-end text-[3.75vw] font-extrabold sm:text-[2.75vw]`}>Johnny Madigan</h2>
        </DrawerTrigger>
        <DrawerContent className="z-50 px-2 text-white">
          <DrawerHeader>
            <DrawerTitle className="font-geistmono text-2xl">WHO AM I ?</DrawerTitle>
            <DrawerDescription className="py-5 font-geistmono">
              I&apos;m a {BoldText("full stack software developer")} currently working for Queensland Government on a
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
      <Link target="_blank" href="https://skfb.ly/MWtY" className={`text-[1vw] sm:text-[1vw]`}>
        <i>Macbook Pro 13 inch</i> model by
      </Link>
      <p className={`self-end text-[1.5vw] sm:text-[1.5vw]`}>chrisgreig (CC BY)</p>
      <Socials />
    </div>
  );
};

const BoldText = (text: string) => <span className="font-extrabold">{text}</span>;

export default Credits;
