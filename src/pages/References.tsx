import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Format = "all" | "long" | "short";

const References = () => {
  const [activeFormat, setActiveFormat] = useState<Format>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Exemple de données - à remplacer par vos vraies vidéos
  const videos = [
    {
      id: 1,
      title: "Campagne Instagram - Marque Lifestyle",
      format: "short",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      platform: "Instagram",
      views: "125K"
    },
    {
      id: 2,
      title: "Brand Story - Format Long",
      format: "long",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop",
      platform: "YouTube",
      views: "89K"
    },
    {
      id: 3,
      title: "TikTok Viral Challenge",
      format: "short",
      thumbnail: "https://images.unsplash.com/photo-1551817958-20c7c4d00c61?w=800&auto=format&fit=crop",
      platform: "TikTok",
      views: "250K"
    },
    {
      id: 4,
      title: "Documentaire Entreprise",
      format: "long",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop",
      platform: "YouTube",
      views: "45K"
    },
    {
      id: 5,
      title: "Reels - Tutoriel Rapide",
      format: "short",
      thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop",
      platform: "Instagram",
      views: "178K"
    },
    {
      id: 6,
      title: "Interview Client - Case Study",
      format: "long",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
      platform: "YouTube",
      views: "62K"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesFormat = activeFormat === "all" || video.format === activeFormat;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.platform.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFormat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            NOS RÉFÉRENCES
            <br />
            <span className="text-primary">VIDÉO</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Découvrez notre portfolio de contenus vidéo créés pour nos clients. 
            Du format court viral au format long storytelling, explorez notre expertise créative.
          </p>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Format Filters */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant={activeFormat === "all" ? "default" : "outline"}
                onClick={() => setActiveFormat("all")}
                className="rounded-full"
              >
                Tous
              </Button>
              <Button
                variant={activeFormat === "long" ? "default" : "outline"}
                onClick={() => setActiveFormat("long")}
                className="rounded-full"
              >
                Format Long
              </Button>
              <Button
                variant={activeFormat === "short" ? "default" : "outline"}
                onClick={() => setActiveFormat("short")}
                className="rounded-full"
              >
                Format Court
              </Button>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFormat !== "all" && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Filtre actif:</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveFormat("all")}
                className="rounded-full h-7 text-xs"
              >
                {activeFormat === "long" ? "Format Long" : "Format Court"} ✕
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucune vidéo ne correspond à vos critères de recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Format Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-sm text-foreground">
                        {video.format === "long" ? "Format Long" : "Format Court"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.platform}</span>
                      <span>{video.views} vues</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Prêt à créer du contenu
            <br />
            <span className="text-primary">qui cartonne ?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discutons de votre projet et créons ensemble des vidéos qui marquent les esprits.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="rounded-full text-base px-10 py-6"
            onClick={() => window.open('https://calendly.com/contact-lumcorporate/45min?month=2025-11', '_blank')}
          >
            PRENDRE RDV
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;
