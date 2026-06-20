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
    <section id="certifications" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Quality you can document and defend"
          description="Our certifications underpin every shipment — giving partners the compliance confidence required for global markets."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {certs.map((c) => (
            <div
              key={c.code}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-7 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <c.icon className="size-8" aria-hidden="true" />
              </span>
              <p className="mt-5 font-heading text-lg font-bold tracking-wide text-foreground">
                {c.code}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground/80">{c.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
