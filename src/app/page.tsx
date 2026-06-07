import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import Shop from "@/components/landing/Shop";
import DonutSection from "@/components/blender/DonutSection";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Shop />
      <DonutSection />
    </main>
  );
}
