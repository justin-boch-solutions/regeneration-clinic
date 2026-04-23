"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Magnetic({ children, strength = 0.3, radius = 60, className = "", style = {} }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable effect on mobile devices
    if (window.innerWidth <= 768) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const refX = rect.left + rect.width / 2;
      const refY = rect.top + rect.height / 2;
      const distanceX = e.clientX - refX;
      const distanceY = e.clientY - refY;
      
      const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

      // If mouse is within the radius, calculate exact magnetic pull
      if (distance < radius) {
        setPosition({ x: distanceX * strength, y: distanceY * strength });
      } else {
        // Smoothly snap back
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength, radius]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s ease-out' : 'none',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
}
