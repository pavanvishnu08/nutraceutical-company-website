import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturedIngredients } from "@/components/featured-ingredients"
import { ScienceProcess } from "@/components/science-process"
import { HealthBenefits } from "@/components/health-benefits"
import { Manufacturing } from "@/components/manufacturing"
import { Industries } from "@/components/industries"
import { Certifications } from "@/components/certifications"
import { CatalogPreview } from "@/components/catalog-preview"
import { InquiryForm } from "@/components/inquiry-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedIngredients />
        <ScienceProcess />
        <HealthBenefits />
        <Manufacturing />
        <Industries />
        <Certifications />
        <CatalogPreview />
        <InquiryForm />
      </main>
      <SiteFooter />
    </>
  )
}
