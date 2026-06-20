"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "specifications", label: "Specifications" },
  { id: "process", label: "Process" },
  { id: "applications", label: "Applications" },
  { id: "quality", label: "Quality" },
  { id: "packaging", label: "Packaging" },
  { id: "inquiry", label: "Inquiry" },
]

export function ProductAnchorNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480)

      let current = ""
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= 130) {
          current = s.id
        }
      }
      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-18 z-40 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className="flex overflow-x-auto scrollbar-none gap-0"
          aria-label="Page sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "relative shrink-0 whitespace-nowrap px-4 py-3.5 text-[13px] font-medium transition-colors duration-200",
                active === s.id
                  ? "text-primary"
                  : "text-foreground/55 hover:text-foreground",
              )}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
