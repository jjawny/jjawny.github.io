import { cn } from "~/features/shared/helpers/cn";

export default function TitleFragment() {
  return (
    <h2 className={cn(`title animate-[fade-in_600ms_ease-in_forwards]`, "-rotate-x-10 transform-3d")}>
      Full Stack Software Developer
    </h2>
  );
}
