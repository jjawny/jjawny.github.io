import Socials from "./Socials";

const Hero = () => {
  return (
    <main className="grid h-screen w-screen items-center justify-center">
      <div className="flex animate-zoomIn flex-col items-center justify-center justify-items-center">
        <h1
          className="
          cursor-default
          select-none
          whitespace-nowrap
          px-[5vw]
          text-center
          font-dxslight
          text-[11vw]
          leading-[12vw]
          text-black"
        >
          JOHNNY MADIGAN
        </h1>
        <Socials />
      </div>
    </main>
  );
};

export default Hero;
