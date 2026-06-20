export type Ingredient = {
  slug: string
  name: string
  latin: string
  image: string
  tagline: string
  benefit: string
  purity: string
  standardization: string
  applications: string[]
}

export const ingredients: Ingredient[] = [
  {
    slug: "curcumin",
    name: "Curcumin Extract",
    latin: "Curcuma longa",
    image: "/images/curcumin.png",
    tagline: "Golden anti-inflammatory powerhouse",
    benefit:
      "A potent antioxidant and anti-inflammatory compound supporting joint comfort and cellular health.",
    purity: "95%",
    standardization: "95% Curcuminoids by HPLC",
    applications: ["Pharmaceuticals", "Joint Health Supplements", "Functional Foods"],
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha Extract",
    latin: "Withania somnifera",
    image: "/images/ashwagandha.png",
    tagline: "Clinically studied adaptogen",
    benefit:
      "An adaptogenic root extract that supports stress resilience, restful sleep and vitality.",
    purity: "5%",
    standardization: "2.5–5% Withanolides by HPLC",
    applications: ["Nutraceuticals", "Sports Nutrition", "Wellness Brands"],
  },
  {
    slug: "moringa",
    name: "Moringa Extract",
    latin: "Moringa oleifera",
    image: "/images/moringa.png",
    tagline: "Nutrient-dense green superfood",
    benefit:
      "Rich in vitamins, minerals and antioxidants for everyday nutritional fortification.",
    purity: "10%",
    standardization: "10:1 Leaf Extract",
    applications: ["Functional Foods", "Green Superfoods", "Wellness Brands"],
  },
  {
    slug: "ginger",
    name: "Ginger Extract",
    latin: "Zingiber officinale",
    image: "/images/ginger.png",
    tagline: "Digestive & circulatory support",
    benefit:
      "Standardized for gingerols to support healthy digestion and circulation.",
    purity: "5%",
    standardization: "5% Gingerols by HPLC",
    applications: ["Pharmaceuticals", "Digestive Health", "Functional Foods"],
  },
  {
    slug: "spirulina",
    name: "Spirulina",
    latin: "Arthrospira platensis",
    image: "/images/spirulina.png",
    tagline: "Complete plant protein algae",
    benefit:
      "A complete protein and phycocyanin-rich algae for immune and antioxidant support.",
    purity: "65%",
    standardization: "65% Protein Content",
    applications: ["Nutraceuticals", "Sports Nutrition", "Functional Foods"],
  },
  {
    slug: "green-tea",
    name: "Green Tea Extract",
    latin: "Camellia sinensis",
    image: "/images/green-tea.png",
    tagline: "Polyphenol-rich antioxidant",
    benefit:
      "Standardized EGCG polyphenols supporting metabolism and antioxidant defense.",
    purity: "98%",
    standardization: "98% Polyphenols, 50% EGCG",
    applications: ["Pharmaceuticals", "Weight Management", "Wellness Brands"],
  },
  {
    slug: "boswellia",
    name: "Boswellia Extract",
    latin: "Boswellia serrata",
    image: "/images/boswellia.png",
    tagline: "Joint mobility resin extract",
    benefit:
      "Boswellic acids that support joint mobility and a healthy inflammatory response.",
    purity: "65%",
    standardization: "65% Boswellic Acids by HPLC",
    applications: ["Pharmaceuticals", "Joint Health Supplements", "Nutraceuticals"],
  },
]
