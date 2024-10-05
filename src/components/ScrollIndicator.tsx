import Image from "next/image";
import { useRef } from "react";
import useMockDelay from "~/hooks/useMockDelay";
import { useSceneContext } from "~/stores/sceneAtom";

const ScrollIndicator = () => {
  const { sceneState } = useSceneContext();
  const isHide = !sceneState.isShowScrollIndicator;
  const { isDone: isMockDelayDone } = useMockDelay();
  const isOnScreenRef = useRef<boolean>(false);

  if (!isMockDelayDone || (isHide && !isOnScreenRef.current)) {
    // See size of blur behind in globals.css
    return <div className="h-[1px] w-[1px]"></div>;
  }

  if (!isOnScreenRef.current) {
    isOnScreenRef.current = true;
  }

  return (
    <div
      className={`blur-behind select-none ${isHide ? "animate-fadeOut" : "animate-[fadeIn_400ms_ease-in_forwards]"}`}
    >
      <Image
        src={"/images/mouse.svg"}
        alt="scroll or swipe to see something cool..."
        height={40}
        width={40}
        className="absolute -top-1/4 left-[47%] animate-bounce grayscale invert filter"
      />
    </div>
  );
};

export default ScrollIndicator;
