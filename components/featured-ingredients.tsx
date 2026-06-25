import Link from "next/link"
import { Star, BadgeCheck, ArrowUpRight } from "lucide-react"
import { ingredients } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturedIngredients() {
  return (
    <section id="ingredients" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            index="01"
            align="left"
            eyebrow="Featured Ingredients"
            title="A portfolio of premium botanical actives"
            description="Standardized, traceable and clinically relevant extracts — manufactured to exacting specifications for global formulators."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.slice(0, 6).map((item, i) => (
            <ScrollReveal key={item.slug} direction="scale" delay={i * 70}>
              <Link
                href={`/products/${item.slug}`}
                className="card-3d group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20"
              >
                {/* Product image */}
                <div className="relative overflow-hidden bg-secondary" style={{ height: "240px" }}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.name} botanical extract`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />

                  {/* Index badge */}
                  <span className="absolute left-3 top-3 rounded-lg bg-black/30 px-2 py-0.5 font-mono text-[11px] tabular-nums text-white/90 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Purity badge — top right */}
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-primary-foreground shadow-lg">
                    <BadgeCheck className="size-3" />
                    {item.purity} pure
                  </span>

                  {/* Standardization reveal on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/95 via-foreground/80 to-transparent p-4 transition-transform duration-400 ease-out group-hover:translate-y-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                      Standardization
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      {item.standardization}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Category label */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category}
                  </p>

                  {/* Product name + latin */}
                  <div className="mt-1.5">
                    <h3 className="font-heading text-xl font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs italic text-muted-foreground">{item.latin}</p>
                  </div>

                  {/* Quality stars */}
                  <div className="mt-2.5 flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <Star key={n} className="size-3.5 fill-gold text-gold" />
                    ))}
                    <span className="ml-1 text-[11px] text-muted-foreground">GMP Certified</span>
                  </div>

                  {/* Benefit description */}
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.benefit}
                  </p>

                  {/* Application tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.applications.slice(0, 2).map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/60"
                      >
                        {app}
                      </span>
                    ))}
                    {item.applications.length > 2 && (
                      <span className="text-[11px] text-muted-foreground">
                        +{item.applications.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* CTA footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-semibold text-primary">Request Quote</span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
