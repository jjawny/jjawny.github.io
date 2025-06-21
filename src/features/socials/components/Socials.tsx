import ClickIndicator from "~/features/info/components/ClickIndicator";
import { cn } from "~/features/shared/helpers/cn";
import useActivateEasterEgg from "~/features/shared/hooks/useActivateEasterEgg";
import { Social } from "../types/Social";

const SOCIALS: Social[] = [
  {
    url: "https://github.com/jjawny",
    imageUrl: "/images/github.svg",
    imageAltText: "view Johnny Madigan's github",
    className: "invert filter",
    width: 24,
    height: 24,
  },
  {
    url: "https://www.linkedin.com/in/jawny",
    imageUrl: "/images/linkedin.svg",
    imageAltText: "message Johnny Madigan on linkedin",
    className: "invert filter",
    width: 24,
    height: 24,
  },
];

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-[80%] animate-[fade-in_1000ms_ease-in_forwards] justify-end")}>
      <div className="flex flex-col">
        <div className={cn(className, "flex flex-row items-center justify-center space-x-4 py-3 select-none")}>
          {SOCIALS.map((s, index) => {
            const isLastSocial = index === SOCIALS.length - 1;

            return (
              <div key={s.url} className="relative">
                <a href={s.url} key={s.url} className="relative" target="_blank" rel="noopener noreferrer">
                  <img
                    src={s.imageUrl}
                    alt={s.imageAltText}
                    height={s.width}
                    width={s.height}
                    className={cn(s.className, "duration-200 hover:scale-105")}
                  />
                </a>
                {isLastSocial && <ClickIndicator className="pointer-events-none absolute -right-2 -bottom-2 w-5" />}
              </div>
            );
          })}

          <EasterEggImage />
        </div>
      </div>
    </div>
  );
}

function EasterEggImage() {
  const { isActive: isEasterEggActive } = useActivateEasterEgg(5);

  if (!isEasterEggActive) return <></>;

  return (
    <img
      src="/images/easter-egg-alien.gif"
      alt="you found the easter egg!"
      height={30}
      width={30}
      className="ml-2! duration-200 hover:scale-110"
    />
  );
}
