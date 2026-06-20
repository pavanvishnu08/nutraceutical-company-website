import { BadgeCheck, Award, Building2, FlaskRound, ClipboardCheck } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "GMP Certified",
    description: "Good Manufacturing Practices across every production line.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "ISO 9001 & 22000 quality and food-safety management systems.",
  },
  {
    icon: Building2,
    title: "Advanced Facilities",
    description: "Purpose-built extraction and processing plants at scale.",
  },
  {
    icon: FlaskRound,
    title: "Research & Development",
    description: "In-house R&D for novel actives and custom standardization.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description: "Full traceability with Certificate of Analysis per batch.",
  },
]

export function Manufacturing() {
  return (
    <section id="manufacturing" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(45,106,79,0.35)]">
              <img
                src="/images/facility.png"
                alt="Modern pharmaceutical extraction facility with stainless steel equipment"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -right-5 -top-5 hidden rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:block">
              <p className="font-heading text-3xl font-bold">25+</p>
              <p className="text-sm text-primary-foreground/80">Years of expertise</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Manufacturing Excellence
            </span>
            <h2 className="mt-3 text-pretty font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              World-class infrastructure, uncompromising standards
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our integrated facilities combine advanced extraction technology with
              rigorous quality systems — delivering pharmaceutical-grade consistency
              at industrial scale.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
