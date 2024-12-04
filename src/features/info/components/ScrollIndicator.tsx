import { useRef } from "react";
import useManageScrollIndicator from "~/shared/hooks/useManageScrollIndicator";
import useMockDelay from "~/shared/hooks/useMockDelay";

const ScrollIndicator = () => {
  const { isShowScrollIndicator } = useManageScrollIndicator();
  const { isDone: isMockDelayDone } = useMockDelay();
  const isOnScreenRef = useRef<boolean>(false);
  const isHide = !isShowScrollIndicator;

  if (!isMockDelayDone || (isHide && !isOnScreenRef.current)) {
    // Tweak size of blur behind in .css
    return <div className="h-[1px] w-[1px]"></div>;
  }

  if (!isOnScreenRef.current) {
    isOnScreenRef.current = true;
  }

  return (
    <div
      className={`blur-blob-behind select-none ${
        isHide ? "animate-fadeOut" : "animate-[fadeIn_400ms_ease-in_forwards]"
      }`}
    >
      <img
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
