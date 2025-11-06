import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import faqImage from "@/assets/faq-image.png";

const faqs = [
  {
    question: "Êtes-vous experts en marketing digital ?",
    answer:
      "Oui. Notre équipe réunit des experts spécialisés dans la stratégie digitale, le contenu organique, le design et le développement web. Nous accompagnons des marques ambitieuses dans leur croissance et leur rayonnement sur le long terme.",
  },
  {
    question: "Pouvez-vous créer des designs personnalisés ?",
    answer:
      "Absolument. Chaque identité visuelle, site ou contenu est conçu sur mesure pour refléter l'ADN et les valeurs de votre entreprise. Nous allions esthétique, cohérence et performance.",
  },
  {
    question: "Proposez-vous des solutions CMS et e-commerce ?",
    answer:
      "Oui, nous travaillons sur les principaux CMS (Shopify, Webflow, WordPress...) et créons des boutiques e-commerce optimisées pour la conversion et l'expérience utilisateur.",
  },
  {
    question: "Mon site sera-t-il optimisé pour le SEO ?",
    answer:
      "Toujours. Chaque site ou contenu que nous produisons respecte les meilleures pratiques SEO — structure, vitesse, sémantique et compatibilité mobile — afin de garantir une visibilité durable.",
  },
  {
    question: "L'abonnement a-t-il un engagement de durée ?",
    answer:
      "Non. Tous nos abonnements sont sans engagement. Vous restez libre à tout moment : essayez et faites votre propre avis.",
  },
  {
    question: "Peut-on résilier à tout moment ?",
    answer:
      "Oui, vous pouvez résilier votre abonnement à tout moment, sans frais ni préavis. Notre objectif est de bâtir une collaboration basée sur la satisfaction et les résultats, pas sur la contrainte.",
  },
  {
    question: "Peut-on collaborer avec vous depuis un autre pays francophone ?",
    answer:
      "Bien sûr. Nous pouvons accompagner des clients basés en Suisse, en France, en Belgique, au Canada et dans d'autres pays francophones. Si nécessaire, nous recevons vos produits directement dans nos locaux à Genève, et assurons un suivi en ligne fluide, réactif, professionnel et avec bienveillance.",
  },
  {
    question: "Si nous avons déjà une équipe marketing, pouvons-nous travailler ensemble ?",
    answer:
      "Oui. Nous complétons parfaitement les équipes internes. Notre rôle est d'apporter expertise, création et stratégie pour renforcer vos actions déjà en place, sans les remplacer.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats concrets ?",
    answer:
      "Les résultats varient selon votre secteur et la valeur que votre produit ou service apporte à votre audience. Plus votre offre crée d'impact, plus les résultats apparaissent rapidement. Notre rôle est de construire un véritable écosystème de confiance entre vos comptes et les réseaux sociaux, afin qu'ils reconnaissent votre légitimité et mettent naturellement votre marque en avant. Pour cela, nous élaborons ensemble des stratégies sur mesure visant à renforcer votre notoriété, votre visibilité et votre renommée sur le long terme.",
  },
  {
    question: "Fournissez-vous des reportings ou analyses de performance ?",
    answer:
      "Oui, un suivi régulier est inclus selon le pack que vous choisissez. Nous analysons vos performances, ajustons la stratégie et vous partageons les indicateurs clés de croissance adaptés à votre formule d'abonnement.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ Accordion */}
          <div>
            <h2 className="text-5xl md:text-6xl">
              <span className="font-sans text-foreground">Questions les plus </span>
              <span className="font-display bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-90">
                Fréquentes
              </span>
            </h2>
            <br />
            <p className="text-muted-foreground mb-8">Tout ce que vous devez savoir sur nos services</p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {index === 4 ? (
                      <span>
                        Non. Tous nos abonnements sont sans engagement. Vous restez libre à tout moment{" "}
                        <span className="whitespace-nowrap">: essayez</span> et faites votre propre avis.
                      </span>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Contact Card */}
          <div className="lg:sticky lg:top-24">
            <Card className="overflow-hidden border-2 border-border hover:border-primary transition-colors">
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img src={faqImage} alt="Questions fréquentes - FAQ LUM Agency" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Vous avez d'autres questions ou{" "}
                  <span className="italic text-primary">êtes intéressé par un  <br className="max-[420px]:block hidden" /> service ?</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe reste à votre disposition pour répondre à vos demandes et à vos envies, en vous guidant
                  de la meilleure façon possible.
                </p>
                <Button 
                  className="w-full group" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/contact-lumcorporate/45min?month=2025-11', '_blank')}
                >
                  RÉSERVER UN APPEL
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;