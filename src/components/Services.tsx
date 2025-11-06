import { useState } from "react";
import serviceStrategieMarque from "@/assets/service-strategie-marque.png";
import serviceReseauxSociaux from "@/assets/service-reseaux-sociaux.png";
import serviceContenuCreatif from "@/assets/service-contenu-creatif.png";
import serviceCampagnePub from "@/assets/service-campagne-pub.png";
import servicePublicite from "@/assets/service-publicite.png";
import serviceVideoPhoto from "@/assets/service-video-photo.png";
import serviceDesign from "@/assets/service-design.png";
import serviceTunnelVente from "@/assets/service-tunnel-vente.png";
import serviceEcommerce from "@/assets/service-ecommerce.png";
import serviceConsulting from "@/assets/service-consulting.png";
import serviceSiteWeb from "@/assets/service-site-web.png";
import serviceIA from "@/assets/service-ia.png";

const services = [
  {
    title: "Stratégie de marque",
    subtitle: "Développement",
    image: serviceStrategieMarque,
  },
  {
    title: "Réseaux sociaux",
    subtitle: "Marketing",
    image: serviceReseauxSociaux,
  },
  {
    title: "Contenu créatif",
    subtitle: "Solutions",
    image: serviceContenuCreatif,
  },
  {
    title: "Campagnes marketing",
    subtitle: "Gestion",
    image: serviceCampagnePub,
  },
  {
    title: "Publicité",
    subtitle: "Solutions",
    image: servicePublicite,
  },
  {
    title: "Vidéo & Photo",
    subtitle: "Production",
    image: serviceVideoPhoto,
  },
  {
    title: "Design",
    subtitle: "Créatif",
    image: serviceDesign,
  },
  {
    title: "Tunnel de vente",
    subtitle: "Optimisation",
    image: serviceTunnelVente,
  },
  {
    title: "E-commerce",
    subtitle: "Expertise",
    image: serviceEcommerce,
  },
  {
    title: "Consulting",
    subtitle: "Accompagnement",
    image: serviceConsulting,
  },
  {
    title: "Site web",
    subtitle: "Création",
    image: serviceSiteWeb,
  },
  {
    title: "Intelligence artificielle",
    subtitle: "Intégration",
    image: serviceIA,
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              <span className="text-foreground">Nos Services 360° </span>
              <span className="font-display text-gradient-blue opacity-90 italic inline-block pr-8">LUM.CORP</span>
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="cursor-pointer transition-all duration-300 pb-6 border-b border-border last:border-b-0 flex items-center gap-6"
                >
                  <img
                    src={service.image}
                    alt={`Service ${service.title} - ${service.subtitle} par LUM Agency`}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                      hoveredIndex === index ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {service.title} <span className="italic font-light">{service.subtitle}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Display */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {services.map((service, index) => (
                <img
                  key={index}
                  src={service.image}
                  alt={`Service ${service.title} - ${service.subtitle} par LUM Agency`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
