import { useEffect, useState } from "react";

// TODO: unused, move to sandbox
export const useIsMobile = (maxWidth: number = 640) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < maxWidth);
    };

    handleResize(); // call immediately to determine isMobile upon render

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
};
