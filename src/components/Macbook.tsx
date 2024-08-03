import React, { useEffect, useRef, useState } from "react";
import { MACBOOK_Z_TRAVEL_RATE, MACBOOK_Z_MAX, PROJECTS_SOURCE, DEFAULT_VIDEO_SOURCE } from "~/constants/defaults";
import MacbookKeyboard from "~/components/Macbook.Keyboard";
import MacbookScreen from "~/components/Macbook.Screen";
import useMouseCoords from "~/hooks/useMouseCoords";
import { ProjectType } from "~/types/project.type";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import _debounce from "lodash/debounce";
import { Group } from "three";

const Macbook: React.FC = () => {
  const initialVideoSource = `/videos/${DEFAULT_VIDEO_SOURCE}`;
  const [data, setData] = useState<ProjectType[]>([]);
  const [, setIdx] = useState<number>(-1);
  const [videoSource, setVideoSource] = useState<string>(initialVideoSource);
  const groupRef = useRef<Group>(null);
  const mouseCoords = useMouseCoords();
  const scroll = useScroll();

  useEffect(function loadData() {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(
    function changeVideoSource() {
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
    [data.length]
  );

  useFrame(() => {
    if (groupRef.current) {
      // Animate Macbook rotation (follow cursor)
      const targetRotationX = -(mouseCoords.y * (Math.PI / 8));
      const targetRotationY = mouseCoords.x * (Math.PI / 8);
      groupRef.current.rotation.x += 0.04 * (targetRotationX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.04 * (targetRotationY - groupRef.current.rotation.y);

      // Animate Macbook zoom
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
