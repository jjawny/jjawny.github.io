import { cn } from "~/features/shared/helpers/cn";
import useActivateEasterEgg from "~/features/shared/hooks/useActivateEasterEgg";

export default function EasterEggImage() {
  const { isActive: isEasterEggActive } = useActivateEasterEgg(5);

  if (!isEasterEggActive) return <></>;

  return (
    <div className={cn("flex w-[77%] animate-[fade-in_200ms_ease-in_forwards] justify-end")}>
      <img
        src="/images/easter-egg-alien.gif"
        alt="you found the easter egg!"
        height={30}
        width={30}
        className="duration-200 hover:scale-110"
      />
    </div>
  );
}
