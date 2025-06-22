import { useEffect, useState } from "react";
import { DEFAULT_VIDEO_SOURCE, PROJECTS_SOURCE } from "~/features/macbook/constants/macbook";
import { Project } from "~/features/macbook/types/Project";
import { useManageIsShowPersonalScreen } from "~/features/shared/hooks/useManageIsShowPersonalScreen";

const initialVideoSource = `/videos/${DEFAULT_VIDEO_SOURCE}`;

export default function useLoopVideoSources() {
  const { isShowPersonalScreen } = useManageIsShowPersonalScreen();
  const [videoSource, setVideoSource] = useState<string>(initialVideoSource);
  const [data, setData] = useState<Project[]>([]);
  const [, setIdx] = useState<number>(-1);

  useEffect(function loadData() {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(
    function changeVideoSource() {
      if (isShowPersonalScreen) {
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
    [data, data.length, isShowPersonalScreen],
  );

  return { videoSource };
}
