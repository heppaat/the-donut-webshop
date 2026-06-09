const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: ["The menu", "Gift boxes", "Bulk orders", "Gift cards"],
  },
  {
    title: "Eatery",
    links: ["Hours & address", "Pickup", "Delivery zones", "Catering"],
  },
  { title: "Company", links: ["About us", "Press", "Careers", "Contact"] },
];

function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t-2 border-foreground bg-primary text-primary-foreground"
    >
      {/* Oversized Y2K word strip — turquoise screened over magenta */}
      <div className="px-2 pt-15 text-center font-display text-[clamp(5.5rem,15vw,20rem)] leading-[0.85] tracking-[-0.05em] text-secondary mix-blend-screen">
        donut.
        <wbr />
        shop
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Newsletter — styled but inert until wired up */}
        <div>
          <div className="mb-3 font-display text-3xl">
            Get fresh donuts <br />
            in your inbox.
          </div>
          <p className="mb-5 font-mono text-sm text-primary-foreground/80">
            Weekly flavor drops, secret discounts, and donut-related life
            advice.
          </p>
          <form className="flex max-w-sm overflow-hidden rounded-full border-2 border-foreground bg-white">
            <input
              type="email"
              placeholder="you@donutmail.com"
              className="flex-1 bg-transparent py-3 pl-4 font-mono text-sm text-foreground outline-none placeholder:text-foreground/40"
            />
            <button
              type="button"
              className="bg-foreground px-4 py-3 font-display text-sm text-white"
            >
              Subscribe →
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-10 lg:contents">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="min-w-[140px] flex-1">
              <h4 className="mb-4 font-display text-sm tracking-[0.1em] uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-mono text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3 border-t border-primary-foreground/25 px-6 py-5 font-mono text-2xs tracking-label text-primary-foreground/80 uppercase">
        <span>© 2026 donut.shop · all rights reserved</span>
        <span>made with butter, sugar, and questionable sleep</span>
      </div>
    </footer>
  );
}

export default Footer;
