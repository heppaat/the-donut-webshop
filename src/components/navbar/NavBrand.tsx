import Link from "next/link";
import Logo from "@/components/ui/Logo";

/**
 * Brand lockup: logo always visible; the `donut.shop` wordmark appears only at
 * `tablet` (≥900px) and up. The whole lockup links home. `gap-4` is inert when
 * the wordmark is hidden (only one child to space).
 */
export const NavBrand = () => {
  return (
    <Link href="/" className="flex h-12 items-center gap-4">
      <Logo isJustLogo logoHeight="46px" />
      <p className="hidden font-display text-2xl text-foreground tablet:block">
        donut.shop
      </p>
    </Link>
  );
};
