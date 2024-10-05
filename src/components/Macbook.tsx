import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Group } from "three";
import MacbookKeyboard from "~/components/Macbook.Keyboard";
import MacbookScreen from "~/components/Macbook.Screen";
import {
  DEFAULT_VIDEO_SOURCE,
  MACBOOK_Z_MAX,
  MACBOOK_Z_TRAVEL_RATE,
  PROJECTS_SOURCE,
  SCROLL_INDICATOR_THRESHOLD,
} from "~/constants/defaults";
import useMouseCoords from "~/hooks/useMouseCoords";
import { useSceneContext } from "~/stores/sceneAtom";
import { ProjectType } from "~/types/project.type";

const Macbook: React.FC = () => {
  const { sceneState, toggleIsShowScrollIndicator } = useSceneContext();
  const initialVideoSource = `/videos/${DEFAULT_VIDEO_SOURCE}`;
  const [videoSource, setVideoSource] = useState<string>(initialVideoSource);
  const [data, setData] = useState<ProjectType[]>([]);
  const [, setIdx] = useState<number>(-1);
  const groupRef = useRef<Group>(null);
  const mouseCoords = useMouseCoords();
  const scroll = useScroll();

  // TODO: extract to custom hook
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
          console.debug(`Now playing video #${nextIdx + 1}`);
          setVideoSource(nextVideoSource);
          return nextIdx;
        });
      }, 5000);

      return () => clearInterval(intervalId);
    },
    [data, data.length, initialVideoSource, sceneState.isShowPersonalScreen]
  );

  useFrame(() => {
    if (groupRef.current) {
      // Animate rotation (follow cursor)
      const targetRotationX = -(mouseCoords.y * (Math.PI / 8));
      const targetRotationY = mouseCoords.x * (Math.PI / 8);
      groupRef.current.rotation.x += 0.04 * (targetRotationX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.04 * (targetRotationY - groupRef.current.rotation.y);

      // Animate zoom on scroll
      console.log("here");
      if (sceneState.isShowScrollIndicator && scroll.offset > SCROLL_INDICATOR_THRESHOLD) {
        toggleIsShowScrollIndicator(false);
      }
      const newZ = scroll.offset * MACBOOK_Z_TRAVEL_RATE;
      groupRef.current.position.z = newZ > MACBOOK_Z_MAX ? MACBOOK_Z_MAX : scroll.offset * MACBOOK_Z_TRAVEL_RATE;
    }
  });

  return (
    <group
      dispose={null}
      ref={groupRef}
      position={[0, -1, -50]}
      scale={[0.01, 0.01, 0.01]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <MacbookScreen videoSource={videoSource} />
      <MacbookKeyboard />
    </group>
  );
};

export default Macbook;
