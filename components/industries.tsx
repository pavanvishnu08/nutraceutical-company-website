import { Pill, Leaf, Cookie, Sparkle, Ship } from "lucide-react"

const industries = [
  { icon: Pill, title: "Pharmaceuticals", description: "API-grade actives for regulated drug formulations." },
  { icon: Leaf, title: "Nutraceuticals", description: "Standardized extracts for capsules, tablets and softgels." },
  { icon: Cookie, title: "Functional Foods", description: "Fortification ingredients for food and beverage." },
  { icon: Sparkle, title: "Wellness Brands", description: "Premium actives for modern supplement labels." },
  { icon: Ship, title: "Export Markets", description: "Compliant bulk supply for distributors worldwide." },
]

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-foreground py-24 sm:py-32">
      <img
        src="/images/botanical-field.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-foreground/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
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
            brands, formulators rely on Verdantia for dependable, compliant supply.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border-t border-background/15 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="group relative bg-transparent py-9 transition-colors duration-300 sm:px-6 lg:first:pl-0"
            >
              <span className="font-mono text-xs tabular-nums text-background/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-6 flex size-12 items-center justify-center rounded-full border border-background/20 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-primary">
                <ind.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-heading text-xl font-medium text-background">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
