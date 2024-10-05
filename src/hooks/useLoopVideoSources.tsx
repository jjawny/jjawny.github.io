import { useEffect, useState } from "react";
import { DEFAULT_VIDEO_SOURCE, PROJECTS_SOURCE } from "~/constants/defaults";
import { useSceneContext } from "~/stores/sceneAtom";
import { ProjectType } from "~/types/project.type";

// Performance gain: load once when module loads
const initialVideoSource = `/videos/${DEFAULT_VIDEO_SOURCE}`;

const useLoopVideoSources = () => {
  const { sceneState } = useSceneContext();
  const [videoSource, setVideoSource] = useState<string>(initialVideoSource);
  const [data, setData] = useState<ProjectType[]>([]);
  const [, setIdx] = useState<number>(-1);

  useEffect(function loadData() {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(
    function changeVideoSource() {
      if (sceneState.isShowPersonalScreen) {
        setVideoSource(initialVideoSource);
        return;
      }

      const intervalId = setInterval(() => {
        setIdx((prevIdx) => {
          const nextIdx = (prevIdx + 1) % data.length;
          const nextVideoSource = `/videos/${data[nextIdx]?.videoSource ?? DEFAULT_VIDEO_SOURCE}`;
          setVideoSource(nextVideoSource);
          return nextIdx;
        });
      }, 5000);

      return () => clearInterval(intervalId);
    },
    [data, data.length, initialVideoSource, sceneState.isShowPersonalScreen]
  );

  return { videoSource };
};

export default useLoopVideoSources;
