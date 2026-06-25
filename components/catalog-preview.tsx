"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Eye, X, ArrowRight, BadgeCheck } from "lucide-react"
import { ingredients, type Ingredient } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    <section id="catalog" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            index="07"
            eyebrow="Product Catalog"
            title="Browse our standardized extract catalog"
            description="A preview of our most-requested actives. Use quick view for specifications, or explore the full catalog."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.slice(0, 4).map((item, i) => (
            <ScrollReveal key={item.slug} direction="scale" delay={i * 80}>
              <Link
                href={`/products/${item.slug}`}
                className="card-3d group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Purity chip */}
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary-foreground shadow">
                    <BadgeCheck className="size-3" />
                    {item.purity}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                    {item.standardization}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {item.benefit}
                  </p>
                </div>

                {/* Quick-view button — slides up on hover */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(item)
                  }}
                  className="absolute inset-x-4 bottom-4 inline-flex translate-y-3 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Eye className="size-4" aria-hidden="true" />
                  Quick View
                </button>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-secondary hover:border-primary"
          >
            View Full Catalog
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Quick-view modal */}
      {active && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
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
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Purity</dt>
                    <dd className="mt-1 font-heading text-lg font-bold text-foreground">{active.purity}</dd>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Assay</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{active.standardization}</dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Applications</p>
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

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/products/${active.slug}`}
                    onClick={() => setActive(null)}
                    className="flex-1 inline-flex items-center justify-center rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setActive(null)}
                    className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
