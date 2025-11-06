import { useTypewriter } from "@/hooks/useTypewriter";
import { useEffect, useRef, useState } from "react";

const comparisonData = [
  {
    category: "Votre Communication",
    before: "Incohérente, chronophage",
    after: "Professionnelle, cohérente, déléguée",
  },
  {
    category: "Votre Visibilité",
    before: "Faible, irrégulière",
    after: "Croissance organique constante",
  },
  {
    category: "Votre Sérénité",
    before: "Stress et perte de temps",
    after: "100% de votre temps consacré à vos activités",
  },
  {
    category: "Votre Image",
    before: "Méconnue ou mal perçue",
    after: "Prestigieuse, reconnue, influente",
  },
];

const Transformation = () => {
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

  const { displayText: text1, isComplete: complete1 } = useTypewriter({ text: "Optimisez votre ", speed: 50, start: isVisible });
  const { displayText: text2, isComplete: complete2 } = useTypewriter({ text: "temps, dépenses", speed: 50, delay: complete1 ? 0 : 999999, start: isVisible });
  const { displayText: text3, isComplete: complete3 } = useTypewriter({ text: " et ", speed: 50, delay: complete2 ? 0 : 999999, start: isVisible });
  const { displayText: text4 } = useTypewriter({ text: "communication", speed: 50, delay: complete3 ? 0 : 999999, start: isVisible });

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center px-2">
          <span className="break-words">
            <span className="font-sans font-medium">{text1}</span>
            <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">{text2}</span>
            <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">{text3}</span>
            <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">{text4}</span>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 md:mb-12 text-foreground font-mono px-2 whitespace-nowrap">
          [ Avant / Après notre accompagnement ]
        </p>

        {/* Comparison Table - Desktop Version */}
        <div className="hidden md:block border border-border rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-card">
            <div className="border-r border-border"></div>
            <div className="border-r border-border p-6 text-center">
              <h3 className="font-semibold text-foreground">Avant notre agence</h3>
            </div>
            <div className="p-6 text-center bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <h3 className="font-semibold text-blue-400">Après notre agence</h3>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-border"
            >
              {/* Category */}
              <div className="border-r border-border p-6 bg-card">
                <p className="font-semibold text-foreground">{row.category}</p>
              </div>

              {/* Before */}
              <div className="border-r border-border p-6 bg-background/50">
                <p className="text-muted-foreground">{row.before}</p>
              </div>

              {/* After */}
              <div className="p-6 bg-blue-500/10 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
                <p className="text-blue-400 font-medium">{row.after}</p>
              </div>
            </div>
          ))}

          {/* Additional Full-Width Row */}
          <div className="p-6 bg-card">
            <p className="text-center text-foreground">
              Si vous avez une équipe communication, nous serions heureux de les aider, si vous n'en avez pas, profitez d'une équipe créative pour le prix égal ou inférieur à celui d'un employé, opérationnelle 12 mois par an, sans charges supplémentaires.
            </p>
          </div>
        </div>

        {/* Comparison Cards - Mobile Version (Nouvelle structure) */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              {/* Category Header */}
              <div className="p-4 bg-card border-b border-border">
                <h3 className="font-semibold text-foreground text-center text-lg">
                  {row.category}
                </h3>
              </div>

              {/* Before/After Grid */}
              <div className="grid grid-cols-2">
                {/* Before Column */}
                <div className="border-r border-border">
                  <div className="p-3 bg-background/50 border-b border-border">
                    <p className="text-xs font-semibold text-muted-foreground text-center">
                      Avant notre agence
                    </p>
                  </div>
                  <div className="p-4 bg-background/50 min-h-[100px] flex items-center justify-center">
                    <p className="text-sm text-muted-foreground text-center">{row.before}</p>
                  </div>
                </div>

                {/* After Column */}
                <div>
                  <div className="p-3 bg-blue-500/10 border-b border-border">
                    <p className="text-xs font-semibold text-blue-400 text-center">
                      Après notre agence
                    </p>
                  </div>
                  <div className="p-4 bg-blue-500/10 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)] min-h-[100px] flex items-center justify-center">
                    <p className="text-sm text-blue-400 font-medium text-center">{row.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Full-Width Card */}
          <div className="p-4 bg-card border border-border rounded-2xl">
            <p className="text-center text-foreground text-sm leading-relaxed">
              Si vous avez une équipe communication, nous serions heureux de les aider, si vous n'en avez pas, profitez d'une équipe créative pour le prix égal ou inférieur à celui d'un employé, opérationnelle 12 mois par an, sans charges supplémentaires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;