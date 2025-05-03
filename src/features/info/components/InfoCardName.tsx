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
import ClickIndicator from "./ClickIndicator";
import InfoCardDescription from "./InfoCardDescription";

export default function InfoCardName(props: { toggleIsBlurry: (isBlurry: boolean) => void }) {
  const { toggleIsBlurry } = props;
  const { toggleIsShowPersonalScreen } = useManageIsShowPersonalScreen();

  const isFixA11yConsoleError = true; // Known issue, see https://github.com/emilkowalski/vaul/issues/517

  const handleDrawerOpenSideEffects = (isOpen: boolean) => {
    toggleIsBlurry(isOpen);
    toggleIsShowPersonalScreen(isOpen);
  };

  return (
    <main>
      <Drawer onOpenChange={handleDrawerOpenSideEffects} autoFocus={isFixA11yConsoleError}>
        <DrawerTrigger className="cursor-pointer">
          <h1 className="name relative animate-[fade-in_400ms_ease-in_forwards] px-[2vw] font-extrabold duration-150 hover:scale-105">
            Johnny Madigan
            <ClickIndicator />
          </h1>
        </DrawerTrigger>
        <DrawerContent className="bottom-[-50px] z-50 px-2 pb-[50px] text-white select-text!">
          <DrawerHeader>
            <DrawerTitle className="font-syne text-2xl select-none">WHO AM I ?</DrawerTitle>
            <DrawerDescription>
              <InfoCardDescription />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
