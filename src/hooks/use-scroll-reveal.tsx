import { useEffect, useRef, useState, RefObject } from 'react';

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement>(
    options: ScrollRevealOptions = {}
): [RefObject<T>, boolean] => {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
};

// Hook for staggered children animations
export const useStaggerReveal = (
    itemCount: number,
    isVisible: boolean,
    delay: number = 100
): boolean[] => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        Array(itemCount).fill(false)
    );

    useEffect(() => {
        if (isVisible) {
            const timeouts: NodeJS.Timeout[] = [];
            for (let i = 0; i < itemCount; i++) {
                timeouts.push(
                    setTimeout(() => {
                        setVisibleItems((prev) => {
                            const next = [...prev];
                            next[i] = true;
                            return next;
                        });
                    }, i * delay)
                );
            }
            return () => timeouts.forEach(clearTimeout);
        } else {
            setVisibleItems(Array(itemCount).fill(false));
        }
    }, [isVisible, itemCount, delay]);

    return visibleItems;
};
