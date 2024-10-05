import { RefObject, useEffect, useState } from "react";

// TODO: unused (reference in Hero but also unused), move to sandbox
export const useIsInView = (ref: RefObject<Element>) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIsInView(entry.isIntersecting);
      }
    });
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref]);
  return isInView;
};
