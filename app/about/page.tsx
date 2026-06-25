import Link from "next/link"
import {
  Leaf,
  Target,
  Eye,
  Building2,
  FlaskRound,
  ShieldCheck,
  Globe,
  BadgeCheck,
  Award,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"

const stats = [
  { value: "1998", label: "Founded" },
  { value: "25+", label: "Years in botanical extraction" },
  { value: "120+", label: "Standardized extracts" },
  { value: "40+", label: "Countries served" },
]

const milestones = [
  { year: "1998", title: "Founded in Boston", desc: "Nature Sole Industries Pvt Ltd established with a mission to bridge ancient botanical wisdom and modern pharmaceutical science." },
  { year: "2005", title: "First GMP Facility", desc: "Opened our first GMP-certified extraction facility in Hyderabad, India — enabling scalable, traceable pharmaceutical-grade production." },
  { year: "2011", title: "ISO 9001 Certified", desc: "Received ISO 9001 quality management certification, formalizing our systems-based approach to consistent product excellence." },
  { year: "2016", title: "EU Distribution Hub", desc: "Established a Rotterdam-based distribution center to serve European pharmaceutical and nutraceutical clients under EU GMP standards." },
  { year: "2020", title: "R&D Expansion", desc: "Tripled R&D investment with a new 8,000 sq ft laboratory and a dedicated analytical chemistry team for novel extraction research." },
  { year: "2024", title: "100+ Extract Portfolio", desc: "Surpassed 120 standardized extracts across 4 ingredient categories, serving over 600 B2B clients globally." },
]

const facilities = [
  {
    icon: Building2,
    name: "Extraction Facility",
    location: "Hyderabad, India",
    desc: "40,000 sq ft purpose-built extraction and processing plant with 8 extraction lines, chromatography columns and spray-drying systems.",
    metrics: ["40,000 sq ft", "8 Extraction Lines", "Spray Dry Capacity: 2MT/day"],
  },
  {
    icon: FlaskRound,
    name: "R&D Laboratory",
    location: "Boston, USA",
    desc: "8,000 sq ft research facility with HPLC, LC-MS/MS, ICP-MS and NMR capabilities for analytical development and novel ingredient research.",
    metrics: ["8,000 sq ft", "HPLC + LC-MS/MS", "NMR & ICP-MS"],
  },
  {
    icon: Globe,
    name: "EU Distribution Center",
    location: "Rotterdam, Netherlands",
    desc: "Climate-controlled warehouse and distribution hub serving European markets with same-week dispatch for stocked SKUs.",
    metrics: ["15,000 sq ft", "EU GMP Compliant", "Same-week dispatch"],
  },
]

const certifications = [
  { icon: ShieldCheck, code: "FDA", label: "FDA Registered", note: "U.S. facility registration #FEI 3012847265" },
  { icon: BadgeCheck, code: "GMP", label: "GMP Certified", note: "Good Manufacturing Practices — EU & US" },
  { icon: Award, code: "ISO", label: "ISO 9001 & 22000", note: "Quality & food safety management" },
  { icon: CheckCircle2, code: "HACCP", label: "HACCP Compliant", note: "Hazard Analysis & Critical Control Points" },
  { icon: Leaf, code: "ORGANIC", label: "Organic Certified", note: "USDA NOP / EU 834/2007 (selected lines)" },
]

const globalPresence = [
  { region: "North America", countries: "USA, Canada, Mexico", role: "HQ, R&D, Sales" },
  { region: "Europe", countries: "Germany, UK, France, Netherlands, Spain", role: "Distribution & Sales" },
  { region: "Asia Pacific", countries: "Japan, South Korea, Australia, Singapore", role: "Sales & Distribution" },
  { region: "Middle East", countries: "UAE, Saudi Arabia, Israel", role: "Sales" },
  { region: "Latin America", countries: "Brazil, Argentina, Colombia", role: "Sales" },
  { region: "Rest of World", countries: "35+ additional countries", role: "Export via distributors" },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-secondary pt-18">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
            <div className="max-w-3xl">
              <span className="eyebrow text-primary">About Nature Sole</span>
              <h1 className="display mt-6 text-pretty text-5xl text-foreground sm:text-6xl lg:text-[4.25rem]">
                25 years of botanical
                <span className="italic text-primary"> science</span>
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Founded in 1998, Nature Sole Industries Pvt Ltd bridges ancient botanical wisdom with
                modern pharmaceutical manufacturing — delivering high-purity, traceable plant
                extracts to global formulators.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-heading text-4xl font-light tracking-tight text-foreground">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-xs text-muted-foreground">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Company Story */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  index="01"
                  align="left"
                  eyebrow="Our Story"
                  title="Born from a conviction that nature and science are allies"
                />
                <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Nature Sole Industries Pvt Ltd was founded with a singular conviction: that the
                    therapeutic compounds found in plants deserve the same rigor, documentation
                    and consistency that pharmaceutical APIs receive. In 1998, our founder
                    Dr. Priya Srinivasan left her post at a major pharmaceutical company to
                    apply those same exacting standards to botanical extraction.
                  </p>
                  <p>
                    Today, 25 years later, we manufacture over 120 standardized botanical
                    extracts and active ingredients — trusted by more than 600 pharmaceutical,
                    nutraceutical and functional food companies across 40+ countries. Every
                    product we make carries the same promise: identity-verified, purity-guaranteed,
                    and fully traceable from farm to formulation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -left-3 -top-3 bottom-10 right-10 rounded-[2rem] border border-gold/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
                  <img
                    src="/images/hero-lab.png"
                    alt="Nature Sole Industries Pvt Ltd founding team in the original laboratory, 1998"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-10">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="size-7" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-heading text-2xl font-light text-foreground">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To manufacture the world&apos;s most trusted botanical ingredient portfolio —
                  standardized to pharmaceutical-grade specifications, traceable to the source
                  plant, and consistently potent in every batch.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-10">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="size-7" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-heading text-2xl font-light text-foreground">
                  Our Vision
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  A world where every botanical supplement and functional ingredient is as
                  rigorously documented, reproducible and effective as a pharmaceutical
                  drug — empowering consumers to trust what they take.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="02"
              eyebrow="Company History"
              title="Milestones on the path to excellence"
            />
            <div className="mt-16 space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative grid grid-cols-[5rem_1fr] items-start gap-6 pb-10 last:pb-0">
                  {/* Vertical line */}
                  {i < milestones.length - 1 && (
                    <div
                      className="absolute left-9 top-10 h-full w-px bg-border"
                      aria-hidden="true"
                    />
                  )}
                  {/* Year bubble */}
                  <div className="relative z-10 flex size-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="size-3 rounded-full bg-primary" />
                  </div>
                  <div className="pb-2">
                    <span className="font-mono text-xs tabular-nums text-gold">{m.year}</span>
                    <h3 className="mt-1 font-heading text-xl font-medium text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Facilities */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="03"
              eyebrow="Manufacturing Facilities"
              title="Infrastructure built for pharmaceutical precision"
              description="Three purpose-built facilities on three continents — unified by a single quality management system."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {facilities.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.name}
                    className="rounded-3xl border border-border bg-card p-8"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div className="mt-5">
                      <h3 className="font-heading text-xl font-medium text-foreground">
                        {f.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        {f.location}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {f.metrics.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Explore our manufacturing process in detail
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* R&D */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div
                  className="absolute -right-3 -top-3 bottom-8 left-8 rounded-[2rem] border border-gold/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
                  <img
                    src="/images/facility.png"
                    alt="Analytical chemistry team working in Nature Sole Industries R&D laboratory"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">04</span>
                  <span className="eyebrow text-primary">Research & Development</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  Innovation drives every extraction
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Our Boston-based R&D team of 24 scientists develops novel extraction
                  methodologies, standardization protocols and analytical methods — continuously
                  pushing the boundaries of botanical ingredient science.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Novel supercritical CO₂ and enzymatic extraction methods",
                    "Custom standardization to client-specified active markers",
                    "Stability and compatibility studies for formulation support",
                    "Bioavailability enhancement (nano-emulsification, cyclodextrin complexation)",
                    "New botanical actives discovery pipeline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="05"
              eyebrow="Certifications"
              title="Quality you can document and defend"
              description="Our certifications underpin every shipment — giving partners the compliance confidence required for global markets."
            />

            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {certifications.map((c) => (
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

        {/* Global Presence */}
        <section className="bg-foreground py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="06"
              eyebrow="Global Presence"
              title="Supplying formulators on every continent"
              description="40+ countries. 600+ B2B clients. One quality standard."
              tone="inverse"
            />

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {globalPresence.map((g) => (
                <div
                  key={g.region}
                  className="rounded-2xl border border-background/10 bg-background/5 p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-medium text-background">
                      {g.region}
                    </h3>
                    <span className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-medium text-accent">
                      {g.role}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-background/60">{g.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-light text-primary-foreground sm:text-4xl">
                  Ready to partner with a trusted ingredient manufacturer?
                </h2>
                <p className="mt-4 text-primary-foreground/75">
                  Talk to our technical sales team about your requirements.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
                >
                  Contact Us
                </Link>
                <Link
                  href="/catalog"
                  className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Browse Products
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
