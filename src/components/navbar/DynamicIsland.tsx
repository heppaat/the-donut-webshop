import Link from "next/link";
import { NAV_LINKS } from "@/components/navbar/constants";

/**
 * Desktop-only center nav pill ("dynamic island").
 * Hidden below `lg`; the mobile nav is a separate component (built later).
 */
export const DynamicIsland = () => {
  return (
    <nav className="absolute left-1/2 hidden h-11 -translate-x-1/2 items-center gap-1 rounded-full border-[1px] border-white/20 bg-white/30 p-1 backdrop-blur-md lg:flex">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center rounded-full px-5 py-1.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
