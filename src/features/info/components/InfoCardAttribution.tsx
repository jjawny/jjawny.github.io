import { ClassValue } from "clsx";
import { cn } from "~/features/shared/helpers/cn";

export default function InfoCardAttribution(props: { className?: ClassValue }) {
  const { className } = props;

  return (
    <p className={cn(className, "attribution")}>
      <a target="_blank" rel="noopener noreferrer" href="https://skfb.ly/MWtY" className="underline">
        <i>MacBook</i>
      </a>{" "}
      {/* CC Attribution (CC BY 4.0) */}
      by chrisgreig
    </p>
  );
}
