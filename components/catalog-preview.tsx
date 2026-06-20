"use client"

import { useEffect, useState } from "react"
import { Eye, X, ArrowRight } from "lucide-react"
import { ingredients, type Ingredient } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export function CatalogPreview() {
  const [active, setActive] = useState<Ingredient | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="catalog" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Product Catalog"
          title="Browse our standardized extract catalog"
          description="A preview of our most-requested actives. Use quick view for specifications, or request the full catalog."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.slice(0, 4).map((item) => (
            <div
              key={item.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="overflow-hidden bg-secondary">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.standardization}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="absolute inset-x-4 bottom-4 inline-flex translate-y-3 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Eye className="size-4" aria-hidden="true" />
                Quick View
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-secondary"
          >
            <a href="#inquiry">
              Request Full Catalog
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
        >
          <button
            type="button"
            aria-label="Close quick view"
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="grid sm:grid-cols-2">
              <img
                src={active.image || "/placeholder.svg"}
                alt={active.name}
                className="h-56 w-full object-cover sm:h-full"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {active.latin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Close"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {active.benefit}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Purity
                    </dt>
                    <dd className="mt-1 font-heading text-lg font-bold text-foreground">
                      {active.purity}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Assay
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {active.standardization}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Applications
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/70"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#inquiry" onClick={() => setActive(null)}>
                    Request Bulk Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
