import { useState, useEffect } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
    glitchOnHover?: boolean;
}

const GlitchText = ({ text, className = '', glitchOnHover = true }: GlitchTextProps) => {
    const [isGlitching, setIsGlitching] = useState(false);
    const [displayText, setDisplayText] = useState(text);

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    useEffect(() => {
        if (!isGlitching) {
            setDisplayText(text);
            return;
        }

        let iterations = 0;
        const maxIterations = text.length * 3;

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';
                        if (index < iterations / 3) return text[index];
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join('')
            );

            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                setIsGlitching(false);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [isGlitching, text]);

    // Random glitch effect
    useEffect(() => {
        if (glitchOnHover) return;

        const randomGlitch = () => {
            const delay = Math.random() * 10000 + 5000;
            setTimeout(() => {
                setIsGlitching(true);
                randomGlitch();
            }, delay);
        };

        randomGlitch();
    }, [glitchOnHover]);

    return (
        <span
            className={`relative inline-block ${className}`}
            onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
            style={{ fontFamily: 'inherit' }}
        >
            <span className="relative z-10">{displayText}</span>
            {isGlitching && (
                <>
                    <span
                        className="absolute inset-0 text-primary opacity-80 z-0"
                        style={{
                            transform: 'translateX(-2px)',
                            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                        }}
                    >
                        {displayText}
                    </span>
                    <span
                        className="absolute inset-0 text-cyan-400 opacity-80 z-0"
                        style={{
                            transform: 'translateX(2px)',
                            clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
                        }}
                    >
                        {displayText}
                    </span>
                </>
            )}
        </span>
    );
};

export default GlitchText;
