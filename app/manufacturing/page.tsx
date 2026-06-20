import Link from "next/link"
import {
  Leaf,
  FlaskRound,
  ShieldCheck,
  BadgeCheck,
  Award,
  ClipboardCheck,
  Building2,
  Package,
  Truck,
  Microscope,
  Beaker,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"

const extractionSteps = [
  {
    step: "01",
    title: "Raw Material Procurement",
    description:
      "Botanicals are sourced exclusively from certified farms with documented agricultural practices, GPS-verified plots and third-party audit reports. Identity testing by macroscopy and HPTLC occurs before intake.",
    icon: Leaf,
    detail: "Identity verified by HPTLC, HPLC and botanical morphology",
  },
  {
    step: "02",
    title: "Pre-treatment & Comminution",
    description:
      "Botanicals are cleaned, dried to specification (≤12% moisture) and milled to a consistent particle size distribution. Pre-treatment conditions are logged per batch in our ERP-integrated Manufacturing Records.",
    icon: Building2,
    detail: "Particle size D90 < 500 μm; moisture tested by Karl Fischer",
  },
  {
    step: "03",
    title: "Extraction & Concentration",
    description:
      "We employ hydroalcoholic, aqueous, supercritical CO₂ and enzymatic extraction methods depending on the target phytochemicals. Extraction parameters (temperature, pressure, solvent ratio) are tightly controlled by automated PLC systems.",
    icon: Beaker,
    detail: "Temperature-controlled jacketed vessels; closed-loop solvent recovery",
  },
  {
    step: "04",
    title: "Purification & Standardization",
    description:
      "Crude extracts are subjected to membrane filtration, column chromatography and recrystallization as required. Each purification run is monitored by in-process HPLC analysis until target purity is achieved.",
    icon: FlaskRound,
    detail: "In-process HPLC monitoring; target purity achieved before drying",
  },
  {
    step: "05",
    title: "Spray Drying & Granulation",
    description:
      "The purified liquid extract is spray-dried using an inert gas (nitrogen) atmosphere at precisely controlled inlet/outlet temperatures to preserve heat-labile actives and produce a consistent, free-flowing powder.",
    icon: Microscope,
    detail: "Nitrogen atmosphere drying; particle morphology QC",
  },
  {
    step: "06",
    title: "Quality Release Testing",
    description:
      "Finished powder is subject to 37-point QA testing covering identity, potency, microbiology, heavy metals, pesticides, solvents and physical parameters. Zero shipments without full QA sign-off.",
    icon: ClipboardCheck,
    detail: "37-point CoA; HPLC, ICP-MS, GC headspace, microbiological testing",
  },
  {
    step: "07",
    title: "Packaging & Dispatch",
    description:
      "Qualified batches are packed under nitrogen in food-grade multilayer foil pouches, fiber drums or HDPE containers. Each unit is labeled with a QR code linking to the batch-specific Certificate of Analysis.",
    icon: Package,
    detail: "N₂-flushed multilayer packaging; QR-linked CoA per batch",
  },
  {
    step: "08",
    title: "Global Logistics",
    description:
      "Temperature-monitored shipments are dispatched from our Hyderabad and Rotterdam facilities via validated logistics partners. Customs documentation, MSDS, CoA and phytosanitary certificates are included.",
    icon: Truck,
    detail: "Temperature-monitored; full customs documentation provided",
  },
]

const qmsPoints = [
  { title: "Change Control", desc: "All process and specification changes are formally reviewed, validated and documented before implementation." },
  { title: "Deviation Management", desc: "Any process deviation triggers a root-cause investigation with CAPA protocols — no batch is released without deviation clearance." },
  { title: "Supplier Qualification", desc: "All raw material suppliers are audited annually. Only approved supplier list (ASL) vendors are accepted." },
  { title: "Batch Record Review", desc: "Every batch record is independently reviewed by QA before product release. Electronic batch records since 2019." },
  { title: "Stability Programme", desc: "ICH-compliant stability studies at 25°C/60%RH (long-term) and 40°C/75%RH (accelerated) run in parallel with each product." },
  { title: "Internal Audits", desc: "Quarterly internal GMP audits by the QA team, plus annual third-party audits to NSF and EU GMP standards." },
]

const labCapabilities = [
  { name: "HPLC / UPLC", application: "Potency, purity, fingerprinting" },
  { name: "LC-MS / MS", application: "Pesticide residue screening, contaminants" },
  { name: "ICP-MS", application: "Heavy metals (Pb, Cd, As, Hg) per ICH Q3D" },
  { name: "GC-Headspace", application: "Residual solvents per ICH Q3C" },
  { name: "Karl Fischer Titration", application: "Moisture content" },
  { name: "HPTLC", application: "Botanical identity and adulterant screening" },
  { name: "FT-IR / NMR", application: "Structural identity confirmation" },
  { name: "Microbiology Suite", application: "Total plate count, pathogens per USP <2021>" },
]

const standards = [
  { icon: BadgeCheck, name: "US FDA GMP", desc: "21 CFR Part 111 dietary supplement GMP compliance" },
  { icon: Award, name: "EU GMP (Annex 11)", desc: "European pharmaceutical starting material standards" },
  { icon: ShieldCheck, name: "ISO 9001:2015", desc: "Quality management system certification" },
  { icon: ClipboardCheck, name: "ISO 22000:2018", desc: "Food safety management system" },
  { icon: CheckCircle2, name: "HACCP", desc: "Hazard analysis and critical control points" },
  { icon: Leaf, name: "USDA Organic / EU Organic", desc: "For certified organic product lines" },
]

export default function ManufacturingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-secondary pt-18">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="max-w-2xl">
                <span className="eyebrow text-primary">Manufacturing Excellence</span>
                <h1 className="display mt-6 text-pretty text-5xl text-foreground sm:text-6xl">
                  Pharmaceutical precision,
                  <span className="italic text-primary"> botanical scale</span>
                </h1>
                <p className="mt-7 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Our integrated manufacturing infrastructure combines purpose-built extraction
                  technology, real-time process analytics and pharmaceutical-grade quality
                  management — delivering industrial-scale output with API-level documentation.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Request Technical Dossier
                  </Link>
                  <Link
                    href="/catalog"
                    className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-5">
                {[
                  { value: "40,000", unit: "sq ft", label: "Extraction Facility" },
                  { value: "8", unit: "lines", label: "Extraction Lines" },
                  { value: "37", unit: "points", label: "QA Release Checklist" },
                  { value: "100%", unit: "batches", label: "Issued with CoA" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                    <p className="font-heading text-3xl font-light text-foreground">
                      {s.value}
                      <span className="ml-1 text-lg text-muted-foreground">{s.unit}</span>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Factory Overview */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative order-last lg:order-first">
                <div
                  className="absolute -left-3 -top-3 bottom-10 right-10 rounded-[2rem] border border-gold/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
                  <img
                    src="/images/facility.png"
                    alt="Modern pharmaceutical extraction facility with stainless steel equipment"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-7 py-6 text-primary-foreground shadow-xl sm:block">
                  <p className="font-heading text-4xl font-light">25+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary-foreground/75">
                    Years of expertise
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">01</span>
                  <span className="eyebrow text-primary">Facility Overview</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  Purpose-built for botanical pharmaceuticals
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Our 40,000 sq ft Hyderabad facility is purpose-designed for botanical
                  extraction — with 8 extraction lines, a dedicated chromatography purification
                  suite, spray-drying towers, and a Class 100,000 cleanroom for sensitive
                  active ingredients.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "8 extraction vessels (500L–5,000L capacity)",
                    "Closed-loop solvent recovery (>95% recovery rate)",
                    "Automated PLC-controlled process parameters",
                    "In-line HPLC for real-time potency monitoring",
                    "Class 100,000 ISO 8 cleanroom packaging zone",
                    "Dedicated allergen-free and organic processing areas",
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

        {/* Extraction Process */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="02"
              eyebrow="Extraction Process"
              title="8 stages from plant to pharmaceutical-grade powder"
              description="Every ingredient follows an identical extraction protocol. No shortcuts. No exceptions."
            />

            <div className="mt-16 space-y-px overflow-hidden rounded-3xl border border-border">
              {extractionSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className="group grid grid-cols-[auto_1fr] gap-6 bg-card p-7 transition-colors duration-200 hover:bg-secondary sm:grid-cols-[auto_1fr_auto]"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      {i < extractionSteps.length - 1 && (
                        <div className="w-px flex-1 bg-border" aria-hidden="true" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs tabular-nums text-gold">
                          {step.step}
                        </span>
                        <h3 className="font-heading text-xl font-medium text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden text-right sm:block">
                      <span className="inline-block rounded-lg bg-secondary px-3 py-1.5 font-mono text-[10px] text-foreground/60 group-hover:bg-background">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* QMS */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="03"
              eyebrow="Quality Management System"
              title="A quality culture, not just a quality department"
              description="Quality at Verdantia is built into every process, not bolted on at the end."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {qmsPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-7"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GMP Standards */}
        <section className="bg-primary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="04"
              eyebrow="GMP Standards"
              title="Certified to the standards that matter globally"
              tone="inverse"
            />

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {standards.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.name}
                    className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-medium text-primary-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/60">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* R&D Laboratory */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">05</span>
                  <span className="eyebrow text-primary">Analytical Laboratory</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  On-site analytical capabilities
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Our 8,000 sq ft in-house analytical laboratory means no waiting for
                  third-party results. From identity to potency to contaminants — we test
                  everything, in-house, before any batch ships.
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary">
                        <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Instrument
                        </th>
                        <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Application
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {labCapabilities.map((row) => (
                        <tr key={row.name} className="hover:bg-secondary/50">
                          <td className="px-5 py-3.5 font-medium text-foreground">
                            {row.name}
                          </td>
                          <td className="px-5 py-3.5 text-muted-foreground">
                            {row.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -right-3 -top-3 bottom-8 left-8 rounded-[2rem] border border-gold/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
                  <img
                    src="/images/hero-lab.png"
                    alt="Analytical chemistry laboratory with HPLC instruments"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              index="06"
              eyebrow="Supply Chain"
              title="Reliable supply from source to destination"
              description="From certified farms to your formulation facility — our supply chain is fully documented, audited and insured."
            />

            <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: "Farm-to-Factory Traceability",
                  items: [
                    "GPS-mapped farm sourcing",
                    "Annual supplier audits",
                    "Lot-level batch traceability",
                    "Pesticide-free farming protocols",
                  ],
                },
                {
                  icon: Building2,
                  title: "Manufacturing & QA",
                  items: [
                    "GMP-validated manufacturing",
                    "100% in-process HPLC monitoring",
                    "Full electronic batch records",
                    "Zero-release without QA sign-off",
                  ],
                },
                {
                  icon: Truck,
                  title: "Logistics & Delivery",
                  items: [
                    "Temperature-monitored shipping",
                    "Customs documentation included",
                    "Export from India & Netherlands",
                    "Delivery to 40+ countries",
                  ],
                },
              ].map((col) => {
                const Icon = col.icon
                return (
                  <div key={col.title} className="rounded-3xl border border-border bg-card p-8">
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-medium text-foreground">
                      {col.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-light text-background sm:text-4xl">
                  Request a facility audit or technical dossier
                </h2>
                <p className="mt-4 text-background/60">
                  We welcome qualified B2B clients to audit our facilities and review
                  our quality documentation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request Audit / Dossier
                </Link>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background/40"
                >
                  Browse Products
                  <ArrowRight className="size-4" />
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
