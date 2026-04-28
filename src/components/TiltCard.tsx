"use client";

import { useRef, useState, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className = "", style = {} }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)", transition: "transform 0.5s ease" });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, transform: "translate(0, 0)" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Disable on mobile where hover doesn't make sense
    if (window.innerWidth <= 768) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: "none" // Instant response while moving
    });
    
    // Glare effect perfectly following opposite side
    setGlareStyle({
      opacity: 0.15,
      transform: `translate(${x}px, ${y}px)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease"
    });
    setGlareStyle({
      opacity: 0,
      transform: "translate(0, 0)"
    });
  };

  return (
    <div 
      ref={ref}
      className={className}
      style={{ ...style, ...tiltStyle, transformStyle: "preserve-3d", position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare Element */}
      <div 
        style={{
          position: "absolute",
          top: "-100%",
          left: "-100%",
          width: "300%",
          height: "300%",
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)",
          opacity: glareStyle.opacity,
          transform: glareStyle.transform,
          pointerEvents: "none",
          zIndex: 10,
          transition: "opacity 0.3s ease",
          mixBlendMode: "overlay"
        }}
      />
      {/* Ensure children stay above glare and pop out */}
      <div style={{ transform: "translateZ(30px)", width: "100%", height: "100%", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}
