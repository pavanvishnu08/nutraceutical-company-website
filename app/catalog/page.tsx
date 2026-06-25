"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, SlidersHorizontal, ArrowUpRight, X } from "lucide-react"
import { ingredients, type Category } from "@/lib/site-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

const categories: ("All" | Category)[] = [
  "All",
  "Herbal Extracts",
  "Botanical Ingredients",
  "Nutraceutical Ingredients",
  "Functional Food Ingredients",
]

const applicationOptions = [
  "Pharmaceuticals",
  "Nutraceuticals",
  "Functional Foods",
  "Sports Nutrition",
  "Wellness Brands",
  "Cognitive Health",
  "Joint Health Supplements",
]

export default function CatalogPage() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All")
  const [activeApp, setActiveApp] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    return ingredients.filter((item) => {
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.latin.toLowerCase().includes(query.toLowerCase()) ||
        item.benefit.toLowerCase().includes(query.toLowerCase())
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory
      const matchesApp =
        !activeApp || item.applications.some((a) => a === activeApp)
      return matchesQuery && matchesCategory && matchesApp
    })
  }, [query, activeCategory, activeApp])

  const clearFilters = () => {
    setQuery("")
    setActiveCategory("All")
    setActiveApp(null)
  }

  const hasFilters = query || activeCategory !== "All" || activeApp

  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Hero */}
        <section className="relative bg-secondary pt-18">
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pt-24">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Product Catalog</span>
              <h1 className="display mt-6 text-pretty text-5xl text-foreground sm:text-6xl">
                Premium botanical
                <span className="italic text-primary"> actives</span>
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                12 standardized, traceable ingredients manufactured to pharmaceutical-grade
                specifications for global formulators. Filter by category or application below.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, botanical, or benefit…"
                  className="w-full rounded-full border border-border bg-background pl-11 pr-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                <SlidersHorizontal className="size-4" />
                Filters
                {hasFilters && (
                  <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {[query ? 1 : 0, activeCategory !== "All" ? 1 : 0, activeApp ? 1 : 0].reduce((a, b) => a + b, 0)}
                  </span>
                )}
              </button>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <X className="size-4" />
                  Clear all
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex gap-10 lg:gap-16">
              {/* Sidebar filters — hidden on mobile unless toggled */}
              <aside
                className={cn(
                  "w-64 shrink-0",
                  showFilters ? "block" : "hidden lg:block",
                )}
              >
                <div className="sticky top-28 space-y-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Category
                    </p>
                    <ul className="mt-3 space-y-1">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button
                            type="button"
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                              "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                              activeCategory === cat
                                ? "bg-primary/10 font-medium text-primary"
                                : "text-foreground/75 hover:bg-secondary hover:text-foreground",
                            )}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Application
                    </p>
                    <ul className="mt-3 space-y-1">
                      {applicationOptions.map((app) => (
                        <li key={app}>
                          <button
                            type="button"
                            onClick={() => setActiveApp(activeApp === app ? null : app)}
                            className={cn(
                              "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                              activeApp === app
                                ? "bg-primary/10 font-medium text-primary"
                                : "text-foreground/75 hover:bg-secondary hover:text-foreground",
                            )}
                          >
                            {app}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

              {/* Product grid */}
              <div className="flex-1 min-w-0">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing <strong className="text-foreground">{filtered.length}</strong> of{" "}
                    {ingredients.length} ingredients
                  </p>
                </div>

                {filtered.length === 0 ? (
                  <div className="flex flex-col items-center py-20 text-center">
                    <p className="font-heading text-2xl text-foreground">No results found</p>
                    <p className="mt-2 text-muted-foreground">
                      Try a different search term or clear your filters.
                    </p>
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/products/${item.slug}`}
                        className="card-3d group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
                      >
                        {/* Image */}
                        <div className="relative overflow-hidden bg-secondary">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/75 backdrop-blur">
                            {item.category}
                          </span>
                          <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-semibold text-primary-foreground">
                            {item.purity} pure
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div>
                            <h2 className="font-heading text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                              {item.name}
                            </h2>
                            <p className="mt-0.5 text-sm italic text-muted-foreground">
                              {item.latin}
                            </p>
                          </div>

                          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {item.benefit}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {item.applications.map((app) => (
                              <span
                                key={app}
                                className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                              >
                                {app}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                                Standardization
                              </p>
                              <p className="mt-0.5 text-xs font-medium text-foreground">
                                {item.standardization}
                              </p>
                            </div>
                            <span className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                              View Details
                              <ArrowUpRight className="size-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* B2B CTA */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-light text-primary-foreground sm:text-4xl">
                  Need a custom extract or private-label specification?
                </h2>
                <p className="mt-4 text-primary-foreground/75">
                  Our R&D team develops bespoke standardized extracts and custom blends.
                  Contact our technical sales team with your requirements.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/manufacturing"
                  className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Our Manufacturing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
