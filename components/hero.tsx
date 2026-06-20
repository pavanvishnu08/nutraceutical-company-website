import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "120+", label: "Standardized Extracts" },
  { value: "40+", label: "Countries Served" },
  { value: "99.9%", label: "Batch Consistency" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-18">
      {/* faint vertical rules for editorial structure */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-7xl rule-grid opacity-60 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-x-12 gap-y-16 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-32 lg:pt-28">
        <div className="max-w-xl">
          <span className="eyebrow text-primary">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            GMP &amp; ISO Certified Manufacturer
          </span>

          <h1 className="display mt-8 text-pretty text-5xl text-foreground sm:text-6xl lg:text-[4.25rem]">
            The science of
            <span className="italic text-primary"> purity </span>
            in every botanical extract
          </h1>

          <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Verdantia Biosciences manufactures high-purity plant extracts and active
            ingredients trusted by pharmaceutical, nutraceutical and wellness brands
            across the globe — engineered for potency, consistency and absolute
            traceability.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
            >
              <a href="#ingredients">
                Explore Ingredients
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-7 text-primary hover:bg-secondary"
            >
              <a href="#inquiry">Request Bulk Quote</a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 border-t border-border pt-9">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-4xl font-light tracking-tight text-foreground">
                  {s.value}
                </dd>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          {/* gold frame offset */}
          <div
            className="absolute -right-3 -top-3 bottom-8 left-8 rounded-[2rem] border border-gold/40"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(35,75,58,0.45)]">
            <img
              src="/images/hero-lab.png"
              alt="Scientist examining a vial of golden botanical extract in a modern laboratory"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden max-w-[16rem] rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                HPLC Verified
              </p>
            </div>
            <p className="mt-2 font-heading text-base font-medium leading-snug text-foreground">
              Every batch documented with a Certificate of Analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
