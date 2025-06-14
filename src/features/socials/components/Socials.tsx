import { ClassValue } from "clsx";
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

export default function Socials(props: { className?: ClassValue }) {
  const { className } = props;

  return (
    <div className={cn(className, "flex flex-row items-center justify-center space-x-4 py-3 select-none")}>
      {SOCIALS.map((s) => (
        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
          <img
            src={s.imageUrl}
            alt={s.imageAltText}
            height={s.width}
            width={s.height}
            className={cn(s.className, "duration-200 hover:scale-105")}
          />
        </a>
      ))}

      <EasterEggImage />
    </div>
  );
}

const EasterEggImage: React.FC = () => {
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
};
