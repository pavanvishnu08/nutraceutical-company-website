import { Check } from "lucide-react"
import { ingredients } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function FeaturedIngredients() {
  return (
    <section id="ingredients" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Ingredients"
          title="A portfolio of premium botanical actives"
          description="Standardized, traceable and clinically relevant extracts — manufactured to exacting specifications for global formulators."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(45,106,79,0.3)]"
            >
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} powder with the raw botanical source`}
                  className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  Purity {item.purity}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm italic text-muted-foreground">{item.latin}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.benefit}
                </p>

                <div className="mt-5 rounded-lg bg-secondary px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Standardization
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.standardization}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.applications.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/70"
                    >
                      <Check className="size-3 text-primary" aria-hidden="true" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
