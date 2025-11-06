import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";

const Carriere = () => {
  const jobOffers = [
    {
      title: "Creative Strategist (CDI)",
      description:
        "Gérer et développer la présence digitale de nos clients sur les réseaux sociaux. Créer du contenu engageant et analyser les performances.",
      location: "Remote",
      type: "CDI",
      link: "https://forms.gle/a8KmSHV2WSgj2TSN6",
    },
    {
      title: "Content Creator (CDI)",
      description:
        "Créer du contenu visuel et vidéo innovant pour nos clients. Maîtrise des outils de création (Adobe Suite, CapCut, etc.).",
      location: "Remote",
      type: "CDI",
      link: "https://forms.gle/a8KmSHV2WSgj2TSN6",
    },
    {
      title: "Community Manager (CDI)",
      description:
        "Animer et fédérer les communautés de nos clients. Développer l'engagement et gérer la relation client.",
      location: "Remote",
      type: "CDI",
      link: "https://forms.gle/a8KmSHV2WSgj2TSN6",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
            ENVIE DE REJOINDRE UNE AGENCE QUI{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
              RÉVOLUTIONNE
            </span>{" "}
            LA COMMUNICATION DIGITALE ?
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl">
            Intègre une équipe passionnée, créative et ambitieuse,{" "}
            <span className="text-foreground font-semibold">de quoi évoluer dans un environnement positif</span>.
          </p>
        </div>
      </section>

      {/* Job Offers Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {jobOffers.map((job, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{job.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{job.type}</span>
                  </div>
                </div>
                <Button variant="hero" className="w-full rounded-full" onClick={() => window.open(job.link, "_blank")}>
                  POSTULER MAINTENANT
                </Button>
              </Card>
            ))}

            {/* Candidature Spontanée */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">Candidature spontanée</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous sommes toujours à la recherche de talents. Si ton profil nous correspond, fais-le nous savoir !
              </p>
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Remote ou Genève</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Freelance ou Stage Rémunéré</span>
                </div>
              </div>
              <Button
                variant="hero"
                className="w-full rounded-full"
                onClick={() => window.open("https://forms.gle/xrwET4ioMUUjfQ2V8", "_blank")}
              >
                POSTULER MAINTENANT
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carriere;
