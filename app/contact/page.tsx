"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Globe,
  FileText,
  Package,
  MessageSquare,
} from "lucide-react"
import { ingredients } from "@/lib/site-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"

const contactChannels = [
  {
    icon: Mail,
    title: "Sales Inquiries",
    value: "sales@naturesole.com",
    detail: "Bulk orders, pricing, documentation",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (800) 555-0142",
    detail: "Mon–Fri, 9:00–18:00 EST",
  },
  {
    icon: MapPin,
    title: "Global HQ",
    value: "Boston, MA USA",
    detail: "Research & Development, Global Sales",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 24 hours",
    detail: "Our technical sales team responds same business day",
  },
]

const offices = [
  { city: "Boston", country: "USA", role: "Global HQ & R&D", email: "boston@naturesole.com", phone: "+1 (800) 555-0142" },
  { city: "Hyderabad", country: "India", role: "Manufacturing & Operations", email: "hyderabad@naturesole.com", phone: "+91 40 4567 8901" },
  { city: "Rotterdam", country: "Netherlands", role: "EU Distribution & Sales", email: "europe@naturesole.com", phone: "+31 10 123 4567" },
]

const inquiryTypes = [
  { value: "bulk-quote", label: "Bulk Price Quote", icon: Package },
  { value: "sample", label: "Sample Request", icon: FileText },
  { value: "technical", label: "Technical Inquiry", icon: MessageSquare },
  { value: "distribution", label: "Distribution Partnership", icon: Globe },
]

type FormTab = "quote" | "sample" | "general"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<FormTab>("quote")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-secondary pt-18">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-24">
            <div className="max-w-2xl">
              <span className="eyebrow text-primary">Contact Us</span>
              <h1 className="display mt-6 text-pretty text-5xl text-foreground sm:text-6xl">
                Let&apos;s build your
                <span className="italic text-primary"> formulation</span>
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Share your requirements and our technical sales team will respond with
                specifications, documentation and bulk pricing — typically within one
                business day.
              </p>
            </div>

            {/* Contact quick channels */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactChannels.map((ch) => {
                const Icon = ch.icon
                return (
                  <div
                    key={ch.title}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {ch.title}
                    </p>
                    <p className="mt-1 font-heading text-base font-medium text-foreground">
                      {ch.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{ch.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Form + Info Grid */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              {/* Left column — office list & inquiry types */}
              <div>
                <div>
                  <h2 className="font-heading text-2xl font-light text-foreground">
                    Our offices
                  </h2>
                  <div className="mt-6 space-y-5">
                    {offices.map((o) => (
                      <div
                        key={o.city}
                        className="rounded-2xl border border-border bg-card p-6"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-heading text-lg font-medium text-foreground">
                              {o.city}, {o.country}
                            </p>
                            <p className="mt-0.5 text-sm text-muted-foreground">{o.role}</p>
                          </div>
                          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                        </div>
                        <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Mail className="size-3.5 text-primary" />
                            {o.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="size-3.5 text-primary" />
                            {o.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="font-heading text-2xl font-light text-foreground">
                    Global distribution
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We ship to 40+ countries from our Hyderabad and Rotterdam facilities.
                    Standard lead time is 2–4 weeks from order confirmation; expedited
                    shipments available for stocked items.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Temperature-monitored logistics",
                      "Full customs documentation included",
                      "CoA, MSDS and phytosanitary certificates",
                      "FDA, EU and ICH-compliant product dossiers",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column — inquiry forms */}
              <div>
                {/* Tab switcher */}
                <div className="flex rounded-xl border border-border bg-secondary p-1">
                  {(["quote", "sample", "general"] as FormTab[]).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => { setActiveTab(tab); setSubmitted(false) }}
                      className={cn(
                        "flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors",
                        activeTab === tab
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {tab === "quote" && "Request Quote"}
                      {tab === "sample" && "Sample Request"}
                      {tab === "general" && "General Inquiry"}
                    </button>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle2 className="size-8" />
                      </span>
                      <h3 className="mt-6 font-heading text-3xl font-light text-foreground">
                        {activeTab === "quote" && "Quote request received"}
                        {activeTab === "sample" && "Sample request received"}
                        {activeTab === "general" && "Message received"}
                      </h3>
                      <p className="mt-3 max-w-sm text-muted-foreground">
                        Our technical sales team will be in touch shortly with
                        specifications and pricing.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-7 rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className={labelClass}>Company Name *</label>
                        <input id="company" name="company" required className={fieldClass} placeholder="Acme Nutrition Inc." />
                      </div>
                      <div>
                        <label htmlFor="contact" className={labelClass}>Contact Person *</label>
                        <input id="contact" name="contact" required className={fieldClass} placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Business Email *</label>
                        <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+1 (555) 000-0000" />
                      </div>
                      <div>
                        <label htmlFor="country" className={labelClass}>Country *</label>
                        <input id="country" name="country" required className={fieldClass} placeholder="United States" />
                      </div>
                      <div>
                        <label htmlFor="company-type" className={labelClass}>Company Type</label>
                        <select id="company-type" name="company-type" className={cn(fieldClass, "appearance-none")} defaultValue="">
                          <option value="" disabled>Select type</option>
                          <option value="pharmaceutical">Pharmaceutical Manufacturer</option>
                          <option value="nutraceutical">Nutraceutical Brand</option>
                          <option value="contract">Contract Manufacturer</option>
                          <option value="distributor">Distributor / Trader</option>
                          <option value="wellness">Wellness Brand</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {activeTab === "quote" && (
                        <>
                          <div>
                            <label htmlFor="product" className={labelClass}>Product *</label>
                            <select id="product" name="product" required className={cn(fieldClass, "appearance-none")} defaultValue="">
                              <option value="" disabled>Select an extract</option>
                              {ingredients.map((i) => (
                                <option key={i.slug} value={i.name}>{i.name} ({i.purity} pure)</option>
                              ))}
                              <option value="other">Other / Custom specification</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="quantity" className={labelClass}>Quantity Required</label>
                            <input id="quantity" name="quantity" className={fieldClass} placeholder="e.g. 500 kg / month" />
                          </div>
                        </>
                      )}

                      {activeTab === "sample" && (
                        <>
                          <div>
                            <label htmlFor="sample-product" className={labelClass}>Product for Sample *</label>
                            <select id="sample-product" name="sample-product" required className={cn(fieldClass, "appearance-none")} defaultValue="">
                              <option value="" disabled>Select an extract</option>
                              {ingredients.map((i) => (
                                <option key={i.slug} value={i.name}>{i.name}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="sample-qty" className={labelClass}>Sample Quantity</label>
                            <select id="sample-qty" name="sample-qty" className={cn(fieldClass, "appearance-none")} defaultValue="50g">
                              <option value="10g">10 g</option>
                              <option value="25g">25 g</option>
                              <option value="50g">50 g (standard)</option>
                              <option value="100g">100 g</option>
                            </select>
                          </div>
                        </>
                      )}

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className={labelClass}>
                          {activeTab === "quote" && "Specifications & Requirements"}
                          {activeTab === "sample" && "Intended Use / Application"}
                          {activeTab === "general" && "Your Message *"}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required={activeTab === "general"}
                          className={cn(fieldClass, "resize-none")}
                          placeholder={
                            activeTab === "quote"
                              ? "Tell us about your purity requirement, desired certifications, timeline and documentation needs."
                              : activeTab === "sample"
                              ? "Describe your application, current formulation and what you are evaluating this ingredient for."
                              : "How can we help you?"
                          }
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          {activeTab === "quote" && "Submit Quote Request"}
                          {activeTab === "sample" && "Request Sample"}
                          {activeTab === "general" && "Send Message"}
                        </button>
                        <p className="mt-3 text-center text-xs text-muted-foreground">
                          By submitting, you agree to be contacted by our sales team. We typically
                          respond within one business day.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry types row */}
        <section className="bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-center font-heading text-2xl font-light text-foreground">
              What can we help you with?
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {inquiryTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      setActiveTab(
                        type.value === "bulk-quote" ? "quote"
                          : type.value === "sample" ? "sample"
                          : "general",
                      )
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="group rounded-2xl border border-border bg-card p-7 text-left transition-all duration-300 hover:border-primary hover:shadow-lg"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <p className="mt-5 font-heading text-lg font-medium text-foreground">
                      {type.label}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Map placeholder + distribution */}
        <section className="bg-foreground py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Map placeholder */}
              <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-background/5 aspect-[16/9] flex items-center justify-center">
                <div className="text-center">
                  <Globe className="mx-auto size-16 text-accent/40" />
                  <p className="mt-4 text-background/40 text-sm">
                    Serving 40+ countries worldwide
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["USA", "EU", "Japan", "India", "Australia", "UAE", "Brazil", "Canada"].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-background/15 px-3 py-1 text-xs text-background/50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="eyebrow text-accent">Global Reach</span>
                <h2 className="display mt-5 text-pretty text-3xl text-background sm:text-4xl">
                  Export-ready from day one
                </h2>
                <p className="mt-5 text-background/60 leading-relaxed">
                  Our export documentation team handles everything from phytosanitary
                  certificates to FDA Prior Notice — reducing your administrative burden
                  and ensuring smooth customs clearance.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Certificate of Origin",
                    "Phytosanitary Certificate",
                    "FDA Prior Notice (US imports)",
                    "EU customs import documentation",
                    "MSDS / SDS in multiple languages",
                    "Kosher / Halal certificates (on request)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2.5 text-sm text-background/65">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
