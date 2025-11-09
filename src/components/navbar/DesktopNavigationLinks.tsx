import Link from "next/link";
import { Button } from "@/components/ui/button";

function DesktopNavigationLinks({
  navigation,
}: {
  navigation: { name: string; href: string }[];
}) {
  return (
    <div className="flex gap-8">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <Button
            variant="ghost"
            className="nav-link px-0 font-semibold"
            size="lg"
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default DesktopNavigationLinks;
