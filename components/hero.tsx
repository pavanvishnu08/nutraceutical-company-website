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
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            GMP &amp; ISO Certified Manufacturer
          </span>
          <h1 className="mt-6 text-pretty font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The science of purity in every botanical extract
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Verdantia Biosciences manufactures high-purity plant extracts and active
            ingredients trusted by pharmaceutical, nutraceutical and wellness brands
            across the globe — engineered for potency, consistency and absolute
            traceability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#ingredients">
                Explore Ingredients
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-secondary"
            >
              <a href="#inquiry">Request Bulk Quote</a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-bold text-foreground">
                  {s.value}
                </dd>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(45,106,79,0.35)]">
            <img
              src="/images/hero-lab.png"
              alt="Scientist examining a vial of golden botanical extract in a modern laboratory"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-xl border border-border bg-background p-5 shadow-xl sm:block">
            <p className="font-heading text-sm font-semibold text-foreground">
              Full-spectrum HPLC verification
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Every batch is tested and documented with a Certificate of Analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
