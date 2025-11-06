import { Target, TrendingUp, Users, Zap } from "lucide-react";
import mielAmbreLogo from "@/assets/miel-ambre-logo.png";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    text: "Stratégies marketing sur-mesure",
  },
  {
    icon: TrendingUp,
    text: "Développement continu et sécurisé",
  },
  {
    icon: Users,
    text: "Expertise multi-secteurs",
  },
  {
    icon: Zap,
    text: "Énergie humaine et bienveillante",
  },
];

const Agency = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            {/* Small tagline */}
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-mono">
              [ NOUS COMPRENONS VOTRE SITUATION ! ]
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Nous accompagnons des entreprises qui veulent{" "}
              <span className="italic font-display text-gradient-blue">déléguer intelligemment</span> leur
              communication.
            </h2>

            {/* Separator */}
            <div className="w-full h-px bg-border mb-12" />

            {/* Pourquoi nous choisir */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4 font-mono">[ POURQUOI NOUS CHOISIR ? ]</p>
              <p className="text-lg text-foreground leading-relaxed">
                "Après plusieurs essais avec d’autres agences, on a enfin trouvé la bonne. Huit mois déjà avec LUM.CORP,
                et chaque mois confirme qu’on a fait le bon choix."
              </p>
            </div>

            {/* Founder Info */}
            <div className="flex items-center gap-4 mt-8">
              <img
                src={mielAmbreLogo}
                alt="Miel et Ambre - Partenaire stratégique de LUM Agency"
                className="w-16 h-16 rounded-lg object-contain bg-white p-2"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">MILA STROHBACH, CEO MIEL ET AMBRE</p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-xl text-foreground font-medium">{feature.text}</p>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="xl"
                variant="hero"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
              >
                PRENDRE RENDEZ-VOUS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
