/**
 * Area hero images, Unsplash CDN photo IDs for Coventry districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "city-centre-cathedral-quarter": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Coventry city centre street with landmark civic architecture",
  },
  friargate: {
    id: "1626010935539-710125f7e294",
    alt: "Friargate Coventry modern station quarter with high-rise developments",
  },
  whitley: {
    id: "1626011338434-2a000a7c63c0",
    alt: "Whitley Coventry engineering and R and D corridor",
  },
  "coventry-gateway-whitmoor-ansty": {
    id: "1699021565667-07f81d7d137c",
    alt: "Coventry Gateway logistics and industrial park frontage",
  },
  "westwood-tile-hill-canley": {
    id: "1603135946711-e2f73c019c44",
    alt: "Westwood Heath Coventry business park and university edge architecture",
  },
  "earlsdon-stoneleigh-cheylesmore": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Earlsdon Coventry high street independent food and beverage",
  },
  "holbrooks-foleshill-radford": {
    id: "1697407503401-8991afe14b00",
    alt: "Holbrooks Coventry industrial belt building",
  },
  "wyken-walsgrave-hawkesbury": {
    id: "1699021566037-2079b9459957",
    alt: "Wyken Coventry suburban retail and hospital adjacent street",
  },
  "spon-end-coundon": {
    id: "1683459269288-63ce626a67f2",
    alt: "Spon End Coventry heritage retail and mixed-use street",
  },
  "far-gosford-street-fargo-village": {
    id: "1626011789898-0b317546acb0",
    alt: "Far Gosford Street Coventry independent leisure regeneration",
  },
  "allesley-eastern-green": {
    id: "1638803702682-4b2c833e543f",
    alt: "Allesley Coventry affluent suburban fringe street",
  },
  "willenhall-stoke-aldermoor": {
    id: "1699818268277-242624112ff9",
    alt: "Willenhall Coventry outer trade and light industrial street",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Coventry aerial skyline with development zones",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
