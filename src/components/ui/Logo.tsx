import Image, { ImageProps } from "next/image";
import LogoWithText from "/public/Logo/donut-logo-text.png";
import JustLogo from "/public/Logo/donut-logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  logoHeight?: string;
  isLink?: boolean;
  isJustLogo?: boolean;
} & Omit<ImageProps, "src" | "alt">;

const Logo = ({
  className,
  logoHeight,
  isLink = false,
  isJustLogo,
  ...rest
}: LogoProps) => {
  const src = isJustLogo ? JustLogo : LogoWithText;

  const logoStyle = {
    height: logoHeight || "auto",
    width: "auto",
  };

  const image = (
    <Image
      {...rest}
      src={src}
      alt="Logo"
      style={logoStyle}
      className={cn("shrink-0", className)}
      priority
    />
  );

  return isLink ? (
    <Link href="/" className="shrink-0">
      {image}
    </Link>
  ) : (
    image
  );
};
export default Logo;
