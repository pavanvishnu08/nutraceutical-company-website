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

const benefits = [
  {
    icon: Bone,
    title: "Joint Health",
    description:
      "Curcumin and Boswellia extracts standardized to support joint comfort, mobility and a healthy inflammatory response.",
    ingredients: ["Curcumin", "Boswellia", "Ginger"],
  },
  {
    icon: ShieldPlus,
    title: "Immune Support",
    description:
      "Phycocyanin-rich Spirulina and antioxidant botanicals that reinforce the body's natural defenses.",
    ingredients: ["Spirulina", "Moringa", "Green Tea"],
  },
  {
    icon: Brain,
    title: "Cognitive Wellness",
    description:
      "Adaptogenic Ashwagandha supporting stress resilience, focus and balanced cognitive performance.",
    ingredients: ["Ashwagandha", "Green Tea"],
  },
  {
    icon: HeartPulse,
    title: "Heart Health",
    description:
      "Polyphenol and gingerol-rich extracts supporting healthy circulation and cardiovascular wellness.",
    ingredients: ["Green Tea", "Ginger", "Spirulina"],
  },
  {
    icon: Sparkles,
    title: "Antioxidant Support",
    description:
      "High-ORAC botanical actives that help neutralize free radicals and protect cellular health.",
    ingredients: ["Green Tea", "Curcumin", "Moringa"],
  },
  {
    icon: Activity,
    title: "Digestive Health",
    description:
      "Ginger and botanical actives traditionally used to support healthy digestion and gut comfort.",
    ingredients: ["Ginger", "Moringa"],
  },
]

export function HealthBenefits() {
  const [active, setActive] = useState(0)
  const ActiveIcon = benefits[active].icon

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          align="left"
          eyebrow="Health Benefits"
          title="Targeted wellness, backed by botany"
          description="Explore the functional benefit areas our extracts are formulated to support. Select a category to learn more."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          {/* selectable list */}
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
                      "group flex w-full items-center gap-5 border-b border-border py-5 text-left transition-colors",
                      selected ? "border-primary" : "hover:border-foreground/30",
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
                        "flex size-11 items-center justify-center rounded-full border transition-colors",
                        selected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      <b.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        "font-heading text-xl transition-colors",
                        selected
                          ? "font-medium text-foreground"
                          : "font-light text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {b.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* feature panel */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-secondary p-9 lg:p-12">
            <ActiveIcon
              className="pointer-events-none absolute -right-6 -top-6 size-44 text-primary/5"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <ActiveIcon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-7 font-heading text-3xl font-light tracking-tight text-foreground">
                {benefits[active].title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {benefits[active].description}
              </p>
            </div>
            <div className="relative mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                Key Extracts
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {benefits[active].ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
