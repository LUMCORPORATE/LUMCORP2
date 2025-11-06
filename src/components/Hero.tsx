import { Button } from "@/components/ui/button";
import WipeRevealText from "@/components/WipeRevealText";
import avatar1 from "@/assets/logo-nvadt-new.png";
import avatar2 from "@/assets/logo-mobilite360-new.png";
import avatar3 from "@/assets/logo-kingkong-new.png";
import avatar4 from "@/assets/logo-kurkuma-new.png";
import fondBackgroundDesktop from "@/assets/fondbackground.png"; // format horizontal
import fondBackgroundMobile from "@/assets/fondbackground-mobile.png"; // format vertical

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-svh py-12 sm:py-16 md:py-20 safe-pt safe-px">
      {/* Background desktop (caché sur mobile) */}
      <div
        className="absolute inset-0 animate-glow-move hidden md:block"
        style={{
          backgroundImage: `url(${fondBackgroundDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Background mobile (visible uniquement sur petit écran) */}
      <div
        className="absolute inset-0 animate-glow-move md:hidden"
        style={{
          backgroundImage: `url(${fondBackgroundMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity:"0.6"
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-[480px] sm:max-w-5xl px-4 sm:px-6 text-center">
        {/* Avatars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-3">
            {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client satisfait de l'agence LUM ${i + 1}`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-white max-[750px]:text-white md:text-muted-foreground uppercase tracking-wider font-mono">
            <span className="text-white max-[750px]:text-white md:text-foreground font-semibold">+15</span> entreprises nous font confiance
          </p>
        </div>

        {/* Titre */}
        <h1
          className="font-medium leading-tight mb-4 md:mb-6 text-balance text-white max-[750px]:text-white md:text-foreground"
          style={{
            fontSize: "clamp(28px, 6vw, 64px)",
          }}
        >
          La solution <span className="text-gradient-blue font-medium opacity-90">N°1</span> pour{" "}
          <WipeRevealText className="text-gradient-visible italic font-light px-1">
            booster
          </WipeRevealText>{" "}
          votre communication.
        </h1>

        {/* Sous-texte */}
        <p className="text-sm sm:text-base md:text-lg text-white max-[750px]:text-white md:text-muted-foreground mb-8 max-w-xl mx-auto px-2">
          Chez LUM.CORP, nos clients ne restent pas par contrat, mais par conviction.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-20">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full w-full sm:w-auto px-5 py-3 text-sm"
            onClick={() => window.open('https://calendly.com/contact-lumcorporate/45min?month=2025-11', '_blank')}
          >
            RÉSERVER UN APPEL
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-auto px-5 py-3 text-sm leading-tight"
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Découvrez nos abonnements organiques
          </Button>
        </div>

        <div className="text-xs sm:text-sm text-white max-[750px]:text-white md:text-muted-foreground uppercase tracking-wide font-mono text-center">
          [ Une offre conçue pour aider les entreprises sur les réseaux sociaux ]
        </div>
      </div>

      {/* Dégradé bas */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;