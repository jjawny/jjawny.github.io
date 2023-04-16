import { useEffect, useRef, useState } from "react";
import { useIsInView } from "~/hooks/use-is-in-view";
import Image from "next/image";

interface ProjectData {
  name: string;
  img: string;
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
    <div className="my-40 space-y-20">
      {projectData.map((p, i) => (
        <Project key={p.name} data={p} isLeft={i % 2 === 0} />
      ))}
    </div>
  );
};

const Project = ({ data, isLeft }: { data: ProjectData; isLeft: boolean }) => {
  const projRef = useRef<HTMLDivElement>(null);
  const projIsInView = useIsInView(projRef);

  return (
    <div
      ref={projRef}
      className={`flex flex-col space-y-2 px-24
          ${isLeft ? "items-start" : "items-end"}
          ${
            projIsInView
              ? isLeft
                ? "animate-fadeInLeft"
                : "animate-fadeInRight"
              : "invisible"
          }`}
    >
      <h1 className="font-anton text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        {data.name}
      </h1>
      <Image
        src={`/${data.img}`}
        alt={`screenshot of ${data.name}`}
        width={512}
        height={150}
        className="rounded-xl shadow-2xl shadow-amber-100"
      />
      <p className="max-w-lg px-2 text-lg text-gray-400">{data.desc}</p>
    </div>
  );
};

export default Projects;
