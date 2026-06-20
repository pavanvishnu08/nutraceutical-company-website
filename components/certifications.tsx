import { ShieldCheck, BadgeCheck, Award, CheckCircle2, Leaf } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const certs = [
  { icon: ShieldCheck, code: "FDA", label: "FDA Registered", note: "U.S. facility registration" },
  { icon: BadgeCheck, code: "GMP", label: "GMP Certified", note: "Good Manufacturing Practices" },
  { icon: Award, code: "ISO", label: "ISO 9001 & 22000", note: "Quality & food safety" },
  { icon: CheckCircle2, code: "HACCP", label: "HACCP Compliant", note: "Hazard control system" },
  { icon: Leaf, code: "ORGANIC", label: "Organic Certified", note: "USDA / EU organic lines" },
]

export function Certifications() {
  return (
    <section id="certifications" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          title="Quality you can document and defend"
          description="Our certifications underpin every shipment — giving partners the compliance confidence required for global markets."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {certs.map((c) => (
            <div
              key={c.code}
              className="group flex flex-col items-center bg-card p-9 text-center transition-colors duration-300 hover:bg-secondary"
            >
              <span className="flex size-14 items-center justify-center rounded-full border border-border text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-6 font-heading text-lg font-medium tracking-wide text-foreground">
                {c.code}
              </p>
              <p className="mt-1.5 text-sm font-medium text-foreground/75">{c.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
