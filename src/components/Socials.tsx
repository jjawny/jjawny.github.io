import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isLoaded) {
    return <div className="h-9"></div>;
  }

  return (
    <div className="flex w-full animate-fadeIn select-none flex-row justify-between space-x-5 px-[8vw]">
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/images/github.png"}
          alt="github"
          height={32}
          width={32}
          className="rounded-md bg-black duration-200 hover:scale-110"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/johnnymadigan/"}>
        <Image
          src={"/images/linkedin.png"}
          alt="linkedin"
          height={32}
          width={32}
          className="rounded-md bg-black duration-200 hover:scale-110"
        />
      </Link>
      <Link href={"mailto:johnny.madigan@icloud.com"}>
        <Image
          src={"/images/email.png"}
          alt="email"
          height={32}
          width={32}
          className="rounded-md bg-black px-1 duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default Socials;
