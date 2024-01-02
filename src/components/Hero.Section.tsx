import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import Socials from "./Socials";

const Hero = () => {
  return (
    <main className="grid h-screen w-screen items-center justify-center">
      <div className="flex animate-zoomIn flex-col items-center justify-center justify-items-center">
        <HeroText text="JOHNNY" />
        <HeroText text="MADIGAN" />
        <Socials />
      </div>
    </main>
  );
};

const HeroText = ({ text }: { text: string }) => {
  const { currentWord } = useStartTextAnimation(text, 0.15, true);

  return (
    <h1
      className={`cursor-default select-none px-[2vw] text-center font-yagiza text-[9vw] font-extrabold text-white sm:text-[11vw]`}
    >
      {currentWord}
    </h1>
  );
};

export default Hero;
