"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  velocity: { x: number; y: number };
  alpha: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  points: number; // 4 or 8 points for variety
}

export const SparkleCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Vivid, multi-colored palette designed for a warm luxury aesthetic
    const palette = [
      { color: "#FF4081", glow: "#FF80AB" }, // Radiant Rose
      { color: "#FFD700", glow: "#FFE57F" }, // Bright Gold
      { color: "#FF6E40", glow: "#FF9E80" }, // Coral Glow
      { color: "#E040FB", glow: "#EA80FC" }, // Electric Violet
      { color: "#943248", glow: "#EBA8B1" }, // Deep Burgundy Highlight
      { color: "#00E676", glow: "#B9F6CA" }, // Fresh Mint Accent
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createSparkle = (x: number, y: number) => {
      const particleCount = 3; // Emit a few vibrant stars on movement
      for (let i = 0; i < particleCount; i++) {
        const choice = palette[Math.floor(Math.random() * palette.length)];
        particles.push({
          x,
          y,
          size: Math.random() * 8 + 5,
          color: choice.color,
          glowColor: choice.glow,
          velocity: {
            x: (Math.random() - 0.5) * 2.2,
            y: (Math.random() - 0.5) * 2.2 + 0.2,
          },
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          points: Math.random() > 0.4 ? 4 : 8, // Mix of 4-point and 8-point stars
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Draw detailed multi-point starburst with inner/outer ray depth
    const drawStarburst = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      points: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();

      const innerRadius = size * 0.25;
      const totalPoints = points * 2;

      for (let i = 0; i < totalPoints; i++) {
        const radius = i % 2 === 0 ? size : innerRadius;
        const angle = (i * Math.PI) / points;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // Add glowing starburst aura
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = 12;
        ctx.fillStyle = p.color;

        drawStarburst(ctx, p.x, p.y, p.size, p.rotation, p.points);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};