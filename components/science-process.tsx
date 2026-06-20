import { Sprout, FlaskConical, Filter, Microscope, Globe2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    icon: Sprout,
    title: "Raw Botanical Source",
    description:
      "Ethically sourced, identity-verified botanicals from audited cultivation partners.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Extraction",
    description:
      "Solvent-controlled and supercritical CO₂ extraction to preserve active compounds.",
  },
  {
    icon: Filter,
    title: "Purification",
    description:
      "Multi-stage filtration and concentration for consistent, standardized actives.",
  },
  {
    icon: Microscope,
    title: "Quality Testing",
    description:
      "HPLC, heavy-metal and microbial testing with a full Certificate of Analysis.",
  },
  {
    icon: Globe2,
    title: "Global Supply",
    description:
      "Bulk packaging, documentation and logistics for compliant worldwide delivery.",
  },
]

export function ScienceProcess() {
  return (
    <section id="science" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          align="left"
          tone="inverse"
          eyebrow="The Science Behind the Extracts"
          title="From botanical source to global supply"
          description="A controlled, fully documented process engineered to deliver purity, potency and traceability at every step."
        />

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative border-t border-primary-foreground/20 pt-6"
            >
              {/* progress tick that fills the rule */}
              <span
                className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon
                  className="size-6 text-primary-foreground/70 transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 font-heading text-xl font-medium leading-tight text-primary-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
