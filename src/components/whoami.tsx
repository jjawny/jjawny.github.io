import { useIsInView } from "~/hooks/use-is-in-view";
import { useIsMobile } from "~/hooks/use-is-mobile";
import { useRef } from "react";

const WhoAmI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionIsInView = useIsInView(sectionRef);
  const isMobile = useIsMobile();

  const Highlight = ({ words }: { words: string }) => {
    return (
      <span className="whitespace-nowrap rounded-full bg-gray-800 px-2 py-1 font-bold text-amber-400">
        {words}
      </span>
    );
  };

  return (
    <main
      ref={sectionRef}
      className={`my-40 flex flex-col content-center text-center
        ${sectionIsInView ? "animate-fadeIn" : "invisible"}`}
    >
      <h1 className="font-anton text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
        who am i ?
      </h1>
      <span className="mt-5 max-w-4xl space-y-5 self-center px-2 text-lg text-gray-400 sm:px-10">
        <p>
          I&apos;m a{" "}
          {isMobile ? (
            <Highlight words="full stack software developer" />
          ) : (
            <>
              <Highlight words="full stack" />{" "}
              <Highlight words="software developer" />
            </>
          )}{" "}
          (.NET, React) currently working at Queensland Health on a portfolio of
          enterprise apps.
        </p>
        <p>
          As someone who <Highlight words="thrives" /> on mastering their stack,
          finding solutions to complex problems, and sharing knowledge, I
          believe I can bring <Highlight words="value" /> to any team.
        </p>
      </span>
    </main>
  );
};

export default WhoAmI;
