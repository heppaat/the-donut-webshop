import MobileNavigationLinks from "@/components/navbar/MobileNavigationLinks";
import DesktopNavigationLinks from "@/components/navbar/DesktopNavigationLinks";

interface NavigationLinksProps {
  isMobile?: boolean;
}

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function NavigationLinks({ isMobile = false }: NavigationLinksProps) {
  return isMobile ? (
    <MobileNavigationLinks navigation={navigation} />
  ) : (
    <DesktopNavigationLinks navigation={navigation} />
  );
}

export default NavigationLinks;
