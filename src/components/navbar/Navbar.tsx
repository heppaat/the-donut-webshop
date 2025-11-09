import MobileMenuPanel from "@/components/navbar/MobileMenuPanel";
import DesktopNavbar from "@/components/navbar/DesktopNavbar";

function Navbar() {
  return (
    <nav className="fixed bg-white top-0 left-0 right-0 z-10 shadow-sm">
      <DesktopNavbar />
      <MobileMenuPanel />
    </nav>
  );
}

export default Navbar;
