import { useRef, useState, ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltStrength?: number;
    glareOpacity?: number;
}

const TiltCard = ({
    children,
    className = '',
    tiltStrength = 10,
    glareOpacity = 0.1,
}: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -tiltStrength;
        const rotateY = ((x - centerX) / centerX) * tiltStrength;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setGlarePosition({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
        });
    };

    const handleMouseLeave = () => {
        setTransform('');
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
            {/* Glare effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? glareOpacity : 0,
                    background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                }}
            />
        </div>
    );
};

export default TiltCard;
