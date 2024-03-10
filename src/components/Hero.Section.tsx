import Socials from "./Socials";

const Hero = () => {
  return (
    <main className="grid h-screen w-screen items-center justify-center">
      <div className="flex animate-zoomIn flex-col items-center justify-center justify-items-center">
        <h1
          className="
          cursor-default
          select-none
          px-[5vw]
          text-center
          font-centrion
          text-[15vw]
          text-white
          sm:whitespace-nowrap
          sm:text-[8vw]"
        >
          JOHNNY MADIGAN
        </h1>
        <Socials />
      </div>
    </main>
  );
};

export default Hero;
