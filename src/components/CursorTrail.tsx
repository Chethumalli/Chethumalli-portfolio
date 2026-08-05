"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    document.body.appendChild(canvas);

    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "9998",
    });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0 };

    const trail = Array.from({ length: 18 }, () => ({
      x: 0,
      y: 0,
    }));

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail[0].x += (mouse.x - trail[0].x) * 0.25;
      trail[0].y += (mouse.y - trail[0].y) * 0.25;

      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.25;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.25;
      }

      ctx.beginPath();

      trail.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });

      ctx.strokeStyle = "rgba(37,99,235,0.35)";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = "rgba(37,99,235,0.25)";
      ctx.shadowBlur = 12;

      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      canvas.remove();
    };
  }, []);

  return null;
}