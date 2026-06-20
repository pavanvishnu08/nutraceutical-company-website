export type Category =
  | "Herbal Extracts"
  | "Botanical Ingredients"
  | "Nutraceutical Ingredients"
  | "Functional Food Ingredients"

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
  category: Category
  overview: string
  benefits: { title: string; description: string }[]
  specs: {
    appearance: string
    purity: string
    solubility: string
    activeIngredient: string
    shelfLife: string
    moisture: string
    heavyMetals: string
    meshSize?: string
  }
}

const sharedProcessSteps = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    description:
      "Botanicals are sourced from certified farms with full traceability back to the seed. Every lot is tested for identity, pesticide residues and heavy metals before entering our facility.",
  },
  {
    step: "02",
    title: "Extraction & Concentration",
    description:
      "Using hydroalcoholic, water, or supercritical CO₂ extraction depending on the target phytochemicals, we concentrate active compounds while removing undesired components.",
  },
  {
    step: "03",
    title: "Standardization & Purification",
    description:
      "Extracts undergo column chromatography and recrystallization to reach the specified purity. Every batch is verified by HPLC before advancing to drying.",
  },
  {
    step: "04",
    title: "Spray Drying & Granulation",
    description:
      "The purified concentrate is spray-dried under controlled temperature and humidity to produce a free-flowing powder with consistent particle size distribution.",
  },
  {
    step: "05",
    title: "Quality Release & Packaging",
    description:
      "Finished product is tested against a 37-point CoA before being packed under nitrogen in food-grade, light-protected multilayer pouches with full batch coding.",
  },
]

const sharedQaPoints = [
  "Full Certificate of Analysis issued per batch",
  "HPLC-verified purity and potency",
  "Heavy metals tested below ICH Q3D limits",
  "Microbial testing per USP <2021>",
  "Pesticide residue screening to EU MRL standards",
  "Stability studies at 25°C/60% RH and 40°C/75% RH",
]

const sharedCertificates = [
  "GMP Certificate",
  "ISO 9001:2015",
  "ISO 22000:2018",
  "HACCP",
  "FDA Facility Registration",
  "USDA Organic (selected lines)",
]

export const ingredients: Ingredient[] = [
  {
    slug: "curcumin",
    name: "Curcumin Extract",
    latin: "Curcuma longa",
    image: "/images/curcumin.png",
    tagline: "Golden anti-inflammatory powerhouse",
    category: "Herbal Extracts",
    benefit:
      "A potent antioxidant and anti-inflammatory compound supporting joint comfort and cellular health.",
    purity: "95%",
    standardization: "95% Curcuminoids by HPLC",
    applications: ["Pharmaceuticals", "Joint Health Supplements", "Functional Foods"],
    overview:
      "Curcumin is the primary bioactive curcuminoid found in the rhizome of Curcuma longa (turmeric). Our 95% standardized extract delivers the full curcuminoid complex — curcumin, bisdemethoxycurcumin and demethoxycurcumin — purified to pharmaceutical grade using supercritical CO₂ extraction and recrystallization. Each batch is HPLC-verified and issued with a full Certificate of Analysis.",
    benefits: [
      {
        title: "Anti-Inflammatory",
        description:
          "Inhibits NF-κB signaling and COX-2 enzyme activity, reducing systemic inflammatory markers.",
      },
      {
        title: "Antioxidant Protection",
        description:
          "Scavenges free radicals and upregulates Nrf2-mediated endogenous antioxidant defenses.",
      },
      {
        title: "Joint & Mobility Support",
        description:
          "Clinical studies demonstrate reduction in joint pain scores and improved function in OA patients.",
      },
      {
        title: "Cellular Wellness",
        description:
          "Supports healthy cell cycle regulation and mitochondrial function at the molecular level.",
      },
    ],
    specs: {
      appearance: "Bright yellow to orange crystalline powder",
      purity: "≥ 95% Curcuminoids by HPLC",
      solubility: "Practically insoluble in water; soluble in ethanol and DMSO",
      activeIngredient: "Curcumin, Bisdemethoxycurcumin, Demethoxycurcumin",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 3.0%",
      heavyMetals: "< 10 ppm (ICH Q3D Oral Class 2)",
      meshSize: "60 mesh (standard); finer grades available",
    },
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha Extract",
    latin: "Withania somnifera",
    image: "/images/ashwagandha.png",
    tagline: "Clinically studied adaptogen",
    category: "Herbal Extracts",
    benefit:
      "An adaptogenic root extract that supports stress resilience, restful sleep and vitality.",
    purity: "5%",
    standardization: "2.5–5% Withanolides by HPLC",
    applications: ["Nutraceuticals", "Sports Nutrition", "Wellness Brands"],
    overview:
      "Ashwagandha (Withania somnifera) root extract is one of the most extensively studied adaptogens in Ayurvedic medicine. Our extract is standardized to 2.5–5% withanolides by HPLC and produced from roots harvested at peak alkaloid content. The water-alcohol extraction preserves the full spectrum of withanolides, alkaloids and sitoindosides for authentic adaptogenic efficacy.",
    benefits: [
      {
        title: "Stress Resilience",
        description:
          "Reduces cortisol levels and modulates the HPA axis, supporting the body's stress adaptation.",
      },
      {
        title: "Sleep Quality",
        description:
          "Promotes restful sleep onset and quality through GABAergic and serotonergic mechanisms.",
      },
      {
        title: "Strength & Endurance",
        description:
          "Improves VO₂ max, muscle recovery and power output in clinical trials on athletic performance.",
      },
      {
        title: "Cognitive Vitality",
        description:
          "Supports memory, focus and neuroprotection via antioxidant and anti-inflammatory pathways.",
      },
    ],
    specs: {
      appearance: "Brownish-yellow fine powder",
      purity: "2.5–5% Withanolides by HPLC",
      solubility: "Partially soluble in water; soluble in hydroalcoholic solvents",
      activeIngredient: "Withanolides, Alkaloids (Somniferine), Sitoindosides",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm (ICH Q3D Oral Class 2)",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "moringa",
    name: "Moringa Extract",
    latin: "Moringa oleifera",
    image: "/images/moringa.png",
    tagline: "Nutrient-dense green superfood",
    category: "Botanical Ingredients",
    benefit:
      "Rich in vitamins, minerals and antioxidants for everyday nutritional fortification.",
    purity: "10%",
    standardization: "10:1 Leaf Extract",
    applications: ["Functional Foods", "Green Superfoods", "Wellness Brands"],
    overview:
      "Moringa oleifera leaf extract concentrates the exceptional nutritional breadth of the 'Miracle Tree' into a standardized 10:1 powder. Rich in isothiocyanates, quercetin and chlorogenic acid, this extract is a versatile ingredient for functional food fortification, green superfood blends and daily wellness formulations. Our cold-process drying preserves heat-sensitive phytonutrients.",
    benefits: [
      {
        title: "Nutritional Density",
        description:
          "Provides concentrated vitamins A, C, E, calcium, iron and complete amino acid profile.",
      },
      {
        title: "Antioxidant Activity",
        description:
          "High ORAC value driven by flavonoids, phenolic acids and vitamin C synergy.",
      },
      {
        title: "Blood Sugar Balance",
        description:
          "Isothiocyanates and chlorogenic acid support healthy glucose metabolism and insulin sensitivity.",
      },
      {
        title: "Anti-Inflammatory",
        description:
          "Quercetin and isothiocyanates modulate NF-κB, reducing inflammatory signaling.",
      },
    ],
    specs: {
      appearance: "Dark green to olive powder",
      purity: "10:1 Extract Ratio",
      solubility: "Partially soluble in water",
      activeIngredient: "Isothiocyanates, Quercetin, Chlorogenic Acid",
      shelfLife: "24 months from manufacture date",
      moisture: "≤ 6.0%",
      heavyMetals: "< 10 ppm",
    },
  },
  {
    slug: "ginger",
    name: "Ginger Extract",
    latin: "Zingiber officinale",
    image: "/images/ginger.png",
    tagline: "Digestive & circulatory support",
    category: "Herbal Extracts",
    benefit:
      "Standardized for gingerols to support healthy digestion and circulation.",
    purity: "5%",
    standardization: "5% Gingerols by HPLC",
    applications: ["Pharmaceuticals", "Digestive Health", "Functional Foods"],
    overview:
      "Ginger rhizome extract standardized to 5% [6]-gingerol by HPLC offers a precise, evidence-based concentration of the primary bioactive responsible for ginger's digestive and circulatory benefits. Our extraction preserves the full pungent phenol family — gingerols, shogaols and paradols — in the ratios found in fresh root.",
    benefits: [
      {
        title: "Digestive Comfort",
        description:
          "Accelerates gastric emptying and reduces nausea through 5-HT3 receptor antagonism.",
      },
      {
        title: "Circulatory Health",
        description:
          "Inhibits platelet aggregation and supports healthy blood flow and microcirculation.",
      },
      {
        title: "Anti-Nausea",
        description:
          "Clinically validated for motion sickness, morning sickness and chemotherapy-induced nausea.",
      },
      {
        title: "Anti-Inflammatory",
        description:
          "Inhibits prostaglandin synthesis and LOX pathway for systemic inflammatory support.",
      },
    ],
    specs: {
      appearance: "Light brown to tan powder",
      purity: "≥ 5% [6]-Gingerols by HPLC",
      solubility: "Partially soluble in water; soluble in ethanol",
      activeIngredient: "[6]-Gingerol, [6]-Shogaol, Paradols",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "spirulina",
    name: "Spirulina",
    latin: "Arthrospira platensis",
    image: "/images/spirulina.png",
    tagline: "Complete plant protein algae",
    category: "Nutraceutical Ingredients",
    benefit:
      "A complete protein and phycocyanin-rich algae for immune and antioxidant support.",
    purity: "65%",
    standardization: "65% Protein Content",
    applications: ["Nutraceuticals", "Sports Nutrition", "Functional Foods"],
    overview:
      "Spirulina (Arthrospira platensis) is a blue-green microalgae containing 65% complete protein with all essential amino acids, making it one of the most protein-dense natural ingredients available. Our spray-dried powder is grown in pharmaceutical-grade closed photobioreactors and standardized for phycocyanin content, protein levels and pigment profile.",
    benefits: [
      {
        title: "Complete Protein Source",
        description:
          "65% protein with all essential amino acids and superior digestibility (85–95% PDCAAS).",
      },
      {
        title: "Immune Modulation",
        description:
          "Phycocyanin activates NK cells and macrophages, enhancing innate immune response.",
      },
      {
        title: "Antioxidant Defense",
        description:
          "Phycocyanin and beta-carotene provide potent free radical scavenging activity.",
      },
      {
        title: "Sports Performance",
        description:
          "Reduces exercise-induced oxidative stress and supports lean muscle recovery.",
      },
    ],
    specs: {
      appearance: "Deep blue-green fine powder",
      purity: "≥ 65% Protein (Kjeldahl)",
      solubility: "Dispersible in water",
      activeIngredient: "Phycocyanin, Beta-Carotene, Complete Amino Acids",
      shelfLife: "24 months from manufacture date",
      moisture: "≤ 7.0%",
      heavyMetals: "< 10 ppm",
    },
  },
  {
    slug: "green-tea",
    name: "Green Tea Extract",
    latin: "Camellia sinensis",
    image: "/images/green-tea.png",
    tagline: "Polyphenol-rich antioxidant",
    category: "Herbal Extracts",
    benefit:
      "Standardized EGCG polyphenols supporting metabolism and antioxidant defense.",
    purity: "98%",
    standardization: "98% Polyphenols, 50% EGCG",
    applications: ["Pharmaceuticals", "Weight Management", "Wellness Brands"],
    overview:
      "Green Tea Extract from Camellia sinensis leaves, standardized to 98% total polyphenols and 50% EGCG (epigallocatechin gallate), is one of the most researched antioxidant ingredients globally. Our water extraction process is caffeine-removal optimized, yielding a decaffeinated grade suitable for all-day formulations without stimulant effects.",
    benefits: [
      {
        title: "Superior Antioxidant",
        description:
          "EGCG is 25–100× more potent than vitamins C and E in neutralizing reactive oxygen species.",
      },
      {
        title: "Metabolic Support",
        description:
          "Enhances thermogenesis and fat oxidation through COMT inhibition and sympathetic activity.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Catechins reduce LDL oxidation, improve endothelial function and support healthy blood pressure.",
      },
      {
        title: "Cognitive Function",
        description:
          "L-theanine synergy promotes calm focus, alpha-wave activity and neuroprotection.",
      },
    ],
    specs: {
      appearance: "Light yellow to tan powder",
      purity: "98% Polyphenols; 50% EGCG by HPLC",
      solubility: "Freely soluble in water",
      activeIngredient: "EGCG, EGC, EC, ECG (Catechin Complex)",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "boswellia",
    name: "Boswellia Extract",
    latin: "Boswellia serrata",
    image: "/images/boswellia.png",
    tagline: "Joint mobility resin extract",
    category: "Herbal Extracts",
    benefit:
      "Boswellic acids that support joint mobility and a healthy inflammatory response.",
    purity: "65%",
    standardization: "65% Boswellic Acids by HPLC",
    applications: ["Pharmaceuticals", "Joint Health Supplements", "Nutraceuticals"],
    overview:
      "Boswellia serrata resin extract standardized to 65% total boswellic acids, including a minimum of 30% AKBA (3-O-acetyl-11-keto-β-boswellic acid), the most pharmacologically active fraction. Our solvent-free resin extraction and subsequent purification yields a highly potent, low-impurity extract preferred by pharmaceutical formulators.",
    benefits: [
      {
        title: "Joint Mobility",
        description:
          "AKBA inhibits 5-LOX enzyme, blocking leukotriene synthesis and reducing joint inflammation.",
      },
      {
        title: "Cartilage Protection",
        description:
          "Inhibits matrix metalloproteinases (MMPs) that degrade articular cartilage.",
      },
      {
        title: "Respiratory Support",
        description:
          "Anti-leukotriene activity benefits airway inflammation and asthmatic conditions.",
      },
      {
        title: "Gut Health",
        description:
          "Traditional use and clinical data support beneficial effects in inflammatory bowel conditions.",
      },
    ],
    specs: {
      appearance: "Off-white to cream powder",
      purity: "≥ 65% Boswellic Acids; ≥ 30% AKBA by HPLC",
      solubility: "Poorly soluble in water; soluble in ethanol",
      activeIngredient: "AKBA, KBA, β-Boswellic Acid",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "60 mesh",
    },
  },
  {
    slug: "black-pepper",
    name: "Black Pepper Extract",
    latin: "Piper nigrum",
    image: "/images/ginger.png",
    tagline: "Bioavailability-enhancing alkaloid",
    category: "Functional Food Ingredients",
    benefit:
      "Piperine standardized extract that significantly boosts the bioavailability of co-administered nutrients.",
    purity: "95%",
    standardization: "95% Piperine by HPLC",
    applications: ["Bioavailability Enhancers", "Nutraceuticals", "Pharmaceuticals"],
    overview:
      "Black Pepper Extract standardized to 95% piperine is a widely used bioavailability enhancer ('bioperine equivalent') that inhibits drug-metabolizing enzymes in the gut wall and liver, dramatically increasing the absorption of co-administered nutrients. Used at 2.5–10 mg per serving, it enhances the bioavailability of curcumin, selenium, B vitamins and numerous pharmaceutical compounds.",
    benefits: [
      {
        title: "Enhanced Absorption",
        description:
          "Inhibits CYP3A4 and P-glycoprotein, increasing bioavailability of co-nutrients by up to 2000%.",
      },
      {
        title: "Thermogenic Activity",
        description:
          "Activates TRPV1 receptors in adipose tissue, supporting thermogenesis and metabolic rate.",
      },
      {
        title: "Antioxidant Properties",
        description:
          "Piperine neutralizes free radicals and upregulates antioxidant enzyme expression.",
      },
      {
        title: "Digestive Aid",
        description:
          "Stimulates digestive enzyme secretion and promotes optimal nutrient digestion.",
      },
    ],
    specs: {
      appearance: "Off-white to pale yellow crystalline powder",
      purity: "≥ 95% Piperine by HPLC",
      solubility: "Slightly soluble in water; soluble in ethanol and chloroform",
      activeIngredient: "Piperine",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 1.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "100 mesh",
    },
  },
  {
    slug: "grape-seed",
    name: "Grape Seed Extract",
    latin: "Vitis vinifera",
    image: "/images/botanical-field.png",
    tagline: "OPC-rich vascular antioxidant",
    category: "Nutraceutical Ingredients",
    benefit:
      "Oligomeric proanthocyanidins (OPCs) delivering powerful vascular and skin antioxidant protection.",
    purity: "95%",
    standardization: "95% OPC by UV-Vis",
    applications: ["Nutraceuticals", "Skin Health", "Cardiovascular Support"],
    overview:
      "Grape Seed Extract from Vitis vinifera, standardized to 95% oligomeric proanthocyanidins (OPCs) using UV-Vis spectrophotometry. OPCs are potent flavanols with 20× the antioxidant activity of vitamin C and 50× that of vitamin E, making this extract one of the most powerful antioxidant ingredients for vascular and dermatological applications.",
    benefits: [
      {
        title: "Vascular Integrity",
        description:
          "Cross-links collagen and elastin in vessel walls, improving capillary strength and elasticity.",
      },
      {
        title: "Skin Health",
        description:
          "Protects dermal collagen from oxidative degradation, reducing photo-aging and wrinkle formation.",
      },
      {
        title: "Cardiovascular Support",
        description:
          "Inhibits LDL oxidation and platelet aggregation, supporting endothelial function.",
      },
      {
        title: "Anti-Inflammatory",
        description:
          "Inhibits NF-κB and COX-2, reducing systemic oxidative stress markers.",
      },
    ],
    specs: {
      appearance: "Reddish-brown to dark brown powder",
      purity: "≥ 95% OPC by UV-Vis (Bate-Smith); ≥ 80% polyphenols by HPLC",
      solubility: "Freely soluble in water",
      activeIngredient: "Oligomeric Proanthocyanidins (OPCs), Catechins",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "milk-thistle",
    name: "Milk Thistle Extract",
    latin: "Silybum marianum",
    image: "/images/moringa.png",
    tagline: "Gold-standard hepatoprotective",
    category: "Herbal Extracts",
    benefit:
      "Silymarin complex delivering clinically validated liver protection and detoxification support.",
    purity: "80%",
    standardization: "80% Silymarin by HPLC",
    applications: ["Hepatic Health", "Pharmaceuticals", "Nutraceuticals"],
    overview:
      "Milk Thistle Seed Extract standardized to 80% silymarin (by HPLC), comprising the flavonolignans silybin A&B, silydianin, silychristin and isosilybin. Silymarin is the most extensively researched hepatoprotective natural compound, with over 400 clinical studies supporting its role in liver cell protection, regeneration and detoxification enzyme induction.",
    benefits: [
      {
        title: "Liver Protection",
        description:
          "Stabilizes hepatocyte membranes and prevents toxin entry via competitive binding of receptor sites.",
      },
      {
        title: "Liver Regeneration",
        description:
          "Stimulates ribosomal RNA polymerase I, accelerating hepatocyte protein synthesis and cell renewal.",
      },
      {
        title: "Antioxidant Defense",
        description:
          "Scavenges free radicals, upregulates glutathione and SOD levels in hepatic tissue.",
      },
      {
        title: "Anti-Fibrotic",
        description:
          "Inhibits TGF-β1 signaling, reducing collagen deposition and hepatic stellate cell activation.",
      },
    ],
    specs: {
      appearance: "Yellowish-brown fine powder",
      purity: "≥ 80% Silymarin by HPLC (sum of flavonolignans)",
      solubility: "Slightly soluble in water; soluble in ethanol",
      activeIngredient: "Silybin A & B, Silydianin, Silychristin, Isosilybin",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "rhodiola",
    name: "Rhodiola Extract",
    latin: "Rhodiola rosea",
    image: "/images/ashwagandha.png",
    tagline: "Arctic adaptogen for fatigue & focus",
    category: "Herbal Extracts",
    benefit:
      "Rosavins and salidroside combination for stress resilience, mental clarity and physical stamina.",
    purity: "3%",
    standardization: "3% Rosavins, 1% Salidroside by HPLC",
    applications: ["Cognitive Health", "Sports Nutrition", "Stress Management"],
    overview:
      "Rhodiola rosea root extract standardized to the dual-marker specification of 3% rosavins and 1% salidroside — the ratio endorsed by clinical research for authentic adaptogenic efficacy. Sourced from high-altitude Siberian wild-crafted or cultivated roots, our extract retains the full spectrum of p-tyrosol, flavonoids and organic acids alongside the key markers.",
    benefits: [
      {
        title: "Mental Performance",
        description:
          "Improves working memory, concentration and cognitive speed under stress conditions.",
      },
      {
        title: "Physical Endurance",
        description:
          "Increases ATP synthesis and reduces lactic acid accumulation during intense physical exertion.",
      },
      {
        title: "Stress Adaptation",
        description:
          "Modulates cortisol and stress-activated kinase (SAPK) pathways to buffer physiological stress.",
      },
      {
        title: "Mood Balance",
        description:
          "Inhibits monoamine oxidase (MAO-A and MAO-B), supporting serotonin and dopamine availability.",
      },
    ],
    specs: {
      appearance: "Pale yellow to tan powder with characteristic rose-like odour",
      purity: "≥ 3% Rosavins; ≥ 1% Salidroside by HPLC",
      solubility: "Freely soluble in water",
      activeIngredient: "Rosavins (Rosin, Rosavin, Rosarin), Salidroside, p-Tyrosol",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
  {
    slug: "bacopa",
    name: "Bacopa Extract",
    latin: "Bacopa monnieri",
    image: "/images/botanical-field.png",
    tagline: "Nootropic herb for memory & cognition",
    category: "Nutraceutical Ingredients",
    benefit:
      "Bacosides-standardized extract supporting memory consolidation, learning and neuroprotection.",
    purity: "20%",
    standardization: "20% Bacosides by HPLC",
    applications: ["Cognitive Health", "Nootropics", "Nutraceuticals"],
    overview:
      "Bacopa monnieri whole plant extract standardized to 20% bacosides A & B by HPLC. Bacosides are triterpenoid saponins that enhance synaptic plasticity, promote neurogenesis and protect neurons from oxidative damage. Extensively used in Ayurvedic medicine for over 3000 years as a 'Medhya Rasayana' (brain tonic), with modern RCTs confirming significant benefits on memory and learning.",
    benefits: [
      {
        title: "Memory Enhancement",
        description:
          "Bacosides facilitate synaptic transmission and long-term potentiation in the hippocampus.",
      },
      {
        title: "Neuroprotection",
        description:
          "Reduces beta-amyloid aggregation and protects neurons from oxidative and nitrosative damage.",
      },
      {
        title: "Anxiety Reduction",
        description:
          "Modulates serotonin and GABA receptors, producing anxiolytic effects without sedation.",
      },
      {
        title: "Neurogenesis Support",
        description:
          "Increases BDNF expression, promoting the growth of new neural connections and brain plasticity.",
      },
    ],
    specs: {
      appearance: "Greenish-brown to brown powder",
      purity: "≥ 20% Bacosides A & B by HPLC",
      solubility: "Partially soluble in water; freely soluble in hydroalcoholic solvents",
      activeIngredient: "Bacoside A, Bacoside B, Bacopaside",
      shelfLife: "36 months from manufacture date",
      moisture: "≤ 5.0%",
      heavyMetals: "< 10 ppm",
      meshSize: "80 mesh",
    },
  },
]

export { sharedProcessSteps, sharedQaPoints, sharedCertificates }
