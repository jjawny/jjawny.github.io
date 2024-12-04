import { RefObject, useEffect, useState } from "react";

// TODO: Unused, move to mini nugget idea project thingy
const useIsInView = (ref: RefObject<Element>) => {
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

export default useIsInView;
