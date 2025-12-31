import { useEffect, useRef } from 'react';

interface Shape {
    x: number;
    y: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    speedX: number;
    speedY: number;
    type: 'circle' | 'triangle' | 'square' | 'hexagon';
    opacity: number;
    hue: number;
}

const FloatingShapes = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shapesRef = useRef<Shape[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initShapes();
        };

        const initShapes = () => {
            shapesRef.current = [];
            const shapeCount = Math.floor((canvas.width * canvas.height) / 50000);

            for (let i = 0; i < shapeCount; i++) {
                shapesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 30 + 10,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.02,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    type: ['circle', 'triangle', 'square', 'hexagon'][Math.floor(Math.random() * 4)] as Shape['type'],
                    opacity: Math.random() * 0.08 + 0.02,
                    hue: 175 + Math.random() * 30,
                });
            }
        };

        const drawShape = (shape: Shape) => {
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);
            ctx.strokeStyle = `hsla(${shape.hue}, 70%, 50%, ${shape.opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();

            switch (shape.type) {
                case 'circle':
                    ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                    break;
                case 'triangle':
                    ctx.moveTo(0, -shape.size / 2);
                    ctx.lineTo(shape.size / 2, shape.size / 2);
                    ctx.lineTo(-shape.size / 2, shape.size / 2);
                    ctx.closePath();
                    break;
                case 'square':
                    ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                    break;
                case 'hexagon':
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const x = Math.cos(angle) * shape.size / 2;
                        const y = Math.sin(angle) * shape.size / 2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    break;
            }

            ctx.stroke();
            ctx.restore();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shapesRef.current.forEach((shape) => {
                // Parallax effect based on mouse position
                const dx = (mouseRef.current.x - canvas.width / 2) * 0.01;
                const dy = (mouseRef.current.y - canvas.height / 2) * 0.01;

                shape.x += shape.speedX + dx * (shape.size / 40);
                shape.y += shape.speedY + dy * (shape.size / 40);
                shape.rotation += shape.rotationSpeed;

                // Wrap around screen
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

                drawShape(shape);
            });

            requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default FloatingShapes;
