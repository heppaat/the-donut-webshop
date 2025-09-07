"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const isSmallDevice = useMediaQuery("(max-width: 1023px)");
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLandingPage) {
    return (
      <nav className="fixed bg-white top-0 left-0 right-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto py-3 px-6 flex items-center justify-between">
          <div className="relative w-[200px] h-[50px] overflow-hidden">
            <Logo
              logoHeight="1.5rem"
              isLink
              className={cn(
                "absolute top-1/2 -translate-y-1/2 transition-all duration-400",
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
            {/*absolute left-0 top-0 -translate-x-full*/}
          </div>
          <div className="flex items-center gap-16">
            <div className="flex gap-8">
              <Button
                variant="ghost"
                className="nav-link px-0 font-semibold"
                size="lg"
              >
                Shop
              </Button>
              <Button
                variant="ghost"
                className="nav-link px-0 font-semibold"
                size="lg"
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="nav-link px-0 font-semibold"
                size="lg"
              >
                Contact
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                Log In
              </Button>
              <Button variant="default" size="lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
