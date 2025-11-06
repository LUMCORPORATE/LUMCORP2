import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AvailabilityAlert from "@/components/AvailabilityAlert";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import Agency from "@/components/Agency";
import Clients from "@/components/Clients";
import VideoShowcase from "@/components/VideoShowcase";
import OrbitView3D from "@/components/OrbitView3D";
import Services from "@/components/Services";
import Transformation from "@/components/Transformation";
import Gains from "@/components/Gains";
import Urgency from "@/components/Urgency";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <Stats />
      <Pricing />
      <AvailabilityAlert />
      <Benefits />
      <Agency />
      <Clients />
      <VideoShowcase />
      <OrbitView3D />
      <Transformation />
      <Gains />
      <Urgency />
      <Testimonials />
      <Guarantee />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
