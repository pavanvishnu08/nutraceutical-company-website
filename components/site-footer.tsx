import Link from "next/link"
import { Leaf, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Products", href: "/catalog" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About Us", href: "/about" },
  { label: "Certifications", href: "/about#certifications" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/contact" },
]

const certifications = ["FDA Registered", "GMP Certified", "ISO 9001 & 22000", "HACCP", "Organic"]

const facilities = [
  { city: "Boston, USA", role: "Global HQ & R&D" },
  { city: "Hyderabad, India", role: "Extraction Facility" },
  { city: "Rotterdam, NL", role: "EU Distribution" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-tight">
                  Verdantia
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-background/60">
                  Biosciences
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/65">
              High-purity botanical extracts and active ingredients for the global
              pharmaceutical, nutraceutical and wellness industries.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/65 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-background">
              Facilities
            </h3>
            <ul className="mt-4 space-y-4">
              {facilities.map((f) => (
                <li key={f.city} className="flex gap-2.5 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block text-background">{f.city}</span>
                    <span className="text-background/55">{f.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-background">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/65">
              <li>sales@verdantiabio.com</li>
              <li>+1 (800) 555-0142</li>
              <li>Mon–Fri, 9:00–18:00 EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Verdantia Biosciences. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-accent">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
