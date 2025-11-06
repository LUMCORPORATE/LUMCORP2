import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "89%", label: "des entreprises utilisent la vidéo comme outil marketing principal en 2025" },
  { value: "84%", label: "Des consommateurs ont acheté un produit après avoir vu une vidéo" },
  { value: "100%", label: "approuvés par nos clients" },
  { value: "5x", label: "Plus rentable qu'un employé" },
];

const AnimatedCounter = ({ value, delay }: { value: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract number and suffix (like + or %)
  const numMatch = value.match(/(\d+)/);
  const targetNumber = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = targetNumber / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-2">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <AnimatedCounter value={stat.value} delay={index * 100} />
              <div className="text-sm text-muted-foreground italic font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
