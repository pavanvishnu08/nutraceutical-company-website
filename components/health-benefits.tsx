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

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Health Benefits"
          title="Targeted wellness, backed by botany"
          description="Explore the functional benefit areas our extracts are formulated to support. Select a category to learn more."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {benefits.map((b, i) => {
              const selected = i === active
              return (
                <button
                  key={b.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={selected}
                  className={cn(
                    "flex flex-col items-start gap-3 rounded-xl border p-5 text-left transition-all duration-200",
                    selected
                      ? "border-primary bg-primary text-primary-foreground shadow-lg"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-lg transition-colors",
                      selected ? "bg-primary-foreground/15 text-primary-foreground" : "bg-secondary text-primary",
                    )}
                  >
                    <b.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-sm font-semibold leading-tight">
                    {b.title}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-8 lg:p-10">
            <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              {(() => {
                const Icon = benefits[active].icon
                return <Icon className="size-7" aria-hidden="true" />
              })()}
            </span>
            <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
              {benefits[active].title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {benefits[active].description}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Key Extracts
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {benefits[active].ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
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
