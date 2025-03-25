import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

export const Spotlight = ({
  children,
  className = "",
  color = "blue",
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Map color to gradient
  const spotlightGradient = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    teal: "bg-teal-500",
    green: "bg-green-500",
  }[color] || "bg-indigo-500";

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500",
          { "opacity-100": opacity }
        )}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightGradient}/20, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};