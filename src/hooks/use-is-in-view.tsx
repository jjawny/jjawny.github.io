import { RefObject, useEffect, useState } from "react";

export const useIsInView = (ref: RefObject<Element>) => {
  const [isInView, setIsInView] = useState<boolean>(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIsInView(entry.isIntersecting);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return isInView;
};
