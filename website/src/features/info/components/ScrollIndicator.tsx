import { useRef } from "react";
import { cn } from "~/features/shared/helpers/cn";
import useManageScrollIndicator from "~/features/shared/hooks/useManageScrollIndicator";
import useMockDelay from "~/features/shared/hooks/useMockDelay";

export default function ScrollIndicator() {
  const { isShowScrollIndicator } = useManageScrollIndicator();
  const { isDone: isMockDelayDone } = useMockDelay();
  const isOnScreenRef = useRef<boolean>(false);
  const isHide = !isShowScrollIndicator;

  if (!isMockDelayDone || (isHide && !isOnScreenRef.current)) {
    return null;
  }

  if (!isOnScreenRef.current) {
    isOnScreenRef.current = true;
  }

  return (
    <div
      className={cn(
        "blur-blob-behind select-none",
        isHide ? "animate-fade-out" : "animate-[fade-in_400ms_ease-in_forwards]",
      )}
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
}
