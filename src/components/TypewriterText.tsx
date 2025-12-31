import { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

const TypewriterText = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = '',
}: TypewriterTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const animate = useCallback(() => {
        const currentFullText = texts[textIndex];

        if (isPaused) {
            return;
        }

        if (!isDeleting) {
            // Typing
            if (displayText.length < currentFullText.length) {
                setDisplayText(currentFullText.slice(0, displayText.length + 1));
            } else {
                // Finished typing, pause before deleting
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
            } else {
                // Finished deleting, move to next text
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [displayText, isDeleting, isPaused, textIndex, texts, pauseDuration]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timeout = setTimeout(animate, speed);
        return () => clearTimeout(timeout);
    }, [animate, isDeleting, typingSpeed, deletingSpeed]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-blink text-primary">|</span>
        </span>
    );
};

export default TypewriterText;
