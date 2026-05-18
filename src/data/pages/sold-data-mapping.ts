/**
 * Sold-data mapping, Coventry (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Coventry City Council LPA covers most of the city. Coventry Gateway /
 * Whitmoor / Ansty straddles the Coventry / Rugby Borough boundary, and
 * Allesley fringes Solihull MBC, but for the residential market temperature
 * signal we still read from the Coventry town file.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import coventryData from "@/data/sold-data/coventry.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number | null;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "city-centre-cathedral-quarter": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  friargate: { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  whitley: { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "coventry-gateway-whitmoor-ansty": { data: coventryData as SoldDataFile, label: "Coventry / Rugby Borough LPA" },
  "westwood-tile-hill-canley": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "earlsdon-stoneleigh-cheylesmore": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "holbrooks-foleshill-radford": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "wyken-walsgrave-hawkesbury": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "spon-end-coundon": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "far-gosford-street-fargo-village": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
  "allesley-eastern-green": { data: coventryData as SoldDataFile, label: "Coventry / Solihull MBC LPA" },
  "willenhall-stoke-aldermoor": { data: coventryData as SoldDataFile, label: "Coventry LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
