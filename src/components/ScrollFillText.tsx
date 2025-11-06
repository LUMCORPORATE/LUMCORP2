import { useScrollFillAnimation } from "@/hooks/useScrollFillAnimation";

interface ScrollFillTextProps {
  children: React.ReactNode;
  className?: string;
  baseColor?: string;
  fillColor?: string;
}

const ScrollFillText = ({ 
  children, 
  className = "", 
  baseColor = "hsl(var(--muted-foreground))",
  fillColor = "hsl(var(--foreground))" 
}: ScrollFillTextProps) => {
  const { fillPercentage, elementRef } = useScrollFillAnimation();

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
    >
      {/* Base gray text (always visible) */}
      <span 
        className="block"
        style={{
          color: baseColor,
        }}
      >
        {children}
      </span>
      
      {/* White text (revealed based on scroll from left to right) */}
      <span 
        className="absolute inset-0 block"
        style={{
          color: fillColor,
          clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
          transition: 'clip-path 0.1s linear',
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default ScrollFillText;
