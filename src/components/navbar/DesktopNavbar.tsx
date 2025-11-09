import LogoSection from "@/components/navbar/LogoSection";
import NavigationLinks from "@/components/navbar/NavigationLinks";
import AuthSection from "@/components/navbar/AuthSection";
import MobileMenuButton from "@/components/navbar/MobileMenuButton";

function DesktopNavbar() {
  return (
    <div className="max-w-6xl mx-auto py-3 px-6 flex items-center justify-between">
      <LogoSection />
      <div className="hidden md:flex items-center gap-16">
        <NavigationLinks />
        <AuthSection />
      </div>
      <MobileMenuButton />
    </div>
  );
}

export default DesktopNavbar;
