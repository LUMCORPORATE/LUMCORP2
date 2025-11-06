import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CircularText from "@/components/CircularText";
import AnimatedSpaceBackground from "@/components/AnimatedSpaceBackground";

// Import client logos
import logoAtman from "@/assets/logo-atman-therapie.jpg";
import logoKingKong from "@/assets/logo-king-kong.jpg";
import logoKurkuma from "@/assets/logo-kurkuma-new.jpg";
import logoMielAmbre from "@/assets/logo-miel-ambre.png";
import logoMugler from "@/assets/logo-mugler.png";
import logoNvadt from "@/assets/logo-nvadt.png";
import logoTacosTacos from "@/assets/logo-tacos-tacos.png";
import logoBureauCulturel from "@/assets/logo-bureau-culturel.png";
import logoMobilite360 from "@/assets/logo-mobilite360-new.png";

const Realisations = () => {
  const navigate = useNavigate();

  const projects = [
    { id: "atman-therapie", name: "Atman Thérapie", logo: logoAtman, category: "Santé & Bien-être" },
    { id: "king-kong", name: "King Kong", logo: logoKingKong, category: "Fitness & Sport" },
    { id: "kurkuma", name: "Kurku-ma", logo: logoKurkuma, category: "Cosmétique" },
    { id: "miel-ambre", name: "Miel d'Ambre", logo: logoMielAmbre, category: "Soin & Beauté" },
    { id: "mugler", name: "Mugler", logo: logoMugler, category: "Mode & Luxe" },
    { id: "nvadt", name: "NVADT", logo: logoNvadt, category: "Média" },
    { id: "tacos-tacos", name: "Tacos Tacos", logo: logoTacosTacos, category: "Fast-Food" },
    { id: "ville-geneve", name: "Bureau Culturel", logo: logoBureauCulturel, category: "Secteur Public" },
    { id: "mobilite-360", name: "Mobilité 360", logo: logoMobilite360, category: "Transport" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full relative">
      <AnimatedSpaceBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Circular Text Centered */}
          <div className="flex flex-col items-center justify-center mb-20">
            <div className="mb-12">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
                Découvrez nos projets
              </span>
            </div>

            <CircularText
              text="EXPLORER • NOS • RÉALISATIONS • OEUVRES • "
              onHover="speedUp"
              spinDuration={20}
              className="w-64 h-64 lg:w-80 lg:h-80"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
                      <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Prêt à créer votre success story ?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Rejoignez nos clients satisfaits et propulsez votre entreprise vers de nouveaux sommets
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

export default Realisations;
