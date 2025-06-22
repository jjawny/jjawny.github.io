import { cn } from "~/features/shared/helpers/cn";

export default function InfoCardAttribution({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-[85%] animate-[fade-in_800ms_ease-in_forwards] justify-end")}>
      <div className="flex flex-col">
        <p className={cn(className, "attribution")}>
          <a target="_blank" rel="noopener noreferrer" href="https://skfb.ly/MWtY" className="underline">
            <i>MacBook</i>
          </a>{" "}
          {/* CC Attribution (CC BY 4.0) */}
          by chrisgreig
        </p>
      </div>
    </div>
  );
}
