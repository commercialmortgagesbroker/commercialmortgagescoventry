import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Coventry.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Coventry City Council planning applications inside
 *     the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "city-centre-cathedral-quarter",
    areaName: "Coventry City Centre and Cathedral Quarter",
    avgPricePerSqft: 320,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 6,
    population: 22000,
    growthRate: 4.8,
    activeDevSites: 22,
    rentalYield: 5.6,
    conservationCoverage: 38,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV1 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "friargate",
    areaName: "Friargate",
    avgPricePerSqft: 380,
    planningApprovalRate: 84,
    avgDevTimelineMonths: 7,
    population: 6500,
    growthRate: 6.4,
    activeDevSites: 16,
    rentalYield: 5.8,
    conservationCoverage: 20,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Friargate Masterplan + Coventry City Council Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "whitley",
    areaName: "Whitley and JLR Engineering",
    avgPricePerSqft: 230,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 7,
    population: 9200,
    growthRate: 4.0,
    activeDevSites: 14,
    rentalYield: 5.2,
    conservationCoverage: 8,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "coventry-gateway-whitmoor-ansty",
    areaName: "Coventry Gateway, Whitmoor and Ansty",
    avgPricePerSqft: 200,
    planningApprovalRate: 81,
    avgDevTimelineMonths: 7,
    population: 7800,
    growthRate: 5.6,
    activeDevSites: 20,
    rentalYield: 5.9,
    conservationCoverage: 6,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, M6 J2 / Ansty Park",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "westwood-tile-hill-canley",
    areaName: "Westwood Heath, Tile Hill and Canley",
    avgPricePerSqft: 260,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 24500,
    growthRate: 3.2,
    activeDevSites: 12,
    rentalYield: 5.4,
    conservationCoverage: 14,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV4 / CV5 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "earlsdon-stoneleigh-cheylesmore",
    areaName: "Earlsdon, Stoneleigh and Cheylesmore",
    avgPricePerSqft: 340,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 6,
    population: 26500,
    growthRate: 2.2,
    activeDevSites: 10,
    rentalYield: 4.6,
    conservationCoverage: 30,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV5 / CV3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "holbrooks-foleshill-radford",
    areaName: "Holbrooks, Foleshill and Radford",
    avgPricePerSqft: 200,
    planningApprovalRate: 77,
    avgDevTimelineMonths: 7,
    population: 32000,
    growthRate: 2.1,
    activeDevSites: 11,
    rentalYield: 6.5,
    conservationCoverage: 8,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV6 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "wyken-walsgrave-hawkesbury",
    areaName: "Wyken, Walsgrave and Hawkesbury",
    avgPricePerSqft: 240,
    planningApprovalRate: 75,
    avgDevTimelineMonths: 6,
    population: 28800,
    growthRate: 2.0,
    activeDevSites: 9,
    rentalYield: 5.4,
    conservationCoverage: 12,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV2 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "spon-end-coundon",
    areaName: "Spon End and Coundon",
    avgPricePerSqft: 230,
    planningApprovalRate: 73,
    avgDevTimelineMonths: 6,
    population: 17400,
    growthRate: 1.9,
    activeDevSites: 7,
    rentalYield: 5.7,
    conservationCoverage: 24,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV1 / CV6 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "far-gosford-street-fargo-village",
    areaName: "Far Gosford Street and FarGo Village",
    avgPricePerSqft: 250,
    planningApprovalRate: 79,
    avgDevTimelineMonths: 6,
    population: 8400,
    growthRate: 3.4,
    activeDevSites: 9,
    rentalYield: 6.0,
    conservationCoverage: 32,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV1 conservation area",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "allesley-eastern-green",
    areaName: "Allesley and Eastern Green",
    avgPricePerSqft: 320,
    planningApprovalRate: 70,
    avgDevTimelineMonths: 7,
    population: 12800,
    growthRate: 2.4,
    activeDevSites: 6,
    rentalYield: 4.4,
    conservationCoverage: 26,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV5 western fringe",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "willenhall-stoke-aldermoor",
    areaName: "Willenhall and Stoke Aldermoor",
    avgPricePerSqft: 190,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 7,
    population: 19800,
    growthRate: 1.8,
    activeDevSites: 8,
    rentalYield: 6.4,
    conservationCoverage: 8,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Coventry LPA)",
      planningSource: "Coventry City Council Planning Portal, CV3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}
