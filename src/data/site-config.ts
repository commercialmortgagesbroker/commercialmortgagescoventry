// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Coventry",
  "domain": "commercialmortgagescoventry.co.uk",
  "locationName": "Coventry",
  "county": "west-midlands",
  "town": "coventry",
  "tagline": "Specialist commercial mortgages in Coventry and the West Midlands",
  "description": "Specialist commercial mortgage broker for Coventry, the JLR Whitley engineering centre, Coventry Gateway logistics corridor and the wider West Midlands. Industrial, automotive supply chain, retail, semi-commercial, HMO portfolio and trading-business finance from a 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages coventry",
  "heroSubtitle": "Owner-occupier, investment, industrial-warehouse, leisure and hospitality, HMO portfolio and trading-business commercial mortgages, sourced from a 90+ lender panel and structured around your Coventry asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagescoventry.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Coventry",
    "city": "Coventry",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 52.4068,
    "lon": -1.5197
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagescoventry.co.uk",
  "satelliteSiteUrl": "https://coventrycommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/west-midlands/coventry",
  "accent": {
    "hex": "#7a3a85",
    "hsl": "hsl(291, 39%, 37%)",
    "hue": 291
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesCoventry",
  "ghlSource": "Commercial Mortgages Coventry Primary Website",
  "ghlWidgetId": ""
} as const;
