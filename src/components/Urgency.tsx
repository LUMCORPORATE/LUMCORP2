import { TrendingDown, Users, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const points = [
  {
    icon: TrendingDown,
    text: "Perte de parts de marché",
  },
  {
    icon: Users,
    text: "Vos clients vont ailleurs",
  },
  {
    icon: Target,
    text: "Opportunités manquées",
  },
  {
    icon: Clock,
    text: "Le temps joue contre vous",
  },
];

const Urgency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <div className={`flex flex-wrap items-center justify-center gap-2 mb-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <ArrowDownRight className="w-6 h-6 text-muted-foreground" />
            <h2 className="text-3xl md:text-5xl">
              <span className="font-sans text-foreground">Pendant que vous </span>
              <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">hésitez...</span>
            </h2>
          </div>
          <div className={`flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl md:text-5xl">
              <span className="font-sans text-foreground">vos </span>
              <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">concurrents</span>
              <span className="font-sans text-foreground"> gagne du terrain.</span>
            </h3>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>

        {/* Circles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-48 h-48 rounded-full border-2 border-border flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors group">
                  <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-lg text-foreground font-medium px-6 text-center">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-105"
            onClick={() => window.open('https://calendly.com/contact-lumcorporate/45min?month=2025-11', '_blank')}
          >
            JE PASSE À L&apos;ACTION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
