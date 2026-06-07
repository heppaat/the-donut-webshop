import Image from "next/image";
import DonutSquare from "/public/donut_square.png";

const STATS = [
  { n: "6", label: "flavors,\nrotating weekly" },
  { n: "4am", label: "fold time,\nevery day" },
  { n: "~38", label: "minutes from\noven to door" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-background px-6 py-20 md:py-30"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-label text-primary">
          <span className="h-0.5 w-7 bg-primary" />
          <span>(02) About us</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] md:items-center lg:gap-20">
          {/* Text column */}
          <div>
            <h2 className="font-display text-5xl leading-display tracking-display text-foreground md:text-7xl">
              We believe a donut <br />
              should make you{" "}
              <span className="font-accent italic text-primary">
                smile
              </span>{" "}
              <br />
              before you bite it.
            </h2>

            <p className="mt-8 max-w-[540px] text-lg leading-relaxed text-foreground/70">
              We&apos;re a tiny pink kitchen on the corner of nowhere &amp;
              nice. Every morning at 4am we fold dough, brew glaze, and chase
              sprinkles around the counter. By the time you&apos;re waking up,
              the boxes are warm and the icing is set.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground pt-8 sm:gap-8">
              {STATS.map(({ n, label }) => (
                <div key={n}>
                  <div className="font-display text-5xl leading-none tracking-display text-foreground sm:text-6xl">
                    {n}
                  </div>
                  <div className="mt-2 whitespace-pre-line font-mono text-xs uppercase leading-snug text-foreground/60">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticker collage */}
          <div className="relative aspect-[1/1.1]">
            {/* Big pink card — donut stays static */}
            <div className="absolute left-[5%] top-[5%] h-[75%] w-[75%] overflow-hidden rounded-3xl border-2 border-foreground bg-primary shadow-brutal-lg">
              <Image
                src={DonutSquare}
                alt="A handmade donut"
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-contain p-6"
              />
            </div>

            {/* Sticker A — spinning badge */}
            <div className="absolute right-[8%] top-0 grid size-[140px] animate-spin-slow place-items-center rounded-full border-2 border-foreground bg-secondary text-center font-display text-base leading-[1.1] text-foreground">
              <span>
                HAND-
                <br />
                MADE
                <br />
                DAILY
              </span>
            </div>

            {/* Sticker B — note to self */}
            <div className="absolute bottom-[8%] right-0 max-w-[220px] -rotate-[4deg] rounded-xl border-2 border-foreground bg-background px-5 py-3.5 font-mono text-xs leading-relaxed text-foreground shadow-[6px_6px_0_var(--primary)]">
              <strong className="mb-1.5 block font-display text-sm">
                ✦ NOTE TO SELF
              </strong>
              &quot;Use real butter. Always. Never compromise on the
              glaze.&quot;
            </div>

            {/* Sticker C — since 2024 */}
            <div className="absolute bottom-[2%] left-0 -rotate-[8deg] rounded-full bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-background">
              ★ since 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
