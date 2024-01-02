import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { Html } from "@react-three/drei";
import Socials from "./SocialBar";

const Hero = () => {
  return (
    <Html fullscreen>
      <main className="grid h-screen w-screen items-center justify-center">
        <div className="flex animate-zoomIn flex-col items-center justify-center justify-items-center">
          <HeroText text="JOHNNY" />
          <HeroText text="MADIGAN" />
          <Socials />
        </div>
      </main>
    </Html>
  );
};

const HeroText = ({ text }: { text: string }) => {
  const { currentWord } = useStartTextAnimation(text, 0.15, true);

  return (
    <h1
      className={`z-10 select-none rounded-2xl text-center font-yagiza text-[9vw] font-extrabold text-white sm:text-[11vw]`}
    >
      {currentWord}
    </h1>
  );
};

export default Hero;
