import Image from "next/image";
import HeroRoad from "/public/road-desktop.png";
import EatText from "/public/eat.png";
import DonutText from "/public/donut.png";
import DonutImage from "/public/donut_square.png";
import { Marquee } from "@/components/landing/_components/hero/Marquee";

function HeroSection() {
  return (
    <section
      id="landing-page-hero"
      className="relative isolate flex min-h-dvh w-full scroll-mt-24 flex-col items-center justify-center bg-primary"
    >
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 px-4 md:flex-row">
        <div className="flex flex-col">
          <Image
            src={EatText}
            alt="eat text header"
            priority
            className="h-auto w-full max-w-[300px]"
          />
          <Image
            src={DonutText}
            alt="donut text header"
            priority
            className="h-auto w-full max-w-[500px]"
          />
        </div>
        {/*Donut Image*/}
        <div>
          <Image
            src={DonutImage}
            alt="donut hero"
            priority
            className="h-auto w-full"
          />
        </div>
        {/* Donut Animation Container */}
        {/*<div className="relative flex items-center justify-center pointer-events-none">
          <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-2xl z-10"></div>
          <div className="relative z-20">
            <Video
              src="/videos/donut-hero"
              delayAfterEnd={1000}
              startDelay={2000}
              width={500}
              height={500}
            />
          </div>
        </div>*/}
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
