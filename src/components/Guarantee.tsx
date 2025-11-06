import { Shield, Zap, TrendingUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const guarantees = [
  {
    icon: Shield,
    label: "Sans engagement",
    description: "Arrêtez quand vous voulez",
  },
  {
    icon: TrendingUp,
    label: "Gagnez en visibilité",
    description: "Une aventure inoubiable",
  },
  {
    icon: Zap,
    label: "Optimisez vos dépenses",
    description: "Des coûts fixe sans aucune charges",
  },
  {
    icon: Headphones,
    label: "Une équipe humaine",
    description: "Un service chaleureux et bienveillant",
  },
];

const Guarantee = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-background border-2 border-primary/20 rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          {/* Decorative badge - Desktop */}
          <div className="hidden sm:block absolute top-8 right-8">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">100% CONFIANCE</Badge>
          </div>

          {/* Decorative badge - Mobile (aligné à gauche) */}
          <div className="sm:hidden flex justify-start mb-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold">100% CONFIANCE</Badge>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl">
            <span className="font-sans text-foreground">Notre </span>
            <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">
              garantie
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mt-4">
            Nous sommes tellement confiants de nos résultats que nos abonnements sont{" "}
            <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">
              sans engagement de durée
            </span>
            .
          </p>

          {/* Guarantee badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{guarantee.label}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="xl"
              className="rounded-full px-8"
              onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
            >
              Je prends rendez-vous
            </Button>
          </div>

          {/* Bottom tagline */}
          <p className="text-center text-sm text-muted-foreground mt-8 italic">Essayez, voyez, et gagnons ensemble.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
