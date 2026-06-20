"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react"
import { ingredients } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="inquiry" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Inquiry &amp; Bulk Orders
            </span>
            <h2 className="mt-3 text-pretty font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build your formulation
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Share your requirements and our technical sales team will respond with
              specifications, documentation and bulk pricing — typically within one
              business day.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-10 items-center justify-center rounded-lg bg-background text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                sales@verdantiabio.com
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-10 items-center justify-center rounded-lg bg-background text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                +1 (800) 555-0142
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-10 items-center justify-center rounded-lg bg-background text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                Global HQ — Boston, USA
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                  Inquiry received
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thank you. Our technical sales team will be in touch shortly with
                  specifications and pricing.
                </p>
                <Button
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company Name
                  </label>
                  <input id="company" name="company" required className={fieldClass} placeholder="Acme Nutrition Inc." />
                </div>
                <div>
                  <label htmlFor="contact" className={labelClass}>
                    Contact Person
                  </label>
                  <input id="contact" name="contact" required className={fieldClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="product" className={labelClass}>
                    Product Requirement
                  </label>
                  <select id="product" name="product" required className={cn(fieldClass, "appearance-none")} defaultValue="">
                    <option value="" disabled>
                      Select an extract
                    </option>
                    {ingredients.map((i) => (
                      <option key={i.slug} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className={labelClass}>
                    Quantity
                  </label>
                  <input id="quantity" name="quantity" className={fieldClass} placeholder="e.g. 500 kg" />
                </div>
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>
                  <input id="country" name="country" required className={fieldClass} placeholder="United States" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Business Email
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn(fieldClass, "resize-none")}
                    placeholder="Tell us about your specifications, timelines and documentation needs."
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Inquiry
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our sales team.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
