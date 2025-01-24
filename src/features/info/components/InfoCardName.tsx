import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/features/shared/components/Drawer";
import useManageIsShowPersonalScreen from "~/features/shared/hooks/useManageIsShowPersonalScreen";

export default function InfoCardName(props: { toggleIsBlurry: (isBlurry: boolean) => void }) {
  const { toggleIsBlurry } = props;
  const { toggleIsShowPersonalScreen } = useManageIsShowPersonalScreen();

  const isFixA11yConsoleError = true; // Known issue, see https://github.com/emilkowalski/vaul/issues/517

  const handleDrawerOpenSideEffects = (isOpen: boolean) => {
    toggleIsBlurry(isOpen);
    toggleIsShowPersonalScreen(isOpen);
  };

  const ClickIndicatorFragment = () => {
    return (
      <div
        className="absolute right-[2px] bottom-0 duration-200 hover:scale-125"
        style={{ width: "5vw", height: "5vw" }}
      >
        <img
          src={"/images/click.gif"}
          alt="click to learn more about my career as a full stack software/web engineer/developer"
          sizes="5vw"
          style={{ rotate: "-30deg", objectFit: "cover", userSelect: "none" }}
        />
      </div>
    );
  };

  const AboutMeFragment = () => {
    return (
      <span className="font-default block py-6 text-base leading-loose">
        I&apos;m a <strong>Full Stack Software Developer</strong>.
        <br />
        I love the web, UX, DX, and getting $h1t done.
        <br />
        I&apos;m currently working for my state government on a portfolio of enterprise web apps.
        <br />
        As someone who enjoys building long-term solutions and sharing knowledge, I believe I can bring{" "}
        <strong>value</strong> to any team.
      </span>
    );
  };

  return (
    <main>
      <Drawer onOpenChange={handleDrawerOpenSideEffects} autoFocus={isFixA11yConsoleError}>
        <DrawerTrigger className="cursor-pointer">
          <h1 className="name relative animate-[fade-in_400ms_ease-in_forwards] px-[2vw] font-extrabold duration-150 hover:scale-105">
            Johnny Madigan
            <ClickIndicatorFragment />
          </h1>
        </DrawerTrigger>
        <DrawerContent className="bottom-[-50px] z-50 px-2 pb-[50px] text-white select-text!">
          <DrawerHeader>
            <DrawerTitle className="font-syne text-2xl select-none">WHO AM I ?</DrawerTitle>
            <DrawerDescription>
              <AboutMeFragment />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
