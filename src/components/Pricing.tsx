import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    name: "Sur demande",
    price: "Basic",
    priceDetail: "",
    billing: "",
    description: "",
    features: [
      "3 vidéos/semaine = 12 vidéos",
      "Gestion de vos réseaux sociaux (IG, FB, TT)",
      "Analyse des statistiques",
      "Tests A/B",
    ],
    cta: "RÉSERVEZ UN APPEL",
    popular: false,
  },
  {
    name: "Sur demande",
    price: "Avancé",
    priceDetail: "",
    billing: "",
    description: "",
    features: [
      "5 vidéos/semaine = 20 vidéos",
      "Gestion complète de vos réseaux sociaux (IG, FB, TT, YTB, LI)",
      "Analyse des statistiques",
      "12 contenus statiques",
      "1 vidéo au format long, au choix",
      "Tests A/B",
      "Campagne Meta (engagement)",
    ],
    cta: "RÉSERVEZ UN APPEL",
    popular: false,
  },
  {
    name: "Sur demande",
    price: "Bestseller",
    priceDetail: "",
    billing: "",
    description: "",
    features: [
      "5 vidéos/semaine = 20 vidéos",
      "Gestion complète de vos réseaux sociaux (IG, FB, TT, YTB, LI)",
      "Analyse des statistiques",
      "15 contenus statiques",
      "1 vidéo au format long, au choix",
      "Tests A/B",
      "Service Google Ads 360",
      "Meta Ads",
      "Tik Tok ads",
    ],
    cta: "RÉSERVEZ UN APPEL",
    popular: true,
  },
  {
    name: "Sur demande",
    price: "Diamant",
    priceDetail: "",
    billing: "",
    description: "",
    features: [
      "7 vidéos/semaine = 28 vidéos",
      "Gestion complète de vos réseaux sociaux (IG, FB, TT, YTB, LI)",
      "Analyse des statistiques",
      "20 contenus statiques",
      "2 vidéos au format long, au choix",
      "Tests A/B",
      "Service Google Ads 360",
      "Meta Ads",
      "Prospection à froid (LI, e-mail, téléphone)",
      "Tik Tok ads",
    ],
    cta: "RÉSERVEZ UN APPEL",
    popular: false,
  },
];

const Pricing = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background relative overflow-hidden"
      ref={elementRef}
    >
      {/* Background decoration - responsive sizes */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Guarantee text at top - Fixed responsive */}
          <div className="inline-block mb-6 sm:mb-8 animate-fade-in animate-shake px-2 w-full max-w-full">
            <div className="bg-highlight backdrop-blur-sm border border-highlight rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 hover:scale-105 transition-transform duration-300 mx-auto max-w-fit">
              <span className="font-sans text-background font-semibold text-xs sm:text-sm md:text-base tracking-wide block sm:inline">
                Notre Garantie : Un abonnement sans <strong className="whitespace-nowrap">aucun engagement</strong> de
                durée.
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="mb-4 sm:mb-6 flex flex-col items-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6">
              <div className="font-sans font-medium">Fait pour des entreprises avec une</div>
              <div className="font-display italic bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent leading-tight">
                vision long terme
              </div>
            </h2>
          </div>

          {/* Monthly text at bottom */}
          <div className="inline-block">
            <span className="text-base sm:text-lg md:text-xl font-mono font-semibold tracking-wider text-muted-foreground">
              [ Abonnement mensuel ]
            </span>
          </div>
        </div>

        {/* Pricing Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-br from-magenta/20 to-purple/20 border-magenta/40 shadow-lg shadow-magenta/20"
                  : "bg-card/50 border-border/50"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 text-muted-foreground">
                {plan.name}
              </h3>

              {/* Price - Responsive sizing with better wrapping */}
              <div className="mb-2 flex items-baseline flex-wrap gap-1">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{plan.price}</span>
                {plan.priceDetail && (
                  <span className="text-xs sm:text-sm text-muted-foreground">{plan.priceDetail}</span>
                )}
              </div>
              {plan.billing && (
                <div className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{plan.billing}</div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 md:mb-8">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 flex-grow mb-4 sm:mb-6 md:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground leading-relaxed break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className={`w-full rounded-xl mt-auto text-xs sm:text-sm md:text-base py-2 sm:py-3 ${
                  plan.popular ? "bg-magenta hover:bg-magenta/80" : ""
                }`}
                onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
