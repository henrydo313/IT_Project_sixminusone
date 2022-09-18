import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
    const scrollStrength = 100;
    const containerRef = useRef();
    useEffect(() => {
        const container =containerRef.current;
        if(container) {
            const onWheel = e => {
                if(e.deltaY > 0) {
                    container.scrollLeft += scrollStrength
                }
                else {
                    container.scrollLeft -= scrollStrength
                }
            };
            container.addEventListener("wheel", onWheel);
            return () => container.removeEventListener("wheel", onWheel);
        }
    }, []);
    return containerRef;
}