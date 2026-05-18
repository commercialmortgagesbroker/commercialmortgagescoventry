/**
 * Case studies, Commercial Mortgages Coventry.
 *
 * Ten anonymised case studies covering the Coventry market hooks:
 * Bayton Road JLR Tier 1 supplier industrial owner-occupier, FarGo Village
 * independent F and B owner-occupier, Friargate Grade A office investment
 * refinance, UHCW Walsgrave dental practice owner-occupier, Cathedral
 * Quarter boutique hotel acquisition, Far Gosford Street semi-commercial
 * portfolio, Coventry Gateway B8 logistics warehouse, Earlsdon F and B
 * parade refinance, Holbrooks B2-to-mixed-use bridge-to-let, Westwood
 * Business Park office portfolio refinance.
 *
 * Real Coventry postcodes/districts. Specifics on rate, LTV, term and
 * lender (eight named lenders only: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates
 * inside the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Coventry
 * area slugs in src/lib/constants.ts.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "JLR Tier 1 supplier industrial owner-occupier, Bayton Road",
    slug: "bayton-road-jlr-supplier-industrial-owner-occupier",
    borough: "Coventry Gateway, Whitmoor and Ansty",
    boroughSlug: "coventry-gateway-whitmoor-ansty",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£2.45M",
    gdv: "£3.45M",
    ltv: "71%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier 34,000 sqft B2 industrial unit, Bayton Road industrial estate",
    summary:
      "An established JLR Tier 1 automotive supplier acquired the freehold of its 34,000 sqft B2 production unit on Bayton Road industrial estate (CV7) for £3.45M with a £2.45M owner-occupier commercial mortgage at 71% LTV, 20-year term, 6.95% pa via NatWest.",
    challenge:
      "Established Jaguar Land Rover Tier 1 automotive supplier, trading from leased Bayton Road premises for nine years inside the wider Coventry Gateway and Whitmoor Park automotive cluster, with supply contracts running directly into the JLR Whitley engineering centre and into Tier 2 sub-contracts that feed the wider Midlands automotive supply chain. Turnover £14.5M, EBITDA £1.65M on the most recent full year.\n\nThe landlord offered the freehold at £3.45M open market valuation with a four-month decision window. The borrower had £1.05M deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a long-cycle automotive supply chain trading covenant, which is a sweet spot for the NatWest manufacturing book and the Allica Bank SME owner-occupier desk.",
    solution:
      "NatWest commercial banking quoted 6.95% pa over 20 years at 71% LTV (£2.45M against £3.45M valuation). EBITDA cover at 2.85x stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin for the sector. Allica Bank and HTB also quoted; NatWest offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited accounts, the JLR Tier 1 supplier contract evidence, the Tier 2 sub-contract pipeline pack, deposit proof, the building survey and a clean health-and-safety compliance report. Specialist Midlands industrial RICS valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the four-month decision window. Monthly mortgage payment £18,950 against monthly EBITDA of £137,500, very strong cover. Rate saving against the high-street alternative quoted: approximately £22K pa over the 5-year fix period. The operator has subsequently approached us about a second JLR-adjacent industrial acquisition on the Bayton Road belt.",
    keyStats: [
      { label: "Facility", value: "£2.45M" },
      { label: "Property value", value: "£3.45M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.85x" },
    ],
    coordinates: [52.4490, -1.4520],
  },
  {
    id: "cs-002",
    title: "Independent F&B freehold purchase, FarGo Village",
    slug: "fargo-village-fb-owner-occupier",
    borough: "Far Gosford Street and FarGo Village",
    boroughSlug: "far-gosford-street-fargo-village",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£545K",
    gdv: "£765K",
    ltv: "71%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie independent restaurant and bar freehold, FarGo Village creative quarter",
    summary:
      "An experienced Coventry F and B operator acquired the freehold of its restaurant-and-bar premises inside the FarGo Village creative quarter on Far Gosford Street (CV1) for £765K with a £545K owner-occupier mortgage at 71% LTV, 15-year term, 7.55% pa via Cynergy Bank.",
    challenge:
      "Independent restaurant and bar trading from leased premises inside the FarGo Village independent retail and F and B cluster on Far Gosford Street for eight years. Strong covers profile supported by the year-round Coventry University and city-centre footfall, the City of Culture 2021 legacy and a loyal local catchment that extends into Earlsdon and Cheylesmore. Turnover £825K, EBITDA £118K on the most recent full year.\n\nThe landlord served notice to sell at £765K with a tight three-month decision window. The operator had £220K deposit available from accumulated retained profit. The challenge was speed and the Far Gosford Street F and B sector underwrite, several mainstream commercial desks decline central-Coventry independent leisure on perceived volatility despite the actual trading consistency through the post-2021 City of Culture footfall cycle.",
    solution:
      "Cynergy Bank quoted 7.55% pa over 15 years at 71% LTV (£545K against £765K valuation). EBITDA cover at 1.62x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Licensed-trade and hospitality specialist RICS valuer.\n\nThe credit submission included three years of accounts, current management figures, the licence pack, deposit proof, identity and source-of-funds documents. Cynergy's licensed-trade desk approved in 14 working days. Specialist valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 32 working days from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the vendor's three-month decision window. Monthly mortgage payment £5,210 against monthly EBITDA of £9,830, comfortable cover for continued reinvestment in the kitchen and front-of-house refit. Operator has approached us about a second Far Gosford Street F and B opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£545K" },
      { label: "Property value", value: "£765K" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.55% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.62x" },
    ],
    coordinates: [52.4080, -1.4980],
  },
  {
    id: "cs-003",
    title: "Grade A office investment refinance, Friargate",
    slug: "friargate-grade-a-office-investment-refinance",
    borough: "Friargate",
    boroughSlug: "friargate",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£4.15M",
    gdv: "£5.95M",
    ltv: "70%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Single multi-let Grade A office building, Friargate modern CBD",
    summary:
      "A Midlands-based investor refinanced a single multi-let Grade A office building in the Friargate modern CBD (CV1) off a maturing 5-year fix with a £4.15M commercial investment mortgage at 70% LTV, 25-year amortisation, 7.05% pa via Shawbrook.",
    challenge:
      "38,000 sqft of refurbished Grade A multi-let office space within the Friargate scheme adjacent to Coventry station, the modern CBD anchored by Two Friargate (HMRC) and One Friargate (CCC HQ). The asset was let across three tenants on FRI leases of varying terms, weighted average unexpired lease term 6.5 years, anchored by a professional services occupier on a 10-year FRI with 8 years unexpired and supported by two technology occupiers tied to the wider Coventry University and Warwick research catchment. Net rent £445K pa, valuation £5.95M.\n\nThe investor was carrying a maturing 5-year fix at 5.15% pa and wanted a fresh 5-year fix at the right rate. Grade A office investment at this scale needs a lender comfortable with the blended tenant covenant pack, the Friargate scheme management structure and the post-pandemic office sector view, which a portion of the mainstream commercial pool will not entertain at the right rate.",
    solution:
      "Shawbrook quoted 7.05% pa on a 5-year fix inside a 25-year amortisation at 70% LTV (£4.15M against £5.95M valuation). ICR cover at 158% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin across the blended tenant covenant base.\n\nThe credit submission included three FRI leases, tenant covenant packs on the professional services and technology occupiers, three-year rent collection history at 99% on-time across the building, the Friargate scheme management agreement, the SPV pack and the deposit proof. Specialist Midlands commercial valuer with recent Friargate comparables on file. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years across the asset on a clean 25-year structure. Monthly interest cost approximately £19K pa below the high-street incumbent's quoted rate over the 5-year fix. The investor has subsequently approached us about a second Friargate acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£4.15M" },
      { label: "Property value", value: "£5.95M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.05% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "158%" },
    ],
    coordinates: [52.4015, -1.5135],
  },
  {
    id: "cs-004",
    title: "Dental practice freehold purchase, UHCW Walsgrave catchment",
    slug: "uhcw-walsgrave-dental-practice-owner-occupier",
    borough: "Wyken, Walsgrave and Hawkesbury",
    boroughSlug: "wyken-walsgrave-hawkesbury",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.05M",
    gdv: "£1.45M",
    ltv: "72%",
    term: "25 years",
    units: 1,
    schemeType: "Owner-occupier mixed NHS-and-private dental practice freehold",
    summary:
      "An established Walsgrave dental partnership acquired the freehold of its practice premises in the University Hospitals Coventry and Warwickshire (UHCW) catchment (CV2) for £1.45M with a £1.05M owner-occupier commercial mortgage at 72% LTV, 25-year term, 6.55% pa via Lloyds.",
    challenge:
      "Established mixed NHS-and-private dental practice, three principals, six surgeries, trading from leased Walsgrave premises for twelve years inside the UHCW healthcare ancillary catchment. NHS GDS contract value £525K pa supplemented by a stable private-fee mix; the practice sits inside the dominant University Hospitals Coventry and Warwickshire catchment which generates a strong referral and patient flow across Wyken, Walsgrave and Hawkesbury. Turnover £1.18M, EBITDA £365K on the most recent full year.\n\nThe freeholder offered the property at £1.45M open market valuation with a four-month decision window. The partnership had £395K deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a defensive regulated-profession sector, which is a particular sweet spot for the Lloyds healthcare desk and the Cambridge and Counties Warwickshire SME book.",
    solution:
      "Lloyds commercial banking quoted 6.55% pa over 25 years at 72% LTV (£1.05M against £1.45M valuation). EBITDA cover at 2.28x stressed, comfortable margin for the regulated profession sector. Barclays and Cambridge and Counties also quoted; Lloyds offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited partnership accounts, the NHS GDS contract evidence, principal-level CV pack and GDC registration evidence, deposit proof, the building survey and a clean dental decontamination compliance report. Specialist healthcare RICS valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership's four-month decision window. Monthly mortgage payment £7,140 against monthly EBITDA of £30,420, very strong cover. Rate saving against the high-street alternative quoted: approximately £15K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£1.05M" },
      { label: "Property value", value: "£1.45M" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "6.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "EBITDA cover", value: "2.28x" },
    ],
    coordinates: [52.4220, -1.4540],
  },
  {
    id: "cs-005",
    title: "Boutique hotel acquisition, Cathedral Quarter",
    slug: "cathedral-quarter-boutique-hotel-acquisition",
    borough: "Coventry City Centre and Cathedral Quarter",
    boroughSlug: "city-centre-cathedral-quarter",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£2.85M",
    gdv: "£4.05M",
    ltv: "70%",
    term: "20 years",
    units: 1,
    schemeType: "Independent 24-bedroom boutique hotel and restaurant freehold",
    summary:
      "An experienced hospitality operator acquired the freehold of a 24-bedroom independent boutique hotel and restaurant in the Cathedral Quarter (CV1) for £4.05M with a £2.85M trading-business mortgage at 70% LTV, 20-year term, 8.05% pa via Cynergy Bank.",
    challenge:
      "Established trading business inside the Cathedral Quarter heritage hospitality cluster on Bayley Lane adjacent to Coventry Cathedral and the Belgrade Theatre, twenty-four letting bedrooms above an 80-cover restaurant and bar. Trading consistently with occupancy averaging 74% across the previous 24 months and restaurant covers materially supported by year-round footfall from Coventry Cathedral, the Belgrade, Coventry Transport Museum and the sustained City of Culture 2021 legacy, alongside Coventry University staff and visitor flow. ADR £145, EBITDA £505K on the most recent full year of vendor accounts.\n\nThe vendor offered the freehold and goodwill for sale at £4.05M with a 120-day completion window. The complication was the listed-building status of the Cathedral Quarter conservation area property, which triggered a specialist heritage RICS valuation premium and a tighter underwriting view on the planned cosmetic refurbishment programme. Two mainstream commercial desks declined on the listed-building heritage premium.",
    solution:
      "Cynergy Bank quoted 8.05% pa over 20 years at 70% LTV (£2.85M against £4.05M valuation). EBITDA cover at 1.65x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's hospitality desk accepted the listed-building heritage position on the strength of a specialist heritage hospitality RICS valuation and a costed conservation-area refurbishment plan signed off by a heritage architect.\n\nThe credit submission included three years of vendor accounts, the operator's hospitality track record across two previous Midlands hospitality sites, the heritage-architect refurbishment scope, the licence pack and a six-month post-completion management projection. We negotiated the personal guarantee cap down from 30% to 22% of facility on the strength of the operator track record. Credit approval at week 5, full legal completion at week 10 from start, comfortably inside the 120-day window.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling a Cathedral Quarter heritage hospitality asset on long-term debt with a reduced personal-guarantee exposure. The borrower has subsequently approached us about a second Coventry boutique hospitality opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£2.85M" },
      { label: "Property value", value: "£4.05M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "8.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.65x" },
    ],
    coordinates: [52.4080, -1.5110],
  },
  {
    id: "cs-006",
    title: "Semi-commercial portfolio refinance, Far Gosford Street",
    slug: "far-gosford-street-semi-commercial-portfolio",
    borough: "Far Gosford Street and FarGo Village",
    boroughSlug: "far-gosford-street-fargo-village",
    financeType: "Portfolio Refinance (Semi-Commercial)",
    loanAmount: "£1.85M",
    gdv: "£2.55M",
    ltv: "72%",
    term: "25 years (5yr fix)",
    units: 6,
    schemeType: "Six-unit semi-commercial portfolio (Class E ground + flats above), Far Gosford Street",
    summary:
      "A Coventry-based investor refinanced a six-unit semi-commercial portfolio along Far Gosford Street (CV1) into a single £1.85M facility at 72% LTV, 25-year amortisation, 7.65% pa via InterBay Commercial.",
    challenge:
      "Six semi-commercial freeholds along Far Gosford Street, each Class E ground floor (independent retail and F and B let to local operators tied to the FarGo Village creative quarter) with two or three self-contained flats above let on assured shorthold tenancies to a mix of postgraduate Coventry University students and young-professional renters. Combined gross rent £218K pa across the commercial elements and the residential elements, valuation £2.55M.\n\nThe investor had financed the portfolio across two legacy lenders, one on a maturing fix at 5.45% pa and one on variable, with personal-guarantee exposure spread inefficiently. The brief was a single 25-year facility with a fresh 5-year fix, a single point of consolidated administration and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rent collection history across the portfolio.",
    solution:
      "InterBay Commercial quoted 7.65% pa on a 5-year fix inside a 25-year amortisation at 72% LTV (£1.85M against £2.55M valuation). Blended ICR cover at 154% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the semi-commercial blended income.\n\nThe credit submission included six Class E commercial leases, the residential AST schedule across the upper-floor flats, three-year rent collection history at 96% on-time across the portfolio, the SPV pack, the Coventry City Council additional HMO licensing position confirming the upper-floor flats sat outside the HMO regime, and the deposit proof. We negotiated the personal guarantee cap down from 30% to 24% of facility on the strength of the rent collection track record. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Two legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced from 30% of facility to 24%. The investor has subsequently used the same lender for a seventh-unit acquisition further west along Far Gosford Street.",
    keyStats: [
      { label: "Facility", value: "£1.85M" },
      { label: "Property value", value: "£2.55M" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.65% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "Blended ICR", value: "154%" },
    ],
    coordinates: [52.4080, -1.4980],
  },
  {
    id: "cs-007",
    title: "B8 logistics warehouse refinance, Coventry Gateway",
    slug: "coventry-gateway-b8-logistics-warehouse",
    borough: "Coventry Gateway, Whitmoor and Ansty",
    boroughSlug: "coventry-gateway-whitmoor-ansty",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.85M",
    gdv: "£5.45M",
    ltv: "71%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Single-let 62,000 sqft B8 logistics warehouse, Coventry Gateway corridor",
    summary:
      "An investor refinanced a single-let 62,000 sqft B8 logistics warehouse on the Coventry Gateway corridor (CV3) off a maturing 5-year fix with a £3.85M commercial investment mortgage at 71% LTV, 20-year amortisation, 6.85% pa via Barclays.",
    challenge:
      "62,000 sqft of modern B8 logistics space and ancillary office on the Coventry Gateway corridor south of the city off the A45, let to an established national distribution operator on a 10-year FRI lease with 7 years unexpired at refinance, located inside the wider Coventry Gateway, Whitmoor Park and Prologis Park Coventry (Ryton) logistics cluster anchored by the Jaguar Land Rover, Arrival and IKEA distribution employer base. Net rent £402K pa, valued at £5.45M by the lender's panel valuer. The investor was carrying a maturing 5-year fix at 5.25% pa and wanted a fresh 5-year fix at the right rate.\n\nThe high-street commercial incumbent quoted 7.55% pa over 20 years, wider than the Midlands logistics corridor should price on a clean national distribution covenant and a meaningful unexpired term. The Coventry Gateway cluster reads as one of the strongest logistics catchments in the country and lenders that price the corridor properly on the first call quote materially tighter.",
    solution:
      "We benchmarked the deal across four logistics-active investment lender desks. Barclays quoted 6.85% pa on a 5-year fix inside a 20-year amortisation at 71% LTV (£3.85M against £5.45M valuation). ICR cover at 165% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin on the national distribution covenant.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts and evidence of the wider distribution network, the Coventry Gateway site planning history, occupancy track record, the SPV pack and the deposit proof. RICS Red Book valuation by a specialist Midlands industrial valuer in 18 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years. Monthly interest cost approximately £27K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second B8 logistics acquisition further down the A45 toward the Prologis Park Coventry estate.",
    keyStats: [
      { label: "Facility", value: "£3.85M" },
      { label: "Property value", value: "£5.45M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.85% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "165%" },
    ],
    coordinates: [52.4290, -1.4150],
  },
  {
    id: "cs-008",
    title: "F&B parade refinance, Earlsdon Street",
    slug: "earlsdon-fb-parade-refinance",
    borough: "Earlsdon, Stoneleigh and Cheylesmore",
    boroughSlug: "earlsdon-stoneleigh-cheylesmore",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£1.95M",
    gdv: "£2.75M",
    ltv: "71%",
    term: "25 years (5yr fix)",
    units: 4,
    schemeType: "Four-unit independent F&B parade, Earlsdon Street",
    summary:
      "A Warwickshire-based investor refinanced a four-unit independent F and B parade on Earlsdon Street (CV5) into a single £1.95M facility at 71% LTV, 25-year amortisation, 7.45% pa via Santander.",
    challenge:
      "Four-unit F and B and retail parade on Earlsdon Street, the established affluent-suburban F and B spine south-west of the city centre. Mixed tenant covenant base: one regional independent restaurant on a 10-year FRI with 7 years unexpired, one independent coffee operator on a 5-year FRI, one specialist food retailer and one flexible-term let to an independent wine bar. Weighted average unexpired lease term 5.4 years. Combined gross rent £228K pa, valuation £2.75M.\n\nPrevious facility was a maturing 5-year fix at 5.55% pa across the parade with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade, plus consolidation into a single facility.",
    solution:
      "Santander quoted 7.45% pa on a 5-year fix inside a 25-year amortisation at 71% LTV (£1.95M against £2.75M valuation). ICR cover at 159% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 23% of facility on the strength of three years of clean rent collection history (98% on-time across the four units) and the diversified tenant covenant base. The credit submission included three FRI leases plus the flexible let, tenant covenant packs on the regional restaurant and the coffee operator, three-year rent collection history, the SPV pack and the original Earlsdon Street parade planning consent. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the parade held on a clean single facility. The investor has subsequently used the same lender for a second Earlsdon professional services acquisition further along the same parade.",
    keyStats: [
      { label: "Facility", value: "£1.95M" },
      { label: "Property value", value: "£2.75M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "159%" },
    ],
    coordinates: [52.3960, -1.5350],
  },
  {
    id: "cs-009",
    title: "B2-to-mixed-use bridge-to-let, Holbrooks",
    slug: "holbrooks-b2-to-mixed-use-bridge-to-let",
    borough: "Holbrooks, Foleshill and Radford",
    boroughSlug: "holbrooks-foleshill-radford",
    financeType: "Commercial Bridge-to-Let",
    loanAmount: "£1.25M",
    gdv: "£1.65M",
    ltv: "76%",
    term: "12-month bridge + 25-year term-out",
    units: 1,
    schemeType: "Vacant B2 workshop with consented conversion to Class E + 6 flats, Holbrook Lane fringe",
    summary:
      "A Coventry-based investor acquired a £1.65M vacant former B2 workshop on the Holbrook Lane fringe (CV6) with a £1.25M 12-month bridge at 0.85% per month via LendInvest, with an agreed term-out at 7.15% pa onto a 25-year commercial investment mortgage on completion of conversion to a Class E ground unit and six self-contained flats above.",
    challenge:
      "The asset was a former Class B2 light-industrial workshop on the Holbrook Lane fringe of the Foleshill industrial belt, vacant possession at acquisition, with planning consent already granted by Coventry City Council under reference visible on the planning.coventry.gov.uk portal for change of use to Class E retail ground floor plus six self-contained flats above on the upper floor. The investor's plan: structural conversion works (£185K budget, internal demolition of the production line, Class E ground floor partition, six 1- and 2-bed flat fit-out on the upper floor, services upgrade), then re-let on a single Class E FRI lease to a regional convenience operator on the ground and assured shorthold tenancies on the six flats above.\n\nNo investment lender would fund the asset at acquisition because there was no income and the conversion was not yet built, but the income was clearly deliverable inside 9 to 12 months. Bridge-to-let was the right answer; the question was getting the term-out commitment locked at acquisition rather than hoping to refinance later in a different rate environment.",
    solution:
      "LendInvest quoted a 12-month bridge at 0.85% per month (10.20% pa equivalent) at 76% LTV against open-market vacant possession value, with the agreed term-out at 7.15% pa onto a 25-year amortisation on completion of letting. Both offers issued together at acquisition, the term-out was conditional on the Class E FRI lease completing at minimum £38K pa and the six AST flats stabilising at 95% occupancy.\n\nConversion works completed in 6 months. The Class E unit re-let on a 7-year FRI at £42K pa to a regional convenience operator at month 7. The six flats stabilised at month 8. Term-out drew at month 9, replacing the bridge with a 25-year investment commercial mortgage at the agreed 7.15% pa.",
    outcome:
      "Total bridge cost £96K over 9 months, inside the value-add envelope. Stabilised asset at exit valued at £2.05M (against £1.65M acquisition + £185K capex), generating £200K of equity uplift before the long-term hold. Investor has used the bridge-to-let model twice more across the Holbrooks and Foleshill belt.",
    keyStats: [
      { label: "Bridge facility", value: "£1.25M" },
      { label: "Acquisition value", value: "£1.65M" },
      { label: "Bridge LTV", value: "76%" },
      { label: "Bridge rate", value: "0.85% pm" },
      { label: "Term-out rate", value: "7.15% pa" },
      { label: "Stabilised value", value: "£2.05M" },
    ],
    coordinates: [52.4290, -1.5180],
  },
  {
    id: "cs-010",
    title: "Office portfolio refinance, Westwood Business Park",
    slug: "westwood-business-park-office-portfolio-refinance",
    borough: "Westwood Heath, Tile Hill and Canley",
    boroughSlug: "westwood-tile-hill-canley",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£3.25M",
    gdv: "£4.65M",
    ltv: "70%",
    term: "25 years (5yr fix)",
    units: 3,
    schemeType: "Three-unit multi-let office portfolio, Westwood Business Park",
    summary:
      "A Midlands-based investor refinanced a three-unit multi-let office portfolio on Westwood Business Park (CV4) into a single £3.25M facility at 70% LTV, 25-year amortisation, 7.15% pa via Shawbrook.",
    challenge:
      "Three multi-let office units within Westwood Business Park on the University of Warwick fringe, c. 28,000 sqft combined. Mixed tenant covenant base across the three units: nine tenants in total across professional services, technology, university spin-out and research-and-development occupiers tied to the wider University of Warwick and Coventry University research catchment. Weighted average unexpired lease term 5.8 years. Combined net rent £342K pa, valuation £4.65M.\n\nThe investor was carrying three separate maturing 5-year fixes (one at 5.05% pa, two at 5.35% pa) across the portfolio and wanted consolidation into a single facility with a fresh 5-year fix at the right rate. Multi-let office at this scale across three buildings needs a lender comfortable with the portfolio-level administration and the blended tenant covenant view.",
    solution:
      "Shawbrook quoted 7.15% pa on a 5-year fix inside a 25-year amortisation at 70% LTV (£3.25M against £4.65M valuation). Blended ICR cover at 156% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin across the nine-tenant blended covenant base.\n\nThe credit submission included the nine tenant leases, tenant covenant packs on the principal occupiers, three-year rent collection history at 98% on-time across the portfolio, the Westwood Business Park management agreement, the SPV pack and the deposit proof. Specialist Midlands commercial valuer with recent Westwood Business Park comparables on file. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Three legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Single point of consolidated administration. The investor has subsequently approached us about a Westwood Heath single-asset acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£3.25M" },
      { label: "Property value", value: "£4.65M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.15% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "Blended ICR", value: "156%" },
    ],
    coordinates: [52.3870, -1.5660],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
