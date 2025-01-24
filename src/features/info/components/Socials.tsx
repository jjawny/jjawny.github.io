import { ClassValue } from "clsx";
import { cn } from "~/features/shared/helpers/cn";
import useActivateEasterEgg from "~/features/shared/hooks/useActivateEasterEgg";

export default function Socials(props: { className?: ClassValue }) {
  const { className } = props;

  return (
    <div className={cn(className, "flex flex-row items-center justify-center space-x-4 py-3 select-none")}>
      <a href="https://github.com/jjawny" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/github.svg"
          alt="view johnny madigan's github"
          height={24}
          width={24}
          className="invert filter duration-200 hover:scale-105"
        />
      </a>
      <a href="https://www.linkedin.com/in/jawny" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/linkedin.svg"
          alt="message johnny madigan on linkedin"
          height={24}
          width={24}
          className="invert filter duration-200 hover:scale-105"
        />
      </a>
      <a href="https://x.com/jjjawny" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/twitter.svg"
          alt="message johnny madigan on x (twitter)"
          height={18}
          width={18}
          className="duration-200 hover:scale-105"
        />
      </a>
      <EasterEggImage />
    </div>
  );
}

const EasterEggImage: React.FC = () => {
  const { isActive: isEasterEggActive } = useActivateEasterEgg(5);

  if (!isEasterEggActive) return <></>;

  return (
    // TODO: add tooltip w tail "you found me!"
    <img
      src="/images/easter-egg-alien.gif"
      alt="you found the easter egg!"
      height={30}
      width={30}
      className="ml-2! duration-200 hover:scale-110"
    />
  );
};
