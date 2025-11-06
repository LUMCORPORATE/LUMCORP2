import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Eye, CheckCircle2, Clock, Target, Award, TrendingUp } from "lucide-react";

// Import client logos
import logoAtman from "@/assets/logo-atman-therapie.jpg";
import atmanPhoto from "@/assets/atman-therapie-photo.png";
import atmanSolution from "@/assets/atman-solution.jpg";
import atmanSolutionMobile from "@/assets/atman-solution-mobile.jpg";
import logoKingKong from "@/assets/logo-king-kong.jpg";
import kingKongHero from "@/assets/kingkong-hero.png";
import kingKongStrategyDesktop from "@/assets/kingkong-strategy-desktop.png";
import kingKongStrategyMobile from "@/assets/kingkong-strategy-mobile.png";
import logoKurkuma from "@/assets/logo-kurkuma-new.jpg";
import kurkumaMissProvence from "@/assets/kurkuma-miss-provence.png";
import kurkumaMissProvenceLandscape from "@/assets/kurkuma-miss-provence-landscape.png";
import logoLum from "@/assets/logo-lum.png";
import logoMielAmbre from "@/assets/logo-miel-ambre.png";
import mielAmbreSolutionLandscape from "@/assets/miel-ambre-solution-landscape.png";
import mielAmbreSolutionMobile from "@/assets/miel-ambre-solution-mobile.png";
import logoMugler from "@/assets/logo-mugler.png";
import muglerHero from "@/assets/mugler-hero-new.png";
import muglerSolution from "@/assets/mugler-solution-landscape-new.png";
import muglerSolutionMobile from "@/assets/mugler-solution-mobile-new.png";
import logoNvadt from "@/assets/logo-nvadt.png";
import nvadtSolution from "@/assets/nvadt-solution-landscape.jpg";
import nvadtSolutionMobile from "@/assets/nvadt-solution-mobile.jpg";
import logoTacosTacos from "@/assets/logo-tacos-tacos.png";
import tacosTacosHero from "@/assets/tacos-tacos-hero.png";
import tacosTacosSolution from "@/assets/tacos-tacos-solution-landscape.jpg";
import tacosTacosSolutionMobile from "@/assets/tacos-tacos-solution-mobile.jpg";
import logoTremplinJob from "@/assets/logo-tremplin-job.jpg";
import logoVilleGeneve from "@/assets/logo-ville-geneve-new.png";
import villeGeneveHero from "@/assets/ville-geneve-hero.png";
import villeGeneveSolution from "@/assets/ville-geneve-solution-landscape.png";
import villeGeneveSolutionMobile from "@/assets/ville-geneve-solution-mobile.png";
import logoMobilite360 from "@/assets/logo-mobilite360-new.png";
import mobilite360Solution from "@/assets/mobilite360-solution-landscape.png";
import mobilite360SolutionMobile from "@/assets/mobilite360-solution-mobile.png";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  name: string;
  logo: string;
  heroImage?: string;
  category: string;
  year: string;
  service: string;
  description: string;
  challenge: string;
  challengeTitle?: string;
  challengeSubtitle?: string;
  challengeDescription?: string;
  solution: string;
  solutionTitle?: string;
  solutionSubtitle?: string;
  solutionImage?: string;
  solutionImageMobile?: string;
  results: string[];
  resultsTitle?: string;
  resultsSubtitle?: string;
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  benefits?: Benefit[];
  images: string[];
}

const projectsData: Record<string, Project> = {
  "atman-therapie": {
    id: "atman-therapie",
    name: "Atman Thérapie",
    logo: logoAtman,
    heroImage: atmanPhoto,
    category: "Santé & Bien-être",
    year: "2025",
    service: "Stratégie Digitale & Contenu",
    description:
      "Création d'une présence digitale authentique pour un cabinet de thérapie, incluant la gestion de ses réseaux sociaux et la production de son contenu vidéo.",
    challenge: "Gain de visibilité, création d'une identité de marque fidèle à l'ADN et à l'expertise du cabinet.",
    challengeTitle: "Le Contexte",
    challengeSubtitle: "Comprendre les Enjeux",
    challengeDescription:
      "Pour Atman Thérapie, nous gérons ses réseaux sociaux avec une approche centrée sur l'authenticité et la bienveillance, créant un espace digital où chaque visiteur se sent accueilli et compris.",
    solution:
      "Développement d'une stratégie de contenu axée sur l'éducation et le bien-être, avec des visuels impactants et marquants",
    solutionTitle: "02. Notre Approche",
    solutionSubtitle: "La Solution Personnalisée",
    solutionImage: atmanSolution,
    solutionImageMobile: atmanSolutionMobile,
    results: ["+ 1200 abonnés", "+ 340'000 vus", "Structure stable et des vidéos qui fonctionnent"],
    resultsTitle: "03. Impact Mesuré",
    resultsSubtitle: "Résultats 1er mois",
    benefitsTitle: "04. Les Bénéfices",
    benefitsSubtitle: "Pourquoi Cette Stratégie Fonctionne",
    benefits: [
      {
        icon: "bolt",
        title: "Visibilité Accrue",
        description: "Une présence digitale forte qui attire et engage votre audience cible."
      },
      {
        icon: "clock",
        title: "Gain de Temps",
        description: "Une équipe dédiée qui gère tous les aspects de votre présence digitale."
      },
      {
        icon: "check",
        title: "Contenu Authentique",
        description: "Des publications qui reflètent fidèlement vos valeurs et votre expertise."
      },
      {
        icon: "users",
        title: "Engagement Communautaire",
        description: "Une communauté engagée qui se reconnaît dans votre message."
      }
    ],
    images: [logoAtman],
  },
  "king-kong": {
    id: "king-kong",
    name: "King Kong",
    logo: logoKingKong,
    heroImage: kingKongHero,
    category: "Fitness & Nutrition",
    year: "2025",
    service: "Stratégie Digitale & Contenu",
    description:
      "Création de contenu vidéo authentique pour un coach sportif & naturopathe, valorisant la performance et l'engagement.",
    challenge: "Se démarquer dans un marché saturé et attirer une clientèle engagée.",
    challengeTitle: "Le Contexte",
    challengeSubtitle: "Un Marché Compétitif",
    challengeDescription:
      "King Kong évoluait dans un secteur très concurrentiel. Notre mission était de créer du contenu engageant qui résonne avec une communauté passionnée de fitness.",
    solution: "Création de contenu motivant avec des transformations clients et des vidéos d'entraînement.",
    solutionTitle: "02. Notre Stratégie",
    solutionSubtitle: "Performance & Communauté",
    solutionImage: kingKongStrategyDesktop,
    solutionImageMobile: kingKongStrategyMobile,
    results: ["+ 250 abonnés", "+ 75'000 vus", "Multiplié par 4 son engagement initial"],
    resultsTitle: "03. Impact Mesuré",
    resultsSubtitle: "Résultats 1er mois",
    benefitsTitle: "04. L'Impact",
    benefitsSubtitle: "Du contenus optimisés",
    benefits: [
      {
        icon: "target",
        title: "Audience Ciblée",
        description: "Attraction d'une communauté passionnée et engagée dans le fitness."
      },
      {
        icon: "bolt",
        title: "Contenu Motivant",
        description: "Des vidéos qui inspirent et encouragent la transformation personnelle."
      },
      {
        icon: "check",
        title: "Authenticité",
        description: "Mise en avant de transformations réelles et de témoignages clients."
      },
      {
        icon: "users",
        title: "Communauté Active",
        description: "Engagement multiplié et fidélisation de l'audience."
      }
    ],
    images: [logoKingKong],
  },
  kurkuma: {
    id: "kurkuma",
    name: "Kurku-ma",
    logo: logoKurkuma,
    category: "Cosmétique",
    year: "2024",
    service: "Branding & E-commerce",
    description: "Développement de la marque et stratégie e-commerce pour des produits cosmétiques premium au curcuma.",
    challenge: "D'une marque en perte à une marque à plus de 1,5M de CA en 10 mois.",
    solution:
      "Création de campagnes publicitaires multi-canaux et de partenariats d'influence.\n\nOptimisation des marges, des offres et recrutement interne.\n\nOptimisation globale de l'entonnoir de vente (réseaux sociaux, site web, campagnes d'e-mailing).",
    solutionImage: kurkumaMissProvenceLandscape,
    solutionImageMobile: kurkumaMissProvence,
    results: ["+25'000 nouveaux clients", "+3,5 ROAS", "+1,5M de CA en 10 mois"],
    benefits: [
      {
        icon: "bolt",
        title: "ROI Exceptionnel",
        description: "Un retour sur investissement publicitaire de 3,5x avec une croissance soutenue."
      },
      {
        icon: "users",
        title: "Acquisition Massive",
        description: "25'000 nouveaux clients acquis grâce à des campagnes ciblées."
      },
      {
        icon: "trending",
        title: "Croissance Rapide",
        description: "1,5M de CA généré en 10 mois avec une stratégie e-commerce optimisée."
      },
      {
        icon: "check",
        title: "Optimisation Globale",
        description: "Amélioration complète de l'entonnoir de vente et des marges."
      }
    ],
    images: [logoKurkuma],
  },
  "lum-corp": {
    id: "lum-corp",
    name: "LUM.CORP",
    logo: logoLum,
    category: "Agence Marketing",
    year: "2024",
    service: "Identité de Marque & Site Web",
    description:
      "Création de notre propre identité visuelle et présence digitale pour incarner notre vision du marketing moderne.",
    challenge: "Créer une marque qui reflète innovation, créativité et résultats mesurables.",
    solution: "Design moderne avec des animations fluides et une mise en avant de nos réalisations.",
    results: ["40+ projets livrés", "95% de clients satisfaits", "Croissance continue"],
    benefits: [
      {
        icon: "bolt",
        title: "Innovation Créative",
        description: "Un design moderne qui reflète l'innovation et la créativité de notre approche."
      },
      {
        icon: "target",
        title: "Résultats Mesurables",
        description: "Une approche data-driven qui garantit des résultats concrets."
      },
      {
        icon: "check",
        title: "Expertise Reconnue",
        description: "40+ projets réussis et un taux de satisfaction client de 95%."
      },
      {
        icon: "users",
        title: "Accompagnement Complet",
        description: "Une équipe dédiée qui vous guide à chaque étape."
      }
    ],
    images: [logoLum],
  },
  "miel-ambre": {
    id: "miel-ambre",
    name: "Miel et Ambre",
    logo: logoMielAmbre,
    category: "Soin & Beauté",
    year: "2025",
    service: "Stratégie Digitale & Contenu",
    description:
      "La gestion des réseaux sociaux, mal assurée lors de leurs collaborations précédentes, les a menés à avoir une communauté fantôme et sans engagement.",
    challenge: "Redonner de la visibilité et une nouvelle énergie à leurs réseaux sociaux.",
    solution: "Mise en place d'un écosystème.",
    solutionImage: mielAmbreSolutionLandscape,
    solutionImageMobile: mielAmbreSolutionMobile,
    results: ["+1800 abonnés", "+500'000 vus", "Des bases solides et une nouvelle renommée"],
    benefits: [
      {
        icon: "users",
        title: "Communauté Engagée",
        description: "1800 nouveaux abonnés qualifiés et activement engagés."
      },
      {
        icon: "bolt",
        title: "Visibilité Retrouvée",
        description: "500'000 vues générées avec un contenu authentique et impactant."
      },
      {
        icon: "check",
        title: "Écosystème Structuré",
        description: "Une stratégie cohérente sur tous les canaux digitaux."
      },
      {
        icon: "trending",
        title: "Nouvelle Renommée",
        description: "Repositionnement de la marque avec une image moderne et attractive."
      }
    ],
    images: [logoMielAmbre],
  },
  mugler: {
    id: "mugler",
    name: "Mugler",
    logo: logoMugler,
    heroImage: muglerHero,
    category: "Mode & Luxe",
    year: "2024",
    service: "Campagne d'influence & Vidéo",
    description:
      "Création d'une vidéo dans le cadre d'une campagne d'influence pour la prestigieuse Maison de luxe MUGLER, visant à promouvoir sa nouvelle eau de parfum, \"Angel Elixir\".",
    challenge:
      "S'imprégner du brief spécifique tout en créant une atmosphère de puissance et de magie grâce à des effets spéciaux, couplant créativité audio et visuelle.",
    solution: "Un univers hors du commun, mélangeant désir, créativité et dark sensuality.",
    solutionImage: muglerSolution,
    solutionImageMobile: muglerSolutionMobile,
    results: ["Gain de visibilité", 'Certifié "MUGLER MUSE"', "Campagne validée"],
    benefits: [
      {
        icon: "target",
        title: "Prestige Luxe",
        description: "Une campagne d'influence pour une maison de luxe prestigieuse."
      },
      {
        icon: "bolt",
        title: "Créativité Audacieuse",
        description: "Un univers visuel unique mélangeant magie et dark sensuality."
      },
      {
        icon: "check",
        title: "Validation Officielle",
        description: "Certification 'MUGLER MUSE' et approbation de la campagne."
      },
      {
        icon: "users",
        title: "Impact Visibilité",
        description: "Gain de visibilité majeur pour la marque et le produit."
      }
    ],
    images: [logoMugler],
  },
  nvadt: {
    id: "nvadt",
    name: "NVADT",
    logo: logoNvadt,
    category: "Média",
    year: "2021-2023",
    service: "Stratégie Digitale & Contenu",
    description:
      "Gestion et mise en place des campagnes d'influence, synchronisation et structuration des événements et tournages vidéo.",
    challenge: "Augmenter la visibilité et l'engagement, tout en créant une base de scaling solide.",
    solution:
      "Une structuration et une renommée établies, afin que leurs médias puissent atteindre les objectifs souhaités.",
    solutionImage: nvadtSolution,
    solutionImageMobile: nvadtSolutionMobile,
    results: [
      "Collaborations avec de grandes personnalités publiques",
      "+ 450'000 vus",
      "Des bases solides qui leur ont permis d'avoir la lumière qu'ils méritaient",
    ],
    benefits: [
      {
        icon: "users",
        title: "Partenariats Prestigieux",
        description: "Collaborations établies avec de grandes personnalités publiques."
      },
      {
        icon: "bolt",
        title: "Visibilité Massive",
        description: "450'000 vues générées grâce à une stratégie d'influence efficace."
      },
      {
        icon: "check",
        title: "Structure Solide",
        description: "Mise en place d'une base de scaling pour une croissance durable."
      },
      {
        icon: "trending",
        title: "Reconnaissance Méritée",
        description: "Une renommée établie dans le secteur des médias."
      }
    ],
    images: [logoNvadt],
  },
  "tacos-tacos": {
    id: "tacos-tacos",
    name: "Tacos Tacos",
    logo: logoTacosTacos,
    heroImage: tacosTacosHero,
    category: "Fast-Food",
    year: "2023",
    service: "Design & Animation vidéo",
    description:
      "Refonte du design intérieur du restaurant \"Tacos Tacos\" et optimisation de l'expérience client via l'intégration d'animations vidéo promotionnelles sur les bornes de commande.",
    challenge: "Rajeunir la franchise à travers un design et des animations jeunes, dynamiques et esthétiques.",
    solution:
      "Des créations qui allient esthétisme et raffinement pour transformer l'expérience visuelle en un irrésistible appel à la gourmandise.",
    solutionImage: tacosTacosSolution,
    solutionImageMobile: tacosTacosSolutionMobile,
    results: ["Une hausse du chiffre d'affaires", "Un visuel rajeuni et modernisé", "Un local redynamisé"],
    benefits: [
      {
        icon: "trending",
        title: "Hausse du CA",
        description: "Augmentation significative du chiffre d'affaires grâce à une expérience client optimisée."
      },
      {
        icon: "bolt",
        title: "Design Moderne",
        description: "Un visuel rajeuni qui attire une clientèle jeune et dynamique."
      },
      {
        icon: "check",
        title: "Expérience Interactive",
        description: "Animations vidéo sur bornes qui transforment l'acte de commande."
      },
      {
        icon: "users",
        title: "Local Redynamisé",
        description: "Un espace modernisé qui crée une expérience mémorable."
      }
    ],
    images: [logoTacosTacos],
  },
  "tremplin-job": {
    id: "tremplin-job",
    name: "Tremplin Job",
    logo: logoTremplinJob,
    category: "Emploi & Formation",
    year: "2024",
    service: "Branding & Plateforme Digitale",
    description:
      "Refonte complète de la marque et création d'une plateforme pour faciliter l'insertion professionnelle.",
    challenge: "Rendre l'emploi accessible et donner confiance aux chercheurs d'emploi.",
    solution: "Plateforme intuitive avec ressources pédagogiques et mise en relation facilitée.",
    results: ["+800% d'inscriptions", "+500% de placements", "Partenariats avec 50+ entreprises"],
    benefits: [
      {
        icon: "trending",
        title: "Croissance Explosive",
        description: "800% d'augmentation des inscriptions sur la plateforme."
      },
      {
        icon: "users",
        title: "Placements Réussis",
        description: "500% d'augmentation des placements professionnels."
      },
      {
        icon: "check",
        title: "Réseau Étendu",
        description: "Partenariats établis avec plus de 50 entreprises."
      },
      {
        icon: "bolt",
        title: "Accessibilité",
        description: "Une plateforme intuitive qui donne confiance aux chercheurs d'emploi."
      }
    ],
    images: [logoTremplinJob],
  },
  "ville-geneve": {
    id: "ville-geneve",
    name: "Bureau Culturel",
    logo: logoVilleGeneve,
    heroImage: logoVilleGeneve,
    category: "Secteur Public",
    year: "2024",
    service: "Cours de communication digitale",
    description: "Donner des cours sur la stratégie de communication sur les réseaux sociaux.",
    challenge: "Créer un support de présentation avec un langage accessible à tout public.",
    solution:
      "Un cours d'une demi-journée au Bureau Culturel, afin d'enseigner la stratégie de communication sur les réseaux sociaux.",
    solutionImage: villeGeneveSolution,
    solutionImageMobile: villeGeneveSolutionMobile,
    results: [
      "+ 9 élèves satisfaits du cours",
      "Une meilleure compréhension de la manière de gagner en visibilité",
      "Un cours renouvelé par le client",
    ],
    benefits: [
      {
        icon: "users",
        title: "Satisfaction Élèves",
        description: "100% des participants satisfaits de la formation."
      },
      {
        icon: "bolt",
        title: "Compétences Acquises",
        description: "Meilleure compréhension des stratégies de visibilité digitale."
      },
      {
        icon: "check",
        title: "Langage Accessible",
        description: "Un contenu adapté à tous les niveaux de compétence."
      },
      {
        icon: "target",
        title: "Cours Renouvelé",
        description: "Le Bureau Culturel renouvelle sa confiance pour de nouvelles sessions."
      }
    ],
    images: [logoVilleGeneve],
  },
  "mobilite-360": {
    id: "mobilite-360",
    name: "Mobilité 360",
    logo: logoMobilite360,
    category: "Transport",
    year: "2024",
    service: "Graphisme",
    description: "Un logo représentant tous les services de cette entreprise.",
    challenge:
      'Réussir à concevoir un logo épuré incluant le maximum d\'éléments des services que "Mobilité 360"propose.',
    solution: "Un logo raffiné et subtil, correspondant aux valeurs de l'entreprise.",
    solutionImage: mobilite360Solution,
    solutionImageMobile: mobilite360SolutionMobile,
    results: [
      "Une entreprise satisfaite",
      "Une apparence professionnelle et élégante",
      "La demande a été réalisée à la perfection",
    ],
    benefits: [
      {
        icon: "check",
        title: "Client Satisfait",
        description: "Une entreprise pleinement satisfaite du résultat final."
      },
      {
        icon: "bolt",
        title: "Design Épuré",
        description: "Un logo raffiné qui intègre tous les services de l'entreprise."
      },
      {
        icon: "target",
        title: "Identité Professionnelle",
        description: "Une apparence élégante qui renforce la crédibilité."
      },
      {
        icon: "users",
        title: "Demande Parfaite",
        description: "Une réalisation qui correspond exactement aux attentes."
      }
    ],
    images: [logoMobilite360],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId] : null;

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Button onClick={() => navigate("/realisations")}>Retour aux réalisations</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Section 1: Hero with Project Info */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" size="sm" onClick={() => navigate("/realisations")} className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux réalisations
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src={project.logo} alt={project.name} className="h-20 w-auto object-contain" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                {project.name.toUpperCase()}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-semibold text-primary">{project.service}</span>
                </div>
                <div className="px-5 py-2 rounded-full bg-card border border-border">
                  <span className="text-sm font-medium text-foreground">{project.category}</span>
                </div>
                <div className="px-5 py-2 rounded-full bg-card border border-border">
                  <span className="text-sm font-medium text-foreground">{project.year}</span>
                </div>
              </div>

              <Button
                variant="hero"
                size="xl"
                className="rounded-full"
                onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
              >
                PRENDRE RENDEZ-VOUS
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-12 flex items-center justify-center">
                <img
                  src={project.heroImage || project.logo}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Le Défi - About the Project */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-background rounded-3xl p-12 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Le Défi</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                {project.challengeTitle || "Le Contexte"}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {project.challengeSubtitle || "Comprendre les Enjeux"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.challengeDescription ||
                  "Chaque projet commence par une compréhension approfondie des défis uniques auxquels fait face notre client. Nous analysons le marché, la concurrence et les opportunités pour élaborer une stratégie sur mesure."}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
              >
                Discuter de Votre Projet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Notre Solution - Central Visual */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              {project.solutionTitle || "02. Notre Approche"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {project.solutionSubtitle || "La Solution Personnalisée"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{project.solution}</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl p-4 md:p-16 border border-border">
              {/* Mobile - format adaptatif */}
              <div className="md:hidden rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center min-h-[400px]">
                <img
                  src={project.solutionImageMobile || project.logo}
                  alt={project.name}
                  className="w-full h-auto object-contain p-4"
                />
              </div>
              {/* Desktop - format vidéo */}
              <div className="hidden md:block aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={project.solutionImage || project.logo}
                  alt={project.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              {/* Caption for Kurkuma project */}
              {project.id === "kurkuma" && project.solutionImage && (
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Collaboration avec Miss Provence lors de l'événement Miss France
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Résultats & Impact - Grid Layout */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              {project.resultsTitle || "03. Impact Mesuré"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {project.resultsSubtitle || "Résultats Concrets"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result, index) => {
              const icons = [Users, TrendingUp, CheckCircle2];
              const Icon = icons[index] || CheckCircle2;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-background/80 border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="text-xl font-semibold text-foreground leading-relaxed">{result}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Feature Comparison / Benefits Grid */}
      {project.benefits && project.benefits.length > 0 && (
        <section className="py-20 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                {project.benefitsTitle || "04. Les Bénéfices"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {project.benefitsSubtitle || "Pourquoi Cette Stratégie Fonctionne"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {project.benefits.map((benefit, index) => {
                const getIconPath = (iconName: string) => {
                  switch (iconName) {
                    case "bolt":
                      return "M13 10V3L4 14h7v7l9-11h-7z";
                    case "clock":
                      return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
                    case "check":
                      return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
                    case "users":
                      return "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
                    case "target":
                      return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
                    case "trending":
                      return "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
                    default:
                      return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
                  }
                };

                return (
                  <div key={index} className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={getIconPath(benefit.icon)}
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-card to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              Votre Tour Maintenant
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Prêt pour Votre Transformation ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Rejoignez les entreprises qui ont déjà transformé leur présence digitale avec LUM.CORP. Discutons de votre
            projet et créons ensemble votre succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              className="rounded-full w-full sm:w-auto"
              onClick={() => window.open("https://calendly.com/contact-lumcorporate/45min?month=2025-11", "_blank")}
            >
              PRENDRE RENDEZ-VOUS
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="rounded-full w-full sm:w-auto"
              onClick={() => (window.location.href = "/contact")}
            >
              NOUS CONTACTER
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Réponse en moins de 24h</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span>Stratégie personnalisée</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Résultats garantis</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
