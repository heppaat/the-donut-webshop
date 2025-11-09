"use client";

import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function LogoSection() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Logo isJustLogo logoHeight="3rem" />
      </div>

      <div className="hidden md:block relative w-[200px] h-[50px] overflow-hidden">
        <Logo
          logoHeight="1.5rem"
          isLink
          className={cn(
            "absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-out",
            isScrolled
              ? "left-full translate-x-full"
              : "left-1/2 -translate-x-1/2"
          )}
        />
        <Logo
          logoHeight="3rem"
          isJustLogo
          isLink
          className={cn(isScrolled ? "logo-slide-in" : "logo-slide-out")}
        />
      </div>
    </>
  );
}

export default LogoSection;
