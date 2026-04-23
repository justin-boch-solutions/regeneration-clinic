"use client";

import { ReactNode } from "react";

interface HapticClickProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function HapticClick({ children, className = "", style = {}, onClick }: HapticClickProps) {
  const triggerHaptic = () => {
    // Only works on supported devices (Android primarily, some PWA iOS)
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      // 30ms is a crisp, native-feeling "tick"
      window.navigator.vibrate(30);
    }
    if (onClick) onClick();
  };

  return (
    <div 
      className={className} 
      style={{ ...style, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }} 
      onClick={triggerHaptic}
    >
      {children}
    </div>
  );
}
