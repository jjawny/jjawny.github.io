import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex w-[85%] select-none flex-row items-center justify-end space-x-4 py-3">
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/images/github.svg"}
          alt="view my github"
          height={24}
          width={24}
          className="invert filter duration-200 hover:scale-105"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/jjjony"}>
        <Image
          src={"/images/linkedin.svg"}
          alt="message me on linkedin"
          height={24}
          width={24}
          className="invert filter duration-200 hover:scale-105"
        />
      </Link>
      <Link href={"https://x.com/jjjjjjjony"}>
        <Image
          src={"/images/twitter.svg"}
          alt="message me on x (twitter)"
          height={18}
          width={18}
          className="duration-200 hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default Socials;
