/**
 * Property-type / asset-class commercial mortgage pages, Coventry.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Coventry-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  coventryContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Coventry by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Coventry property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Coventry",
    lede:
      "A Coventry commercial mortgage on a Whitmoor Park logistics shed prices nothing like a Cathedral Lanes retail unit or a Far Gosford Street student HMO block. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a Coventry Gateway logistics warehouse runs through a different desk to one on a Spon Street heritage pub freehold or a Far Gosford Street converted HMO, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Coventry is industrial-heavy, student-HMO-heavy and automotive-led. The M6, A45 and A46 logistics corridor around Coventry Gateway and Whitmoor Park is one of the most active industrial-warehouse markets in the Midlands, anchored by Jaguar Land Rover at Whitley, the UK Battery Industrialisation Centre at Whitmoor and the wider EV supply chain. Coventry also runs the densest student commercial mortgage demand pool of the four-city Midlands set on the back of around 65,000 combined Coventry University and University of Warwick students. Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and worked Coventry examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, a Bayley Lane heritage building used as both hotel and restaurant, a Friargate ground-floor retail-plus-flats block, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios, particularly relevant given the Coventry student HMO portfolio market.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Coventry | City Centre South, Friargate, West Orchards, Cathedral Lanes, FarGo Village",
    metaDescription:
      "Commercial mortgage finance for retail property in Coventry, City Centre South Shearer regen, Friargate ground-floor, West Orchards, Lower Precinct, Cathedral Lanes, FarGo Village, Coventry Market, Earlsdon Avenue, Hertford Street. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Coventry",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Coventry retail is in active transition, the City Centre South regeneration (Shearer Property Regeneration Partners) is rebuilding the prime pitch, Friargate ground-floor retail is bedding in around the modern CBD, West Orchards, Lower Precinct, Cathedral Lanes and Coventry Market carry the established covered-scheme stock, FarGo Village anchors independent-led retail on Far Gosford Street, and Earlsdon Avenue plus Hertford Street round out the district network. Lender appetite varies sharply by retail sub-type. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry retail commercial mortgage",
      body: [
        "The Coventry retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime CV1 city-centre</strong> covers the Hertford Street pedestrianised spine, West Orchards covered shopping centre, Cathedral Lanes and Lower Precinct, traditional covered-scheme stock plus the Hertford Street national-multiple spine. <strong>City Centre South regeneration</strong> (Shearer Property Regeneration Partners) is the largest single retail-led scheme reshaping the prime CV1 pitch, multi-phase mixed-use delivery that will generate refinance volume on stabilised lots once let. <strong>Friargate ground-floor retail</strong> sits adjacent to Coventry station within the wider Friargate masterplan (Two Friargate let to HMRC, One Friargate the council HQ, with ground-floor commercial across multiple plots). <strong>Independent and district retail</strong> covers FarGo Village (the independent retail and F&B cluster on Far Gosford Street, CV1 5), Coventry Market, Earlsdon Avenue (CV5), Spon Street heritage retail and the wider suburban parade network.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national covenant in West Orchards or on a stabilised City Centre South lot prices materially better than three two-year leases to local independents on the same Far Gosford Street pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider.",
        "Worked example: a Hertford Street retail unit on a 10-year FRI to a national fashion covenant, £1.25M valuation, £88K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £895K, about 72% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: an Earlsdon Avenue retail unit let to two independent operators on shorter leases, £425K valuation, two-year tail to the lead tenant. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.0% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Prime city-centre covered scheme (CV1)", detail: "West Orchards, Cathedral Lanes, Lower Precinct, plus the new City Centre South delivery as lots stabilise. National multiple covenants dominate the let stock; institutional investment territory on long FRI leases." },
        { label: "Hertford Street pedestrian spine (CV1)", detail: "The traditional Coventry retail spine. National multiple and mid-market covenants; mix of investment and owner-occupier independents on the secondary frontages." },
        { label: "Friargate ground-floor retail (CV1)", detail: "Ground-floor commercial across the Friargate masterplan plots adjacent to Coventry station. Modern stock; Two Friargate HMRC and One Friargate council anchor the wider scheme." },
        { label: "FarGo Village independent retail (CV1 5)", detail: "The Far Gosford Street independent retail and F&B cluster, university-led footfall on the back of the Coventry University estate. Independent covenant base, owner-occupier active." },
        { label: "Coventry Market and Spon Street heritage", detail: "Coventry Market trading hall and the Spon Street heritage parade, listed and conservation-area retail. Independent-led; heritage-comfortable underwriting." },
        { label: "Earlsdon Avenue and district retail (CV5)", detail: "Earlsdon Avenue suburban parade, the densest professional-class district-centre pitch in the city. Independent retail and F&B combined with strong year-round resident catchment." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry retail estate",
      body: 'Coventry retail is in the middle of the most significant repositioning in any of the Midlands cities we cover, the City Centre South redevelopment (Shearer Property Regeneration Partners) is rebuilding the prime CV1 pitch as a multi-phase mixed-use scheme combining retail, leisure and residential, and the Friargate masterplan has already delivered Two Friargate (HMRC) and One Friargate (Coventry City Council HQ) with further plots and ground-floor commercial bedding in around Coventry station. The covered-scheme stock at West Orchards, Cathedral Lanes and Lower Precinct underpins the established CV1 retail spine alongside Hertford Street. FarGo Village on Far Gosford Street (CV1 5) anchors the independent retail and F&B cluster on the back of the Coventry University estate footfall, with Coventry Market trading hall providing the traditional market component. Spon Street carries the heritage parade with listed and conservation-area stock. The district network runs through Earlsdon Avenue (CV5) as the dominant suburban professional-class pitch, with secondary parades across Allesley, Holbrooks Lane and Wyken. Recent change-of-use volume across the CV1 spine and continued Friargate delivery generate steady refinance flow as new lettings stabilise.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on the established CV1 covered schemes and Hertford Street prime investment let on long FRI leases. Mid-strength on Earlsdon Avenue and FarGo Village independent prime, where rents are strong but covenants are independent. Tighter on suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV; West Midlands regional RM teams cover Coventry from Birmingham desks. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) on district-centre and Earlsdon Avenue investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.0% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Coventry retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype, common across Earlsdon Avenue and the Spon Street heritage parade. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime West Orchards or Hertford Street with a 10-year FRI to a national covenant sometimes funds at 130%. Earlsdon Avenue independent parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional appetite for prime retail has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "City Centre South stabilised lot, what does it price at right now?",
        answer: "A stabilised City Centre South retail or leisure lot let to a national covenant on a 10-year FRI prices in the 6.5 to 7.5% pa band at 65 to 70% LTV in mid-2026. Lloyds, NatWest, Barclays and Santander all compete on this profile once the lot is delivered and let. Pre-delivery, lots route as development finance with exit modelling onto term investment once practical completion and lease completion are both in place.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Coventry | Friargate CBD, Greyfriars Road, Bayley Lane, Whitley, Ansty Park",
    metaDescription:
      "Commercial mortgage finance for office property in Coventry, Friargate modern CBD (Two Friargate HMRC, One Friargate council HQ), Greyfriars Road, Earl Street, Hertford Street, Bayley Lane Cathedral Quarter, Whitley business park JLR-adjacent, Severn Trent HQ, Ansty Park engineering-led offices. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Coventry",
      lede:
        "Investment and owner-occupier mortgage finance for Coventry office property. Friargate is the modern CBD (Two Friargate let to HMRC, One Friargate the Coventry City Council HQ), Greyfriars Road and Earl Street carry the traditional professional-services freehold spine, Bayley Lane anchors the Cathedral Quarter heritage office stock, Whitley business park serves the JLR engineering ecosystem and Ansty Park (CV7, adjacent) carries the Rolls-Royce, MTC and engineering-led modern out-of-town corporate stock. Severn Trent HQ on Coventry CV1 adds a major utility-sector anchor. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry office commercial mortgage",
      body: [
        "Coventry office stock reflects the city's automotive-engineering, utility, university and back-office economy. The occupier base is heavily engineering-led, anchored by Jaguar Land Rover at Whitley, Rolls-Royce and the Manufacturing Technology Centre at Ansty Park, Severn Trent HQ on Coventry CV1, the Coventry City Council HQ at One Friargate, HMRC at Two Friargate, Coventry University and the University of Warwick. The commercial mortgage market splits four ways. <strong>Friargate modern CBD (CV1)</strong> the prime modern Coventry office cluster around Coventry station, Two Friargate (HMRC) and One Friargate (council HQ) anchor the scheme with further plots in delivery; institutional investment territory where lots are let. <strong>Greyfriars Road, Earl Street and Hertford Street (CV1)</strong> the traditional professional-services freehold spine and small-investment bracket. <strong>Bayley Lane Cathedral Quarter (CV1)</strong> heritage and listed-building office around Coventry Cathedral. <strong>Whitley business park (CV3) and Ansty Park (CV7, adjacent)</strong> the out-of-town corporate and engineering-led R&D-office stock.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a JLR supplier, an engineering consultancy or a professional-services firm prices materially better than the same building let on three two-year leases. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the engineering consultancy buying its Whitley suite, the legal firm taking the freehold of its Greyfriars Road office, the accountancy buying a Bayley Lane heritage townhouse.",
        "<strong>Ansty Park</strong> is a discrete sub-pool sitting just over the city boundary in CV7. The estate combines Rolls-Royce, the Manufacturing Technology Centre and a broader engineering-led occupier base; valuations and lender comfort reflect the institutional-grade modern stock and the engineering covenant strength. <strong>Whitley business park</strong> sits adjacent to the JLR Whitley engineering centre and carries an unusually deep supplier-park demand layer; lenders treat the JLR-adjacent supplier covenants favourably given the long-tenured supply contracts. <strong>Bayley Lane Cathedral Quarter</strong> needs heritage-comfortable lenders given the listed-building and conservation-area constraints on alteration.",
        "Worked example: a Greyfriars Road 5,400 sq ft office investment, £1.5M valuation, let on a 7-year FRI to a regional law firm at £105K passing rent. ICR at 145% sizes a £960K loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: a Bayley Lane heritage office freehold purchase by an engineering consultancy, £685K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Friargate modern CBD office (CV1)", detail: "Two Friargate (HMRC), One Friargate (Coventry City Council HQ) plus further plot delivery. Modern CBD stock around Coventry station; institutional investment where lots are let on long FRI." },
        { label: "Greyfriars Road and Earl Street professional spine (CV1)", detail: "The traditional Coventry professional-services freehold spine. Victorian and 1960s purpose-built stock plus continual upper-floor conversion. £200K to £1.5M bracket." },
        { label: "Bayley Lane Cathedral Quarter heritage (CV1)", detail: "Listed and conservation-area office around Coventry Cathedral and Bayley Lane. Heritage-comfortable lenders only." },
        { label: "Whitley business park JLR-adjacent (CV3)", detail: "Out-of-town business park adjacent to JLR Whitley engineering centre. Supplier-park covenants and smaller R&D-office stock; favourable lender treatment on JLR supply-chain occupiers." },
        { label: "Ansty Park engineering-led corporate (CV7)", detail: "Rolls-Royce, the Manufacturing Technology Centre and the wider engineering-led occupier base. Modern institutional-grade out-of-town corporate stock; sits just over the city boundary in CV7." },
        { label: "Owner-occupier office freehold", detail: "Engineering consultancy, JLR supplier, legal, accountancy buying their building. EBITDA cover route at 1.3 to 1.5x; £400K to £2M typical facility size." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Serviced and licence-let stock routes through specialist desks.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry office estate",
      body: 'Coventry office stock divides into four clear clusters. <strong>Friargate (CV1)</strong> is the modern CBD around Coventry station, anchored by Two Friargate (HMRC), One Friargate (Coventry City Council HQ) and further plot delivery in train; the scheme has reset the Coventry prime office benchmark and continues to generate refinance flow as new plots stabilise. <strong>Greyfriars Road, Earl Street and Hertford Street (CV1)</strong> form the traditional professional-services freehold spine running through the central city, the densest small-cap office market with Victorian and 1960s purpose-built stock plus continual upper-floor conversion. <strong>Bayley Lane Cathedral Quarter (CV1)</strong> carries the heritage and listed office stock around Coventry Cathedral, a small but valued sub-pool with conservation-area constraints. <strong>Whitley business park (CV3)</strong> sits adjacent to the JLR Whitley engineering centre and carries supplier-park office and R&D stock with substantial JLR-supply-chain demand. <strong>Ansty Park (CV7, adjacent)</strong> sits just over the city boundary and holds the institutional-grade engineering-led corporate stock anchored by Rolls-Royce and the Manufacturing Technology Centre. Severn Trent HQ on Coventry CV1 adds a major utility anchor in the central CBD. The structural supply position is steady, central CBD owner-occupier demand outstrips speculative supply, and refinancing flow across the Friargate scheme is a meaningful share of total commercial mortgage volume. Coventry deals route via West Midlands regional desks based predominantly in Birmingham.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years, particularly Two Friargate and One Friargate equivalent profile. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants, all running West Midlands regional desks from Birmingham covering Coventry. Allica Bank (active on Coventry SME owner-occupier), <strong>Shawbrook</strong>, HTB, YBS Commercial and Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.0% pa. Ansty Park institutional stock with conventional FRI lettings sits on the standard panel; Bayley Lane heritage stock routes through heritage-comfortable lenders only.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Coventry office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Coventry office stock still fundable?",
        answer: "Yes. The Friargate scheme has reset the prime benchmark and absorbed material occupier demand at Two Friargate and One Friargate; the older Greyfriars Road and Earl Street stock has repriced to reflect post-Covid working patterns, which has made underwriting easier rather than harder. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and HTB have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the older stock needs anyway.",
      },
      {
        question: "Ansty Park office purchase, can you fund it?",
        answer: "Yes, where the asset is let on conventional FRI to a strong covenant such as Rolls-Royce, the MTC or an engineering occupier, or owner-occupied by a strong-covenant business. Ansty Park is well-known to West Midlands underwriters; the institutional-grade modern stock and engineering covenant base support keen pricing. Above £5M the deal typically routes through structured commercial debt outside the standard broker panel.",
      },
      {
        question: "What about owner-occupier office purchase on Greyfriars Road?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The engineering consultancy, accountancy or legal firm taking the freehold of its existing leased Greyfriars Road or Earl Street building is the archetypal deal, typically £400K to £1.5M facility.',
      },
      {
        question: "Are Bayley Lane heritage offices fundable?",
        answer: "Yes, but the lender pool narrows. Listed and conservation-area office around Bayley Lane and the Cathedral Quarter routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Allica Bank. Slightly tighter LTV (typically 65% rather than 70%) reflecting listed-building consent constraints on alteration; otherwise comparable terms to non-listed stock. Pricing typically 7.75 to 8.5% pa at 65 to 70% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Coventry | Coventry Gateway, Whitmoor Park, Prologis Park, Bayton Road, Holbrook Lane, Browns Lane",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Coventry, Coventry Gateway / Whitmoor Park (Amazon Ryton, JLR, IKEA), Prologis Park Coventry, UKBIC battery R&D, Whitley supplier ecosystem, Bayton Road (Exhall), Holbrook Lane (CV6), Browns Lane (former JLR), Westwood Business Park. M6 / A45 / A46 corridor. Mid-2026 rates 6.0 to 7.75% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Coventry",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across one of the strongest industrial markets in the Midlands. Coventry Gateway / Whitmoor Park (Amazon Ryton, JLR, IKEA distribution), Prologis Park Coventry, the UK Battery Industrialisation Centre supply chain, the Whitley JLR supplier ecosystem, Bayton Road in Exhall, Holbrook Lane in CV6, Browns Lane (the former JLR plant in CV5) and Westwood Business Park carry the bulk of the stock. The M6, A45 and A46 logistics corridor sits at the heart of the Midlands shed. Investment LTV to 75%, owner-occupier to 75%, rates 6.0 to 7.75% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.0 to 7.75% pa" },
        { label: "Facility", value: "£250K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry industrial commercial mortgage",
      body: [
        "Coventry industrial is the most strategically important sector in the city's commercial mortgage market. The market is anchored by the automotive and EV battery supply chain feeding Jaguar Land Rover at Whitley, the UK Battery Industrialisation Centre at Whitmoor Park, Amazon distribution at Ryton and the wider M6 / A45 / A46 logistics corridor. The practical split runs five ways. <strong>Coventry Gateway / Whitmoor Park (CV3 4)</strong> the major employment-land delivery south of the city on the A45 corridor, Amazon Ryton, JLR, IKEA distribution and the UKBIC battery R&D facility anchor the cluster. <strong>Prologis Park Coventry (Ryton)</strong> the institutional-grade big-shed B8 stock on the southern fringe. <strong>Bayton Road industrial estate (CV7, Exhall)</strong> dense B2/B8 stock just over the northern city boundary. <strong>Holbrook Lane industrial (CV6)</strong> the inner industrial belt running through Holbrooks and Foleshill, last-mile and trade-counter overlap. <strong>Browns Lane (CV5)</strong> the former JLR plant site now redeveloped to mixed industrial use, plus the Whitley supplier ecosystem and Westwood Business Park (CV4) rounding out the southern stock.",
        "Industrial enjoys broad lender competition nationally in mid-2026 because the asset class has performed consistently well through 2022 to 2026, and Coventry stock benefits from the Midlands logistics shed plus the automotive and EV supply-chain anchor. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x. Deal sizes range widely, central Coventry owner-occupier industrial sits in the £300K to £2M bracket; the institutional-grade B8 sheds at Prologis Park, Coventry Gateway and Whitmoor routinely sit in the £3M to £15M bracket.",
        "<strong>Lenders price the M6 / A45 / A46 corridor as one market.</strong> Large logistics operators (Amazon, IKEA, DHL, the major 3PLs) treat Coventry, Rugby, Hinckley, Nuneaton and the wider corridor as a single labour shed; valuers pull comparables across the corridor and credit committees price the corridor not the city. The automotive and EV supply-chain layer is distinct, a pool of long-tenured occupiers tied to JLR, UKBIC and the wider battery supply chain that lenders price favourably given the engineering covenant strength and the strategic significance of the EV transition.",
        "Worked example: a Coventry Gateway industrial unit, 42,000 sq ft, let on a 12-year FRI to a JLR supplier, £6.8M valuation, £485K passing rent. ICR at 140% on a 7.2% pa stressed rate sizes a loan to roughly £4.8M, about 71% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on this profile at 6.75 to 7.25% pa on a five-year fix. Worked example two: a Bayton Road light-industrial trade-counter unit (CV7), 11,500 sq ft, owner-occupier purchase by an existing operator, £1.65M valuation, EBITDA cover 1.55x. Placed with <strong>Lloyds</strong> at 70% LTV, 6.45% pa, 20-year term.",
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Coventry Gateway / Whitmoor Park big-shed B8 (CV3 4)", detail: "Major employment-land delivery south of the city on the A45 corridor. Amazon Ryton, JLR, IKEA and the UKBIC battery R&D facility anchor the cluster. Institutional B8 investment plus owner-occupier supplier stock." },
        { label: "Prologis Park Coventry (Ryton)", detail: "Institutional-grade modern big-shed B8 on the southern Ryton fringe. National logistics covenants dominate; tightest yields in the city." },
        { label: "Bayton Road industrial estate (CV7, Exhall)", detail: "Dense B2/B8 stock just over the northern city boundary in Exhall. Mid-cap units, owner-occupier and let; strong M6 J3 access." },
        { label: "Holbrook Lane / Foleshill industrial belt (CV6)", detail: "The inner industrial belt through Holbrooks and Foleshill. Last-mile logistics and trade-counter overlap; £300K to £2M unit values typical." },
        { label: "Browns Lane and Whitley supplier ecosystem (CV5 / CV3)", detail: "Browns Lane (the former JLR plant site, now redeveloped) plus the Whitley supplier-park ecosystem. JLR supply-chain covenant overlay common." },
        { label: "Owner-occupier SME industrial", detail: "Engineering, automotive supply, EV battery supply chain and manufacturing SMEs buying their workshop or warehouse, the £300K to £2M bracket. EBITDA-led owner-occupier route." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant industrial via bridge-to-let. Multi-let estate portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry industrial estate",
      body: 'Coventry industrial sits at the heart of the Midlands logistics shed, anchored by Jaguar Land Rover at Whitley, the UK Battery Industrialisation Centre at Whitmoor Park, Amazon distribution at Ryton, IKEA distribution and the broader automotive and EV supply chain. Coventry Gateway and Whitmoor Park (CV3 4) on the A45 corridor hold the largest single concentration of big-shed B8 stock plus the strategically critical UKBIC battery R&D facility. Prologis Park Coventry on the Ryton fringe carries the institutional-grade modern B8 stock with national logistics covenants. Bayton Road industrial estate (CV7, Exhall) sits just over the northern city boundary in Nuneaton & Bedworth borough with strong M6 J3 access and dense mid-cap B2/B8 stock. Holbrook Lane through Holbrooks and Foleshill (CV6) is the inner industrial belt, last-mile and trade-counter overlap, with significant volume of £300K to £2M unit transactions feeding commercial mortgage flow. Browns Lane (CV5) the former JLR plant has been redeveloped to mixed industrial use; the wider Whitley supplier-park ecosystem (CV3) carries supplier-park stock with JLR-supply-chain covenants. Westwood Business Park (CV4) on the western fringe rounds out the southern stock with a university-edge office and industrial hybrid. The cross-Midlands logistics shed treats Coventry, Rugby, Hinckley and the wider M6 / A45 / A46 corridor as one labour market, and Coventry industrial yields read tighter than the city-only data suggests because lenders price the corridor not the city. The EV battery supply-chain layer at UKBIC and the Whitmoor cluster adds a covenant overlay that lenders treat favourably given the strategic and engineering significance.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry industrial",
      body: 'Strong across the asset class, one of the most competitive lender pools of any sector in the Midlands. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime let industrial at Coventry Gateway, Prologis Park, Bayton Road and Whitley at 6.5 to 7.5% pa, 65 to 75% LTV with strong covenants. Larger institutional B8 sheds above £5M facility size often route through Lloyds Real Estate Banking or Barclays Corporate Real Estate. Allica Bank (active on Coventry SME owner-occupier), <strong>Shawbrook</strong>, HTB, YBS Commercial and Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) dominate mid-market and owner-occupier industrial at 6.5 to 7.75% pa. <strong>InterBay Commercial</strong>, Together and Aldermore take the multi-let and value-add cases at 7.5 to 8.25% pa. Owner-occupier industrial enjoys best-in-class pricing of any sector, 6.0 to 7.25% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. The Midlands logistics-shed labour-shed dynamic means underwriters routinely pull comparables from Rugby, Hinckley and the wider M6 corridor; they read the market as one. JLR and UKBIC supply-chain occupiers price at the keenest end on covenant strength.',
    },
    faqs: [
      {
        question: "What rate can I get on Coventry industrial investment?",
        answer: "Currently 6.0 to 7.75% pa for prime let industrial with strong covenants and five-plus years unexpired. Larger institutional B8 sheds at Coventry Gateway, Prologis Park and Whitmoor with national logistics or JLR supply-chain covenants price at the keenest end. Trade-counter with national covenant prices at 7.0 to 7.5%. Owner-occupier industrial with two years' clean accounts prices at 6.0 to 7.25% pa, the keenest pricing of any commercial sector.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase at Coventry Gateway or Bayton Road?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Allica Bank, Shawbrook and Cambridge & Counties are the most active mid-market owner-occupier desks; Lloyds, NatWest and Barclays compete on the larger end where borrowing is above £1M and the covenant is strong. Coventry Gateway and Bayton Road are well-known to West Midlands underwriters as modern, well-located corridor stock.',
      },
      {
        question: "How do lenders price the M6 / A45 / A46 corridor?",
        answer: "As one market. Large logistics operators (Amazon, IKEA, DHL, the major 3PLs) treat Coventry, Rugby, Hinckley, Nuneaton and the wider corridor as a single labour shed, and lenders follow them. Valuers pull comparables across the corridor and credit committees price the corridor not the city. Coventry industrial yields read tighter than the city-only sold-data and comparison set would suggest because the Rugby and Hinckley end of the corridor pulls institutional pricing in.",
      },
      {
        question: "What about JLR and UKBIC supply-chain occupiers, how do lenders treat them?",
        answer: "Favourably. JLR-tied suppliers at Whitley and UKBIC-adjacent EV battery supply-chain occupiers at Whitmoor are treated as strategically-significant covenants, lender comfort is high on revenue stability and contract tenure given the EV transition supply chain. Strong covenants on long FRI leases at Coventry Gateway, Whitmoor Park and Whitley price 25 to 50bps inside generic industrial because of the covenant overlay.",
      },
      {
        question: "Browns Lane former JLR site, can I fund industrial there?",
        answer: "Yes. The former JLR Browns Lane plant has been redeveloped to mixed industrial and commercial use over the past decade and now trades as conventional mid-cap industrial. Lenders read the redevelopment history as a positive, the site has modernised stock and good vehicle access, and the broader CV5 location carries strong supplier-ecosystem demand. Pricing typically 6.75 to 7.5% pa at 70 to 75% LTV for well-tenanted lots.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Coventry | Cathedral Quarter, FarGo Village, Spon Street, Belgrade Theatre, Earlsdon",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Coventry, Cathedral Quarter (City of Culture 2021 legacy, Coventry Cathedral, Belgrade Theatre, Transport Museum), FarGo Village, Spon Street heritage F&B, Earlsdon. EBITDA, occupancy and RevPAR underwriting. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Coventry",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues across Coventry. The Cathedral Quarter holds the City of Culture 2021 legacy footfall anchored by Coventry Cathedral, the Belgrade Theatre and the Coventry Transport Museum, FarGo Village on Far Gosford Street carries the independent retail and F&B cluster, Spon Street holds the heritage F&B parade, and Earlsdon Avenue runs the suburban professional F&B cluster. Brand affiliation, operator track record and city-centre-versus-suburban location matter materially. LTVs 60 to 70%, rates 7.0 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender for Coventry independent hospitality.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Coventry's hospitality story is shaped by three demand drivers. <strong>City of Culture 2021 legacy footfall</strong> remains a meaningful visitor draw through the Cathedral Quarter, Coventry Cathedral and the Coventry Transport Museum, plus the Belgrade Theatre evening trade. <strong>University-driven F&B demand</strong> from around 65,000 combined Coventry University and University of Warwick students supports a particularly deep year-round F&B operator base, the densest student-led F&B economy in the four-city Midlands set. <strong>Business and conference traffic</strong> tied to JLR, Rolls-Royce at Ansty Park, Severn Trent HQ and the broader engineering-supply-chain economy supports mid-week business-stay demand. Hotels split sharply by location and by brand affiliation. <strong>Cathedral Quarter (CV1)</strong> holds the prime city-centre hotel and visitor-economy cluster anchored by the Cathedral, the Belgrade Theatre and the Transport Museum. <strong>FarGo Village (CV1 5)</strong> on Far Gosford Street carries the independent F&B operator cluster on the back of university footfall. <strong>Spon Street (CV1)</strong> holds the heritage F&B parade with listed-building stock. <strong>Earlsdon Avenue (CV5)</strong> carries the suburban professional F&B cluster. <strong>Branded franchise hotels</strong> price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV; independent boutique hotels in the same size band sit at 8.5 to 9.0% pa at 60 to 65% LTV. Aparthotels and serviced-apartment formats route through hotel-comfortable lenders, particularly active around the Cathedral Quarter and Friargate.",
        "Worked example: a 62-bed branded franchise budget hotel in the central CBD, £5.6M valuation, EBITDA £805K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 28-bed Cathedral Quarter boutique hotel, £2.05M valuation, EBITDA £245K. Independent route is narrower, <strong>Cynergy Bank</strong> is the lead named lender, OakNorth and Allied Irish Bank UK also realistic. Placed at 60% LTV, 9.0% pa, 20-year term, EBITDA cover 1.7x.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. FarGo Village, Spon Street and Earlsdon Avenue carry the bulk of Coventry's mid-scale F&B operator activity. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Cathedral Quarter visitor-economy hospitality (CV1)", detail: "Hotels, aparthotels and F&B around Coventry Cathedral, the Belgrade Theatre and the Transport Museum. City of Culture 2021 legacy footfall plus year-round visitor draw." },
        { label: "Friargate-area branded hotels (CV1)", detail: "Mid-scale branded franchise stock around the modern Friargate CBD and Coventry station. Premier Inn, Travelodge and mid-market branded hotels typical." },
        { label: "FarGo Village independent F&B (CV1 5)", detail: "Far Gosford Street independent retail and F&B cluster. University-led footfall on the back of the Coventry University estate." },
        { label: "Spon Street heritage hospitality (CV1)", detail: "Listed and conservation-area F&B on the Spon Street heritage parade. Heritage-comfortable lenders only." },
        { label: "Earlsdon Avenue suburban F&B (CV5)", detail: "Earlsdon Avenue professional-class suburban parade. Densest year-round resident F&B cluster outside CV1." },
        { label: "Aparthotel and serviced apartments", detail: "Cathedral Quarter, Friargate and central CBD serviced-apartment formats. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    coventryContext: {
      h2: "The Coventry leisure economy",
      body: 'Coventry\'s leisure economy is built on three flows. The City of Culture 2021 legacy continues to support sustained visitor footfall through the Cathedral Quarter, anchored by Coventry Cathedral, the Belgrade Theatre and the Coventry Transport Museum; mid-tier branded hotel stock was added through 2018 to 2022 to absorb that demand (Premier Inn and Travelodge expansions in particular). The student-led F&B economy on the back of around 65,000 combined Coventry University and University of Warwick students is the deepest in the four-city Midlands set, driving year-round demand for mid-scale and independent F&B across Far Gosford Street and FarGo Village, Spon Street and Earlsdon. Business and conference traffic tied to JLR Whitley, Rolls-Royce and the MTC at Ansty Park, Severn Trent HQ and the broader engineering-supply-chain economy supports mid-week business-stay demand. The Cathedral Quarter (CV1) carries the prime city-centre hotel and visitor-economy cluster anchored by the cathedral, theatre and museum cluster. FarGo Village on Far Gosford Street (CV1 5) holds the densest independent F&B cluster on the back of the Coventry University estate footfall. Spon Street (CV1) carries the heritage F&B parade with listed-building stock. Earlsdon Avenue (CV5) runs the dominant suburban professional F&B cluster. Recent change-of-use activity around Far Gosford Street regeneration generates new operator stock entering the commercial mortgage market once a six-month trading record is established.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry leisure",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Coventry independent hospitality, the bank holds a deep Midlands independent-hotel book and will look at deals other lenders decline. Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone), Allica Bank and selectively HTB, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, Cynergy Bank, OakNorth, Allied Irish Bank UK and Metro Bank are the realistic desks; ASK Partners on the structured-debt end above £5M. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured, and Coventry\'s City of Culture 2021 legacy footfall makes underwriting easier than in less-anchored markets. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks; the Far Gosford Street and Earlsdon student-led F&B operator cluster is one of the more active sub-niches in the Midlands. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Coventry independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank is the most active named lender for Coventry independents; OakNorth and Allied Irish Bank UK also realistic. Mid-2026 rates 8.5 to 9.0% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. The City of Culture 2021 legacy footfall through the Cathedral Quarter materially helps the underwriting story.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is a Coventry hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit England rating influence the multiple at the margin. Cathedral Quarter and Friargate-area bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (a national aparthotel operator takes a 25-year FRI on the building, runs the operations, pays rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Coventry has both formats active, particularly around the Cathedral Quarter and Friargate.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 8.5 to 9.0% pa at 60 to 65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Coventry | CQC, UHCW Walsgrave Halo, Wyken, Holbrooks, Foleshill, Cheylesmore",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Coventry. UHCW Walsgrave halo across Wyken, Walsgrave and Hawkesbury, plus Holbrooks and Foleshill care-home concentration and Cheylesmore care stock. CQC-led underwriting, LTVs 60 to 70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Coventry",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. University Hospitals Coventry & Warwickshire (UHCW) at Walsgrave anchors the dominant healthcare cluster and supports a deep care-home and primary-care belt across Wyken, Walsgrave and Hawkesbury in the north-east (CV2), Holbrooks and Foleshill in the north (CV6) and Cheylesmore in the south (CV3). LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry care home commercial mortgage",
      body: [
        "Healthcare in the Coventry commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3 to 1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50 to 80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 58-bed CQC-rated Good care home in Holbrooks (CV6), £3.95M valuation, EBITDA £515K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Wyken dental practice freehold purchase by the existing principal partner, £1.4M, EBITDA £200K, mixed NHS / private revenue, two miles from UHCW Walsgrave. Owner-occupier route at 75% LTV, 6.95% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Wyken, Walsgrave and Hawkesbury (CV2) form the dominant Coventry healthcare ancillary cluster, drawing on UHCW Walsgrave as the regional acute hospital anchor and a substantial dental, GP, private clinic and allied-health operator base. Holbrooks and Foleshill (CV6) carry the largest single concentration of care-home stock in the city, suburban plot sizes in the north have supported both purpose-built and converted care premises across the belt. Cheylesmore (CV3) in the south rounds out the care-home concentration with smaller suburban homes serving the southern catchment.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Across Holbrooks and Foleshill (CV6) and Cheylesmore (CV3) where care-home stock concentrates. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, the UHCW Walsgrave halo in Wyken (CV2) is the dominant location. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness / private clinics", detail: "Physiotherapy, opticians, podiatry, private clinics drawing the UHCW Walsgrave halo. Owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry healthcare property estate",
      body: 'University Hospitals Coventry & Warwickshire (UHCW NHS Trust) at Walsgrave (CV2) is the dominant healthcare anchor for the entire Coventry and Warwickshire catchment and supports a deep healthcare ancillary property cluster. The hospital draws dental practices, GP surgeries, private clinics and allied health operators across Wyken, Walsgrave and Hawkesbury in CV2. Holbrooks and Foleshill (CV6) in the north of the city hold the largest single concentration of care-home stock; suburban plot sizes along the Holbrook Lane and Foleshill Road belt have supported both purpose-built and converted care premises, with multiple sizeable homes operating across the belt. Cheylesmore (CV3) in the south carries a secondary care-home concentration serving the southern catchment. Outer Coventry suburbs hold smaller-cap GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes. The UHCW Walsgrave halo extends beyond the city boundary north into the Nuneaton & Bedworth catchment and east into the Rugby and wider Warwickshire belt, which feeds Coventry-led broker volume on healthcare deals.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) and Allica Bank dominate at 7.5 to 9.0% pa at 60 to 70% LTV; CQC Good or better is essential. Dental, Allica Bank\'s health desk, HTB and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. The UHCW Walsgrave-adjacent dental cluster in Wyken has been a steady refinance volume zone through 2024 to 2026. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (6.5 to 7.5% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica Bank or <strong>Shawbrook</strong> on owner-occupier at 7.5 to 8.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 9.0% pa). <strong>Requires Improvement</strong> can fund at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Coventry care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6 to 8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5 to 1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Wyken or Walsgrave?",
        answer: "Yes, this is one of the most active sub-niches in Coventry healthcare property. Owner-occupier route on EBITDA cover (1.3 to 1.5x). NHS UDA contract value treated as additional security by the specialist desks. Allica Bank's health desk and HTB are the most active. LTVs 70 to 75%; mid-2026 rates 6.5 to 8.0% pa for established principal-led practices. The UHCW Walsgrave-adjacent cluster in Wyken supports unusually strong patient throughput and consistent revenue stability, which feeds the lender comfort.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0 to 7.5% pa at 65 to 70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25 to 30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Coventry | Far Gosford Street, Earlsdon Avenue, Spon Street, Bayley Lane Cathedral Quarter",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Coventry. Far Gosford Street student-led F&B, Earlsdon Avenue suburban gastropub cluster, Spon Street heritage pubs, Bayley Lane Cathedral Quarter. Barrelage and EBITDA underwriting. LTVs 60 to 65%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Coventry",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Coventry's combination of around 65,000 combined Coventry University and University of Warwick students, the Cathedral Quarter City of Culture legacy footfall and a deep year-round resident base on Far Gosford Street, Earlsdon Avenue, Spon Street and Bayley Lane makes it the most active licensed-trade market in the four-city Midlands set. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60 to 65%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60 to 65% LTV at 8.0 to 8.5% pa. <strong>Tied pubs</strong> price 50 to 100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Earlsdon Avenue (CV5), £1.15M valuation, full-trading EBITDA £205K (62% food / 38% wet), 295 barrels per annum. <strong>Cynergy Bank</strong> placed at 65% LTV, 8.5% pa on a 5-year fix, 20-year term. EBITDA cover 1.78x. Worked example two: a heritage wet-led tied freehold on Spon Street (CV1), £755K valuation, EBITDA £105K, 465 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.0% pa, 15-year term.",
        "Far Gosford Street (CV1 5) carries the densest student-led F&B operator cluster in the city, drawing year-round on around 65,000 combined Coventry University and University of Warwick students plus FarGo Village footfall, the densest student-led F&B economy in the four-city Midlands set. Earlsdon Avenue (CV5) holds the suburban professional gastropub cluster with strong year-round Earlsdon and Stoneleigh resident demand. Spon Street (CV1) carries the heritage F&B parade with listed-building pubs running on tourist-led and visitor-spend demand tied to the Cathedral Quarter draw. Bayley Lane (CV1) anchors the Cathedral Quarter F&B cluster adjacent to Coventry Cathedral, the Belgrade Theatre and the Transport Museum. Coventry trades a healthy volume of change-of-use cases each year, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50 to 100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage. Earlsdon Avenue and Bayley Lane typical clusters." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA. Far Gosford Street, Earlsdon Avenue, Spon Street and Bayley Lane clusters." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    coventryContext: {
      h2: "The Coventry licensed-trade economy",
      body: 'Coventry carries the most active licensed-trade economy of the four-city Midlands set, combining the densest student-led F&B demand in any of those cities (around 65,000 combined Coventry University and University of Warwick students), Cathedral Quarter City of Culture 2021 legacy footfall, JLR and Ansty Park business-and-conference trade and a year-round resident base. Far Gosford Street (CV1 5) holds the densest central student-led operator cluster, particularly strong on independent gastropubs, small-format restaurants and bars, with sustained term-time student trade plus FarGo Village independent-retail footfall driving year-round F&B demand. Earlsdon Avenue (CV5) runs the dominant suburban professional gastropub spine with strong year-round Earlsdon and Stoneleigh resident demand. Spon Street (CV1) carries the heritage F&B parade with listed-building pubs tied to the Cathedral Quarter visitor-spend cluster. Bayley Lane (CV1) anchors the Cathedral Quarter F&B cluster adjacent to Coventry Cathedral, the Belgrade Theatre and the Transport Museum. The volume of change-of-use F&B activity is healthy on the back of City Centre South delivery and Far Gosford Street regeneration; these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Coventry licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.0 to 8.5% pa, 60 to 65% LTV. ASK Partners and Allica Bank\'s licensed-trade desk compete strongly on the same profile. Together covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) active on multi-site restaurant operator portfolios. Allied Irish Bank UK and Metro Bank engage selectively on hospitality-led freehold pubs. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Coventry?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60 to 65% LTV, mid-2026 rate 8.0 to 8.5% pa, term 15 to 20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives. Coventry's student, tourist and resident demand mix strengthens the underwriting story versus comparable regional markets, particularly the around-65,000-student catchment driving Far Gosford Street and Earlsdon Avenue trade.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12 to 15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55 to 60%) and 50 to 75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafes route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0 to 8.5% pa at 65% LTV. Allica Bank and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool, and Far Gosford Street student-led demand particularly suits this profile.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50 to 100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Coventry | Holbrook Lane, Bayton Road, Foleshill, Willenhall",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Coventry. Holbrook Lane (CV6), Bayton Road industrial (CV7, Exhall), Foleshill Road industrial belt, Willenhall outer (CV3). VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Coventry",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. Coventry's automotive economy makes this one of the deepest sub-niches in the Midlands. Stock concentrates on Holbrook Lane (CV6), Bayton Road industrial estate (CV7, Exhall), the broader Foleshill Road industrial belt and Willenhall on the outer southern fringe (CV3). VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 8.5% pa" },
        { label: "Facility", value: "£250K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5 to 2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "Together dominates the Coventry garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep Midlands automotive book built up over twenty years, particularly relevant in Coventry given the long-running motor industry history. <strong>Cynergy Bank</strong> covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica Bank's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8 to £15K of cost and 4 to 6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55 to 65% reflecting the contamination-recovery risk.",
        "Worked example: a Holbrook Lane MOT and workshop premises (CV6), £625K freehold purchase, full-trading EBITDA £105K, clean Phase I report. Together placed at 65% LTV, 8.85% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt on the Bayton Road industrial fringe (CV7, Exhall) adjacent to the M6, £1.35M, EBITDA £180K. Phase II clean. Placed via Together at 60% LTV, 9.0% pa, 15-year term. Coventry MOT and garage stock concentrates on Holbrook Lane, Bayton Road, the broader Foleshill Road industrial belt and Willenhall outer; smaller workshop pockets across CV1, CV5 and CV6 round out the supply.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts. Holbrook Lane, Bayton Road and Foleshill locations typical." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required. Holbrook Lane and Foleshill industrial belt typical." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4 to 6 week environmental timeline standard. Bayton Road, Willenhall outer and M6/A45 fringe locations." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common across the Holbrook Lane and Foleshill belt." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2 to 4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    coventryContext: {
      h2: "The Coventry garage and forecourt market",
      body: 'Coventry garage and forecourt stock concentrates on four practical clusters reflecting the city\'s long automotive history. Holbrook Lane (CV6) running through Holbrooks and Foleshill is the inner industrial belt and carries the densest concentration of MOT, workshop, body shop and tyre-and-exhaust operator premises in the city. Bayton Road industrial estate (CV7, Exhall) just over the northern city boundary holds larger-format workshop and forecourt stock with strong M6 J3 access; technically in Nuneaton & Bedworth borough but in Coventry trade catchment. The broader Foleshill Road industrial belt carries dense automotive trade premises alongside general B2/B8 stock. Willenhall on the outer southern fringe (CV3) holds petrol forecourts and larger workshop premises along the A45 corridor. Smaller workshop and MOT stock is scattered across CV1, CV5 and CV6 inner-Coventry pockets. The volume of independent operators buying their site freehold sits typically in the £300K to £1.5M bracket. Larger forecourt and trade-counter automotive activity routes through the M6 / A45 / A46 corridor beyond the Coventry city boundary, the Rugby, Hinckley and Nuneaton belt carries significant volumes. The Midlands logistics-shed labour-shed dynamic that benefits Coventry industrial extends to automotive premises, lenders read the corridor not just the city when pricing forecourt and workshop deals.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry MOT, garage and forecourt",
      body: 'Together dominates the Coventry garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep Midlands automotive book and have specialist underwriters who know the sector well. Pricing 8.5 to 9.0% pa at 60 to 70% LTV. <strong>Cynergy Bank</strong> takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 7.5 to 8.5% pa. Allica Bank\'s specialist desk engages on the mid-market end. Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) selectively on cleaner automotive trading premises. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55 to 65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8 to £15K, total timeline 4 to 6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15 to 20 years. Shorter than mainstream owner-occupier (20 to 25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common across the Holbrook Lane and Foleshill belt and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Coventry | Allesley, Earlsdon, Westwood University-Edge",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Coventry. Allesley (CV5), Earlsdon (CV5) and Westwood (CV4) university-edge suburbs. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Coventry",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Coventry. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. Active across Allesley (CV5), Earlsdon (CV5) and Westwood (CV4) where the affluent and university-edge suburbs support fee-paying day-care demand from JLR, Rolls-Royce, MTC, UHCW and University of Warwick staff households. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65 to 70% LTV, 7.0 to 7.75% pa. <strong>Good</strong> sits at standard pricing, 60 to 70% LTV, 7.75 to 8.75% pa. <strong>Requires Improvement</strong> can still fund but at 50 to 60% LTV, 8.75 to 9.0% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Coventry nursery clusters: <strong>Allesley (CV5)</strong> the affluent suburban catchment on the western edge of the city where dual-income professional households support fee-paying day-care demand. <strong>Earlsdon (CV5)</strong> the dominant professional-class suburb adjacent to the city centre with a deep mid-to-upper fee-paying day-care market. <strong>Westwood (CV4)</strong> the university-edge suburb on the southern flank, drawing demand from University of Warwick staff households and Westwood Business Park occupier base. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 58-place Earlsdon day nursery, Ofsted Good, £1.85M valuation, 92% occupancy, EBITDA £218K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa on a 5-year fix, 25-year term. Worked example two: an Allesley and Westwood two-site nursery group, £2.25M aggregate valuation, EBITDA £288K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.55% pa.",
        "Independent schools are a smaller, more specialist niche in Coventry. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5 to 8.5% pa. Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone), Reliance Bank and Allica Bank are the realistic desks for £1M to £5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Allesley, Earlsdon and Westwood catchments." },
        { label: "Multi-site nursery group", detail: "2 to 10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Allica Bank most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    coventryContext: {
      h2: "The Coventry nursery and school market",
      body: 'Coventry carries an unusually deep dual-income professional catchment built on JLR Whitley, Rolls-Royce and the Manufacturing Technology Centre at Ansty Park, Severn Trent HQ, UKBIC at Whitmoor Park, Coventry City Council, UHCW Walsgrave, Coventry University and the University of Warwick. The university-staff catchment is particularly significant given Warwick alone has around 28,000 students plus around 7,000 staff, and Coventry University adds around 37,000 students plus a further substantial staff base. This drives sustained demand for fee-paying day-care across Allesley (CV5) the affluent western suburban catchment, Earlsdon (CV5) the dominant professional-class suburb adjacent to the city centre, and Westwood (CV4) the university-edge suburb drawing demand from University of Warwick staff households and the Westwood Business Park occupier base. Independent schools cluster in smaller numbers across the city with a modest preparatory school footprint. Outer Coventry suburbs and the wider Warwickshire fringe hold pre-school and playgroup premises that fund routinely through trading-business mortgage. The two-university footprint feeds nursery demand from staff households as well as the broader professional catchment, making Coventry one of the deeper Midlands nursery markets.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) and Allica Bank all have meaningful nursery appetite. Mid-2026 pricing 7.5 to 8.75% pa at 60 to 70% LTV. Cambridge & Counties active on multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Allica Bank at 6.5 to 8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 8.75% pa). <strong>Requires Improvement</strong> can fund at 50 to 60% LTV and 8.75 to 9.0% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Allica Bank are most active. We have placed 2-site, 4-site and 7-site nursery group facilities through this route across the Midlands.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12 to 24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3 to 5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Allica Bank are the most active desks. Mid-2026 pricing 6.5 to 8.5% pa at 60 to 65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter. Allesley, Earlsdon and Westwood nurseries typically run with stronger private-fee weighting than the city average.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Coventry | Friargate, City Centre South, Browns Lane, Foleshill Road, FarGo Village",
    metaDescription:
      "Mixed-use commercial mortgage finance in Coventry, predominantly-commercial blocks with residential element. Friargate, City Centre South regeneration, Browns Lane redevelopment, Foleshill Road conversions, FarGo Village mixed-use. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Coventry",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. Active across the Friargate masterplan, the City Centre South regeneration delivery, Browns Lane redevelopment plots (former JLR), Foleshill Road change-of-use conversions and FarGo Village mixed-use. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 155%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial), common across the Friargate masterplan delivery, the City Centre South regeneration phases, Browns Lane redevelopment plots and emerging FarGo Village stock, require a different lender pool, <strong>Shawbrook</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage and listed mixed-use, particularly Spon Street and Bayley Lane Cathedral Quarter stock, routes through heritage-comfortable lenders only.",
        "Worked example: a Friargate ground-floor mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, eight apartments above let on ASTs at market rents, £2.45M valuation. Predominantly-commercial mix (52% commercial by floorspace, 62% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: a Foleshill Road mixed-use block, ground-floor independent retail on a 5-year lease, four apartments above on ASTs, £1.45M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.55% pa.",
        'Coventry has a particularly active mixed-use regen pipeline. <strong>Friargate (CV1)</strong> is the modern CBD masterplan delivering Two Friargate (HMRC), One Friargate (council HQ) and further mixed-use plots with ground-floor commercial and residential above. <strong>City Centre South (CV1)</strong> is the Shearer Property Regeneration Partners scheme rebuilding the prime retail pitch as a multi-phase mixed-use development combining retail, leisure and residential. <strong>Browns Lane (CV5)</strong> the former JLR plant site has been progressively redeveloped to mixed industrial, commercial and residential use. <strong>Foleshill Road (CV6)</strong> shows continual change-of-use volume from B2 industrial and Class E commercial to mixed-use and residential conversion. <strong>FarGo Village (CV1 5)</strong> on Far Gosford Street carries emerging mixed-use stock combining independent retail and F&B with residential above. These schemes generate commercial mortgage refinance candidates as new lettings stabilise.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4 to 10 apartments above; mid-cap commercial investment with blended income test. Common across Friargate, City Centre South and Foleshill Road conversions." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; Friargate plots and FarGo Village mixed-use typical." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Listed-building mixed-use conversion", detail: "Spon Street and Bayley Lane Cathedral Quarter stock; heritage-comfortable lenders only." },
        { label: "Large mixed-use regeneration blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M. City Centre South and Friargate phased delivery typical." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry mixed-use estate",
      body: 'Coventry has an extensive mixed-use stock distributed across the city centre regeneration pipeline and the outer parade network. Spon Street and the Bayley Lane Cathedral Quarter carry listed and conservation-area buildings with retail, hospitality or office on lower floors and conversion residential above. The Friargate masterplan (CV1) has delivered Two Friargate (HMRC), One Friargate (Coventry City Council HQ) and continues to deliver further mixed-use plots with ground-floor commercial and residential above, the most significant new-build mixed-use pipeline in the city. City Centre South (CV1, Shearer Property Regeneration Partners) is rebuilding the prime retail pitch as a multi-phase mixed-use scheme combining retail, leisure and residential, generating new stock as phases stabilise. Browns Lane (CV5) the former JLR plant has been progressively redeveloped to mixed industrial, commercial and residential use over the past decade. Foleshill Road (CV6) shows continual change-of-use volume from B2 industrial and Class E commercial to mixed-use and residential conversion, a typical Coventry pattern in the inner industrial belt as Class B2 stock transitions. FarGo Village (CV1 5) on Far Gosford Street carries emerging mixed-use stock combining independent retail and F&B with residential above. Earlsdon Avenue (CV5) and the wider district parade network hold deep shop-plus-flat-above stock dating from the 1880s through the 1930s. The volume of mixed-use stock plus active regeneration pipeline is one of the city\'s defining commercial-property characteristics.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.5 to 8.5% pa, 65 to 75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) and OakNorth on larger blocks at 7.75 to 8.5% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.0 to 7.75% pa, all running West Midlands regional desks from Birmingham covering Coventry. Allica Bank competitive across the mid-cap range with strong Coventry SME engagement. Predominantly-residential mixed-use routes more naturally through InterBay Commercial and the specialist semi-commercial pool. Heritage and listed mixed-use, particularly Spon Street and Bayley Lane Cathedral Quarter stock, needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on a Coventry mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60 to 65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5 to 10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about listed and heritage mixed-use on Spon Street or Bayley Lane?",
        answer: "Listed-building mixed-use (Spon Street heritage parade, Bayley Lane Cathedral Quarter, conservation-area buildings) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability and any listed-building consent implications.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12 to 24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 8.5 to 9.0% pa for the bridge leg; term-out into 7.5 to 8.5% pa once stabilised. We model both legs at outset. The City Centre South and Friargate phased delivery pipelines plus Foleshill Road change-of-use stock commonly generate candidates for this strategy.',
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Coventry | Far Gosford Street, Earlsdon Avenue, Spon Street, Foleshill Road",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Coventry, shop-with-flat-above and other 40%+ residential mixed assets. Far Gosford Street, Earlsdon Avenue, Spon Street, Foleshill Road. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Coventry",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR around 145%. Mid-2026 rates 6.5 to 8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Coventry's parade network, from Far Gosford Street through to Earlsdon Avenue. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50 to 100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their Earlsdon Avenue shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Coventry semi-commercial spines: <strong>Far Gosford Street (CV1 5)</strong> the densest student-led independent retail and F&B parade, on the back of the Coventry University estate. <strong>Earlsdon Avenue (CV5)</strong> the dominant suburban professional-class parade, classic Victorian and Edwardian shop-plus-flat stock. <strong>Spon Street (CV1)</strong> the heritage parade with listed and conservation-area shop-plus-flat stock. <strong>Foleshill Road (CV6)</strong> the inner-suburban parade running through Foleshill with dense shop-plus-flat-above stock. Most semi-commercial deals are £200K to £900K facility size. Worked example: an Earlsdon Avenue shop with two flats above, £585K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a Far Gosford Street shop-plus-three-flats with all flats let on ASTs to student tenants, £685K, placed via Together at 70% LTV, 8.25% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Coventry parade archetype. Far Gosford Street CV1 5, Earlsdon Avenue CV5, Spon Street CV1, Foleshill Road CV6." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use, common across the Foleshill Road and central CBD conversion pipeline)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3 to 5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and conservation conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Spon Street and Bayley Lane Cathedral Quarter stock." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    coventryContext: {
      h2: "The Coventry semi-commercial estate",
      body: 'A deep, active product across Coventry. The classic parade spines, Far Gosford Street CV1 5, Earlsdon Avenue CV5, Spon Street CV1 and Foleshill Road CV6, all run on shop-plus-flat-above stock dating from the 1880s through the 1930s. Heritage stock on Spon Street and around Bayley Lane in the Cathedral Quarter adds further depth with listed-building considerations. Recent change-of-use activity along Foleshill Road and the broader Foleshill industrial belt, plus emerging post-Class E mixed-use conversion across the central CBD, has been creating new semi-commercial profiles as upper floors are retained or converted to flats. The semi-commercial market trades steadily across Coventry, these assets rarely sit vacant for long because the residential element is intrinsically lettable given the city\'s student demand (around 65,000 combined Coventry University and University of Warwick students) anchoring tenant demand particularly across Far Gosford Street and the wider CV1 5 belt.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Coventry shop-plus-flat archetype, typical 7.5 to 8.25% pa at 70 to 75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.25 to 9.0% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial, HTB, Allica Bank and Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50 to 100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on a Coventry semi-commercial mortgage?",
        answer: "Currently <strong>6.5 to 8.5% pa</strong> at 65 to 75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. Far Gosford Street and the broader CV1 5 belt, Holbrooks and Foleshill (CV6) and Westwood (CV4 near Warwick) carry the densest student HMO stock in the city. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Coventry | Far Gosford Street CV1, Holbrooks CV6, Foleshill CV6, Westwood CV4 Warwick Edge",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Coventry, Far Gosford Street CV1 student belt, Holbrooks and Foleshill CV6 conversion zone, Westwood CV4 Warwick edge, Earlsdon CV5 student professional. Around 65,000 combined Coventry and Warwick students drive the densest student CM demand pool in the four-city Midlands set. Paragon, Together, Foundation Home Loans dominate. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Coventry",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140 to 160%. Coventry runs the densest student commercial mortgage demand pool in the four-city Midlands set, around 65,000 combined Coventry University and University of Warwick students drive deep HMO stock across the Far Gosford Street CV1 belt, the Holbrooks and Foleshill CV6 conversion zone, the Westwood CV4 Warwick-edge student professional belt, and the Earlsdon CV5 student professional cluster. Paragon Bank, Together and Foundation Home Loans dominate the panel. Mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Coventry HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV multiplied by value) or (ICR multiplied by rent divided by stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Coventry runs the densest student commercial mortgage demand pool in the four-city Midlands set, driven by around 65,000 combined Coventry University (around 37,000 students) and University of Warwick (around 28,000 students) student catchment. The Warwick campus sits technically in Coventry CV4, which puts its student housing demand inside the Coventry HMO market even though the institution is Warwick University. The combined catchment generates persistent demand for shared-house accommodation across multiple sub-markets. <strong>Far Gosford Street and the wider CV1 5 belt</strong> is the densest central student HMO sub-market, the streets behind FarGo Village and the Coventry University estate carry saturated 5 to 8 bed converted Victorian and Edwardian terraces. <strong>Holbrooks and Foleshill (CV6)</strong> the inner-suburban dense terraced conversion zone, postcode CV6 carries the largest single concentration of HMO change-of-use activity in the city. <strong>Westwood (CV4)</strong> the Warwick-edge student professional belt on the southern flank, drawing demand from University of Warwick students plus Westwood Business Park occupier base, premium student HMO pricing on the back of Warwick proximity. <strong>Earlsdon (CV5)</strong> the student professional cluster adjacent to the city centre, mixed student-and-professional HMO stock at higher per-room rents than the CV6 belt.",
        "Coventry City Council operates Article 4 direction and additional HMO licensing across the densest HMO neighbourhoods. Existing licensed HMOs trade and refinance freely; new conversions in additional-licensing or Article 4 areas need licensing and may need full planning consent depending on the type of HMO. The active conversion pipeline runs heavily through the CV6 and CV4 belts.",
        "Worked example: a 7-bed Far Gosford Street CV1 5 student HMO (CV1 5 student belt adjacent to FarGo Village), £525K valuation, £47,500 gross annual rent, 95% historical occupancy, all-inclusive let. Paragon Bank placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 5-property CV6 and CV4 student HMO portfolio across Holbrooks, Foleshill and Westwood, £2.35M aggregate, £178K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with <strong>LendInvest</strong> at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Far Gosford Street CV1 student HMO (5 to 8 rooms)", detail: "The streets behind FarGo Village and the Coventry University estate. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Westwood CV4 Warwick-edge HMO", detail: "Warwick-edge student professional belt drawing University of Warwick demand. Premium per-room rents on the back of Warwick proximity; mixed student-and-professional let." },
        { label: "Holbrooks and Foleshill CV6 conversion HMO", detail: "The inner-suburban dense terraced conversion zone, largest single concentration of HMO change-of-use activity in the city. Many 7 to 9 bed sui generis HMOs." },
        { label: "Earlsdon CV5 student professional HMO", detail: "Student professional cluster adjacent to the city centre, mixed student-and-professional HMO stock at higher per-room rents than CV6." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO, with licensing and planning consent path mapped before exchange. Heavy volume in CV6 Holbrooks/Foleshill and CV4 Westwood." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Coventry HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    coventryContext: {
      h2: "The Coventry HMO market",
      body: 'Coventry runs the densest student commercial mortgage demand pool in the four-city Midlands set, driven by around 65,000 combined students across Coventry University (around 37,000) and the University of Warwick (around 28,000). The University of Warwick campus sits technically in Coventry CV4, putting its student housing demand inside the Coventry HMO market even though the institution is Warwick University. <strong>Far Gosford Street and the wider CV1 5 belt</strong> is the densest central student HMO sub-market, the streets behind FarGo Village and the Coventry University estate are saturated with 5 to 8 bed converted Victorian and Edwardian terraces let to students. <strong>Holbrooks and Foleshill (CV6)</strong> on the inner-suburban dense terraced belt carries the largest single concentration of HMO change-of-use activity in the city, the conversion volume month on month from C3 to C4 and sui generis HMO is heavy. <strong>Westwood (CV4)</strong> on the southern flank near the University of Warwick campus carries premium-rent student professional HMO stock with Warwick-edge demand pulling per-room rents above the CV6 belt average. <strong>Earlsdon (CV5)</strong> adjacent to the city centre runs mixed student-and-professional HMO stock at higher rents than CV6 but lower than CV4 Westwood. Coventry City Council operates Article 4 direction and additional HMO licensing across the densest HMO neighbourhoods; the licensing regime has supported HMO values materially by formalising stock. The combined Coventry plus Warwick student catchment of around 65,000 makes the city the densest student CM demand pool in the four-city Midlands set, and a particular niche for Paragon Bank, Together and Foundation Home Loans who all carry deep Coventry books.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry HMO",
      body: 'Strong. Paragon Bank is particularly active on the Coventry student HMO belt and has built a deep CV1 5, CV4 and CV6 book over the past decade given the combined Coventry plus Warwick student catchment. Foundation Home Loans runs a substantial Coventry HMO programme given the city\'s position as the densest student CM demand pool in the four-city Midlands set. Together, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5 to 8.5% pa at 70 to 75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. Sui generis 7 to 9 bed HMOs route through the specialist large-HMO desks (Together, Foundation Home Loans, Paragon) where the room-count is comfortable. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further but Paragon Bank, Together and Foundation Home Loans all engage actively, particularly important given Coventry has many 7 to 9 bed sui generis HMOs across the CV6 and CV1 5 belts. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Coventry City Council HMO licensing?",
        answer: "Coventry City Council operates Article 4 direction and additional HMO licensing across the densest HMO neighbourhoods including the CV1 5 Far Gosford Street belt, the CV6 Holbrooks and Foleshill terraced belt and parts of CV4 Westwood. Existing licensed HMOs trade and refinance freely; new conversions in Article 4 or additional-licensing areas need licensing and may need full planning consent depending on the type of HMO (sui generis 7-bed-plus typically needs full planning). The licensing regime has supported HMO values materially by formalising stock. The publicly-accessible licensing register is a useful proxy for HMO stock counts at postcode level.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. We map the planning and licensing path before exchange so the route to a licensed asset is clear. CV6 Holbrooks and Foleshill conversion activity is particularly heavy at the moment, and CV4 Westwood conversion volume on the Warwick edge has accelerated through 2024 to 2026. Sui generis 7-bed-plus conversions almost always need full planning consent; we map both the planning and the licensing route before exchange.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140 to 155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1 to 2% above pay rate. Strong-occupancy student HMOs on Far Gosford Street and in Westwood routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150 to 160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130 to 145%), single facility, blanket charge or property-by-property charges. Paragon Bank, LendInvest, Together and Foundation Home Loans all run active HMO portfolio programmes; the Coventry combined Coventry plus Warwick student-belt portfolio is one of the largest HMO portfolio refinance volumes in any UK city outside the major capitals. 5+ properties is the typical threshold for portfolio pricing.',
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Coventry | Cathedral Quarter Short-Lets, City-Centre Apart-Hotels",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios in Coventry. Cathedral Quarter short-lets on the City of Culture 2021 legacy footfall, city-centre apart-hotel stock around Friargate and Coventry station. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Coventry",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and apart-hotel stock across Coventry. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. The City of Culture 2021 legacy footfall through the Cathedral Quarter (Coventry Cathedral, Belgrade Theatre, Transport Museum) plus business-and-conference traffic tied to JLR Whitley, Rolls-Royce and the MTC at Ansty Park, plus university-related visiting-family demand from around 65,000 combined Coventry and Warwick students, supports the short-let market. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 55 to 65%+ is the Coventry threshold given the year-round demand profile). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-week ADR matters as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad week at a single property does not break the portfolio.",
        "Coventry FHL territory has a distinctive city-led demand profile rather than the seaside-holiday pattern typical of UK coastal markets. The City of Culture 2021 legacy footfall through the Cathedral Quarter (Coventry Cathedral, Belgrade Theatre, Coventry Transport Museum) generates a sustained year-round visitor draw. Business-and-conference traffic tied to JLR Whitley, Rolls-Royce and the Manufacturing Technology Centre at Ansty Park, Severn Trent HQ and the broader engineering-supply-chain economy supports mid-week business-stay demand twelve months a year. University-related visiting-family demand from around 65,000 combined Coventry University and University of Warwick students adds further weekend and term-time flow. The Cathedral Quarter (CV1) carries the densest short-let cluster on the back of City of Culture 2021 legacy footfall. The Friargate-adjacent and Coventry station area holds modern apart-hotel and serviced-apartment stock.",
        "Worked example: a 4-property Cathedral Quarter short-let portfolio, two central CV1 serviced apartments and two Friargate apart-hotel units, £1.75M aggregate valuation, £198K aggregate annual gross income, 68% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.75% pa on a 5-year fix, 25-year term, aggregated DSCR 142%. Worked example two: a 3-property city-centre apart-hotel portfolio in the Friargate and Cathedral Quarter blocks, £1.55M aggregate, £168K aggregate annual gross income, 72% blended occupancy. Placed via Together at 65% LTV, 8.55% pa, treating the apart-hotel structure as portfolio FHL with operator-management overlay.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically a central serviced apartment in CV1 Cathedral Quarter or Friargate. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs across Coventry. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "Cathedral Quarter short-let stock", detail: "Serviced apartments and short-lets in and around the Cathedral Quarter. Strong year-round occupancy on the back of City of Culture 2021 legacy footfall." },
        { label: "Friargate and station-area apart-hotels", detail: "Modern apart-hotel and serviced-apartment stock around the Friargate masterplan and Coventry station. Operator-management overlay; specialist desks." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "Heritage city-centre short-let", detail: "Listed and conservation-area short-let stock around Bayley Lane Cathedral Quarter and Spon Street. Heritage-comfortable lenders only." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    coventryContext: {
      h2: "The Coventry FHL market",
      body: 'Coventry has a distinctive city-led FHL market shaped by year-round visitor flow through the Cathedral Quarter (Coventry Cathedral, Belgrade Theatre, Coventry Transport Museum) on the back of City of Culture 2021 legacy footfall, plus business-and-conference traffic tied to JLR Whitley, Rolls-Royce and the MTC at Ansty Park, Severn Trent HQ and the broader engineering-supply-chain economy, plus university-related visiting-family demand from around 65,000 combined Coventry University and University of Warwick students. The Cathedral Quarter (CV1) carries the densest central short-let cluster, serviced apartments commanding premium pricing on the back of the Cathedral, Belgrade and Transport Museum visitor draw. The Friargate masterplan and Coventry station area hold modern apart-hotel and serviced-apartment stock built into the recent CBD delivery, with strong business-traveller and conference demand. Bayley Lane and the broader Cathedral Quarter heritage core add a listed-building short-let overlay. Demand drivers: City of Culture 2021 legacy tourism, weekend short-break trade from the wider Midlands, weekday business and conference traffic, and student-related visiting-family demand through term-time. Stock typically 1 to 3 bedroom converted apartments and modern apart-hotel units commanding £85 to £275 per night at peak; Cathedral-adjacent and Friargate premium adds 20 to 35% to ADR.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Cambridge & Counties (Cambridge-based, strong on Warwickshire and Coventry within its zone) are the most active specialist FHL portfolio lenders. Cambridge & Counties covers larger portfolios (5+ properties, £2M+ aggregate facility). Allica Bank engages on selective city-led stock. Select private credit on bespoke structures. Mid-2026 pricing 7.0 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks. Coventry\'s City of Culture 2021 legacy footfall plus business-and-conference traffic from Ansty Park and Whitley means underwriters take Coventry FHL more comfortably than equivalent stock in less-anchored regional markets.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>55 to 65%+ annual occupancy</strong> across the portfolio is the Coventry threshold; the year-round Cathedral Quarter visitor flow plus business-and-conference traffic supports higher annualised occupancy than most regional cities. Strong-week ADR matters as much as headline annual figure, a Cathedral Quarter apart-hotel unit at 85% occupancy through summer and event-week peaks and 55% off-peak reads better than the same unit at flat 65% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25 to 50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
