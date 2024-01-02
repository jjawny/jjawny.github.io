import { useEffect, useState } from "react";

export const useIsMobile = (maxWidth: number = 640) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < maxWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
};
