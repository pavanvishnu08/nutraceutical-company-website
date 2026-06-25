import { Pill, Leaf, Cookie, Sparkle, Ship } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const industries = [
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "API-grade actives for regulated drug formulations.",
    stat: "GMP Compliant",
  },
  {
    icon: Leaf,
    title: "Nutraceuticals",
    description: "Standardized extracts for capsules, tablets and softgels.",
    stat: "100+ SKUs",
  },
  {
    icon: Cookie,
    title: "Functional Foods",
    description: "Fortification ingredients for food and beverage.",
    stat: "ISO 22000",
  },
  {
    icon: Sparkle,
    title: "Wellness Brands",
    description: "Premium actives for modern supplement labels.",
    stat: "White Label",
  },
  {
    icon: Ship,
    title: "Export Markets",
    description: "Compliant bulk supply for distributors worldwide.",
    stat: "40+ Countries",
  },
]

export function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-foreground py-24 sm:py-32"
    >
      {/* Background botanical field */}
      <img
        src="/images/botanical-field.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-105 object-cover opacity-20"
      />
      {/* Gradient wash */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground/95 via-foreground/85 to-foreground/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tabular-nums text-accent">05</span>
              <span className="eyebrow text-accent">Industries We Serve</span>
            </div>
            <h2 className="display mt-5 text-pretty text-4xl text-background sm:text-5xl">
              Trusted across the global wellness value chain
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-background/70">
              From regulated pharmaceutical manufacturers to fast-growing wellness
              brands, formulators rely on Nature Sole Industries for dependable, compliant supply.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} direction="scale" delay={i * 80}>
              <div className="border-sweep group relative flex flex-col overflow-hidden rounded-2xl border border-background/10 bg-background/5 p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:border-accent/30 hover:bg-background/10 hover:shadow-2xl hover:shadow-accent/10">
                {/* Gradient hover fill */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <span className="relative font-mono text-[10px] tabular-nums text-background/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative mt-6 flex size-14 items-center justify-center rounded-2xl border border-background/15 bg-background/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20">
                  <ind.icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className="relative mt-6 font-heading text-lg font-semibold text-background">
                  {ind.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-background/60">
                  {ind.description}
                </p>

                {/* Stat label */}
                <div className="relative mt-5 flex items-center gap-2">
                  <span className="h-px w-4 bg-accent/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent/70">
                    {ind.stat}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
