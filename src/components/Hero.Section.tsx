import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import Socials from "./Socials";

const Hero = () => {
  return (
    <main className="grid h-screen w-screen items-center justify-center">
      <div className="flex animate-zoomIn flex-col items-center justify-center justify-items-center">
        <HeroText />
        <Socials />
      </div>
    </main>
  );
};

const HeroText = () => {
  return (
    <h1 className="cursor-default select-none text-center font-remboy text-[20vw] leading-[18vw] text-black sm:text-[11vw]">
      <span className="font-extrabold">JOHNNY</span> MADIGAN
    </h1>
  );
};

export default Hero;
