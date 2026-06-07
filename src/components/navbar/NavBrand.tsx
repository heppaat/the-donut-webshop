import Logo from "@/components/ui/Logo";

export const NavBrand = () => {
  return (
    <div className="flex items-center gap-4">
      <Logo logoHeight="46px" isLink isJustLogo />
      <p className="font-display text-2xl text-foreground">donut shop</p>
    </div>
  );
};
