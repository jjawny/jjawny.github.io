import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    // parent must be relative for positioning and z index max to keep on top
    <div className="fixed z-50 flex w-full select-none flex-row space-x-2 bg-black p-4">
      <h1 className="font-anton text-4xl font-extrabold tracking-tight text-white duration-200 hover:scale-110">
        JM
      </h1>
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/github.png"}
          alt="github"
          height={36}
          width={36}
          className="duration-200 hover:scale-110"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
        <Image
          src={"/linkedin.png"}
          alt="linkedin"
          height={36}
          width={36}
          className="duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default Socials;
