import Video from "@/components/video/Video";
import Image from "next/image";
import HeroRoad from "/public/road-desktop.png";
import EatText from "/public/eat.png";
import DonutText from "/public/donut.png";

function HeroSection() {
  return (
    <section
      id="landing-page-hero"
      className="relative flex flex-col justify-center items-center bg-primary w-full min-h-dvh scroll-mt-24"
    >
      <div className="relative h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col">
          <Image
            src={EatText}
            alt="eat text header"
            priority
            className="w-full h-auto max-w-[300px]"
          />
          <Image
            src={DonutText}
            alt="donut text header"
            priority
            className="w-full h-auto max-w-[500px]"
          />
        </div>

        {/* Donut Animation Container */}
        <div className="relative flex items-center justify-center pointer-events-none">
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
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto">
        <Image
          src={HeroRoad}
          alt="hero bottom road"
          priority
          className="w-full h-auto max-h-[100px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
