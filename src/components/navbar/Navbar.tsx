import { ScrollHeader } from "@/components/navbar/ScrollHeader";
import { NavBrand } from "@/components/navbar/NavBrand";
import { DynamicIsland } from "@/components/navbar/DynamicIsland";
import { NavActions } from "@/components/navbar/NavActions";

function Navbar() {
  return (
    <ScrollHeader>
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Left: logo + wordmark */}
        <NavBrand />

        {/* Center: dynamic-island nav pill (desktop only) */}
        <DynamicIsland />

        {/* Right: cart + CTA */}
        <NavActions />
      </div>
    </ScrollHeader>
  );
}

export default Navbar;
