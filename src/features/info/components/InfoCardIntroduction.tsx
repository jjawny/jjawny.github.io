import { cn } from "~/features/shared/helpers/cn";

export default function IntroductionFragment() {
  return (
    <p className={cn(`hello animate-[fade-in_200ms_ease-in_forwards] self-start`, "rotate-x-10 transform-3d")}>
      Hey! I&rsquo;m…
    </p>
  );
}
