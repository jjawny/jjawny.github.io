import Image from "next/image";
import Link from "next/link";

const SocialsBar = () => {
  return (
    <div className="flex w-full select-none flex-row justify-between space-x-5 px-80">
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/github.png"}
          alt="github"
          height={32}
          width={32}
          className="duration-200 hover:scale-110"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
        <Image
          src={"/linkedin.png"}
          alt="linkedin"
          height={32}
          width={32}
          className="duration-200 hover:scale-110"
        />
      </Link>
      <Link href={"mailto:johnny.madigan@icloud.com"}>
        <Image
          src={"/email.png"}
          alt="email"
          height={32}
          width={32}
          className="duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default SocialsBar;
