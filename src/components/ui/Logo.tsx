import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Rendered width/height in px (the mark is square). */
  size?: number;
  isLink?: boolean;
};

/**
 * Ring mark: dough + hole torus with a turquoise glaze-drip wedge and
 * sprinkles. Reads clearly at both navbar (~30px) and large-poster sizes.
 */
const Logo = ({ className, size = 40, isLink = false }: LogoProps) => {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("logo-mark block shrink-0", className)}
    >
      <circle cx="50" cy="50" r="46" fill="#1a1a1a" />
      <circle cx="50" cy="50" r="46" fill="#d551c1" />
      <path d="M50 4a46 46 0 0 1 46 46c0 14-6.5 26-16 34L52 50z" fill="#1ccbfd" />
      <circle cx="50" cy="50" r="18" fill="#1a1a1a" />
      <circle cx="50" cy="50" r="14" fill="#fcfcfc" />
      <circle cx="33" cy="30" r="4.2" fill="#fcfcfc" />
      <circle cx="68" cy="26" r="3.2" fill="#1a1a1a" />
      <circle cx="74" cy="62" r="3.6" fill="#fcfcfc" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" strokeWidth="4" />
    </svg>
  );

  return isLink ? (
    <Link href="/" className="shrink-0">
      {mark}
    </Link>
  ) : (
    mark
  );
};

export default Logo;
