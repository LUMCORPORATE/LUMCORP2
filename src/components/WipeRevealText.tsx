interface WipeRevealTextProps {
  children: React.ReactNode;
  className?: string;
}

const WipeRevealText = ({ children, className = "" }: WipeRevealTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Le texte qui devient visible à 50% de l'animation */}
      <span className="relative opacity-0 animate-text-reveal">
        {children}
      </span>
      
      {/* Le bloc blanc qui s'étend puis se rétracte */}
      <span className="absolute inset-y-0 bg-white animate-wipe-reveal" />
    </span>
  );
};

export default WipeRevealText;
