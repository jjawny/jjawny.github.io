import { cn } from "~/features/shared/helpers/cn";

export default function ClickIndicator({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <img
        src={"/images/click.gif"}
        alt="click to learn more about my career as a full stack software/web engineer/developer"
        sizes="5vw"
        style={{ rotate: "-30deg", objectFit: "cover", userSelect: "none" }}
      />
    </div>
  );
}
