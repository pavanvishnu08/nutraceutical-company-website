import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ShieldCheck,
  FlaskRound,
  Leaf,
  CheckCircle2,
  Award,
  BadgeCheck,
  ClipboardCheck,
  ChevronRight,
  Microscope,
  Package,
  Truck,
  Beaker,
  Globe,
  Heart,
  Zap,
  Flame,
  Brain,
} from "lucide-react"
import {
  ingredients,
  sharedProcessSteps,
  sharedQaPoints,
  sharedCertificates,
} from "@/lib/site-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductAnchorNav } from "@/components/product-anchor-nav"
import { ProductImage } from "@/components/product-image"
import { InquiryForm } from "@/components/inquiry-form"

export async function generateStaticParams() {
  return ingredients.map((i) => ({ slug: i.slug }))
}

const benefitIconMap = [ShieldCheck, Flame, Heart, Zap, Brain]

const applications = [
  {
    icon: Package,
    title: "Nutraceutical Supplements",
    description:
      "Capsules, softgels, tablets and powder blends for health-conscious consumers seeking clinically-backed botanical actives.",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: FlaskRound,
    title: "Pharmaceuticals",
    description:
      "API-grade standardization and full pharmaceutical documentation support for drug product development and clinical research.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Leaf,
    title: "Functional Foods",
    description:
      "Water-dispersible and heat-stable grades for beverages, fortified foods and functional snacks requiring clean-label claims.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Heart,
    title: "Wellness Products",
    description:
      "Branded wellness formulations targeting specific health outcomes — joint, cognitive, metabolic and immune support categories.",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: Microscope,
    title: "Research Applications",
    description:
      "Reference-grade material for in-vitro, in-vivo and clinical studies with characterization data and stability profiles on request.",
    color: "bg-gold/10 text-gold",
  },
]

const packagingOptions = [
  { size: "1 KG", label: "Sample / Trial", note: "Ideal for R&D and formulation testing", icon: "◆" },
  { size: "5 KG", label: "Small Batch", note: "For pilot production and small runs", icon: "◆◆" },
  { size: "25 KG", label: "Commercial", note: "Standard fiber drum — most popular", icon: "◆◆◆", featured: true },
  { size: "Custom", label: "Bulk Order", note: "MT-scale supply chain agreements", icon: "◆◆◆◆" },
]

const processIcons = [Leaf, Beaker, FlaskRound, Microscope, ClipboardCheck, Package]

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = ingredients.find((i) => i.slug === slug)
  if (!product) notFound()

  const related = ingredients.filter((i) => i.slug !== slug).slice(0, 4)

  const specRows = [
    { label: "Botanical Name", value: product.latin },
    { label: "Active Compound(s)", value: product.specs.activeIngredient },
    { label: "Purity / Assay", value: product.specs.purity },
    { label: "Appearance", value: product.specs.appearance },
    { label: "Solubility", value: product.specs.solubility },
    ...(product.specs.meshSize ? [{ label: "Mesh Size", value: product.specs.meshSize }] : []),
    { label: "Moisture Content", value: product.specs.moisture },
    { label: "Heavy Metals", value: product.specs.heavyMetals },
    { label: "Shelf Life", value: product.specs.shelfLife },
    { label: "Storage Conditions", value: "Cool, dry place — below 25°C, away from light" },
    { label: "Country of Origin", value: "India" },
    { label: "Packaging", value: "N₂-flushed multilayer foil pouch / fiber drum" },
  ]

  return (
    <>
      <SiteHeader />
      <ProductAnchorNav />
      <main>
        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative grid min-h-[90vh] pt-18 lg:grid-cols-[55%_45%]">
          {/* Left — dark forest green panel */}
          <div className="flex flex-col justify-center bg-primary px-8 py-20 sm:px-12 lg:px-16 lg:py-28">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/40" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-primary-foreground/70">Home</Link>
              <ChevronRight className="size-3" />
              <Link href="/catalog" className="transition-colors hover:text-primary-foreground/70">Catalog</Link>
              <ChevronRight className="size-3" />
              <span className="text-primary-foreground/60">{product.name}</span>
            </nav>

            {/* Category + purity chips */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary-foreground/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground/60">
                {product.category}
              </span>
              <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground">
                {product.purity} Purity
              </span>
            </div>

            {/* Headline */}
            <h1 className="display mt-6 text-pretty text-5xl text-primary-foreground sm:text-6xl lg:text-[3.75rem]">
              {product.name}
            </h1>
            <p className="mt-3 text-lg italic text-primary-foreground/50">
              {product.latin}
            </p>

            {/* Description */}
            <p className="mt-7 max-w-md text-pretty text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {product.overview.split(".").slice(0, 2).join(".") + "."}
            </p>

            {/* Quick trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["GMP Certified", "HPLC Verified", "FDA Registered", "ISO 9001"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/15 px-3 py-1.5 text-[11px] font-medium text-primary-foreground/60"
                >
                  <ShieldCheck className="size-3 text-accent" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary-foreground/90"
              >
                Request Bulk Quote
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/5"
              >
                <Download className="size-4" />
                Download Spec Sheet
              </Link>
            </div>
          </div>

          {/* Right — product image panel */}
          <div className="relative flex items-center justify-center bg-secondary p-8 lg:p-14">
            {/* Decorative offset frame */}
            <div
              className="absolute right-6 top-6 bottom-10 left-10 rounded-[2.5rem] border border-gold/30"
              aria-hidden="true"
            />

            {/* Product image */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-border shadow-[0_48px_96px_-48px_rgba(35,75,58,0.55)]">
              <ProductImage
                src={product.image}
                alt={`${product.name} — premium botanical extract powder`}
                className="aspect-square w-full object-cover"
                fallbackLabel={product.name}
              />

              {/* Purity badge overlay */}
              <div className="absolute right-5 top-5 flex flex-col items-center rounded-2xl bg-primary px-5 py-4 text-center text-primary-foreground shadow-lg">
                <span className="font-heading text-3xl font-light leading-none">
                  {product.purity}
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/60">
                  Curcuminoids
                </span>
              </div>

              {/* HPLC card */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  HPLC Verified
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {product.standardization}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── KEY METRICS BAND ─────────────────────────────────────────────── */}
        <div className="bg-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-background/10 px-5 sm:px-8 lg:grid-cols-4">
            {[
              { value: product.purity, label: "Purity by HPLC", mono: true },
              { value: product.specs.activeIngredient.split(",")[0].trim(), label: "Primary Active", mono: false },
              { value: "36 Months", label: "Shelf Life", mono: true },
              { value: "India", label: "Country of Origin", mono: false },
            ].map((m, i) => (
              <div
                key={i}
                className="border-b border-background/10 px-6 py-8 lg:border-b-0"
              >
                <p
                  className={
                    m.mono
                      ? "font-heading text-3xl font-light text-background sm:text-4xl"
                      : "font-heading text-2xl font-light text-background sm:text-3xl"
                  }
                >
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-background/40">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PRODUCT OVERVIEW ─────────────────────────────────────────────── */}
        <section id="overview" className="scroll-mt-36 bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">01</span>
                  <span className="eyebrow text-primary">Product Overview</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  About this extract
                </h2>

                {/* Pull quote / callout */}
                <blockquote className="mt-8 border-l-[3px] border-primary pl-6 text-xl font-light italic leading-relaxed text-foreground/70">
                  &ldquo;{product.tagline}&rdquo;
                </blockquote>

                <p className="mt-7 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {product.overview}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/75"
                >
                  Request sample for evaluation
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Highlight fact cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Botanical Source", value: product.latin, icon: Leaf },
                  { label: "Active Marker", value: product.specs.activeIngredient.split(",")[0], icon: FlaskRound },
                  { label: "Purity Assay", value: product.standardization, icon: Microscope },
                  { label: "Heavy Metals", value: product.specs.heavyMetals, icon: ShieldCheck },
                ].map((fact) => {
                  const Icon = fact.icon
                  return (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md"
                    >
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary/8 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-foreground">
                        {fact.value}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── KEY BENEFITS ─────────────────────────────────────────────────── */}
        <section id="benefits" className="scroll-mt-36 bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-xs tabular-nums text-gold">02</span>
                <span className="eyebrow text-primary">Key Benefits</span>
              </div>
              <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                Evidence-based health benefits
              </h2>
              <p className="mt-5 text-muted-foreground">
                Supported by peer-reviewed literature, clinical trials and in-vitro studies.
              </p>
            </div>

            {/* First two benefits — featured row */}
            <div className="mt-16 grid gap-5 sm:grid-cols-2">
              {product.benefits.slice(0, 2).map((b, i) => {
                const Icon = benefitIconMap[i % benefitIconMap.length]
                return (
                  <div
                    key={b.title}
                    className="group relative overflow-hidden rounded-3xl bg-primary p-9 transition-shadow duration-300 hover:shadow-[0_32px_64px_-32px_rgba(35,75,58,0.5)]"
                  >
                    <div className="absolute right-0 top-0 size-48 translate-x-16 -translate-y-16 rounded-full bg-primary-foreground/[0.03]" aria-hidden="true" />
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground">
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 font-heading text-2xl font-light text-primary-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-primary-foreground/65">
                      {b.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Remaining benefits — standard row */}
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {product.benefits.slice(2).map((b, i) => {
                const Icon = benefitIconMap[(i + 2) % benefitIconMap.length]
                return (
                  <div
                    key={b.title}
                    className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-heading text-xl font-medium text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── TECHNICAL SPECIFICATIONS ─────────────────────────────────────── */}
        <section id="specifications" className="scroll-mt-36 bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
              {/* Spec table */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">03</span>
                  <span className="eyebrow text-primary">Technical Specifications</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  Analytical data sheet
                </h2>
                <p className="mt-5 text-muted-foreground">
                  All parameters tested and documented per batch. Full CoA issued with every shipment.
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary">
                        <th className="px-6 py-4 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Parameter
                        </th>
                        <th className="px-6 py-4 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {specRows.map((row, i) => (
                        <tr
                          key={row.label}
                          className={`border-b border-border transition-colors last:border-0 hover:bg-secondary/60 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                        >
                          <td className="px-6 py-4 font-medium text-foreground">
                            {row.label}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CoA preview sidebar */}
              <div className="lg:pt-28">
                {/* Certificate preview card */}
                <div className="overflow-hidden rounded-2xl border-2 border-dashed border-border bg-card shadow-sm">
                  <div className="border-b border-border bg-primary px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50">
                          Certificate of Analysis
                        </p>
                        <p className="mt-1 font-heading text-lg font-light text-primary-foreground">
                          {product.name}
                        </p>
                      </div>
                      <ClipboardCheck className="size-8 text-primary-foreground/30" />
                    </div>
                  </div>
                  <div className="space-y-0 divide-y divide-border px-6">
                    {[
                      { k: "Product", v: product.name },
                      { k: "Batch No.", v: "VB-2025-XXXXXX" },
                      { k: "Mfg. Date", v: "On Request" },
                      { k: "Assay Result", v: product.standardization },
                      { k: "Status", v: "✓ RELEASED" },
                    ].map((row) => (
                      <div key={row.k} className="flex items-center justify-between py-3.5">
                        <span className="text-xs text-muted-foreground">{row.k}</span>
                        <span className={`text-xs font-medium ${row.k === "Status" ? "text-primary" : "text-foreground"}`}>
                          {row.v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border bg-secondary p-6">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Full Certificate of Analysis with analytical test results is issued for every batch and available on request.
                    </p>
                  </div>
                </div>

                {/* Download CTA */}
                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  <Download className="size-4" />
                  Request Full Specification Sheet
                </Link>

                {/* Certifications list */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {sharedCertificates.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-foreground/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MANUFACTURING PROCESS ────────────────────────────────────────── */}
        <section id="process" className="scroll-mt-36 bg-primary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-xs tabular-nums text-accent">04</span>
                <span className="eyebrow text-accent">Manufacturing Process</span>
              </div>
              <h2 className="display mt-5 text-pretty text-4xl text-primary-foreground sm:text-5xl">
                From plant to pharmaceutical-grade powder
              </h2>
              <p className="mt-5 text-primary-foreground/60">
                Every batch follows an identical 5-stage protocol under continuous GMP supervision.
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="mt-20 hidden lg:block">
              <div className="relative grid grid-cols-5 gap-4">
                {/* Connecting line */}
                <div
                  className="absolute left-[10%] right-[10%] top-10 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
                  aria-hidden="true"
                />

                {sharedProcessSteps.map((step, i) => {
                  const Icon = processIcons[i] ?? Leaf
                  return (
                    <div key={step.step} className="flex flex-col items-center text-center">
                      {/* Icon circle */}
                      <div className="relative z-10 flex size-20 flex-col items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/8 text-primary-foreground backdrop-blur-sm">
                        <Icon className="size-7" aria-hidden="true" />
                      </div>

                      <span className="mt-5 font-mono text-[10px] tabular-nums text-accent/70">
                        {step.step}
                      </span>
                      <h3 className="mt-1.5 font-heading text-base font-medium text-primary-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/50">
                        {step.description.slice(0, 100)}…
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile stacked */}
            <div className="mt-14 space-y-px lg:hidden">
              {sharedProcessSteps.map((step, i) => {
                const Icon = processIcons[i] ?? Leaf
                return (
                  <div
                    key={step.step}
                    className="flex gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] tabular-nums text-accent/70">{step.step}</span>
                      <h3 className="mt-0.5 font-heading text-base font-medium text-primary-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-relaxed text-primary-foreground/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Facility strip */}
            <div className="mt-16 overflow-hidden rounded-3xl border border-primary-foreground/10">
              <ProductImage
                src="/images/facility.png"
                alt="Nature Sole Industries Pvt Ltd extraction facility"
                className="h-52 w-full object-cover opacity-60"
                fallbackLabel="Manufacturing Facility"
              />
            </div>
          </div>
        </section>

        {/* ─── APPLICATIONS ─────────────────────────────────────────────────── */}
        <section id="applications" className="scroll-mt-36 bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-xs tabular-nums text-gold">05</span>
                <span className="eyebrow text-primary">Applications</span>
              </div>
              <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                Where this ingredient excels
              </h2>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {applications.slice(0, 3).map((app) => {
                const Icon = app.icon
                return (
                  <div
                    key={app.title}
                    className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg"
                  >
                    <span className={`flex size-12 items-center justify-center rounded-xl ${app.color}`}>
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-heading text-xl font-medium text-foreground">
                      {app.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {applications.slice(3).map((app) => {
                const Icon = app.icon
                return (
                  <div
                    key={app.title}
                    className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg"
                  >
                    <span className={`flex size-12 items-center justify-center rounded-xl ${app.color}`}>
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-heading text-xl font-medium text-foreground">
                      {app.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── QUALITY ASSURANCE ────────────────────────────────────────────── */}
        <section id="quality" className="scroll-mt-36 bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tabular-nums text-gold">06</span>
                  <span className="eyebrow text-primary">Quality Assurance</span>
                </div>
                <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                  Every batch proven, not assumed
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Zero-tolerance for specification deviations. No batch ships without full QA
                  sign-off against a 37-point release checklist — including potency, identity,
                  microbiology and contaminant screening.
                </p>

                <ul className="mt-10 space-y-3.5">
                  {sharedQaPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/manufacturing"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/75"
                >
                  Explore our manufacturing process
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Certification cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {[
                  { icon: BadgeCheck, code: "GMP", label: "GMP Certified", note: "EU & US standards" },
                  { icon: Award, code: "ISO", label: "ISO 9001 & 22000", note: "Quality & food safety" },
                  { icon: ShieldCheck, code: "FDA", label: "FDA Registered", note: "U.S. facility" },
                  { icon: ClipboardCheck, code: "HACCP", label: "HACCP", note: "Critical control points" },
                  { icon: Microscope, code: "TESTED", label: "3rd-Party Tested", note: "NSF & Eurofins" },
                  { icon: Leaf, code: "ORGANIC", label: "Organic Lines", note: "USDA / EU Organic" },
                ].map((c) => {
                  const Icon = c.icon
                  return (
                    <div
                      key={c.code}
                      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                    >
                      <span className="flex size-12 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <p className="mt-4 font-heading text-base font-semibold tracking-wide text-foreground">
                        {c.code}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-foreground/70">{c.label}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">{c.note}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PACKAGING OPTIONS ────────────────────────────────────────────── */}
        <section id="packaging" className="scroll-mt-36 bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-xs tabular-nums text-gold">07</span>
                <span className="eyebrow text-primary">Packaging Options</span>
              </div>
              <h2 className="display mt-5 text-pretty text-4xl text-foreground sm:text-5xl">
                Available pack sizes
              </h2>
              <p className="mt-5 text-muted-foreground">
                Nitrogen-flushed multilayer foil packaging. All sizes shipped with batch CoA and MSDS.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {packagingOptions.map((pkg) => (
                <div
                  key={pkg.size}
                  className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl ${
                    pkg.featured
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-primary-foreground/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                      Most Popular
                    </span>
                  )}

                  <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${pkg.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                    Pack Size
                  </p>
                  <p className={`mt-2 font-heading text-5xl font-light ${pkg.featured ? "text-primary-foreground" : "text-foreground"}`}>
                    {pkg.size}
                  </p>
                  <p className={`mt-3 text-sm font-semibold ${pkg.featured ? "text-primary-foreground/80" : "text-foreground"}`}>
                    {pkg.label}
                  </p>
                  <p className={`mt-1 text-xs ${pkg.featured ? "text-primary-foreground/55" : "text-muted-foreground"}`}>
                    {pkg.note}
                  </p>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/contact"
                      className={`flex w-full items-center justify-center rounded-full py-3 text-sm font-medium transition-colors ${
                        pkg.featured
                          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                          : "border border-border text-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Special packaging (HDPE drum, double-bagged, inert liner) available on request.
              Lead time: 2–4 weeks from order confirmation.
            </p>
          </div>
        </section>

        {/* ─── RELATED PRODUCTS ─────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-secondary py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl font-light text-foreground sm:text-3xl">
                  Related ingredients
                </h2>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/75"
                >
                  View full catalog
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="overflow-hidden">
                      <ProductImage
                        src={item.image}
                        alt={item.name}
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        fallbackLabel={item.name}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-heading text-base font-medium text-foreground">
                            {item.name}
                          </h3>
                          <p className="mt-0.5 text-xs italic text-muted-foreground">{item.latin}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-primary/8 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                          {item.purity}
                        </span>
                      </div>
                      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {item.benefit}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── BULK INQUIRY ─────────────────────────────────────────────────── */}
        <div id="inquiry" className="scroll-mt-36">
          <InquiryForm />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
