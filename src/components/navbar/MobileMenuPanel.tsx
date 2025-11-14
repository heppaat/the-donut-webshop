"use client";

import NavigationLinks from "./NavigationLinks";
import AuthSection from "./AuthSection";
import { cn } from "@/lib/utils";
import useNavbarContext from "@/hooks/useNavbarContext";
import styles from "./MobileMenuPanel.module.css";

function MobileMenuPanel() {
  const { isMobileMenuOpen, isClosing } = useNavbarContext();

  return (
    <div
      className={cn(
        "md:hidden",
        styles.panel,
        isMobileMenuOpen ? "block" : "hidden",
        isClosing && styles.closing
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-6 bg-white border-t border-gray-200 shadow-lg">
        {/* Mobile Navigation Links */}
        <NavigationLinks isMobile={true} />

        {/* Mobile Auth Section */}
        <div className="pt-4 border-t border-gray-200">
          <AuthSection isMobile={true} />
        </div>
      </div>
    </div>
  );
}
export default MobileMenuPanel;
