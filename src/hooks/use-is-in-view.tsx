import { RefObject, useEffect, useState } from "react";

export const useIsInView = (ref: RefObject<Element>) => {
  const [isInView, setIsInView] = useState<boolean>(true);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIsInView(entry.isIntersecting);
    });
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref]);
  return isInView;
};
