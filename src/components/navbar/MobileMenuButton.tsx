"use client";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import useNavbarContext from "@/hooks/useNavbarContext";

function MobileMenuButton() {
  const { isMobileMenuOpen, toggleMobileMenu } = useNavbarContext();
  return (
    <div className="md:hidden flex items-center">
      <button onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
export default MobileMenuButton;
