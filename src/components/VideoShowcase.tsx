import { useEffect, useRef, useState } from "react";
import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.mp4";
import video5 from "../assets/5.mp4";
import video6 from "../assets/6.mp4";
import { Volume2, VolumeX } from "lucide-react";
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

// Exemple de vidéos - vous pouvez les remplacer par vos propres vidéos
const videos: Video[] = [
  {
    id: "1",
    videoUrl: video1,
    posterUrl: "",
    title: "Exemple vidéo 1"
  },
  {
    id: "2",
    videoUrl: video2,
    posterUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=711&fit=crop",
    title: "Exemple vidéo 2"
  },
  {
    id: "3",
    videoUrl: video3,
    posterUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=711&fit=crop",
    title: "Exemple vidéo 3"
  },
  {
    id: "4",
    videoUrl: video4,
    posterUrl: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=400&h=711&fit=crop",
    title: "Exemple vidéo 4"
  },
  {
    id: "5",
    videoUrl: video5,
    posterUrl: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=400&h=711&fit=crop",
    title: "Exemple vidéo 5"
  },
  {
    id: "6",
    videoUrl: video6,
    posterUrl: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=400&h=711&fit=crop",
    title: "Exemple vidéo 6"
  },
];

const VideoCard = ({ video }: { video: Video }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full group">
      <div className="aspect-[9/16] relative rounded-lg overflow-hidden bg-muted border border-border shadow-lg">
        {isLoaded ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            loop
            muted={isMuted}
            preload="metadata"
            poster={video.posterUrl}
            aria-label={video.title}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        ) : (
          <img
            src={video.posterUrl}
            alt={video.title || "Aperçu vidéo"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}

        {isLoaded && (
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
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
          <div className="absolute top-4 left-4 right-4">
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
                    <VideoCard video={video} />
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
