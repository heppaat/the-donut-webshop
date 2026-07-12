import Image from "next/image";
import HeroRoad from "/public/road-desktop.png";
import EatText from "/public/eat.png";
import DonutText from "/public/donut.png";
import DonutImage from "/public/donut_square.png";
import { Marquee } from "@/components/landing/_components/hero/Marquee";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="landing-page-hero"
      className="relative isolate flex min-h-dvh w-full scroll-mt-24 flex-col overflow-x-clip bg-primary"
    >
      <div className="relative mx-auto my-28 flex w-full max-w-7xl flex-1 flex-col items-center justify-evenly gap-8 px-6 md:flex-row">
        <div className="flex flex-col">
          <div className="mb-12 hidden w-fit rounded-full border-2 border-foreground bg-secondary px-4 py-1 font-mono text-xs font-medium tracking-label md:block">
            ▸ BEST SELLER · FROM $3.50
          </div>
          <Image
            src={EatText}
            alt="eat text header"
            priority
            className="h-auto w-full max-w-[220px] md:max-w-[300px]"
          />
          <Image
            src={DonutText}
            alt="donut text header"
            priority
            className="h-auto w-full max-w-[500px]"
          />
          <p className="text my-12 hidden max-w-[440px] font-mono text-sm leading-relaxed text-background md:block">
            Strawberry Sprinkle. Glazed in a hot-pink mood. 12 sprinkles per
            donut, guaranteed. Free delivery on orders over $20 - 45 minutes,
            oven to door.
          </p>
          <Button
            asChild
            className="hidden h-11 w-fit rounded-full border-2 border-transparent bg-foreground font-semibold text-background hover:border-foreground has-[>svg]:px-6 md:flex"
          >
            <a href="#shop">
              Order now
              <ArrowRight className="size-4" strokeWidth={3} />
            </a>
          </Button>
        </div>
        {/*Donut Image*/}
        <div className="relative flex items-center justify-center">
          {/* Soft radial white glow behind the donut — a modern glass accent,
              kept clear of the flat brutalist surfaces. */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_60%)]"
          />
          <Image
            src={DonutImage}
            alt="donut hero"
            priority
            className="relative h-auto w-full max-w-[250px] md:max-w-[350px]"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 z-20">
        <div className="mx-auto max-w-7xl">
          <Image
            src={HeroRoad}
            alt="hero bottom road"
            priority
            className="h-auto max-h-[100px] w-full"
          />
        </div>
        <Marquee />
      </div>
    </section>
  );
}

export default HeroSection;
