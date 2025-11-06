import { Figma, Sparkles, Zap, Users, Layers, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const skills = [
  { icon: Figma, label: "Testing de contenu en masse", color: "text-primary" },
  { icon: Sparkles, label: "Une équipe de communication", color: "text-accent" },
  { icon: Zap, label: "Gain de temps", color: "text-primary" },
  { icon: Lightbulb, label: "Visibilité", color: "text-accent" },
  { icon: Layers, label: "Structuration de base solide", color: "text-primary" },
  { icon: Users, label: "Nouveaux clients", color: "text-accent" },
];

const Gains = () => {
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
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 pb-4 overflow-visible">
          <span className="font-sans font-medium text-foreground">Ce que vous </span>
          <span className={`inline-block font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-700 pb-2 ${isVisible ? 'translate-x-0 opacity-90' : 'translate-x-20 opacity-0'}`}>gagnez</span>
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 border-2 border-border rounded-full hover:border-primary transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-5 h-5 ${skill.color} group-hover:text-primary transition-colors`} />
                <span className="text-foreground font-medium">{skill.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Text and Button */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-muted-foreground text-center font-mono">
            [ Pour un coût mensuel optimisé et fixe. ]
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105"
            onClick={() => window.open('https://calendly.com/contact-lumcorporate/45min?month=2025-11', '_blank')}
          >
            RÉSERVEZ VOTRE APPEL
          </Button>
          
          {/* Checkmark Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-foreground font-medium">Coût Fixe Mensuel.</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-foreground font-medium">Zéro Engagement. Zéro Risque.</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-foreground font-medium">Votre succès est le nôtre.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gains;
