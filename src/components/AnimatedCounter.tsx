import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    suffix?: string;
    isVisible: boolean;
}

const AnimatedCounter = ({
    target,
    duration = 2000,
    suffix = '',
    isVisible,
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, target, duration]);

    return (
        <span className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
