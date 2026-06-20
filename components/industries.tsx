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
    <section id="industries" className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      <img
        src="/images/botanical-field.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-foreground/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-pretty font-heading text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl">
            Trusted across the global wellness value chain
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-background/70">
            From regulated pharmaceutical manufacturers to fast-growing wellness
            brands, formulators rely on Verdantia for dependable, compliant supply.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group bg-foreground p-7 transition-colors duration-300 hover:bg-primary"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-background/10 text-accent transition-colors group-hover:bg-background/15 group-hover:text-primary-foreground">
                <ind.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-background">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65 group-hover:text-primary-foreground/80">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
