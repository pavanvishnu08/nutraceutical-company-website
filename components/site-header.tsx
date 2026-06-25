"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/catalog" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Verdantia
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Biosciences
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/about#certifications"
            className="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            Certifications
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/90",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
