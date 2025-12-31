import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    life: number;
    maxLife: number;
    hue: number;
}

export const useCursorGlow = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>();

    const createParticle = useCallback((x: number, y: number) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        return {
            x,
            y,
            size: Math.random() * 4 + 2,
            speedX: Math.cos(angle) * speed,
            speedY: Math.sin(angle) * speed,
            life: 0,
            maxLife: Math.random() * 40 + 20,
            hue: 175 + Math.random() * 25,
        };
    }, []);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.id = 'cursor-canvas';
        canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
        document.body.appendChild(canvas);
        canvasRef.current = canvas;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 5) {
                for (let i = 0; i < Math.min(distance / 5, 3); i++) {
                    particlesRef.current.push(createParticle(e.clientX, e.clientY));
                }
                lastX = e.clientX;
                lastY = e.clientY;
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw glow around cursor
            const gradient = ctx.createRadialGradient(
                mouseRef.current.x,
                mouseRef.current.y,
                0,
                mouseRef.current.x,
                mouseRef.current.y,
                100
            );
            gradient.addColorStop(0, 'hsla(175, 80%, 50%, 0.15)');
            gradient.addColorStop(0.5, 'hsla(175, 80%, 50%, 0.05)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter((p) => {
                p.life++;
                p.x += p.speedX;
                p.y += p.speedY;
                p.speedX *= 0.98;
                p.speedY *= 0.98;

                const alpha = 1 - p.life / p.maxLife;
                const size = p.size * alpha;

                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${alpha * 0.6})`;
                ctx.fill();

                return p.life < p.maxLife;
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            canvas.remove();
        };
    }, [createParticle]);
};
