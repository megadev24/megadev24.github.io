// components/RainBackground.tsx
import { useRef, useEffect } from "react";

interface Raindrop {
  x: number;
  y: number;
  length: number;
  xSpeed: number;
  ySpeed: number;
}

const RainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size slightly larger than viewport
    const margin = 100;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth + margin;
      canvas.height = window.innerHeight + margin;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create raindrops based on larger canvas size for full coverage
    const createRaindrops = (): Raindrop[] => {
      const raindropCount = Math.floor((canvas.width * canvas.height) / 4000);
      return Array.from({ length: raindropCount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        xSpeed: Math.random() * 1 - 0.5, // Small sideways drift
        ySpeed: Math.random() * 3 + 2, // Faster downward speed
      }));
    };

    let raindrops = createRaindrops();

    const drawRain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(174,194,224,0.5)";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      raindrops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.length * -0.2, drop.y + drop.length); // Slight diagonal line
        ctx.stroke();

        // Update drop position for a slight sideways drift and faster downward motion
        drop.x += drop.xSpeed;
        drop.y += drop.ySpeed;

        // Reset raindrop when it goes out of bounds
        if (drop.y > canvas.height) {
          drop.x = Math.random() * canvas.width;
          drop.y = -drop.length; // Start from the top again
        }
      });

      requestAnimationFrame(drawRain);
    };

    drawRain();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: -50,
        left: -50,
        width: "calc(100% + 100px)",
        height: "calc(100% + 100px)",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default RainBackground;
