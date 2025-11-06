import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CircularText from "@/components/CircularText";
import AnimatedSpaceBackground from "@/components/AnimatedSpaceBackground";

const services = [
  {
    number: "01",
    title: "Stratégie de marque",
    description: "Développement d'identité et positionnement stratégique pour maximiser votre impact",
  },
  {
    number: "02",
    title: "Réseaux sociaux",
    description: "Gestion complète et stratégie marketing adaptée à vos objectifs",
  },
  {
    number: "03",
    title: "Contenu créatif",
    description: "Production de contenu engageant et solutions créatives sur mesure",
  },
  {
    number: "04",
    title: "Campagnes marketing",
    description: "Gestion et optimisation de campagnes pour des résultats mesurables",
  },
  {
    number: "05",
    title: "Publicité",
    description: "Solutions publicitaires ciblées et performantes sur tous les canaux",
  },
  {
    number: "06",
    title: "Vidéo & Photo",
    description: "Production audiovisuelle professionnelle de haute qualité",
  },
  {
    number: "07",
    title: "Design",
    description: "Création graphique et design visuel pour toutes vos communications",
  },
  {
    number: "08",
    title: "Tunnel de vente",
    description: "Optimisation de vos parcours clients pour maximiser les conversions",
  },
  {
    number: "09",
    title: "E-commerce",
    description: "Expertise complète pour développer votre boutique en ligne",
  },
  {
    number: "10",
    title: "Consulting",
    description: "Accompagnement stratégique personnalisé pour votre croissance",
  },
  {
    number: "11",
    title: "Site web",
    description: "Création de sites web modernes, performants et optimisés",
  },
  {
    number: "12",
    title: "Intelligence artificielle",
    description: "Intégration de solutions IA pour automatiser et optimiser vos processus",
  },
];

const Services360 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden w-full relative">
      <AnimatedSpaceBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Circular Text Centered */}
          <div className="flex flex-col items-center justify-center mb-20">
            <div className="mb-12 text-center">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase block">
                Une gamme complète de services pour propulser votre présence digitale
              </span>
            </div>

            <CircularText
              text="SERVICE • COMPLET • MARKETING • 360° • "
              onHover="speedUp"
              spinDuration={20}
              className="w-64 h-64 lg:w-80 lg:h-80"
            />
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-12">NOS SERVICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-b border-border py-8 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <span
                    className={`text-4xl md:text-5xl font-light transition-colors duration-300 ${
                      hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl md:text-3xl font-semibold mb-3 transition-colors duration-300 ${
                        hoveredIndex === index ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-muted-foreground transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Prêt à transformer votre marque ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Discutons de vos objectifs et trouvons la solution parfaite pour votre projet.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="rounded-full"
            onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
          >
            PRENDRE RENDEZ-VOUS
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services360;
