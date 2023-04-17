import { useIsInView } from "~/hooks/use-is-in-view";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  name: string;
  vid: string;
  desc: string;
}

const Projects = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  useEffect(() => {
    const fetchProjectData = async () => {
      const res = await fetch("projects.json");
      const data = await res.json();
      setProjectData(data);
    };

    fetchProjectData();
  }, []);

  return (
    <>
      <div className="my-40 space-y-20">
        {projectData.map((p, i) => (
          <Project key={p.name} data={p} isLeft={i % 2 === 0} />
        ))}
        <div className="flex flex-row justify-center space-x-4 py-20">
          <h3 className="font-anton text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            more on
          </h3>
          <Link href={"https://github.com/johnnymadigan"}>
            <Image
              src={"/github.png"}
              alt="github"
              height={50}
              width={50}
              className="duration-200 hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

const Project = ({ data, isLeft }: { data: ProjectData; isLeft: boolean }) => {
  const projRef = useRef<HTMLDivElement>(null);
  const projIsInView = useIsInView(projRef);

  return (
    <div
      ref={projRef}
      className={`flex flex-col space-y-2 px-2 sm:px-24
          ${isLeft ? "items-start" : "items-end"}
          ${
            projIsInView
              ? isLeft
                ? "animate-fadeInLeft"
                : "animate-fadeInRight"
              : "invisible"
          }`}
    >
      <h2 className="font-anton text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        {data.name}
      </h2>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="max-h-72 select-none rounded-xl shadow-2xl shadow-amber-100"
      >
        <source src={data.vid} type="video/mp4" />
      </video>
      <p className="max-w-lg px-2 text-lg text-gray-400">{data.desc}</p>
    </div>
  );
};

export default Projects;
