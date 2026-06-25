import Link from "next/link"
import { BadgeCheck, Award, Building2, FlaskRound, ClipboardCheck, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    <section id="manufacturing" className="overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Image side ── */}
          <ScrollReveal direction="left" className="relative order-last lg:order-first">
            {/* Soft glow behind image */}
            <div
              className="absolute -left-10 -top-10 size-80 rounded-full bg-primary/8 blur-3xl"
              aria-hidden="true"
            />

            {/* Gold offset frame */}
            <div
              className="absolute -left-3 -top-3 bottom-10 right-10 rounded-[2rem] border border-gold/40"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
              <img
                src="/images/facility.png"
                alt="Modern pharmaceutical extraction facility with stainless steel equipment"
                className="aspect-[4/3] w-full object-cover"
              />
              {/* Overlay stats */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                <div className="flex gap-8">
                  <div>
                    <p className="font-heading text-2xl font-light text-white">40,000</p>
                    <p className="text-xs text-white/70">sq ft facility</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-light text-white">8</p>
                    <p className="text-xs text-white/70">extraction lines</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-light text-white">37</p>
                    <p className="text-xs text-white/70">QA checkpoints</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Years badge */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-7 py-6 text-primary-foreground shadow-xl sm:block">
              <p className="font-heading text-4xl font-light">25+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary-foreground/75">
                Years of expertise
              </p>
            </div>
          </ScrollReveal>

          {/* ── Content side ── */}
          <ScrollReveal direction="right">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tabular-nums text-gold">04</span>
              <span className="eyebrow text-primary">Manufacturing Excellence</span>
            </div>
            <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
              World-class infrastructure, uncompromising standards
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Our integrated facilities combine advanced extraction technology with
              rigorous quality systems — delivering pharmaceutical-grade consistency
              at industrial scale.
            </p>

            <dl className="mt-10 flex flex-col">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group -mx-4 flex items-center gap-5 rounded-xl border-b border-border px-4 py-5 last:border-0 transition-colors duration-200 hover:bg-secondary/50"
                >
                  <dt className="flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                      <f.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-lg font-medium text-foreground">
                      {f.title}
                    </span>
                  </dt>
                  <dd className="ml-auto hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:block">
                    {f.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Explore our full manufacturing process
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
