"use client"

import { useState } from "react"
import {
  Bone,
  ShieldPlus,
  Brain,
  HeartPulse,
  Sparkles,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  {
    icon: Bone,
    title: "Joint Health",
    description:
      "Curcumin and Boswellia extracts standardized to support joint comfort, mobility and a healthy inflammatory response.",
    ingredients: ["Curcumin", "Boswellia", "Ginger"],
    image: "/images/curcumin.png",
    stat: { value: "95%", label: "curcuminoids standardized" },
  },
  {
    icon: ShieldPlus,
    title: "Immune Support",
    description:
      "Phycocyanin-rich Spirulina and antioxidant botanicals that reinforce the body's natural defenses.",
    ingredients: ["Spirulina", "Moringa", "Green Tea"],
    image: "/images/spirulina.png",
    stat: { value: "65%", label: "protein content in Spirulina" },
  },
  {
    icon: Brain,
    title: "Cognitive Wellness",
    description:
      "Adaptogenic Ashwagandha supporting stress resilience, focus and balanced cognitive performance.",
    ingredients: ["Ashwagandha", "Green Tea"],
    image: "/images/ashwagandha.png",
    stat: { value: "5%", label: "withanolides standardized" },
  },
  {
    icon: HeartPulse,
    title: "Heart Health",
    description:
      "Polyphenol and gingerol-rich extracts supporting healthy circulation and cardiovascular wellness.",
    ingredients: ["Green Tea", "Ginger", "Spirulina"],
    image: "/images/green-tea.png",
    stat: { value: "98%", label: "polyphenols standardized" },
  },
  {
    icon: Sparkles,
    title: "Antioxidant Support",
    description:
      "High-ORAC botanical actives that help neutralize free radicals and protect cellular health.",
    ingredients: ["Green Tea", "Curcumin", "Moringa"],
    image: "/images/moringa.png",
    stat: { value: "10:1", label: "concentrated leaf extract ratio" },
  },
  {
    icon: Activity,
    title: "Digestive Health",
    description:
      "Ginger and botanical actives traditionally used to support healthy digestion and gut comfort.",
    ingredients: ["Ginger", "Moringa"],
    image: "/images/ginger.png",
    stat: { value: "5%", label: "gingerols standardized" },
  },
]

export function HealthBenefits() {
  const [active, setActive] = useState(0)
  const ActiveIcon = benefits[active].icon

  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            index="03"
            align="left"
            eyebrow="Health Benefits"
            title="Targeted wellness, backed by botany"
            description="Explore the functional benefit areas our extracts are formulated to support. Select a category to learn more."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* ── Selectable list ── */}
          <ScrollReveal direction="left">
            <ul className="flex flex-col">
              {benefits.map((b, i) => {
                const selected = i === active
                return (
                  <li key={b.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={selected}
                      className={cn(
                        "group flex w-full items-center gap-5 border-b py-5 text-left transition-all duration-200",
                        selected
                          ? "border-primary"
                          : "border-border hover:border-foreground/25",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-xs tabular-nums transition-colors",
                          selected ? "text-gold" : "text-muted-foreground",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={cn(
                          "flex size-11 items-center justify-center rounded-full border transition-all duration-300",
                          selected
                            ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "border-border text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground",
                        )}
                      >
                        <b.icon className="size-5" aria-hidden="true" />
                      </span>

                      <span
                        className={cn(
                          "font-heading text-xl transition-colors",
                          selected
                            ? "font-semibold text-foreground"
                            : "font-light text-muted-foreground group-hover:text-foreground",
                        )}
                      >
                        {b.title}
                      </span>

                      {selected && (
                        <span
                          className="ml-auto size-2 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </ScrollReveal>

          {/* ── Feature panel — premium with botanical image bg ── */}
          <ScrollReveal direction="right">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border shadow-2xl">
              {/* Botanical background image */}
              <img
                key={active}
                src={benefits[active].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full object-cover transition-opacity duration-500"
              />
              {/* Gradient wash over image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/97 via-secondary/92 to-secondary/75" />

              {/* Decorative watermark icon */}
              <ActiveIcon
                className="pointer-events-none absolute -right-8 -top-8 size-56 text-primary/6"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-9 lg:p-12">
                {/* Icon */}
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <ActiveIcon className="size-8" aria-hidden="true" />
                </div>

                <h3 className="mt-7 font-heading text-3xl font-semibold tracking-tight text-foreground">
                  {benefits[active].title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {benefits[active].description}
                </p>

                {/* Stat highlight card */}
                <div className="mt-8 inline-flex items-center gap-5 rounded-2xl border border-border/60 bg-card/80 px-6 py-4 backdrop-blur-sm shadow-sm">
                  <span className="font-heading text-3xl font-light text-primary">
                    {benefits[active].stat.value}
                  </span>
                  <span className="text-sm leading-snug text-muted-foreground">
                    {benefits[active].stat.label}
                  </span>
                </div>

                {/* Key Extracts */}
                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                    Key Extracts
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {benefits[active].ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
