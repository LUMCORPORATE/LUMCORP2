import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const AvailabilityAlert = () => {
  const [progress, setProgress] = useState(0);
  const totalSpots = 5;
  const availableSpots = 2;
  const filledPercentage = ((totalSpots - availableSpots) / totalSpots) * 100;

  useEffect(() => {
    // Animate the progress bar on mount
    const timer = setTimeout(() => {
      setProgress(filledPercentage);
    }, 300);

    return () => clearTimeout(timer);
  }, [filledPercentage]);

  const openCalendly = () => {
    window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Engagement Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Notre Engagement :{" "}
            <span className="italic font-display bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent inline-block px-1">
              Croissance Qualitative et Exclusive
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Chez LUM CORP, la qualité et le succès de nos clients priment. Nous limitons nos adhésions à des{" "}
            <span className="text-primary font-semibold">paliers de 5 clients</span> pour garantir à chaque partenaire
            une attention maximale et une excellence opérationnelle continue.
          </p>
        </div>

        {/* Alert Box with Animated Progress */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 p-8 md:p-12 shadow-lg">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-magenta/20 rounded-full blur-3xl" />

            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {availableSpots} PLACES <span className="text-lg font-semibold text-muted-foreground">RESTANTES</span>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="relative mb-8">
              <div className="h-6 md:h-8 w-full bg-muted/50 rounded-full overflow-hidden border border-border/50">
                <div
                  className="h-full bg-gradient-to-r from-primary via-magenta to-primary transition-all duration-[2000ms] ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_2s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>

            <p className="text-center text-base md:text-lg text-muted-foreground mb-6">
              Votre projet pourrait être le dernier à être validé avant le prochain palier. Ne manquez pas cette
              opportunité.
            </p>

            <div className="flex justify-center">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-gradient-to-r from-primary to-magenta hover:opacity-90 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">RÉSERVER MA PLACE MAINTENANT</span>
                <span className="sm:hidden">RÉSERVER MA PLACE</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Procedure Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
            Procédure de
            <span className="italic font-display bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent inline-block px-1">
              Candidature
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative group h-full">
              <div className="bg-gradient-to-br from-background to-primary/5 rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="text-5xl font-bold text-primary mb-4">1.</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Réservez votre RDV</h3>
                <p className="text-muted-foreground flex-1">Consultation stratégique toujours disponible.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group h-full">
              <div className="bg-gradient-to-br from-background to-magenta/5 rounded-xl p-8 border border-border/50 hover:border-magenta/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="text-5xl font-bold text-magenta mb-4">2.</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Validation du Profil</h3>
                <p className="text-muted-foreground flex-1">
                  Nous validons si votre projet rentre dans nos critères d'exclusivité.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group h-full">
              <div className="bg-gradient-to-br from-background to-highlight/5 rounded-xl p-8 border border-border/50 hover:border-highlight/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="text-5xl font-bold text-highlight mb-4">3.</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Adhésion ou Liste d'Attente</h3>
                <p className="text-muted-foreground flex-1">
                  Accès immédiat ou placement sur la liste prioritaire (1-2 mois d'attente).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityAlert;
