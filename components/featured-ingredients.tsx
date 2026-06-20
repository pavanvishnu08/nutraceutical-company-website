import { ArrowUpRight } from "lucide-react"
import { ingredients } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function FeaturedIngredients() {
  return (
    <section id="ingredients" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          align="left"
          eyebrow="Featured Ingredients"
          title="A portfolio of premium botanical actives"
          description="Standardized, traceable and clinically relevant extracts — manufactured to exacting specifications for global formulators."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.slice(0, 6).map((item, i) => (
            <article key={item.slug} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} powder with the raw botanical source`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* index marker */}
                <span className="absolute left-4 top-4 font-mono text-xs tabular-nums text-primary-foreground/90 mix-blend-difference">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* purity chip */}
                <span className="absolute right-4 top-4 rounded-full bg-background/95 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-primary shadow-sm backdrop-blur">
                  {item.purity} pure
                </span>
                {/* hover-reveal standardization band */}
                <div className="absolute inset-x-3 bottom-3 translate-y-3 rounded-xl bg-card/95 p-4 opacity-0 shadow-lg backdrop-blur transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                    Standardization
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                    {item.standardization}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4 border-t border-border pt-5">
                <div>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    {item.latin}
                  </p>
                </div>
                <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.benefit}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {item.applications.map((app) => (
                  <span
                    key={app}
                    className="text-xs font-medium text-foreground/55"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
