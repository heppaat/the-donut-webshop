import Image, { ImageProps } from "next/image";
import LogoWithText from "/public/Logo/donut-logo-text.png";
import JustLogo from "/public/Logo/donut-logo.png";
import Link from "next/link";

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
      className={className}
      priority
    />
  );

  return isLink ? <Link href="/">{image}</Link> : image;
};
export default Logo;
