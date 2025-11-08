import { useEffect, useRef, useState } from "react";
import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.mp4";
import video5 from "../assets/5.mp4";
import video6 from "../assets/6.mp4";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Video {
  id: string;
  videoUrl: string;
  posterUrl: string;
  title?: string;
}

const videos: Video[] = [
  {
    id: "1",
    videoUrl: video1,
    posterUrl: video1,
    title: "Exemple vidéo 1"
  },
  {
    id: "2",
    videoUrl: video2,
    posterUrl: video2,
    title: "Exemple vidéo 2"
  },
  {
    id: "3",
    videoUrl: video3,
    posterUrl: video3,
    title: "Exemple vidéo 3"
  },
  {
    id: "4",
    videoUrl: video4,
    posterUrl: video4,
    title: "Exemple vidéo 4"
  },
  {
    id: "5",
    videoUrl: video5,
    posterUrl: video5,
    title: "Exemple vidéo 5"
  },
  {
    id: "6",
    videoUrl: video6,
    posterUrl: video6,
    title: "Exemple vidéo 6"
  },
];

const VideoCard = ({ 
  video, 
  isPlaying, 
  onPlay,
  onPause
}: { 
  video: Video; 
  isPlaying: boolean;
  onPlay: (videoId: string) => void;
  onPause: () => void;
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Charge la vidéo et affiche la première frame
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded]);

  // Charge la première frame de la vidéo
  useEffect(() => {
    if (isLoaded && videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedMetadata = () => {
        // Force la vidéo à se positionner à 0 et afficher la première frame
        video.currentTime = 0;
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.load();

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [isLoaded]);

  // Gestion play/pause avec son activé automatiquement
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      if (isPlaying) {
        video.currentTime = 0;
        video.muted = false; // FORCE le son à être activé
        setIsMuted(false); // Met à jour l'état
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Erreur de lecture vidéo:", error);
            // Si le navigateur bloque (rare sur mobile), essaye avec mute
            video.muted = true;
            setIsMuted(true);
            video.play();
          });
        }
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = false; // Garde le son activé pour la prochaine lecture
        setIsMuted(false);
      }
    }
  }, [isPlaying]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay(video.id);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full group">
      <div className="aspect-[9/16] relative rounded-lg overflow-hidden bg-muted border border-border shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
          aria-label={video.title}
          onClick={handleVideoClick}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        {/* Bouton Play/Pause central */}
        {!isPlaying && (
          <div
            onClick={handleVideoClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Bouton Pause qui apparaît au hover quand la vidéo joue */}
        {isPlaying && (
          <div
            onClick={handleVideoClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <Pause className="w-8 h-8 text-black" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Bouton de contrôle du son - Visible sur mobile */}
        {isLoaded && isPlaying && (
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors shadow-lg z-10 md:opacity-0 md:group-hover:opacity-100"
            aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        )}

        {video.title && (
          <div className="absolute top-4 left-4 right-4 pointer-events-none">
            <h3 className="text-white text-sm font-semibold drop-shadow-lg">
              {video.title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePlay = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  const handlePause = () => {
    setPlayingVideoId(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nos </span>
            <span className="font-display text-gradient-blue">Réalisations Vidéo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos dernières créations de contenu vidéo pour nos clients
          </p>
        </div>

        {isVisible && (
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {videos.map((video) => (
                  <CarouselItem
                    key={video.id}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <VideoCard 
                      video={video} 
                      isPlaying={playingVideoId === video.id}
                      onPlay={handlePlay}
                      onPause={handlePause}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;