import Link from "next/link";
import Logo from "@/components/ui/Logo";

/**
 * Brand lockup: logo always visible; the `donut.shop` wordmark appears only at
 * `tablet` (≥900px) and up. The whole lockup links home. `gap-4` is inert when
 * the wordmark is hidden (only one child to space).
 */
export const NavBrand = () => {
  return (
    <Link href="/" className="flex h-11 items-center gap-4">
      <div className="flex h-full items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 shadow-brutal-sm">
        <Logo isJustLogo logoHeight="30px" />
        <p className="hidden font-display text-2xl text-foreground tablet:block">
          donut.shop
        </p>
      </div>
    </Link>
  );
};
