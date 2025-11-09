"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useNavbarContext from "@/hooks/useNavbarContext";
import styles from "./MobileMenuPanel.module.css";

function MobileNavigationLinks({
  navigation,
}: {
  navigation: { name: string; href: string }[];
}) {
  const { closeMobileMenu } = useNavbarContext();

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div className="flex flex-col">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} onClick={handleLinkClick} className={styles.menuItem}>
          <Button
            variant="ghost"
            className="w-full justify-start text-left p-3 h-auto text-base font-medium"
            size="lg"
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default MobileNavigationLinks;
