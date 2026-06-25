import { ArrowRight, ShieldCheck, FlaskRound, Leaf } from "lucide-react"

const stats = [
  { value: "120+", label: "Standardized Extracts" },
  { value: "40+", label: "Countries Served" },
  { value: "99.9%", label: "Batch Consistency" },
]

const badges = [
  { icon: ShieldCheck, label: "GMP Certified" },
  { icon: FlaskRound, label: "HPLC Verified" },
  { icon: Leaf, label: "Traceable Sourcing" },
]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src="/images/botanical-field.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center scale-105"
      />

      {/* Gradient overlays — strong left for text readability, lets warm gold light through on right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/88 to-background/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/85"
        aria-hidden="true"
      />

      {/* Decorative editorial grid */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-7xl rule-grid opacity-20 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8 sm:pb-36 sm:pt-40">
        {/* Text content — left half */}
        <div className="max-w-2xl">
          <span className="eyebrow text-primary">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            GMP &amp; ISO Certified Manufacturer
          </span>

          <h1 className="display mt-8 text-pretty text-5xl text-foreground sm:text-6xl lg:text-[4.5rem]">
            The science of
            <span className="italic text-primary"> purity </span>
            in every botanical extract
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Nature Sole Industries Pvt Ltd manufactures high-purity plant extracts and active
            ingredients trusted by pharmaceutical, nutraceutical and wellness brands
            across the globe — engineered for potency, consistency and absolute
            traceability.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#ingredients"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Explore Ingredients
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground/20 bg-background/60 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-background/80 hover:text-primary"
            >
              Request Bulk Quote
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-heading text-4xl font-light tracking-tight text-foreground">
                  {s.value}
                </dd>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Floating badge cards — bottom right */}
      <div className="absolute bottom-10 right-6 hidden flex-col gap-3 lg:flex">
        {/* HPLC verified card */}
        <div className="animate-float w-56 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              HPLC Verified
            </p>
          </div>
          <p className="mt-2 font-heading text-sm font-medium leading-snug text-foreground">
            Every batch documented with a Certificate of Analysis.
          </p>
        </div>

        {/* Certification badges row */}
        <div className="flex gap-2">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card/90 px-3 py-3 shadow-lg backdrop-blur-md"
            >
              <b.icon className="size-5 text-primary" aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
