import { DesktopHeader } from "@/components/navbar/DesktopHeader";
import { MobileHeader } from "@/components/navbar/MobileHeader";
import { NavBrand } from "@/components/navbar/NavBrand";
import { DynamicIsland } from "@/components/navbar/DynamicIsland";
import { NavActions } from "@/components/navbar/NavActions";

// Two independent headers, switched purely by CSS: DesktopHeader is `md:block`,
// MobileHeader is `md:hidden`. Each owns its own scroll behavior and styling;
// the mobile menu state lives inside MobileHeader.
function NavBar() {
  return (
    <>
      <DesktopHeader>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          {/* Left: logo + wordmark (wordmark shows at `tablet` and up). */}
          <NavBrand />

          {/* Center: dynamic-island nav pill. `mx-auto` lets it sit centered
              between the brand and NavActions with equal gaps on both sides
              (in flow, so it can't overlap them). */}
          <DynamicIsland />

          {/* Right: cart + CTA */}
          <NavActions />
        </div>
      </DesktopHeader>

      <MobileHeader />
    </>
  );
}

export default NavBar;
