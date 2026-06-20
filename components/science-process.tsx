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
    <section id="science" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Science Behind the Extracts"
          title="From botanical source to global supply"
          description="A controlled, fully documented process engineered to deliver purity, potency and traceability at every step."
        />

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col lg:px-4">
              <div
                className="absolute left-7 top-7 hidden h-px w-full bg-border lg:block"
                aria-hidden="true"
              />
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm">
                <step.icon className="size-6" aria-hidden="true" />
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
