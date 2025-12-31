import { useEffect, useState, useCallback } from 'react';

const EasterEgg = () => {
    const [showSecret, setShowSecret] = useState(false);
    const [keys, setKeys] = useState<string[]>([]);
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        setKeys((prev) => {
            const newKeys = [...prev, e.key].slice(-secretCode.length);

            if (newKeys.join(',') === secretCode.join(',')) {
                setShowSecret(true);
                setTimeout(() => setShowSecret(false), 5000);
                return [];
            }

            return newKeys;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!showSecret) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 animate-fade-in">
            <div className="text-center space-y-6">
                <div className="text-6xl animate-bounce">🎮</div>
                <h2 className="text-4xl font-bold text-gradient">You found the secret!</h2>
                <p className="text-xl text-muted-foreground">
                    Konami Code unlocked! You're a true gamer.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {['⬆️', '⬆️', '⬇️', '⬇️', '⬅️', '➡️', '⬅️', '➡️', '🅱️', '🅰️'].map((emoji, i) => (
                        <span
                            key={i}
                            className="text-2xl animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                    Thanks for visiting my portfolio! 💜
                </p>
            </div>
        </div>
    );
};

export default EasterEgg;
