import HeroSection from "@/components/landing/_components/hero/HeroSection";
import AboutSection from "@/components/landing/_components/about/AboutSection";
import Shop from "@/components/landing/_components/shop/Shop";
import Spin from "@/components/landing/_components/behind-the-glaze/Spin";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Shop />
      <Spin />
    </main>
  );
}
