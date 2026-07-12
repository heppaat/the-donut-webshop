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
      <Logo size={38} />

      <p className="mt-0.5 hidden font-display text-xl text-foreground tablet:block">
        donut.shop
      </p>
    </Link>
  );
};
