import Image from "next/image";
import { useSceneContext } from "~/stores/sceneAtom";

const ScrollIndicator = () => {
  const { sceneState } = useSceneContext();
  const isHide = !sceneState.isShowScrollIndicator;

  return (
    <div
      className={`blur-behind select-none ${isHide ? "animate-fadeOut" : "animate-[fadeIn_200ms_ease-in_forwards]"}`}
    >
      <Image
        src={"/images/mouse.svg"}
        alt="scroll or swipe to see something cool..."
        height={50}
        width={50}
        className="absolute -top-1/4 left-[46%] animate-bounce grayscale invert filter"
      />
    </div>
  );
};

export default ScrollIndicator;
