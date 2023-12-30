import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const calcIsMobile = () => {
      const mobileMaxWidth = 320;
      return window.innerWidth > mobileMaxWidth;
    };

    const handleResize = () => {
      setIsMobile(calcIsMobile);
    };

    if (window.innerWidth) setIsMobile(calcIsMobile);

    // Add/remove listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
