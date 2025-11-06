import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import avatarKingKong from "@/assets/avatar-kingkong.png";
import avatarMobilite360 from "@/assets/avatar-mobilite360.png";
import avatarNvadt from "@/assets/avatar-nvadt.png";
import avatarKurkuma from "@/assets/avatar-kurkuma.png";

const testimonials = [
  {
    rating: 5.0,
    stars: 5,
    avatar: avatarKingKong,
    quote:
      "Je travaillais avec une autre agence depuis 8 mois avant de découvrir LUM.CORP. Dès le premier post, ma visibilité a été multipliée par trois. Je me souviens encore que mes clients m’écrivaient en privé sur WhatsApp pour me dire à quel point le contenu leur plaisait.",
    name: "Sébastian Voignier",
    position: "CEO KING KONG SQUAD",
  },
  {
    rating: 4.9,
    stars: 5,
    avatar: avatarMobilite360,
    quote:
      "Nous avions besoin d’un logo pour notre nouvelle entreprise. Le défi : représenter la diversité de nos services dans une seule identité visuelle. Après plusieurs essais internes insatisfaisants, nous avons fait appel à LUM.CORP. Leur équipe a su créer le logo que nous n’avions pas réussi à concevoir, avec une approche à la fois humaine, chaleureuse et d’une créativité remarquable..",
    name: "PEDRO PINHEIRO",
    position: "CEO MOBILITÉ 360",
  },
  {
    rating: 5,
    stars: 5,
    avatar: avatarNvadt,
    quote:
      "Nous sommes un média, et quelques mois après le lancement du projet, nous avons décidé de faire appel à LUM.CORP pour le professionnaliser, le dynamiser et le structurer. Le changement a été radical : notre visibilité sur les réseaux sociaux a explosé. Cela nous a permis de collaborer avec de grandes marques et plusieurs personnalités publiques. L’arrivée de LUM.CORP a été un véritable tremplin pour notre développement.",
    name: "AHMED DERMANE",
    position: " DIRECTEUR NVADT",
  },
  {
    rating: 5,
    stars: 5,
    avatar: avatarKurkuma,
    quote:
      "Nous étions en difficulté au lancement de la marque. J’ai eu la chance de rencontrer Mathias Luna il y a quelques années, et j’ai décidé de le recontacter pour m’aider à redresser l’entreprise. Son implication et sa vision ont permis à la KKM Team de dépasser le million de chiffre d’affaires en quelques mois. Au-delà des résultats, il a restructuré l’interne et affûté notre image sur les réseaux sociaux. Une personne en or avant d’être un génie dans son domaine..",
    name: "STEVEN WAUTERS",
    position: "CEO KURKU-MA",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Left side */}
          <div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">+ APPROUVÉS</p>
            <h2 className="text-5xl md:text-6xl">
              <span className="font-sans text-foreground">Leurs avis </span>
              <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">
                comptent
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className="max-w-md">
            <p className="text-muted-foreground text-sm leading-relaxed">
              DES STARTUPS AUX MARQUES INTERNATIONALES, NOUS AVONS LIVRÉ DES SOLUTIONS CONCRÊTES IMPACTANTES.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors h-full flex flex-col">
                  {/* Rating and Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl font-bold text-foreground mb-2">{testimonial.rating}</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.stars ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <img
                      src={testimonial.avatar}
                      alt={`Photo de ${testimonial.name}, ${testimonial.position}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-bold text-foreground mb-1">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
