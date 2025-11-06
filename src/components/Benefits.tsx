import { useState, useEffect, useRef } from "react";
import ScrollFillText from "./ScrollFillText";
import visibilite from "@/assets/visibilite.png";
import manqueVisibilite from "@/assets/manque_visibilite.png";
import manqueDeTemps from "@/assets/manque_de_temps.png";
import equipe from "@/assets/equipe.png";

const benefits = [
  {
    icon: manqueDeTemps,
    title: "Vous manquez\nde temps",
    points: [
      "Vous avez l'impression de courir après le temps, sans jamais pouvoir vraiment avancer.",
    ],
  },
  {
    icon: manqueVisibilite,
    title: "Vos efforts n'ont apporté aucune visibilité",
    points: [
      "Vous avez investi du temps, de l'énergie, parfois de l'argent... pour peu de résultats.",
    ],
  },
  {
    icon: equipe,
    title: "Vous manquez d'une équipe d'experts à vos côtés",
    points: [
      "Vous avancez, sans savoir si vos actions sont efficaces, par manque de stratégie.",
    ],
  },
  {
    icon: visibilite,
    title: "Vos concurrents avancent, votre marque stagne",
    points: [
      "Vous regardez les autres avancer pendant que votre marque reste invisible.",
    ],
  },
];

const Benefits = () => {
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const fourthBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerFirst = new IntersectionObserver(
      ([entry]) => {
        console.log("First block intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsFirstVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const observerFourth = new IntersectionObserver(
      ([entry]) => {
        console.log("Fourth block intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsFourthVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (firstBlockRef.current) {
      console.log("Observing first block");
      observerFirst.observe(firstBlockRef.current);
    }

    if (fourthBlockRef.current) {
      console.log("Observing fourth block");
      observerFourth.observe(fourthBlockRef.current);
    }

    return () => {
      observerFirst.disconnect();
      observerFourth.disconnect();
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base text-muted-foreground mb-6 font-mono">
            [ Communiquer correctement ]
          </p>
          <ScrollFillText 
            className="text-4xl md:text-5xl font-medium text-foreground"
            baseColor="hsl(var(--muted-foreground) / 0.3)"
            fillColor="hsl(var(--foreground))"
          >
            <h2>
              Votre entreprise mérite{" "}
              <span className="font-display font-normal italic bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent">
                d'être vue, reconnue et comprise.
              </span>{" "}
              Mais ...
            </h2>
          </ScrollFillText>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={index === 0 ? firstBlockRef : index === 3 ? fourthBlockRef : null}
              className={`text-center ${
                index === 0 
                  ? `transition-all duration-1000 ease-out ${
                      isFirstVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-32'
                    }`
                  : index === 3
                  ? `transition-all duration-1000 ease-out ${
                      isFourthVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-32'
                    }`
                  : 'animate-fade-in'
              }`}
              style={index !== 0 && index !== 3 ? { animationDelay: `${index * 100}ms` } : {}}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-xl font-sans font-medium mb-6 text-foreground whitespace-pre-line">
                {benefit.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground font-mono">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
