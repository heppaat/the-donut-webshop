import { DONUTS } from "@/components/landing/donuts";
import { DonutCard } from "@/components/landing/DonutCard";

function Shop() {
  return (
    <section
      id="shop"
      className="relative scroll-mt-24 border-y-2 border-foreground bg-background px-6 py-20 md:py-30"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-14">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-0.5 w-7 bg-primary" />
              <span>(03) The menu</span>
            </div>
            <h2 className="font-display text-5xl leading-display tracking-display text-foreground md:text-8xl">
              Pick your <br />
              <span className="font-accent italic text-primary">pleasure.</span>
            </h2>
          </div>
          <p className="max-w-[360px] font-mono text-sm leading-relaxed text-foreground/60">
            Six rotating flavors, baked daily. Click any donut to add it to your
            order — your box builds itself in the corner of the screen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-7">
          {DONUTS.map((donut) => (
            <DonutCard key={donut.id} {...donut} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
