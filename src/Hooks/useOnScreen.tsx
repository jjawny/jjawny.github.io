import { useEffect, useState, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>) {
    const [ inView, setInView ] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            setInView(entries[0].isIntersecting);
        });
        observer.observe(ref.current!);
    }, [ref]);

    return inView;
}
