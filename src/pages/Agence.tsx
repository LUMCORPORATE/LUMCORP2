import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import equipeImage from "@/assets/equipe.png";
import founderImage from "@/assets/founder.jpg";
import { Lightbulb, Target, Users, Zap, Heart } from "lucide-react";

const Agence = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation Continue",
      description: "Nous restons à la pointe des tendances digitales pour offrir les meilleures solutions.",
    },
    {
      icon: Heart,
      title: "Passion & Engagement",
      description: "Chaque projet est traité avec passion et un engagement total envers nos clients.",
    },
    {
      icon: Target,
      title: "Résultats Mesurables",
      description: "Nous nous concentrons sur des KPIs concrets et des résultats tangibles.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons main dans la main avec nos clients pour co-créer le succès.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            L'AGENCE QUI{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
              RÉVOLUTIONNE
            </span>{" "}
            LA COMMUNICATION DIGITALE.
          </h1>
          <Button
            variant="hero"
            size="lg"
            className="rounded-full"
            onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
          >
            RÉSERVER UN APPEL
          </Button>
        </div>
      </section>

      {/* Team Image */}
      {/* <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <img src={equipeImage} alt="Équipe LUM.CORP" className="w-full rounded-2xl shadow-2xl" />
        </div>
      </section>*/}

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-bold">LUM.CORP est née d'une vision forte</span> : transformer la
            façon dont les marques communiquent sur les réseaux sociaux.
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Notre fondateur, Luna Mathias, a commencé son parcours en travaillant avec des entreprises de toutes
            tailles, et a rapidement constaté un problème récurrent :
            <span className="text-foreground font-semibold">
              {" "}
              le manque de stratégie cohérente et de contenu authentique
            </span>
            .
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            C'est ainsi qu'est née LUM.CORP, avec une mission claire : aider les entreprises à développer une présence
            digitale forte, authentique et engageante.
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-bold">L'approche est unique</span> : elle repose sur le partage, une analyse fine et un testing rigoureux, le tout
            soutenu par des processus psychologiques adaptés. Mathias est accompagné de son collaborateur clé, <span className="text-foreground font-bold">Jean
            Carly Réveil</span>, un atout essentiel dans la croissance des marques que nous accompagnons.
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            En <span className="text-foreground font-bold">moins de 2 ans</span>, nous avons accompagné plus de{" "}
            <span className="text-foreground font-bold">15+ marques</span> dans leur transformation digitale, générant
            des millions d'impressions et créant des communautés engagées.
          </p>

          <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-lg">
            <p className="text-xl italic text-foreground">
              "Votre succès est le nôtre, alors faisons tout notre possible pour qu'il s'accomplisse."
            </p>
            <p className="text-sm text-muted-foreground mt-2">- Luna Mathias, Fondateur</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            NOTRE APPROCHE GARANTIT LA <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">QUALITÉ DE NOTRE SERVICE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">TRANSPARENCE</h3>
              <p className="text-muted-foreground">
                Nous partageons nos méthodes et restons transparents sur tous nos processus.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">CLIENT-CENTRICITY</h3>
              <p className="text-muted-foreground">Votre satisfaction est notre priorité absolue, toujours.</p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">RÉSULTATS CONCRETS</h3>
              <p className="text-muted-foreground">
                Nous mesurons notre succès par les résultats tangibles que nous générons.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            Nos <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Valeurs</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ce qui nous guide au quotidien</p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-4 p-6 rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/*<section className="py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Notre Fondatrice</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img src={founderImage} alt="Luna Mathias - Fondatrice" className="w-full rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Luna Mathias</h3>
              <p className="text-lg text-primary font-semibold">Fondatrice & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Passionnée par le digital et la communication, Luna a fondé LUM.CORP avec la conviction que chaque
                marque mérite une présence authentique et impactante sur les réseaux sociaux. Son expertise et sa vision
                stratégique ont permis à des dizaines d'entreprises de transformer leur communication digitale.
              </p>
              <Button
                variant="hero"
                className="rounded-full mt-4"
                onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
              >
                DISCUTONS DE VOTRE PROJET
              </Button>
            </div>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  );
};

export default Agence;
