import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const MARQUEE_ITEMS = [
  "fresh batch ready",
  "free delivery over $20",
  "made by hand at 4am",
  "twelve flavors weekly",
  "no shortcuts, ever",
  "since twenty-twenty-four",
];

// 4 identical copies; the track translates one quarter to loop seamlessly.
const COPIES = 4;

type MarqueeProps = {
  items?: string[];
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export const Marquee = ({
  items = MARQUEE_ITEMS,
  speed = 30,
  reverse = false,
  className,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "marquee overflow-hidden border-y-[3px] border-foreground bg-secondary py-2 font-display tracking-[0.02em] whitespace-nowrap text-foreground uppercase select-none sm:py-3.5",
        className
      )}
    >
      <div
        className="marquee-track flex w-max"
        data-reverse={reverse}
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {Array.from({ length: COPIES }).map((_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex flex-none items-center"
          >
            {items.map((item, i) => (
              <li key={i} className="px-3 text-base sm:px-7 sm:text-[22px]">
                {item}{" "}
                <span className="opacity-60" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
