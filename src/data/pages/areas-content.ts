/**
 * Per-district area page content, Commercial Mortgages Coventry.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Coventry City Council planning applications (filtered by postcode
 *      catchment) cited by reference number, address and proposal.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the named lenders most likely
 *      to fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page must hit mortgage / commercial mortgage
 * / Coventry / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140 to 160% stressed, LTV typically 65 to 75%." },
  { product: "Semi-commercial", applicability: "Shop plus flat archetypes, blended ICR around 145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb and re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Coventry by Area",
    lede:
      "From the Cathedral Quarter and Friargate CBD in CV1 to the Coventry Gateway and Ansty logistics corridor in CV3 and CV7, and from the UHCW Walsgrave hospital halo in CV2 to the Holbrook Lane industrial belt in CV6, the Coventry commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Coventry City Council public access portal, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Coventry commercial mortgage market splits by district",
    body: [
      "Pricing inside the CV1 ring is not the same as pricing on Coventry Gateway logistics in CV3 4. ICR thresholds on a Far Gosford Street student-led F&B freehold are not the same as on a Whitley R&D office investment serving the JLR supply chain. The lender shortlist for an Allesley village retail freehold is almost entirely different from the shortlist for a Foleshill Road Class B2 to mixed-use conversion. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Coventry City Council public access portal, dominant commercial sector mix, expected LTV and rate range, and the lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and routes Coventry deals through a Leicester-led commercial team.",
    ],
  },
  groupings: [
    {
      title: "Central Coventry, CBD office, retail and heritage regeneration",
      description:
        "The Coventry CBD commercial mortgage core. City Centre and Cathedral Quarter CV1 leisure-led regeneration off the City of Culture 2021 footfall, Friargate CV1 modern CBD prime office around Two Friargate and One Friargate, and Spon End and Coundon CV1 and CV6 heritage retail and mixed-use including the Spon Street medieval timber-frame frontage. Anchor facility sizes £400K to £4M.",
      slugs: ["city-centre-cathedral-quarter", "friargate", "spon-end-coundon"],
    },
    {
      title: "Automotive, R&D and logistics belt",
      description:
        "The strategic employment-land arc that defines Coventry as a manufacturing and EV-supply-chain city. Whitley CV3 JLR engineering and R&D office cluster, Coventry Gateway, Whitmoor and Ansty CV3 4 and CV7 major logistics and industrial including UKBIC, Westwood Heath, Tile Hill and Canley CV4 business parks and university-edge office. Larger ticket investment and owner-occupier finance.",
      slugs: ["whitley", "coventry-gateway-whitmoor-ansty", "westwood-tile-hill-canley"],
    },
    {
      title: "Suburban professional and healthcare cluster",
      description:
        "Earlsdon, Stoneleigh and Cheylesmore CV5 and CV3 suburban F&B and professional offices with care-home stock concentrated south, Wyken, Walsgrave and Hawkesbury CV2 UHCW Walsgrave hospital halo plus suburban retail, Allesley and Eastern Green CV5 affluent suburban fringe with neighbourhood retail. Owner-occupier, semi-commercial and trading-business territory.",
      slugs: ["earlsdon-stoneleigh-cheylesmore", "wyken-walsgrave-hawkesbury", "allesley-eastern-green"],
    },
    {
      title: "Industrial belt, student F&B and outer trade",
      description:
        "Holbrooks, Foleshill and Radford CV6 industrial belt, last-mile logistics and the Foleshill Road Class B2 to mixed-use conversion pipeline, Far Gosford Street and FarGo Village CV1 and CV2 independent F&B and creative-industries leisure regeneration around Coventry University, Willenhall and Stoke Aldermoor CV3 outer trade and light industrial. Specialist semi-commercial, HMO and trade-counter territory.",
      slugs: ["holbrooks-foleshill-radford", "far-gosford-street-fargo-village", "willenhall-stoke-aldermoor"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Coventry and Warwickshire",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Rugby, Nuneaton, Bedworth, Kenilworth, Warwick and Leamington Spa, plus Birmingham, Solihull and the wider West Midlands footprint. The same 90+ lender panel applies, with Allica, Shawbrook, HTB, Paragon, Together and YBS Commercial all active across the West Midlands and Cambridge & Counties carrying strong appetite across Warwickshire. If your deal is in a Coventry postcode that does not have its own page yet, call us direct, we will route you to the right product and the right lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "city-centre-cathedral-quarter": {
    slug: "city-centre-cathedral-quarter",
    name: "Coventry City Centre and Cathedral Quarter",
    metaTitle: "Commercial Mortgages Coventry City Centre and Cathedral Quarter | Specialist Broker, CV1",
    metaDescription:
      "Commercial mortgages for Coventry City Centre and the Cathedral Quarter, CV1 office, retail, leisure, mixed-use and heritage hospitality. Cathedral Lanes, Bayley Lane, Hertford Street, Belgrade Theatre and City of Culture 2021 legacy footfall. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Coventry City Centre and Cathedral Quarter",
      lede:
        "Coventry City Centre and the Cathedral Quarter cover the CV1 commercial core, from Coventry Cathedral, the Belgrade Theatre and the Transport Museum across to Cathedral Lanes, Hertford Street and the heritage parade on Spon Street. We arrange commercial mortgages for CV1 office and retail investment, Cathedral Quarter boutique hotel and F&B trading-business finance, semi-commercial blocks and mixed-use freehold across the city centre, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Coventry City Centre and Cathedral Quarter commercial property market",
      body: [
        "Coventry City Centre and the Cathedral Quarter carry one of the deepest commercial mortgage submarkets in the West Midlands outside Birmingham. The CV1 retail spine runs from Cathedral Lanes across Broadgate, Hertford Street and the Lower Precinct, and the Cathedral Quarter around Bayley Lane carries the listed heritage hospitality and leisure cluster anchored by Coventry Cathedral, the Belgrade Theatre and the Coventry Transport Museum. The City of Culture 2021 legacy footfall is sustained year round and underwrites the central F&B, boutique hotel and trading-business mortgage flow. Severn Trent maintains its HQ in CV1 and the central professional cluster runs through Greyfriars Road and Earl Street.",
        "Mid-cap private investors dominate the largest end, with City Centre South Phase 1 under Shearer Property Regeneration Partners reshaping the southern retail block. The £400K to £3M bracket, secondary CV1 office, in-line Hertford Street retail and Cathedral Quarter F&B freehold, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.5% pa for clean investment, with strong-covenant City Centre South and Cathedral Lanes stock at 6.5 to 7.5% pa and secondary CV1 retail at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment.",
        "HM Land Registry residential transactions inside CV1 cluster around converted upper floors above Hertford Street and the apartment supply behind the Friargate masterplan, with the central CV1 median running around £290,000 on a small sample of recent files. They are not a direct commercial signal but they confirm that the city-centre catchment continues to absorb residential supply against the backdrop of the City Centre South regeneration and the wider Coventry economy, which underwrites the ground-floor retail, Cathedral Quarter hospitality and F&B income that most of our central CV1 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Coventry City Centre and the Cathedral Quarter (CV1)",
      body:
        'Two headline Coventry City Council public access files anchor the current Cathedral Quarter and city centre commercial mortgage pipeline. The Cathedral Quarter heritage-led leisure scheme at Bayley Lane (Ref <strong>26/00712/FUL</strong>) covers a new boutique hotel and F&B accommodation supporting Coventry Cathedral and Belgrade Theatre visitor catchment, the canonical Cathedral Quarter heritage repositioning that an operator funds through development finance during the works phase and then refinances against on a trading-business mortgage at 60 to 70% LTV once operator EBITDA is established. The Cathedral Lanes Shopping Centre reconfiguration scheme at Broadgate (Ref <strong>25/01145/FUL</strong>) covers anchor unit subdivision and new F&B accommodation in the central CV1 retail spine, the canonical central retail repositioning that the freeholder refinances against on a Grade A retail and leisure investment facility while individual unit operators refinance trading-business mortgages against the new tenant mix. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "26/00712/FUL",
          address: "Cathedral Quarter, Bayley Lane, Coventry CV1 5RN",
          postcode: "CV1 5RN",
          proposal: "Cathedral Quarter heritage-led leisure scheme, new boutique hotel and F&B accommodation supporting Coventry Cathedral and Belgrade Theatre visitor catchment.",
        },
        {
          ref: "25/01145/FUL",
          address: "Cathedral Lanes Shopping Centre, Broadgate, Coventry CV1 1NF",
          postcode: "CV1 1NF",
          proposal: "Cathedral Lanes Shopping Centre reconfiguration, anchor unit subdivision and new F&B accommodation in the central Coventry retail spine.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in the city centre and Cathedral Quarter",
      items: [
        { label: "Cathedral Quarter boutique hotel and heritage hospitality", detail: "Bayley Lane and Cathedral fringe boutique hotel and listed F&B operator freehold against City of Culture 2021 legacy footfall.", typicalSize: "£600K to £3M facility" },
        { label: "Hertford Street and Cathedral Lanes retail", detail: "Central CV1 retail investment along the pedestrianised spine with national and independent covenants.", typicalSize: "£400K to £2.5M" },
        { label: "Greyfriars Road and Earl Street office investment", detail: "Secondary CBD office investment serving the central professional firm base.", typicalSize: "£400K to £2M" },
        { label: "Spon Street heritage parade", detail: "Listed medieval timber-frame retail and boutique upper-floor accommodation in the heritage parade.", typicalSize: "£300K to £1.5M" },
        { label: "Mixed-use city-centre blocks", detail: "Ground-floor Class E retail with apartments above across the CV1 retail spine.", typicalSize: "£400K to £2M" },
        { label: "Owner-occupier professional services", detail: "Legal, accountancy and consultancy firms buying central CV1 office floors.", typicalSize: "£300K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Coventry City Centre and the Cathedral Quarter",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Cathedral Quarter boutique hotel, listed pub and F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Hertford Street semi-commercial and mixed-use blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Owner-occupier professional firms buying their central building via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or value-add CBD office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry City Centre office, Cathedral Quarter hospitality and CV1 retail",
      body:
        "Central CV1 and the Cathedral Quarter sit inside the strongest single Coventry lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Cathedral Lanes retail and Greyfriars Road office investment at 60 to 65% LTV and 6.5 to 7.5% pa, with the West Midlands regional commercial teams in Birmingham covering Coventry deals. <strong>Shawbrook</strong> dominates mid-market secondary CV1 retail and mixed-use at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Cathedral Quarter boutique hotel and listed F&B trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Bayley Lane heritage hospitality repositioning during the works phase. Allica Bank is active across Coventry SME owner-occupier on central office and retail freehold. HTB takes selected Bayley Lane heritage and Cathedral Quarter investment deals on its commercial book. Paragon supports HMO portfolios where central CV1 mixed-use blocks carry sui generis upper floors. Together covers semi-commercial Hertford Street and Cathedral fringe stock at 70 to 75% LTV on blended ICR. YBS Commercial takes selected CV1 office and retail investment deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to Cathedral Quarter heritage investment and central CV1 mixed-use freehold. Refinancing on a stabilised secondary CV1 retail or office asset typically prices 7.5 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "retail", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Cathedral Lanes or Hertford Street retail investment?",
        answer:
          'Up to 75% LTV on strong-covenant let stock. Cathedral Lanes anchor retail with national covenant prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>. Secondary Hertford Street parade caps at 70 to 75% with <strong>Shawbrook</strong> and Cambridge & Counties. The binding constraint is almost always ICR, not headline LTV.',
      },
      {
        question: "Can we get a commercial mortgage on a vacant Cathedral Quarter boutique hotel repositioning?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the works phase. The Cathedral Quarter heritage-led leisure scheme approved under planning reference 26/00712/FUL Bayley Lane CV1 5RN is exactly this profile, a 12 to 24 month bridge funds the listed-building works and re-opening, then terms out to trading-business mortgage once an operator EBITDA track record of 12 to 24 months is in place at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB.',
      },
      {
        question: "How do Cathedral Quarter listed-building constraints affect lending?",
        answer:
          'Heritage stock around Bayley Lane and the Cathedral Quarter requires listed-building consent for change of use and external works. Heritage-comfortable lenders <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Cambridge & Counties and Together fund this stock comfortably. Pricing typically 50 to 100bps wider than non-listed equivalent. Maintenance plan and conservation strategy feed into the underwriting on every CV1 listed-building deal.',
      },
      {
        question: "Which lenders run dedicated West Midlands desks active on Coventry?",
        answer:
          '<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> all maintain West Midlands regional commercial teams in Birmingham covering Coventry deals routinely. <strong>Cynergy Bank</strong>, Allica Bank and HTB carry dedicated hospitality programmes that take Cathedral Quarter boutique hotel and listed F&B deals. Cambridge & Counties is strong on Warwickshire and routes Coventry deals through a Leicester-led commercial team. We use those desks for CV1 deals where local knowledge of the City Centre South regeneration, the Cathedral Quarter heritage grain and the City of Culture footfall carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "friargate": {
    slug: "friargate",
    name: "Friargate",
    metaTitle: "Commercial Mortgages Friargate Coventry | Modern CBD Office Broker, CV1",
    metaDescription:
      "Commercial mortgages for Friargate, Coventry CV1, modern CBD Grade A office investment, station-adjacent regeneration, HMRC and Coventry City Council HQ anchor tenants, Plot 8 hotel pipeline, Greyfriars Road office refurbishment. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Friargate Coventry",
      lede:
        "Friargate is the modern Coventry CBD, a 14 hectare mixed-use scheme delivered as a Coventry City Council joint venture with Cannon Kirk and threaded directly into Coventry station. Two Friargate carries the HMRC West Midlands office anchor and One Friargate carries the Coventry City Council civic HQ. We arrange commercial mortgages for CV1 Grade A office investment around Friargate, secondary CBD office refurbishment along Greyfriars Road, Plot 8 follow-on commercial and hotel finance, and the ground-floor retail and F&B emerging across the modern CBD plates. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Friargate Coventry commercial property market",
      body: [
        "Friargate is the deepest single Grade A office submarket in Coventry and the most institutionally underwritten CV1 commercial mortgage cluster. The masterplan covers 14 hectares immediately adjacent to Coventry station, delivered through a Coventry City Council and Cannon Kirk joint venture. Two Friargate (the HMRC West Midlands regional office) and One Friargate (the Coventry City Council civic HQ) anchor the delivered plates and pull the central professional firm cluster towards the station. Plot 8 and the follow-on commercial and hotel lots carry the next-wave commercial mortgage pipeline as each delivered building stabilises.",
        "Mid-cap institutional investors dominate the largest end. The £600K to £4M bracket, secondary CV1 office around Greyfriars Road and Earl Street, ground-floor Class E retail and F&B within the Friargate plates, and Plot 8 follow-on commercial freehold, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.0% pa for clean Friargate investment, with strong-covenant HMRC and Coventry City Council-let stock at 6.5 to 7.0% pa and secondary Greyfriars Road office at 7.5 to 8.5%. Refinancing the development-finance positions on the first wave of delivered Friargate plates onto long-term commercial investment mortgages is one of the highest-volume single products in 2026.",
        "HM Land Registry residential transactions inside the CV1 Friargate catchment cluster around the Coventry station fringe apartment blocks, with the wider CV1 median running around £290,000 on a small sample of recent files. They are not a direct commercial signal but they confirm that the Friargate and station-adjacent catchment continues to absorb residential supply against the backdrop of the City Centre South regeneration and the wider Coventry economy, which underwrites the ground-floor retail and Class E F&B income that most of our Friargate ground-floor commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Friargate (CV1)",
      body:
        'Two headline Coventry City Council public access files anchor the current Friargate commercial mortgage pipeline. The Friargate Plot 8 commercial scheme at CV1 2HF (Ref <strong>26/01245/FUL</strong>) delivers new Grade A office accommodation alongside ground-floor retail and F&B in the modern CBD adjacent to Coventry station, the canonical Friargate next-wave delivery that the developer funds through development finance during the works phase and then refinances onto a Grade A office investment facility at 60 to 70% LTV once HMRC, Coventry City Council or a comparable covenant tenant takes occupation. The Greyfriars Road central CBD office refurbishment scheme at CV1 3RY (Ref <strong>25/01812/FUL</strong>) covers a mid-rise Grade B office building refurbishment serving the central Coventry professional firm cluster, the canonical secondary CBD asset-management capex programme that an owner refinances against on a 65% LTV commercial investment mortgage. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "26/01245/FUL",
          address: "Friargate, Coventry CV1 2HF",
          postcode: "CV1 2HF",
          proposal: "Friargate Plot 8 commercial scheme, new Grade A office accommodation alongside ground-floor retail and F&B in the modern CBD adjacent to Coventry station.",
        },
        {
          ref: "25/01812/FUL",
          address: "Greyfriars Road, Coventry CV1 3RY",
          postcode: "CV1 3RY",
          proposal: "Greyfriars Road central CBD office refurbishment, mid-rise Grade B office building refurbishment serving central Coventry professional firm cluster.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types around Friargate",
      items: [
        { label: "Friargate Grade A office investment", detail: "Two Friargate and One Friargate-style Grade A office investment let to HMRC, Coventry City Council and the central professional cluster.", typicalSize: "£2M to £10M plus facility" },
        { label: "Greyfriars Road secondary office", detail: "Secondary CBD office investment and owner-occupier along the central professional corridor.", typicalSize: "£400K to £2M" },
        { label: "Plot 8 follow-on commercial", detail: "Next-wave Friargate plot commercial and hotel freehold and trading-business finance.", typicalSize: "£1M to £5M" },
        { label: "Ground-floor Class E retail and F&B", detail: "Ground-floor retail, F&B and managed flexible workspace within the modern CBD plates.", typicalSize: "£300K to £1.5M" },
        { label: "Modern CBD mixed-use", detail: "Mixed-use blocks combining Class E commercial with managed residential and aparthotel above.", typicalSize: "£500K to £3M" },
        { label: "Owner-occupier professional services", detail: "Law, accountancy and consultancy firms buying their central CBD floor adjacent to Coventry station.", typicalSize: "£400K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Friargate Coventry",
      body: 'Investment routes via standard <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Plot 8 follow-on commercial and hotel finance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> where an operator EBITDA case applies, or via investment mortgage where a covenant let is in place. Owner-occupier professional services firms buying their CBD floor via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Mixed-use blocks via <a href="/property-types/mixed-use" class="text-secondary font-medium hover:underline">mixed-use</a> route. Vacant or value-add secondary office along Greyfriars Road routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing development-finance positions through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the largest single 2026 use case.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Friargate Grade A office, station-adjacent investment and Plot 8 follow-on commercial",
      body:
        "Friargate sits inside the strongest single Coventry lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Two Friargate and One Friargate-style Grade A office investment let to HMRC and Coventry City Council at 60 to 65% LTV and 6.5 to 7.0% pa, with the West Midlands regional commercial teams in Birmingham covering Coventry deals. <strong>Shawbrook</strong> dominates mid-market secondary Greyfriars Road office investment and refurbishment at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> takes selected Plot 8 hotel and aparthotel trading-business freehold against operator EBITDA at 1.5 to 1.8x. Allica Bank is active across Coventry SME owner-occupier on Friargate and Greyfriars Road office freehold. HTB takes selected Friargate Grade A office investment and Plot 8 follow-on commercial deals on its commercial book. Paragon supports HMO portfolios where the modern CBD mixed-use plates carry sui generis upper floors. Together covers semi-commercial and mixed-use along the Friargate fringe at 70 to 75% LTV on blended ICR. YBS Commercial takes selected CV1 office investment deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to Friargate secondary office investment and Plot 8 follow-on commercial freehold where the covenant and maintenance plan fit policy. Refinancing on a stabilised Friargate Grade A office asset typically prices 6.5 to 7.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "mixed-use", "retail", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Friargate Grade A office investment?",
        answer:
          'Up to 70% LTV on a let Two Friargate or One Friargate-style asset with HMRC, Coventry City Council or a comparable covenant tenant. Strong-covenant stock prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>. Plot 8 follow-on commercial typically caps at 65 to 70% LTV at 7.0 to 7.5% pa once a covenant tenant takes occupation. The binding constraint is almost always ICR, not headline LTV.',
      },
      {
        question: "Can we refinance a Friargate development-finance position once a plate stabilises?",
        answer:
          'Yes, refinancing maturing development-finance positions onto long-term commercial investment mortgages is the largest single Friargate use case in 2026. Typical 65 to 70% LTV at 6.5 to 7.5% pa on a stabilised Grade A office plate with HMRC or Coventry City Council in occupation, ICR 150% plus on the covenant rent. <strong>Shawbrook</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> compete keenly on this profile.',
      },
      {
        question: "Is Plot 8 follow-on commercial fundable?",
        answer:
          'Yes. The Friargate Plot 8 commercial scheme approved under planning reference 26/01245/FUL CV1 2HF is the canonical follow-on Friargate delivery, a development-finance route during the works phase, then term-out to investment mortgage at 65 to 70% LTV once a covenant tenant takes occupation. Hotel components within Plot 8 route through trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB on operator EBITDA at 60 to 70% LTV and 7.0 to 8.5% pa once a trading record is in place.',
      },
      {
        question: "Which lenders run dedicated West Midlands desks active on Coventry?",
        answer:
          '<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> all maintain West Midlands regional commercial teams in Birmingham covering Friargate and Coventry deals routinely. <strong>Shawbrook</strong>, Allica Bank and HTB carry dedicated mid-market programmes that take Friargate Grade A and secondary CBD investment deals. Cambridge & Counties is strong on Warwickshire and routes Coventry deals through a Leicester-led commercial team. We use those desks for Friargate deals where local knowledge of the Coventry City Council masterplan delivery, the station-adjacent demand and the covenant tenant mix carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  whitley: {
    slug: "whitley",
    name: "Whitley and JLR Engineering",
    metaTitle: "Commercial Mortgages Whitley Coventry | JLR Engineering and R&D Office Broker, CV3",
    metaDescription:
      "Commercial mortgages for Whitley, Coventry CV3, the JLR Whitley engineering centre and surrounding R&D office and supplier ecosystem. Out-of-town corporate office investment, Tier 1 and Tier 2 automotive owner-occupier finance. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Whitley and JLR Engineering",
      lede:
        "Whitley sits in south Coventry CV3 and anchors the JLR Whitley engineering centre on Abbey Road, the largest single Jaguar Land Rover R&D and powertrain campus in the UK. The surrounding Whitley business park threads R&D office and supplier-led owner-occupier accommodation around the central JLR plate. We arrange commercial mortgages for CV3 R&D and Grade A office investment, JLR Tier 1 and Tier 2 supplier owner-occupier freehold across Whitley business park, and the small-cap industrial and trade-counter stock that supports the automotive supply chain. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Whitley and JLR engineering commercial property market",
      body: [
        "Whitley is the densest single automotive R&D and engineering submarket in the West Midlands outside Birmingham and the most JLR-anchored Coventry commercial mortgage cluster. The JLR Whitley engineering centre on Abbey Road carries the central engineering, powertrain and supplier-engagement campus, and the surrounding Whitley business park threads Tier 1 and Tier 2 supplier office, lab and small-cap industrial accommodation around it. Demand is structurally underwritten by the JLR EV programme, the wider Coventry battery industrialisation cluster at UKBIC and the Ansty Park engineering ecosystem to the north east.",
        "Mid-cap private investors and trading SMEs dominate the volume end. The £400K to £3M bracket, secondary Whitley business park R&D office investment, supplier-led owner-occupier office and small-cap industrial freehold, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.0% pa for clean Whitley investment, with strong-covenant JLR-let or JLR-adjacent office stock at 6.5 to 7.0% pa and secondary supplier-let office at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment.",
        "HM Land Registry residential transactions inside the CV3 Whitley catchment cluster around the suburban residential streets behind Abbey Road and the wider south Coventry stock, with the CV3 median running between £188,000 and £310,000 on recent files. They are not a direct commercial signal but they confirm that the south Coventry Whitley catchment continues to absorb residential supply against the backdrop of the JLR engineering employment base, which underwrites the supplier office and small-cap industrial income that most of our Whitley commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Whitley (CV3)",
      body:
        'Two headline Coventry City Council public access files anchor the current Whitley commercial mortgage pipeline. The Whitley business park ancillary R&D expansion scheme at the JLR Whitley engineering centre on Abbey Road (Ref <strong>26/01045/FUL</strong>) covers new Grade A office and lab accommodation supporting JLR engineering and the supplier cluster, the canonical Whitley R&D delivery that the developer funds through development finance during the works phase and then refinances onto a Grade A office investment facility at 60 to 70% LTV once a covenant tenant takes occupation. The Coventry Gateway logistics expansion scheme at Whitmoor Park, Tollbar Way (Ref <strong>26/01102/FUL</strong>) sits immediately to the north east in CV3 4 and delivers new Class B8 distribution warehouse accommodation supporting the JLR, Amazon and IKEA distribution corridor on the A45, the supply chain anchor that drives JLR-supplier owner-occupier mortgage demand back into Whitley. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "26/01045/FUL",
          address: "JLR Whitley Engineering Centre, Abbey Road, Coventry CV3 4LF",
          postcode: "CV3 4LF",
          proposal: "Whitley business park ancillary R&D expansion, new Grade A office and lab accommodation supporting JLR engineering and supplier cluster.",
        },
        {
          ref: "26/01102/FUL",
          address: "Coventry Gateway, Whitmoor Park, Tollbar Way, Coventry CV3 4PJ",
          postcode: "CV3 4PJ",
          proposal: "Coventry Gateway logistics expansion, new Class B8 distribution warehouse accommodation supporting the JLR / Amazon / IKEA distribution corridor on the A45.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Whitley",
      items: [
        { label: "Whitley business park R&D office", detail: "Grade A and Grade B R&D and engineering office investment supporting JLR and Tier 1 supplier covenants.", typicalSize: "£500K to £3M facility" },
        { label: "JLR Tier 1 supplier owner-occupier office", detail: "Tier 1 automotive supplier engineering office freehold buying out of leased space adjacent to the JLR plate.", typicalSize: "£400K to £2M" },
        { label: "Whitley small-cap industrial", detail: "B2 light industrial and lab accommodation supporting supplier prototyping and ancillary engineering services.", typicalSize: "£300K to £1.5M" },
        { label: "Abbey Road trade-counter", detail: "Abbey Road trade-counter and B8 storage owner-occupier and small-cap investment.", typicalSize: "£250K to £1M" },
        { label: "Multi-let business park investment", detail: "Whitley business park multi-let office and industrial investment with diversified supplier tenant mix.", typicalSize: "£1M to £5M" },
        { label: "Owner-occupier professional services", detail: "Engineering consultancy, design and IP firms buying their Whitley office floor.", typicalSize: "£300K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Whitley",
      body: 'Whitley business park R&D office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. JLR Tier 1 and Tier 2 supplier owner-occupier office and industrial via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or value-add Whitley business park office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Multi-let business park portfolios and supplier portfolio acquisitions through <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Refinancing maturing JLR-supplier facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Whitley R&D office, JLR-adjacent supplier owner-occupier and business park investment",
      body:
        "Whitley sits inside the strongest single automotive-adjacent Coventry lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime JLR-adjacent Grade A R&D office investment at 60 to 65% LTV and 6.5 to 7.0% pa, with the West Midlands regional commercial teams in Birmingham covering Whitley deals and HSBC UK active across the JLR supply chain. <strong>Shawbrook</strong> dominates mid-market secondary Whitley business park R&D investment and refurbishment at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> takes selected Whitley business park mixed-use and ancillary trading-business freehold against operator EBITDA. Allica Bank is active across Coventry SME and JLR Tier 1 supplier owner-occupier on Whitley office and small-cap industrial freehold at 70 to 75% LTV and 6.5 to 7.5% pa. HTB takes selected Whitley R&D office investment and supplier owner-occupier deals on its commercial book. Paragon supports portfolio refinance where supplier landlords hold multi-asset Whitley business park stock. Together covers value-add Whitley industrial and trade-counter at 70 to 75% LTV on EBITDA. YBS Commercial takes selected CV3 R&D office and supplier owner-occupier deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to Whitley business park investment and JLR Tier 1 supplier owner-occupier freehold where the operator track record and covenant fit policy. Refinancing on a stabilised Whitley Grade A R&D office asset typically prices 6.5 to 7.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "industrial-warehouse", "mixed-use", "retail", "leisure-hospitality"],
    faqs: [
      {
        question: "Can we get a commercial mortgage on a Grade A Whitley R&D office investment?",
        answer:
          'Yes. JLR-let or JLR-adjacent Grade A R&D office stock funds at 60 to 70% LTV at 6.5 to 7.5% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>. Secondary Whitley business park investment caps at 65 to 75% LTV with <strong>Shawbrook</strong> and Cambridge & Counties. The binding constraint is almost always ICR and the strength of the JLR or Tier 1 supplier covenant, not headline LTV.',
      },
      {
        question: "What LTV on JLR Tier 1 supplier owner-occupier office?",
        answer:
          'Up to 75% LTV on standard JLR Tier 1 supplier owner-occupier office and small-cap industrial freehold. EBITDA cover 1.3 to 1.5x. Active across mainstream challenger desks Allica, HTB and YBS Commercial at 6.5 to 7.5% pa. Cambridge & Counties is strong on Warwickshire and brings keen appetite to JLR Tier 1 supplier deals. Refinancing existing owner-occupier facilities currently busy as five-year fixes mature.',
      },
      {
        question: "Is the JLR Whitley R&D expansion fundable on development finance?",
        answer:
          'Yes. The Whitley business park ancillary R&D expansion scheme approved under planning reference 26/01045/FUL Abbey Road CV3 4LF is the canonical Whitley R&D delivery, a development-finance route during the works phase, then term-out to investment mortgage at 65 to 70% LTV once a covenant tenant takes occupation. <strong>Shawbrook</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all take this profile on stabilised exit.',
      },
      {
        question: "How does the Coventry Gateway logistics overlap affect lending at Whitley?",
        answer:
          'Coventry Gateway sits immediately to the north east of Whitley in CV3 4 and drives the JLR Tier 1 and Tier 2 supplier owner-occupier demand back into Whitley. Logistics investment routes through Coventry Gateway pricing, supplier owner-occupier routes through standard Whitley owner-occupier desks. Stamp duty applies at the commercial rates on every freehold purchase.',
      },
    ],
  },

  "coventry-gateway-whitmoor-ansty": {
    slug: "coventry-gateway-whitmoor-ansty",
    name: "Coventry Gateway, Whitmoor and Ansty",
    metaTitle: "Commercial Mortgages Coventry Gateway, Whitmoor and Ansty | Logistics and Industrial Broker, CV3 CV7",
    metaDescription:
      "Commercial mortgages for Coventry Gateway, Whitmoor Park and Ansty Park, CV3 4 and CV7 major industrial and logistics. Tollbar Way distribution warehouse investment, UKBIC battery R&D, Ansty Park Manufacturing Technology Centre and Rolls-Royce engineering cluster. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Coventry Gateway, Whitmoor and Ansty",
      lede:
        "Coventry Gateway, Whitmoor Park and Ansty Park anchor the strategic employment-land arc that runs from CV3 4 in south Coventry through to CV7 in the north east. Tollbar Way and Whitmoor Park carry the Class B8 distribution warehouse cluster on the A45 supporting JLR, Amazon and IKEA. The UK Battery Industrialisation Centre at Whitmoor Park anchors the EV battery R&D and supplier ecosystem. Ansty Park threads engineering and aerospace office and R&D accommodation around the Manufacturing Technology Centre and Rolls-Royce. We arrange commercial mortgages for major Class B8 distribution warehouse investment, JLR Tier 1 logistics owner-occupier freehold, UKBIC supplier Class B2 light industrial, Ansty Park Class B1 office finance and small-cap industrial across the corridor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Coventry Gateway, Whitmoor and Ansty commercial property market",
      body: [
        "Coventry Gateway, Whitmoor Park and Ansty Park together carry the largest single industrial and logistics submarket in the West Midlands outside Birmingham. Coventry Gateway and Whitmoor Park sit on the A45 corridor immediately south of the city in CV3 4 and deliver the Class B8 distribution warehouse cluster supporting JLR, Amazon Coventry, IKEA distribution and the wider Prologis Park Coventry expansion at Ryton in CV8. The UK Battery Industrialisation Centre at Whitmoor Park anchors the national EV battery R&D and supplier ecosystem. Ansty Park sits to the north east in CV7 and carries the Manufacturing Technology Centre, Rolls-Royce engineering plates and the wider Class B1 office and R&D supplier accommodation.",
        "Investor activity dominates the largest end. Strong-covenant Class B8 distribution warehouses let to Amazon, IKEA or JLR Tier 1 logistics partners route through institutional and mid-cap investment desks at £5M to £25M plus. The £400K to £3M bracket, JLR Tier 1 logistics owner-occupier freehold, UKBIC supplier Class B2 light industrial, Bayton Road and Ansty Park supplier engineering office, is the deep-volume zone we work most often. Pricing currently 6.0 to 7.5% pa for clean Class B8 distribution investment with strong covenants, with prime Amazon and IKEA-let stock at 6.0 to 6.5% pa and secondary Class B2 supplier industrial at 7.0 to 8.0%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment.",
        "HM Land Registry residential transactions inside the CV3 and CV7 commuter catchment cluster around Whitmoor, Ansty village and the suburban streets feeding the employment-land arc, with the CV3 median running between £188,000 and £310,000 and the CV7 stock skewed to detached and semi family housing. They are not a direct commercial signal but they confirm that the south and north east Coventry catchment continues to absorb residential supply against the backdrop of the JLR engineering and UKBIC EV supply chain employment base, which underwrites the logistics, supplier industrial and Ansty Park office income that most of our Coventry Gateway and Ansty commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Coventry Gateway, Whitmoor and Ansty (CV3 and CV7)",
      body:
        'Two headline Coventry City Council and Rugby Borough Council public access files anchor the current Coventry Gateway, Whitmoor and Ansty commercial mortgage pipeline. The Coventry Gateway logistics expansion scheme at Whitmoor Park, Tollbar Way (Ref <strong>26/01102/FUL</strong>) covers new Class B8 distribution warehouse accommodation supporting the JLR, Amazon and IKEA distribution corridor on the A45, the canonical Coventry Gateway delivery that the developer funds through development finance during the works phase and then refinances onto a Class B8 institutional investment facility at 55 to 65% LTV once a covenant tenant takes occupation. The UKBIC supply chain expansion scheme at Whitmoor Park (Ref <strong>26/00978/FUL</strong>) covers new Class B2 light industrial accommodation supporting EV battery R&D and supplier ecosystem at Whitmoor Park, the canonical UKBIC supplier delivery that supports JLR Tier 1 owner-occupier and Tier 2 supplier mortgage demand back into the cluster. The Ansty Park engineering and aerospace cluster expansion scheme at Hangar Road, Ansty (Ref <strong>25/02212/FUL</strong>) delivers new Class B1 office accommodation supporting Manufacturing Technology Centre and Rolls-Royce adjacency. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "26/01102/FUL",
          address: "Coventry Gateway, Whitmoor Park, Tollbar Way, Coventry CV3 4PJ",
          postcode: "CV3 4PJ",
          proposal: "Coventry Gateway logistics expansion, new Class B8 distribution warehouse accommodation supporting the JLR / Amazon / IKEA distribution corridor on the A45.",
        },
        {
          ref: "26/00978/FUL",
          address: "UK Battery Industrialisation Centre, Whitmoor Park, Coventry CV3 5JE",
          postcode: "CV3 5JE",
          proposal: "UKBIC supply chain expansion scheme, new Class B2 light industrial accommodation supporting EV battery R&D and supplier ecosystem at Whitmoor Park.",
        },
        {
          ref: "25/02212/FUL",
          address: "Ansty Park, Hangar Road, Ansty CV7 9JU",
          postcode: "CV7 9JU",
          proposal: "Ansty Park engineering and aerospace cluster expansion, new Class B1 office accommodation supporting Manufacturing Technology Centre and Rolls-Royce adjacency.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Coventry Gateway, Whitmoor and Ansty",
      items: [
        { label: "Coventry Gateway Class B8 distribution", detail: "Tollbar Way and Whitmoor Park Class B8 distribution warehouse investment with Amazon, IKEA and JLR Tier 1 logistics covenants.", typicalSize: "£5M to £25M plus facility" },
        { label: "JLR Tier 1 logistics owner-occupier", detail: "Tier 1 automotive logistics owner-occupier freehold across Coventry Gateway and Prologis Park Coventry at Ryton.", typicalSize: "£1M to £5M" },
        { label: "UKBIC supplier Class B2 light industrial", detail: "EV battery supplier light industrial owner-occupier and small-cap investment around the UK Battery Industrialisation Centre at Whitmoor Park.", typicalSize: "£500K to £3M" },
        { label: "Ansty Park Class B1 engineering office", detail: "Manufacturing Technology Centre and Rolls-Royce-adjacent Class B1 office investment and supplier owner-occupier.", typicalSize: "£1M to £5M" },
        { label: "Bayton Road supplier industrial", detail: "CV7 Bayton Road industrial estate Class B2 workshop and Class B8 storage supporting Tier 2 automotive supply chain.", typicalSize: "£300K to £1.5M" },
        { label: "Multi-let business park investment", detail: "Whitmoor and Ansty Park multi-let supplier office and industrial investment with diversified tenant mix.", typicalSize: "£2M to £8M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Coventry Gateway, Whitmoor and Ansty",
      body: 'Coventry Gateway Class B8 distribution warehouse investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. JLR Tier 1 logistics and UKBIC supplier owner-occupier industrial and office via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Multi-let business park portfolios and supplier portfolio acquisitions through <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Vacant or value-add supplier industrial routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing distribution and supplier facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Coventry Gateway Class B8 distribution, UKBIC supplier industrial and Ansty Park engineering office",
      body:
        "Coventry Gateway, Whitmoor and Ansty sit inside the strongest single logistics and industrial Coventry lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Coventry Gateway Class B8 distribution warehouse investment let to Amazon, IKEA or JLR Tier 1 logistics at 55 to 65% LTV and 6.0 to 6.5% pa, with the West Midlands regional commercial teams in Birmingham covering Coventry Gateway deals and HSBC UK active across the JLR and Amazon supply chain. <strong>Shawbrook</strong> dominates mid-market UKBIC supplier and Bayton Road industrial investment at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> takes selected multi-let business park investment and Ansty Park engineering trading-business freehold against operator EBITDA. Allica Bank is active across Coventry SME and JLR Tier 1 supplier owner-occupier on Whitmoor Park and Bayton Road small-cap industrial freehold at 70 to 75% LTV and 6.5 to 7.5% pa. HTB takes selected Coventry Gateway distribution investment and supplier owner-occupier deals on its commercial book. Paragon supports portfolio refinance where supplier landlords hold multi-asset business park stock across Whitmoor and Ansty. Together covers value-add Bayton Road industrial and trade-counter at 70 to 75% LTV on EBITDA. YBS Commercial takes selected CV3 and CV7 supplier industrial and Ansty Park office deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to UKBIC supplier industrial, Ansty Park engineering office investment and JLR Tier 1 owner-occupier freehold where the operator track record and covenant fit policy. Refinancing on a stabilised Coventry Gateway Class B8 distribution asset typically prices 6.0 to 7.0% pa at 55 to 65% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "office", "mixed-use", "retail", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Coventry Gateway Class B8 distribution warehouse investment?",
        answer:
          'Up to 65% LTV on a let Class B8 distribution warehouse with Amazon, IKEA or JLR Tier 1 logistics covenant. Strong-covenant stock prices best at 55 to 60% LTV at around 6.0 to 6.5% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>. Secondary distribution stock with shorter lease lengths typically caps at 65% with <strong>Shawbrook</strong>. The binding constraint is almost always ICR and the strength of the covenant, not headline LTV.',
      },
      {
        question: "Can we get a commercial mortgage on a UKBIC supplier Class B2 light industrial freehold?",
        answer:
          'Yes. UKBIC supplier Class B2 light industrial owner-occupier freehold routes through <a href="/services/owner-occupier-commercial-mortgage">owner-occupier mortgage</a> at 70 to 75% LTV at 6.5 to 7.5% pa with Allica Bank, HTB or YBS Commercial. Cambridge & Counties is strong on Warwickshire and brings keen appetite to UKBIC supplier deals. EBITDA cover 1.3 to 1.5x. The UKBIC supply chain expansion scheme approved under planning reference 26/00978/FUL Whitmoor Park CV3 5JE is the canonical UKBIC supplier delivery.',
      },
      {
        question: "Is Ansty Park engineering office fundable?",
        answer:
          'Yes. The Ansty Park engineering and aerospace cluster expansion scheme approved under planning reference 25/02212/FUL Hangar Road CV7 9JU is the canonical Ansty Park delivery. Manufacturing Technology Centre and Rolls-Royce-adjacent Class B1 office investment funds at 60 to 70% LTV at 6.5 to 7.5% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong> on prime stock and at 65 to 75% LTV with <strong>Shawbrook</strong> and Cambridge & Counties on secondary supplier office.',
      },
      {
        question: "Which lenders run dedicated West Midlands desks active on the logistics arc?",
        answer:
          '<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> all maintain West Midlands regional commercial teams in Birmingham covering Coventry Gateway and Ansty Park deals routinely. <strong>Shawbrook</strong>, Allica Bank and HTB carry dedicated mid-market industrial programmes that take Whitmoor Park supplier and Bayton Road industrial deals. Cambridge & Counties is strong on Warwickshire and routes Coventry Gateway and Ansty deals through a Leicester-led commercial team. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "westwood-tile-hill-canley": {
    slug: "westwood-tile-hill-canley",
    name: "Westwood Heath, Tile Hill and Canley",
    metaTitle: "Commercial Mortgages Westwood Heath, Tile Hill and Canley Coventry | Business Park Broker, CV4",
    metaDescription:
      "Commercial mortgages for Westwood Heath, Tile Hill and Canley, Coventry CV4. Westwood Business Park multi-let office, Ensign Business Centre, University of Warwick CV4 fringe, suburban retail and Tile Hill industrial. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Westwood Heath, Tile Hill and Canley",
      lede:
        "Westwood Heath, Tile Hill and Canley anchor the CV4 west Coventry commercial corridor. Westwood Business Park threads multi-let office accommodation across Westwood Way and the Ensign Business Centre, the University of Warwick CV4 fringe drives professional and academic-led demand, and Tile Hill and Canley carry the suburban retail parade and small-cap industrial. We arrange commercial mortgages for CV4 multi-let business park investment, Ensign Business Centre and Westwood Business Park office acquisition and refinance, Warwick-fringe owner-occupier professional services freehold, Tile Hill suburban retail and small-cap industrial across the corridor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Westwood Heath, Tile Hill and Canley commercial property market",
      body: [
        "Westwood Heath, Tile Hill and Canley together carry the deepest single business park and university-edge commercial submarket in CV4 west Coventry. Westwood Business Park sits on Westwood Way and houses the Ensign Business Centre and the wider multi-let office stock that supports the Coventry SME professional firm base and the university-adjacent academic and consulting cluster. The University of Warwick CV4 fringe drives professional, academic and spin-out commercial demand. Tile Hill and Canley thread suburban retail parade, small-cap industrial and convenience-led mixed-use across the wider corridor.",
        "Mid-cap private investors and trading SMEs dominate the volume end. The £300K to £2M bracket, Westwood Business Park multi-let office investment, Ensign Business Centre office acquisition and refinance, Warwick-fringe owner-occupier professional services freehold, Tile Hill suburban retail and small-cap industrial, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.0% pa for clean Westwood Business Park investment, with strong-covenant multi-let stock at 6.5 to 7.0% pa and secondary Westwood Way office at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature.",
        "HM Land Registry residential transactions inside the CV4 Westwood, Tile Hill and Canley catchment cluster around the family housing behind Westwood Heath and the wider suburban Tile Hill and Canley stock, with the CV4 median running between £163,000 and £625,000 on recent files. A single £625,000 detached at the CV5 6FW boundary pulled the upper end of the recent sample, and we capture a notable commercial transaction at CV4 8 under Ensign Business Centre, Westwood Way, with units 2, 3, 4, 16, 17 and 18 sold at £422,500 leasehold which appears in Land Registry as the Other proxy commercial flag. They confirm that the CV4 catchment continues to absorb residential and small-cap commercial supply, which underwrites the multi-let business park income that most of our Westwood, Tile Hill and Canley commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Westwood Heath, Tile Hill and Canley (CV4)",
      body:
        'One headline Coventry City Council public access file anchors the current Westwood, Tile Hill and Canley commercial mortgage pipeline. The Westwood Business Park Ensign Business Centre refurbishment scheme at Westwood Way (Ref <strong>25/02892/FUL</strong>) covers a multi-let office accommodation refresh adjacent to the University of Warwick campus, the canonical Westwood Business Park asset-management capex programme that an owner refinances against on a multi-let office investment facility at 65 to 70% LTV. The Browns Lane former JLR site mixed-use scheme at Allesley CV5 9DR (Ref <strong>25/01278/FUL</strong>) sits on the immediate CV4 and CV5 boundary and combines an automotive heritage and innovation centre alongside ground-floor commercial accommodation, the kind of follow-on commercial freehold that the developer refinances against on a stabilised investment exit. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "25/02892/FUL",
          address: "Westwood Way, Westwood Business Park, Coventry CV4 8HS",
          postcode: "CV4 8HS",
          proposal: "Westwood Business Park Ensign Business Centre refurbishment, multi-let office accommodation refresh adjacent to University of Warwick campus.",
        },
        {
          ref: "25/01278/FUL",
          address: "Browns Lane, Allesley, Coventry CV5 9DR",
          postcode: "CV5 9DR",
          proposal: "Browns Lane former JLR site mixed-use scheme, automotive heritage and innovation centre alongside ground-floor commercial accommodation.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Westwood, Tile Hill and Canley",
      items: [
        { label: "Westwood Business Park multi-let office", detail: "Westwood Way multi-let office investment with diversified SME and Warwick-adjacent professional tenant mix.", typicalSize: "£500K to £3M facility" },
        { label: "Ensign Business Centre", detail: "Ensign Business Centre office acquisition and refinance, leasehold and freehold units within the multi-let block.", typicalSize: "£300K to £1.5M" },
        { label: "Warwick-fringe owner-occupier", detail: "University of Warwick CV4 fringe owner-occupier professional services and academic spin-out freehold.", typicalSize: "£400K to £2M" },
        { label: "Tile Hill suburban retail parade", detail: "Tile Hill and Canley suburban retail parade and convenience-led mixed-use freehold.", typicalSize: "£250K to £800K" },
        { label: "Canley small-cap industrial", detail: "Canley and Tile Hill small-cap Class B2 light industrial and trade-counter owner-occupier and investment.", typicalSize: "£300K to £1M" },
        { label: "Suburban semi-commercial blocks", detail: "Shop plus flat semi-commercial across Tile Hill Lane and the wider CV4 corridor.", typicalSize: "£250K to £700K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Westwood, Tile Hill and Canley",
      body: 'Westwood Business Park multi-let office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Ensign Business Centre acquisition and Warwick-fringe owner-occupier professional services freehold via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Tile Hill suburban semi-commercial blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Multi-let business park portfolios through <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Vacant or value-add Westwood Way office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing Westwood Business Park facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Westwood Business Park multi-let office, Warwick-fringe owner-occupier and Tile Hill semi-commercial",
      body:
        "Westwood Heath, Tile Hill and Canley sit inside a deep CV4 lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Westwood Business Park multi-let office investment at 60 to 65% LTV and 6.5 to 7.0% pa, with the West Midlands regional commercial teams in Birmingham covering Westwood deals. <strong>Shawbrook</strong> dominates mid-market secondary Westwood Way office investment and Ensign Business Centre refurbishment at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> takes selected multi-let business park investment and Tile Hill mixed-use trading-business freehold against operator EBITDA. Allica Bank is active across Coventry SME and Warwick-fringe owner-occupier on Westwood Way and Tile Hill office and small-cap industrial freehold at 70 to 75% LTV and 6.5 to 7.5% pa. HTB takes selected Westwood Business Park investment and Warwick-fringe owner-occupier deals on its commercial book. Paragon supports portfolio refinance where suburban landlords hold multi-asset CV4 stock including HMO blocks let to Warwick students. Together covers value-add Tile Hill and Canley semi-commercial and small-cap industrial at 70 to 75% LTV on blended ICR. YBS Commercial takes selected CV4 multi-let office and supplier owner-occupier deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to Westwood Business Park multi-let office investment, Ensign Business Centre acquisition and Warwick-fringe owner-occupier freehold where the operator track record and covenant fit policy. Refinancing on a stabilised Westwood Business Park multi-let office asset typically prices 6.5 to 7.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "retail", "industrial-warehouse", "mixed-use", "semi-commercial"],
    faqs: [
      {
        question: "What LTV is achievable on a Westwood Business Park multi-let office investment?",
        answer:
          'Up to 75% LTV on a let multi-let office asset with a diversified SME and Warwick-adjacent professional tenant mix. Prime strong-covenant Westwood Business Park stock prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>. Secondary Westwood Way stock caps at 65 to 75% with <strong>Shawbrook</strong> and Cambridge & Counties. The binding constraint is almost always ICR and the diversification of the tenant stack, not headline LTV.',
      },
      {
        question: "Can we get a commercial mortgage on an Ensign Business Centre unit?",
        answer:
          'Yes. Ensign Business Centre acquisition and refinance routes through <a href="/services/owner-occupier-commercial-mortgage">owner-occupier mortgage</a> for SMEs buying their unit at 70 to 75% LTV at 6.5 to 7.5% pa with Allica Bank, HTB or YBS Commercial, or via <a href="/services/commercial-investment-mortgage">commercial investment mortgage</a> where an investor holds multiple units let to third parties. The Westwood Business Park refurbishment scheme approved under planning reference 25/02892/FUL Westwood Way CV4 8HS is the canonical Westwood asset-management capex programme.',
      },
      {
        question: "Is University of Warwick-fringe owner-occupier office fundable?",
        answer:
          'Yes. Warwick-fringe owner-occupier professional services, academic consultancy and spin-out office freehold funds at 70 to 75% LTV at 6.5 to 7.5% pa across Allica Bank, HTB and YBS Commercial on EBITDA cover at 1.3 to 1.5x. Cambridge & Counties is strong on Warwickshire and brings keen appetite to Warwick-fringe owner-occupier deals.',
      },
      {
        question: "What about Tile Hill suburban semi-commercial blocks?",
        answer:
          'Tile Hill suburban semi-commercial routes via <a href="/services/semi-commercial-mortgage">semi-commercial mortgage</a> on blended ICR at 70 to 75% LTV at 7.0 to 8.0% pa. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Together and Paragon all take this profile. Stamp duty applies at the mixed-use rates on the freehold purchase, refinancing is unaffected. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "earlsdon-stoneleigh-cheylesmore": {
    slug: "earlsdon-stoneleigh-cheylesmore",
    name: "Earlsdon, Stoneleigh and Cheylesmore",
    metaTitle: "Commercial Mortgages Earlsdon, Stoneleigh and Cheylesmore Coventry | Suburban F&B and Care Home Broker, CV5 CV3",
    metaDescription:
      "Commercial mortgages for Earlsdon, Stoneleigh and Cheylesmore, Coventry CV5 and CV3. Earlsdon Avenue suburban F&B parade, professional offices, affluent Stoneleigh and Cheylesmore care-home stock concentration. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Earlsdon, Stoneleigh and Cheylesmore",
      lede:
        "Earlsdon, Stoneleigh and Cheylesmore cover the southern suburban arc of Coventry across CV5 and CV3. Earlsdon Avenue carries the most active suburban F&B parade in the city alongside professional offices, Stoneleigh sits as the affluent commuter suburb running into the Warwickshire fringe, and Cheylesmore carries the southern care-home stock concentration. We arrange commercial mortgages for suburban F&B trading-business freehold along Earlsdon Avenue, professional services owner-occupier office, neighbourhood retail and semi-commercial across the corridor, and the Cheylesmore care-home and healthcare freehold market. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Earlsdon, Stoneleigh and Cheylesmore commercial property market",
      body: [
        "Earlsdon, Stoneleigh and Cheylesmore together carry one of the most affluent suburban commercial submarkets in Coventry and the densest single F&B parade and care-home cluster south of the city centre. Earlsdon Avenue runs through CV5 6 with a deep concentration of independent restaurants, cafes, gastro-pubs and boutique retail trading against a professional commuter catchment, alongside a steady professional office spine of legal, accountancy and consultancy firms above ground-floor retail. Stoneleigh runs to the south east and carries the affluent commuter belt onto the Warwickshire boundary, with neighbourhood retail and village-centre F&B threading the residential stock. Cheylesmore in CV3 carries the southern Coventry care-home stock concentration alongside suburban retail and convenience-led mixed-use.",
        "Mid-cap private operators and family-office investors dominate the volume end. The £300K to £2M bracket, Earlsdon Avenue F&B trading-business freehold, suburban professional office owner-occupier, Cheylesmore care-home and dental practice freehold, neighbourhood retail and semi-commercial, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.5% pa for clean Earlsdon Avenue investment, with strong-covenant professional office and care-home stock at 6.5 to 7.5% pa and independent F&B at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature.",
        "HM Land Registry residential transactions inside the CV5 and CV3 Earlsdon, Stoneleigh and Cheylesmore catchment cluster around the affluent commuter housing stock, with the CV5 median running between £230,000 and £625,000 on recent files including a £625,000 detached at the CV5 6FW boundary, and the CV3 median running between £188,000 and £310,000. They are not a direct commercial signal but they confirm that the southern Coventry catchment continues to absorb residential supply against the backdrop of the professional commuter base and the wider Coventry economy, which underwrites the suburban F&B, professional office and care-home income that most of our Earlsdon, Stoneleigh and Cheylesmore commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Earlsdon, Stoneleigh and Cheylesmore (CV5 and CV3)",
      body:
        'One headline Coventry City Council public access file anchors the current Earlsdon, Stoneleigh and Cheylesmore commercial mortgage pipeline. The Earlsdon Avenue suburban F&B parade refurbishment scheme at CV5 6DR (Ref <strong>25/02745/FUL</strong>) covers frontage works and a change of use of upper floors to managed flexible workspace, the canonical Earlsdon Avenue parade asset-management capex programme that a freeholder refinances against on a semi-commercial or trading-business investment facility once the upper-floor flexible workspace and ground-floor F&B income stabilise. The Allesley village neighbourhood retail scheme at Allesley Old Road (Ref <strong>25/01678/FUL</strong>) sits at the affluent suburban fringe immediately west of Stoneleigh and delivers a new convenience and F&B accommodation alongside healthcare ancillary, the kind of neighbourhood retail investment that the developer refinances against on a Class E investment facility at 65 to 70% LTV. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.',
      refs: [
        {
          ref: "25/02745/FUL",
          address: "Earlsdon Avenue, Earlsdon, Coventry CV5 6DR",
          postcode: "CV5 6DR",
          proposal: "Earlsdon Avenue suburban F&B parade refurbishment, frontage works and change of use of upper floors to managed flexible workspace.",
        },
        {
          ref: "25/01678/FUL",
          address: "Allesley Old Road, Allesley, Coventry CV5 8GG",
          postcode: "CV5 8GG",
          proposal: "Allesley village neighbourhood retail scheme, new convenience and F&B accommodation alongside healthcare ancillary in affluent suburban fringe.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Earlsdon, Stoneleigh and Cheylesmore",
      items: [
        { label: "Earlsdon Avenue F&B parade", detail: "Earlsdon Avenue independent restaurant, cafe, gastro-pub and boutique retail trading-business freehold.", typicalSize: "£300K to £1.2M facility" },
        { label: "Suburban professional office", detail: "Earlsdon and Stoneleigh professional office owner-occupier and small-cap investment, often above ground-floor retail.", typicalSize: "£300K to £1.5M" },
        { label: "Cheylesmore care home and dental", detail: "Cheylesmore CV3 care-home and dental practice freehold within the southern care-home stock concentration.", typicalSize: "£500K to £2M" },
        { label: "Stoneleigh neighbourhood retail", detail: "Stoneleigh village neighbourhood retail and convenience-led mixed-use freehold serving the affluent commuter belt.", typicalSize: "£250K to £800K" },
        { label: "Suburban semi-commercial blocks", detail: "Shop plus flat semi-commercial across Earlsdon Avenue, Cheylesmore and the wider corridor.", typicalSize: "£250K to £700K" },
        { label: "Managed flexible workspace", detail: "Earlsdon Avenue upper-floor managed flexible workspace conversion serving the suburban professional base.", typicalSize: "£300K to £1M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Earlsdon, Stoneleigh and Cheylesmore",
      body: 'Earlsdon Avenue F&B trading-business freehold via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Suburban professional office owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Cheylesmore care-home and dental practice freehold via specialist healthcare desks and <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Suburban semi-commercial blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Vacant or value-add Earlsdon Avenue upper-floor flexible workspace routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing F&B and care-home facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Earlsdon Avenue F&B, suburban professional office and Cheylesmore care home",
      body:
        "Earlsdon, Stoneleigh and Cheylesmore sit inside a deep suburban Coventry lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Earlsdon Avenue professional office investment and Cheylesmore care-home freehold at 60 to 65% LTV and 6.5 to 7.5% pa, with the West Midlands regional commercial teams in Birmingham covering Earlsdon, Stoneleigh and Cheylesmore deals. <strong>Shawbrook</strong> dominates mid-market secondary Earlsdon Avenue F&B parade and semi-commercial at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Earlsdon Avenue independent F&B and gastro-pub trading-business freehold against operator EBITDA at 1.5 to 1.8x. Allica Bank is active across Coventry SME owner-occupier on suburban professional office, Cheylesmore care-home and Stoneleigh neighbourhood retail freehold at 70 to 75% LTV and 6.5 to 7.5% pa. HTB takes selected Earlsdon Avenue F&B trading-business and Cheylesmore care-home deals on its commercial book. Paragon supports portfolio refinance where suburban landlords hold multi-asset Earlsdon and Cheylesmore semi-commercial stock. Together covers value-add suburban semi-commercial and Stoneleigh neighbourhood retail at 70 to 75% LTV on blended ICR. <strong>InterBay Commercial</strong> covers semi-commercial across Earlsdon Avenue and Cheylesmore at 70 to 75% LTV on blended ICR. YBS Commercial takes selected CV5 and CV3 suburban professional office and semi-commercial deals on West Midlands underwriting. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to Earlsdon Avenue F&B parade investment, Cheylesmore care-home freehold and Stoneleigh neighbourhood retail where the operator track record and covenant fit policy. Refinancing on a stabilised Earlsdon Avenue F&B asset typically prices 7.5 to 8.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "office", "healthcare-care-home", "semi-commercial", "retail"],
    faqs: [
      {
        question: "What LTV is achievable on an Earlsdon Avenue F&B trading-business freehold?",
        answer:
          'Up to 70% LTV on a trading independent restaurant, cafe or gastro-pub freehold with operator EBITDA cover at 1.5 to 1.8x. Earlsdon Avenue independent stock with two or more years of accounts and a stable trading record prices best at 60 to 65% LTV at around 7.0 to 7.5% pa with <strong>Cynergy Bank</strong>, with independent F&B at 65 to 70% LTV at 7.5 to 8.5% pa. Cambridge & Counties is strong on Warwickshire and brings keen appetite to Earlsdon Avenue F&B parade deals. The binding constraint is operator EBITDA, not headline LTV.',
      },
      {
        question: "Can we get a commercial mortgage on a Cheylesmore care home freehold?",
        answer:
          'Yes. Cheylesmore care-home and dental practice freehold routes via <a href="/services/commercial-investment-mortgage">commercial investment mortgage</a> on regulated CQC-rated stock at 65 to 70% LTV at 6.5 to 7.5% pa with <strong>Lloyds</strong>, <strong>NatWest</strong> or Allica Bank where the operator covenant is strong. Specialist healthcare desks and HTB take selected deals on smaller-cap stock. EBITDA cover and CQC rating feed into the underwriting on every Cheylesmore care-home deal.',
      },
      {
        question: "Is the Earlsdon Avenue parade refurbishment fundable?",
        answer:
          'Yes. The Earlsdon Avenue suburban F&B parade refurbishment scheme approved under planning reference 25/02745/FUL CV5 6DR is the canonical Earlsdon Avenue capex programme, a bridge-to-let route during the frontage works and upper-floor flexible workspace conversion phase, then term-out to semi-commercial or trading-business mortgage at 70 to 75% LTV at 7.0 to 8.0% pa once the upper-floor flexible workspace and ground-floor F&B income stabilise. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Cambridge & Counties and Together all take this profile on stabilised exit.',
      },
      {
        question: "Which lenders run dedicated West Midlands desks active on Coventry suburbs?",
        answer:
          '<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> all maintain West Midlands regional commercial teams in Birmingham covering Earlsdon, Stoneleigh and Cheylesmore deals routinely. <strong>Cynergy Bank</strong>, Allica Bank and HTB carry dedicated hospitality and SME programmes that take Earlsdon Avenue F&B and Cheylesmore care-home deals. Cambridge & Counties is strong on Warwickshire and routes Coventry suburban deals through a Leicester-led commercial team. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "holbrooks-foleshill-radford": {
    slug: "holbrooks-foleshill-radford",
    name: "Holbrooks, Foleshill and Radford",
    metaTitle: "Commercial Mortgages Holbrooks, Foleshill and Radford Coventry | Industrial Broker, CV6",
    metaDescription:
      "Commercial mortgages for Holbrooks, Foleshill and Radford, Coventry (CV6), Holbrook Lane industrial estate, Foleshill Road Class B2 to mixed-use conversions, last-mile logistics, semi-commercial. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Holbrooks, Foleshill and Radford",
      lede:
        "Holbrooks, Foleshill and Radford anchor the CV6 industrial belt to the north of Coventry city centre, threading along Holbrook Lane, Foleshill Road and Lockhurst Lane through one of the most active change-of-use corridors in the West Midlands. The fabric is a tightly woven mix of light industrial and trade-counter stock along Holbrook Lane, last-mile logistics across the wider CV6 footprint, dense Class B2 to mixed-use and residential conversion volume along Foleshill Road and the Bishopgate corridor, and value-end semi-commercial shop-with-flat parades across the inner Foleshill grid. We arrange commercial mortgages for CV6 owner-occupier industrial purchase along Holbrook Lane, Foleshill Road Class B2 to mixed-use conversion finance, last-mile logistics investment and the small-cap trade-counter and semi-commercial freeholds that thread the industrial belt. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Holbrooks, Foleshill and Radford commercial property market",
      body: [
        "The CV6 industrial belt is the densest light industrial and trade-counter zone in Coventry outside the Coventry Gateway and Ansty logistics corridor. Holbrook Lane and the streets off it carry one of the strongest SME owner-occupier industrial markets in the West Midlands, B2 workshop, B8 storage and trade-counter stock trading against the JLR supplier ecosystem, the wider EV supply chain feeding into UKBIC at Whitmoor Park, and the last-mile logistics demand driven by Amazon, IKEA and Prologis along the A45 corridor. Foleshill Road and the Lockhurst Lane corridor carry the most active Class B2 to mixed-use and residential conversion pipeline in Coventry, with industrial freehold and former-mill stock converting under permitted development and full planning into ground-floor Class E retail with sui generis HMO or self-contained apartments above. Radford brings a smaller but steady inner-city semi-commercial and convenience retail base feeding the dense terraced residential catchment.",
        "Most CV6 commercial mortgage flow runs in the £250K to £1.5M bracket. Owner-occupier industrial freehold along Holbrook Lane prices currently 6.0 to 7.5% pa at 70 to 75% LTV with mainstream challenger desks. Trade-counter sits in the same bracket. Foleshill Road Class B2 to mixed-use conversion runs as bridge-to-let during the works phase and then terms out to semi-commercial mortgage at 75% LTV on blended ICR on the Class E ground floor and HMO or apartment income above. Value-end semi-commercial along the inner Foleshill grid runs wider at 7.5 to 9.0% pa via Together and InterBay Commercial, reflecting the value-end resident catchment.",
        "HM Land Registry residential transactions across CV6 cluster at the lower end of the Coventry residential price band, with recent files including CV6 terraced freehold and small-cap converted-flat sales between £80,000 and £232,000 across the Holbrooks, Foleshill and Radford grid. They are not a direct commercial signal but they confirm the value-end resident catchment that supports the convenience retail, takeaway, HMO and value-end semi-commercial underwriting that most of our CV6 commercial mortgage lending sits against. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic industrial recovery cycle matured into a higher base-rate environment.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Holbrooks, Foleshill and Radford (CV6)",
      body:
        'Two Coventry City Council public-access files anchor the current Holbrooks, Foleshill and Radford commercial mortgage pipeline. The Foleshill Road change-of-use scheme (Ref <strong>26/00645/FUL</strong>) covers a Class B2 to mixed-use conversion along the Foleshill Road CV6 corridor, the canonical CV6 conversion archetype that an operator funds through bridge-to-let or development finance during the works phase and then refinances against on a semi-commercial mortgage at up to 75% LTV on blended ICR on the Class E ground floor and the residential or HMO income above. The Holbrook Lane scheme (Ref <strong>25/02345/COU</strong>) is a change-of-use file along the CV6 industrial spine that captures the asset-management volume the local market is currently working through, light industrial repositioning into trade-counter, vehicle-trade and small-cap Class E light-industrial-adjacent leisure. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.',
      refs: [
        {
          ref: "26/00645/FUL",
          address: "Foleshill Road, Foleshill, Coventry CV6",
          postcode: "CV6",
          proposal: "Change of use from Class B2 industrial to mixed-use scheme along the Foleshill Road conversion corridor, illustrative of the CV6 industrial-to-mixed-use pipeline.",
        },
        {
          ref: "25/02345/COU",
          address: "Holbrook Lane, Holbrooks, Coventry CV6",
          postcode: "CV6",
          proposal: "Change of use file along the Holbrook Lane CV6 industrial spine, illustrative of the light industrial repositioning and trade-counter conversion volume across the CV6 industrial belt.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Holbrooks, Foleshill and Radford",
      items: [
        { label: "Holbrook Lane light industrial", detail: "SME owner-occupier B2 workshop and B8 storage units along the Holbrook Lane industrial spine.", typicalSize: "£250K to £1.2M facility" },
        { label: "Last-mile logistics unit", detail: "Small to mid-cap last-mile distribution unit serving the wider Coventry and A45 corridor demand.", typicalSize: "£500K to £2M" },
        { label: "Trade-counter", detail: "Builders merchant, plumbers merchant and trade-counter retail across the CV6 industrial estates.", typicalSize: "£300K to £1M" },
        { label: "Foleshill Road Class B2 to mixed-use conversion", detail: "Former industrial freehold converting to ground-floor Class E plus residential or HMO above along Foleshill Road.", typicalSize: "£400K to £1.5M" },
        { label: "Value-end semi-commercial shop and flat", detail: "Inner Foleshill and Radford parade shop-with-flat freehold.", typicalSize: "£150K to £450K" },
        { label: "Vehicle trade and MOT", detail: "Industrial-to-vehicle-trade conversion freehold along Holbrook Lane and the Foleshill Road fringe.", typicalSize: "£250K to £800K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Holbrooks, Foleshill and Radford",
      body: 'Owner-occupier industrial routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Last-mile logistics and trade-counter investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Foleshill Road Class B2 to mixed-use conversion runs as <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> during the works phase, with term-out to <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR once stabilised. Vehicle-trade and MOT operators along the corridor run through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on EBITDA. Refinancing maturing industrial owner-occupier facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for CV6 Holbrook Lane industrial and Foleshill Road conversion",
      body:
        "Light industrial owner-occupier along Holbrook Lane is the deepest single sector in the CV6 industrial belt, and the lender pool is wide and competitive. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest SME owner-occupier industrial freehold and last-mile logistics investment at 60 to 70% LTV and 6.0 to 7.0% pa across the West Midlands regional commercial RM coverage. <strong>Shawbrook</strong> sits at the top of our shortlist on mid-cap industrial investment and trade-counter freehold at 65 to 75% LTV and 6.5 to 7.5% pa. Allica Bank runs an active Coventry SME book on owner-occupier industrial purchase at 70 to 75% LTV. HTB and YBS Commercial cover stronger-covenant industrial owner-occupier and investment across CV6. <strong>InterBay Commercial</strong> and Together dominate the Foleshill Road value-end semi-commercial and Class B2 to mixed-use conversion pipeline at up to 75% LTV on blended ICR. <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> cover bridge-to-let on the conversion works phase. Paragon takes selected CV6 HMO conversion above shop deals. Cambridge & Counties carries strong appetite across Warwickshire and the wider West Midlands and routes Coventry industrial and mixed-use deals through a Leicester-led commercial team. Refinancing on a stabilised CV6 industrial owner-occupier or Foleshill Road semi-commercial typically prices 6.5 to 8.0% pa at 70 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "semi-commercial", "mixed-use", "retail", "mot-garage-petrol", "hmo-block"],
    faqs: [
      {
        question: "What LTV is achievable on a Holbrook Lane industrial owner-occupier freehold?",
        answer:
          "Up to 75% LTV on a clean SME owner-occupier B2 workshop or B8 storage freehold along Holbrook Lane with EBITDA cover at 1.3 to 1.5x. Strong covenants trading from established premises with two or more years of accounts price best at 70 to 75% LTV at around 6.0 to 7.0% pa with Allica Bank, HTB or YBS Commercial. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger lot sizes at 60 to 70% LTV. The binding constraint is usually EBITDA cover, not headline LTV.",
      },
      {
        question: "Can we fund a Foleshill Road Class B2 to mixed-use conversion?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the works phase and then term-out to a semi-commercial mortgage on blended ICR once the Class E ground floor is let and the residential or HMO income above is stabilised. The Foleshill Road CV6 scheme approved under planning reference 26/00645/FUL is exactly this profile, a 12 to 18 month bridge funds the conversion works and re-letting, then terms out at 70 to 75% LTV with <strong>InterBay Commercial</strong>, Together or Paragon on blended ICR at around 145%.',
      },
      {
        question: "What product fits a CV6 last-mile logistics investor?",
        answer:
          'Commercial investment mortgage on ICR via <a href="/services/commercial-investment-mortgage">commercial investment route</a> at 60 to 70% LTV with <strong>Shawbrook</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong> or <strong>Santander</strong> depending on lot size, tenant covenant and lease length. Pricing 6.0 to 7.5% pa on strong-covenant single-let last-mile stock with five or more years to first break. ICR stress-tested at 140 to 160% on the passing rent.',
      },
      {
        question: "Which lenders are active on CV6 vehicle-trade and MOT conversions?",
        answer:
          "Together dominates West Midlands vehicle-trade and MOT trading-business mortgage at 60 to 70% LTV and 7.5 to 9.0% pa on operator EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong> takes selected mid-cap vehicle-trade and forecourt deals. Allica Bank and HTB take selected MOT and garage owner-occupier where the operator has a stable trading record. The Holbrook Lane CV6 scheme approved under planning reference 25/02345/COU is illustrative of the industrial-to-vehicle-trade and trade-counter repositioning volume across the corridor. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "wyken-walsgrave-hawkesbury": {
    slug: "wyken-walsgrave-hawkesbury",
    name: "Wyken, Walsgrave and Hawkesbury",
    metaTitle: "Commercial Mortgages Wyken, Walsgrave and Hawkesbury Coventry | UHCW Broker, CV2",
    metaDescription:
      "Commercial mortgages for Wyken, Walsgrave and Hawkesbury, Coventry (CV2), UHCW Walsgrave hospital halo, Brade Drive medical-adjacent stock, suburban retail and care-home freehold. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Wyken, Walsgrave and Hawkesbury",
      lede:
        "Wyken, Walsgrave and Hawkesbury sit to the north-east of Coventry in CV2, wrapped around the University Hospitals Coventry and Warwickshire NHS Trust acute site at Walsgrave Triangle, threading along Ansty Road, Brade Drive and Hinckley Road through one of the most resilient suburban commercial submarkets in the West Midlands. The fabric is a tightly woven mix of healthcare and allied-health office stock in the UHCW Walsgrave hospital halo, suburban district-centre retail along Walsgrave Road and Wyken Croft, neighbourhood convenience and takeaway retail across the wider CV2 catchment, and a steady care-home and supported-living concentration feeding off the hospital catchment. We arrange commercial mortgages for CV2 hospital-adjacent allied-health office acquisition, care-home freehold purchase and refinance, suburban retail owner-occupier and the small-cap semi-commercial freeholds that thread the Walsgrave Triangle and the wider Wyken and Hawkesbury catchment. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Wyken, Walsgrave and Hawkesbury commercial property market",
      body: [
        "The CV2 commercial market is anchored by the UHCW Walsgrave Hospital site, the major regional acute trust serving Coventry and Warwickshire with a combined workforce of around 10,000 and a daily inbound visitor count that supports a deep allied-health and medical-services catchment across Brade Drive, Walsgrave Triangle and the wider Walsgrave Road corridor. Around the hospital, allied-health office and clinical-adjacent stock trades against a tight supply, with specialist clinics, dental practices, physiotherapy operators, occupational health and small private-medical providers buying or refinancing freehold space sitting within walking distance of the hospital entrance. Wyken Croft and Walsgrave Road carry a steady suburban district-centre retail spine of independent retailers, convenience operators, pharmacies, hot-food takeaways and a handful of pubs and restaurants serving the local resident catchment. Hawkesbury brings a smaller but stable inner-suburban semi-commercial parade base.",
        "Most CV2 commercial mortgage flow runs in the £300K to £1.5M bracket. Allied-health office freehold around Brade Drive and Walsgrave Triangle prices currently 6.5 to 8.0% pa at 65 to 75% LTV depending on operator covenant and NHS or private-pay revenue mix. Suburban retail owner-occupier along Walsgrave Road and Wyken Croft prices 6.5 to 8.0% pa at 70 to 75% LTV with mainstream challenger desks. Care-home freehold in the CV2 catchment prices 7.0 to 8.5% pa at 60 to 70% LTV on operator EBITDA and CQC rating, with bed values calibrated against the wider Coventry private-pay and local-authority funding mix. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic healthcare recovery cycle matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across CV2 cluster between £210,000 and £232,000 across the Wyken, Walsgrave and Hawkesbury grid, sitting in the mid-tier Coventry resident price band. They are not a direct commercial signal but they confirm a stable working-age resident catchment that supports the suburban retail, convenience and takeaway underwriting that most of our CV2 commercial mortgage lending sits against, and the dual-income NHS and adjacent-services worker base that supports the private-pay care occupancy and allied-health office tenant covenant.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Wyken, Walsgrave and Hawkesbury (CV2)",
      body:
        'One headline Coventry City Council public-access file anchors the current Wyken, Walsgrave and Hawkesbury commercial mortgage pipeline. The Walsgrave Triangle healthcare scheme (Ref <strong>25/02478/FUL</strong>) covers an allied-health and clinical-adjacent freehold in the CV2 UHCW Walsgrave hospital halo, the canonical CV2 hospital-adjacent archetype that a specialist clinical operator funds through owner-occupier mortgage on EBITDA cover at 70 to 75% LTV once a stable trading record is in place. Around the Walsgrave Triangle, comparable suburban retail, convenience and takeaway change-of-use activity is steady but typically routes through Class E permitted-development swaps that do not require full planning applications, a function of the stable suburban district-centre fabric across Wyken Croft and Walsgrave Road. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.',
      refs: [
        {
          ref: "25/02478/FUL",
          address: "Walsgrave Triangle, Walsgrave, Coventry CV2",
          postcode: "CV2",
          proposal: "Healthcare scheme covering allied-health and clinical-adjacent freehold within the Walsgrave Triangle CV2 UHCW hospital halo, illustrative of the hospital-adjacent allied-health pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Wyken, Walsgrave and Hawkesbury",
      items: [
        { label: "UHCW-adjacent allied-health office", detail: "Specialist clinic, dental, physiotherapy and occupational-health freehold along Brade Drive and the Walsgrave Triangle.", typicalSize: "£400K to £1.5M facility" },
        { label: "Care home and supported living", detail: "CV2 residential care and supported-living freehold purchase and refinance feeding off the UHCW catchment.", typicalSize: "£700K to £3M" },
        { label: "Suburban district-centre retail", detail: "Walsgrave Road and Wyken Croft independent retailer owner-occupier and small-cap investment.", typicalSize: "£250K to £700K" },
        { label: "Pharmacy and small-cap medical", detail: "Independent pharmacy and small-cap private-medical owner-occupier freehold.", typicalSize: "£300K to £1M" },
        { label: "Convenience and takeaway", detail: "CV2 convenience retail and hot-food takeaway parade freehold.", typicalSize: "£200K to £500K" },
        { label: "Semi-commercial shop and flat", detail: "Walsgrave Road and Hawkesbury parade shop-with-flat freehold.", typicalSize: "£200K to £550K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Wyken, Walsgrave and Hawkesbury",
      body: 'Allied-health and small-cap medical freehold routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover with NHS contract value treated as additional security where relevant. Care-home freehold runs through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, CQC rating and bed-value methodology. Suburban retail investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Walsgrave Road semi-commercial shop and flat through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing healthcare and retail facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for UHCW Walsgrave allied-health and CV2 suburban retail",
      body:
        "Hospital-adjacent allied-health and care is the deepest single sector in CV2 and the lender pool calibrates closely to operator covenant and clinical revenue mix. <strong>Shawbrook</strong> sits at the top of our shortlist on care-home freehold purchase and refinance at 60 to 70% LTV and 7.0 to 8.5% pa on operator EBITDA at 1.5 to 1.8x. Allica Bank runs an active health desk on small-cap dental, physiotherapy and allied-health owner-occupier purchase at 70 to 75% LTV. Hampshire Trust Bank takes selected dental and health-clinic freehold deals on EBITDA plus NHS contract value. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest allied-health and clinical-adjacent investment freehold and stronger-covenant suburban retail investment at 60 to 65% LTV and 6.5 to 7.5% pa. <strong>InterBay Commercial</strong> and Together cover semi-commercial shop-with-flat across Walsgrave Road and Hawkesbury at up to 75% LTV on blended ICR. <strong>Cynergy Bank</strong> covers selected CV2 pub, restaurant and takeaway trading-business deals. <strong>LendInvest</strong> covers bridge-to-let on suburban retail repositioning. Cambridge & Counties carries strong appetite across Warwickshire and the wider West Midlands on care-home and allied-health deals and routes CV2 hospital-adjacent files through a Leicester-led commercial team. Paragon and YBS Commercial take selected CV2 semi-commercial and small-cap healthcare investment files. Refinancing on a stabilised CV2 allied-health office or care-home freehold typically prices 7.0 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["healthcare-care-home", "retail", "semi-commercial", "office", "pub-restaurant", "mixed-use"],
    faqs: [
      {
        question: "What LTV is achievable on a Brade Drive allied-health clinic freehold?",
        answer:
          "Up to 75% LTV on a clean allied-health owner-occupier freehold within the UHCW Walsgrave hospital halo with operator EBITDA cover at 1.3 to 1.5x. Strong covenants with two or more years of accounts and a stable NHS contract or private-pay revenue mix price best at 70 to 75% LTV at around 6.5 to 7.5% pa with Allica Bank or Hampshire Trust Bank. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger lot sizes at 60 to 65% LTV. The binding constraint is operator EBITDA and clinical-revenue mix, not headline LTV.",
      },
      {
        question: "What CQC rating do CV2 care-home lenders need?",
        answer:
          "Generally Good or above. Requires Improvement can fund at 50 to 60% LTV with a clear remediation plan in place and operator track record of recovery. Inadequate is unfundable until rating recovers. Pricing 7.0 to 8.5% pa with <strong>Shawbrook</strong>, Cambridge & Counties or HTB depending on bed value, EBITDA and private-pay versus local-authority funding mix. Stamp duty applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Can we get 75% LTV on Walsgrave Road semi-commercial shop and flat?",
        answer:
          'Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on classic shop-with-flat archetypes along Walsgrave Road and the Hawkesbury parade. Blended ICR around 145% on combined Class E commercial rent and AST residential income. Pricing 7.0 to 8.5% pa. Refinancing maturing facilities is currently busy through 2026.',
      },
      {
        question: "Which lenders are active on CV2 pharmacy and small-cap medical owner-occupier?",
        answer:
          "Allica Bank and Hampshire Trust Bank both run meaningful pharmacy and small-cap medical owner-occupier programmes and use NHS contract value as additional security where relevant. <strong>Shawbrook</strong> takes selected mid-cap pharmacy and clinical-adjacent freehold deals. <strong>Lloyds</strong> and <strong>NatWest</strong> compete on the larger pharmacy investment lots. The Walsgrave Triangle CV2 scheme approved under planning reference 25/02478/FUL is illustrative of the hospital-adjacent allied-health pipeline that drives this lender pool. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "spon-end-coundon": {
    slug: "spon-end-coundon",
    name: "Spon End and Coundon",
    metaTitle: "Commercial Mortgages Spon End and Coundon Coventry | Heritage Retail Broker, CV1 CV6",
    metaDescription:
      "Commercial mortgages for Spon End and Coundon, Coventry (CV1 and CV6), Spon Street medieval timber-frame heritage retail frontage, mixed-use, semi-commercial and Coundon district retail. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Spon End and Coundon",
      lede:
        "Spon End and Coundon sit to the west of Coventry city centre across CV1 and CV6, threading from the medieval Spon Street timber-frame heritage frontage in the conservation core out through Hill Street and Holyhead Road into the Coundon district-centre retail spine. The fabric is a tightly woven mix of Grade II listed and conservation-area heritage retail and F&B stock along Spon Street, mixed-use blocks and converted historic frontage running west from the Spon End fringe of the Cathedral Quarter, and a stable Coundon Road and Barker Butts Lane suburban retail and convenience spine serving the wider CV6 catchment. We arrange commercial mortgages for CV1 and CV6 heritage retail and F&B owner-occupier purchase along Spon Street, mixed-use block investment and refinance across the Spon End fringe, and Coundon district-centre retail and semi-commercial freehold. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Spon End and Coundon commercial property market",
      body: [
        "Spon Street is one of the most architecturally distinctive commercial streets in the West Midlands, a preserved row of Grade II listed medieval timber-frame buildings dating to the 14th and 15th centuries that survived the wartime bombing of the wider Coventry city centre. The street carries one of the densest heritage retail and F&B clusters in CV1, with independent retailers, cafés, restaurants and small bars trading against the City of Culture 2021 legacy footfall and the Cathedral Quarter visitor catchment. Hill Street and the immediate Spon End fringe carry converted heritage frontage and small mixed-use blocks. Coundon to the west brings a more conventional suburban district-centre retail and convenience spine along Coundon Road and Barker Butts Lane, serving an established Coundon and Allesley-edge residential catchment.",
        "Most CV1 and CV6 Spon End and Coundon commercial mortgage flow runs in the £300K to £1.5M bracket. Heritage retail and F&B freehold along Spon Street prices currently 7.0 to 8.5% pa at 60 to 70% LTV with heritage-comfortable lenders, reflecting the listed-building maintenance plan requirement and conservation-area constraints that narrow the lender pool. Mixed-use blocks across the Spon End fringe price 7.0 to 8.5% pa at up to 75% LTV on blended ICR. Coundon district-centre retail owner-occupier prices 6.5 to 8.0% pa at 70 to 75% LTV with mainstream challenger desks. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic heritage retail recovery cycle matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the wider Spon End and Coundon catchment span the lower CV1 and mid-CV6 price band, with recent files in the £160,000 to £230,000 range across the Spon End fringe and Coundon. They are not a direct commercial signal but they confirm a stable resident catchment that supports the heritage retail visitor base and Coundon district-centre convenience underwriting that most of our Spon End and Coundon commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Spon End and Coundon (CV1 and CV6)",
      body:
        'One headline Coventry City Council public-access file anchors the current Spon End and Coundon commercial mortgage pipeline. The Spon Street heritage scheme (Ref <strong>25/01945/FUL</strong>) covers a listed-building application along the Spon Street medieval timber-frame frontage in CV1, the canonical Spon End heritage retail and F&B archetype that an operator funds through bridge-to-let or development finance during the works phase and then refinances against on either a commercial investment mortgage at 60 to 70% LTV on ICR or a trading-business mortgage at 60 to 70% LTV on operator EBITDA once a trading record is in place. Listed-building consent runs in parallel with main planning where heritage applies, and the conservation-area designation across the medieval frontage governs shopfront, signage and external alteration but does not impede commercial mortgage availability. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.',
      refs: [
        {
          ref: "25/01945/FUL",
          address: "Spon Street, Coventry CV1",
          postcode: "CV1",
          proposal: "Listed-building application along the Spon Street medieval timber-frame frontage in CV1, illustrative of the heritage retail and F&B repositioning pipeline across the Spon End conservation core.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Spon End and Coundon",
      items: [
        { label: "Spon Street listed heritage retail", detail: "Grade II listed medieval timber-frame retail and F&B freehold along the Spon Street conservation core.", typicalSize: "£300K to £1.2M facility" },
        { label: "Spon End fringe mixed-use", detail: "Converted heritage frontage and small mixed-use blocks running west from the Cathedral Quarter.", typicalSize: "£400K to £1.5M" },
        { label: "Heritage independent F&B", detail: "Café, restaurant and small-bar operator freehold along Spon Street and Hill Street.", typicalSize: "£300K to £1M" },
        { label: "Coundon district-centre retail", detail: "Coundon Road and Barker Butts Lane independent retailer owner-occupier and small-cap investment.", typicalSize: "£200K to £600K" },
        { label: "Semi-commercial shop and flat", detail: "Spon End fringe and Coundon parade shop-with-flat freehold.", typicalSize: "£200K to £500K" },
        { label: "Small-cap heritage office", detail: "Converted heritage office floors along the Spon End fringe of the CBD.", typicalSize: "£250K to £800K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Spon End and Coundon",
      body: 'Heritage retail and F&B investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Heritage F&B operator freehold runs through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Coundon district-centre retail owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Mixed-use blocks across the Spon End fringe through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Vacant heritage repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> during the works phase, with term-out to investment or trading-business mortgage once stabilised. Refinancing maturing heritage and retail facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Spon Street heritage retail and Coundon district-centre",
      body:
        "Heritage commercial stock along the Spon Street medieval frontage attracts a narrower but deep heritage-comfortable lender pool, and Coundon district-centre retail covers comfortably across mainstream challenger and high-street desks. <strong>Shawbrook</strong> sits at the top of our shortlist on heritage retail and F&B investment freehold along Spon Street at 65 to 70% LTV and 7.0 to 8.5% pa, with strong appetite for listed-building stock subject to a clear maintenance plan. <strong>InterBay Commercial</strong> covers heritage mixed-use blocks and Spon End fringe semi-commercial at up to 75% LTV on blended ICR. Together dominates the value-end semi-commercial and small-cap mixed-use across the Coundon fringe. <strong>Cynergy Bank</strong> covers heritage F&B trading-business and small-bar operator freehold along Spon Street and Hill Street. <strong>LendInvest</strong> covers bridge-to-let on heritage retail repositioning during the works phase. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Spon End fringe and Coundon retail and mixed-use investment lots at 60 to 65% LTV and 6.5 to 7.5% pa. Allica Bank takes selected Coundon district-centre owner-occupier retail and small-cap heritage office at 70 to 75% LTV. HTB and YBS Commercial cover stronger-covenant Coundon retail owner-occupier and investment. Cambridge & Counties carries strong appetite across Warwickshire and the wider West Midlands on heritage mixed-use deals and routes Spon Street files through a Leicester-led commercial team. Paragon takes selected Spon End mixed-use with HMO above. Refinancing on a stabilised Spon Street heritage retail freehold or Coundon district-centre retail typically prices 6.5 to 8.0% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "mixed-use", "semi-commercial", "office", "pub-restaurant"],
    faqs: [
      {
        question: "Can we get a commercial mortgage on a Spon Street Grade II listed retail freehold?",
        answer:
          "Yes, the heritage-comfortable lender pool covers Spon Street listed retail freehold at 60 to 70% LTV. <strong>Shawbrook</strong> sits at the top of our shortlist with strong appetite for listed-building stock subject to a clear maintenance plan and conservation-strategy plan. <strong>InterBay Commercial</strong> takes selected listed heritage mixed-use. Pricing 7.0 to 8.5% pa, around 50 to 100 basis points wider than equivalent non-listed stock. Listed-building consent runs in parallel with main planning where heritage applies.",
      },
      {
        question: "What product fits a vacant Spon End heritage F&B repositioning?",
        answer:
          'Bridge-to-let through <a href="/services/commercial-bridge-to-let">bridge-to-let route</a> during the works phase and then term-out to trading-business mortgage on operator EBITDA once the F&B operator has 12 to 24 months of trading accounts in place. The Spon Street CV1 scheme approved under planning reference 25/01945/FUL is exactly this profile, a 12 to 24 month bridge funds the listed-building works and re-opening with <strong>LendInvest</strong> or <strong>Shawbrook</strong>, then terms out at 60 to 70% LTV with <strong>Cynergy Bank</strong> on operator EBITDA cover at 1.5 to 1.8x.',
      },
      {
        question: "What LTV is achievable on Coundon district-centre retail owner-occupier?",
        answer:
          "Up to 75% LTV on a clean independent retailer owner-occupier purchase along Coundon Road or Barker Butts Lane with EBITDA cover at 1.3 to 1.5x. Strong covenants with two or more years of accounts price best at 70 to 75% LTV at around 6.5 to 7.5% pa with Allica Bank or HTB. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger lot sizes at 60 to 65% LTV. Refinancing maturing facilities is currently busy through 2026.",
      },
      {
        question: "Can we get 75% LTV on Spon End fringe mixed-use blocks?",
        answer:
          "Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on Spon End fringe mixed-use blocks where the heritage maintenance plan is in order and the residential income above is stabilised. Blended ICR around 145% on combined Class E commercial rent and residential AST income. Paragon takes selected blocks with HMO above. Pricing 7.0 to 8.5% pa. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "far-gosford-street-fargo-village": {
    slug: "far-gosford-street-fargo-village",
    name: "Far Gosford Street and FarGo Village",
    metaTitle: "Commercial Mortgages Far Gosford Street and FarGo Village Coventry | Student F&B Broker, CV1 CV2",
    metaDescription:
      "Commercial mortgages for Far Gosford Street and FarGo Village, Coventry (CV1 5 and CV2), Coventry University student-led F&B, FarGo Village creative-industries leisure regeneration, semi-commercial HMO. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Far Gosford Street and FarGo Village",
      lede:
        "Far Gosford Street and FarGo Village sit on the eastern edge of Coventry city centre across CV1 5 and the CV2 fringe, threading from the historic Far Gosford Street high-street frontage through one of the most active university-led F&B regeneration corridors in the West Midlands into the FarGo Village creative-industries quarter on Lower Ford Street. The fabric is a tightly woven mix of independent student-led F&B and licensed-trade freehold along Far Gosford Street, Class E ground-floor and sui generis HMO upper-floor mixed-use blocks serving the Coventry University catchment of around 37,000 students, converted historic frontage offices and creative workspace, and the FarGo Village independent retail, food and creative-industries leisure venue itself anchoring the regeneration. We arrange commercial mortgages for CV1 5 student-led F&B trading-business mortgage and refinance along Far Gosford Street, Class E and HMO semi-commercial conversion finance, FarGo Village-adjacent creative-workspace investment, and the small-cap mixed-use blocks that thread the regeneration zone. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Far Gosford Street and FarGo Village commercial property market",
      body: [
        "Far Gosford Street is one of the most distinctive commercial streets in central Coventry, a historic high-street frontage that has reinvented itself across the last decade as a student-led F&B and independent retail corridor serving Coventry University and the wider University of Warwick population. The street carries a dense cluster of independent restaurants, café operators, late-night licensed venues, takeaway and small-bar freehold trading against a combined student population of roughly 65,000 across the two universities. Upper floors across the corridor sit in dense sui generis HMO conversion under live planning files. FarGo Village immediately to the north on Lower Ford Street anchors the creative-industries cluster, an independent retail, food and arts destination that draws weekend leisure footfall and creative-business tenants into the regeneration zone. Around both clusters, a mix of converted historic frontage office and small creative workspace serves an SME and freelance tenant base.",
        "Most CV1 5 Far Gosford Street and FarGo Village commercial mortgage flow runs in the £300K to £1.2M bracket. Student-led F&B and licensed-trade freehold along Far Gosford Street prices currently 7.0 to 8.5% pa at 60 to 70% LTV on operator EBITDA cover, with the seasonality of the academic-year trading cycle factored into underwriting. Class E ground-floor and HMO upper-floor semi-commercial conversion runs as bridge-to-let during the works phase and then terms out to semi-commercial mortgage at up to 75% LTV on blended ICR on the Class E commercial rent and HMO income above. FarGo Village-adjacent creative workspace and small-cap mixed-use prices 7.0 to 8.5% pa at 65 to 75% LTV. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic student-led F&B recovery cycle matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the wider Far Gosford Street and FarGo Village catchment cluster in the lower CV1 leasehold flat and converted-HMO band, with recent files in the £125,000 to £210,000 range across the student rental belt. They are not a direct commercial signal but they confirm the dense student rental supply that supports both the F&B catchment underwriting on Far Gosford Street and the HMO income stack underneath the Class E semi-commercial deals most of our Far Gosford Street and FarGo Village commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Far Gosford Street and FarGo Village (CV1 5 and CV2)",
      body:
        'Three Coventry City Council public-access files anchor the current Far Gosford Street and FarGo Village commercial mortgage pipeline. The FarGo Village scheme (Ref <strong>26/00892/FUL</strong>) covers a creative-industries leisure regeneration file on Lower Ford Street in the CV1 fringe, the canonical FarGo Village creative-workspace and small-cap leisure archetype that an investor funds through commercial investment mortgage at 65 to 75% LTV on ICR once let. The Far Gosford Street HMO scheme (Ref <strong>26/00802/COU</strong>) is a change of use to sui generis HMO above ground-floor Class E retail along Far Gosford Street, the canonical Class E plus HMO semi-commercial archetype that funds at up to 75% LTV on blended ICR with specialist semi-commercial desks. The Far Gosford Street offices scheme (Ref <strong>25/01412/COU</strong>) is a change of use from office to alternative commercial use along the corridor, the kind of repositioning that runs through bridge-to-let during the works phase and then terms out to investment or owner-occupier mortgage once stabilised. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.',
      refs: [
        {
          ref: "26/00892/FUL",
          address: "FarGo Village, Lower Ford Street, Coventry CV1",
          postcode: "CV1",
          proposal: "Creative-industries leisure regeneration file at FarGo Village on Lower Ford Street, illustrative of the CV1 creative-workspace and small-cap leisure investment pipeline.",
        },
        {
          ref: "26/00802/COU",
          address: "Far Gosford Street, Coventry CV1 5",
          postcode: "CV1 5",
          proposal: "Change of use to sui generis HMO above ground-floor Class E retail along Far Gosford Street, illustrative of the Class E plus HMO semi-commercial pipeline serving the Coventry University catchment.",
        },
        {
          ref: "25/01412/COU",
          address: "Far Gosford Street, Coventry CV1 5",
          postcode: "CV1 5",
          proposal: "Change of use from office to alternative commercial use along Far Gosford Street, illustrative of the corridor office repositioning pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Far Gosford Street and FarGo Village",
      items: [
        { label: "Far Gosford Street student-led F&B", detail: "Independent restaurant, café, takeaway and small-bar freehold along the Far Gosford Street regeneration corridor.", typicalSize: "£300K to £1M facility" },
        { label: "Far Gosford Street licensed trade", detail: "Late-night licensed venue and small-bar operator freehold trading against the Coventry University catchment.", typicalSize: "£400K to £1.2M" },
        { label: "Class E plus HMO semi-commercial", detail: "Ground-floor Class E retail with sui generis HMO upper floors serving the dense student rental belt.", typicalSize: "£350K to £900K" },
        { label: "FarGo Village creative workspace", detail: "Small-cap creative-industries leisure and workspace investment adjacent to the FarGo Village anchor.", typicalSize: "£400K to £1.2M" },
        { label: "Converted historic frontage office", detail: "Small-cap converted historic office freehold serving SME and freelance tenant base.", typicalSize: "£250K to £700K" },
        { label: "Independent retail and convenience", detail: "Far Gosford Street independent retail and convenience freehold serving student and resident catchment.", typicalSize: "£200K to £550K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Far Gosford Street and FarGo Village",
      body: 'Student-led F&B and licensed-trade freehold along Far Gosford Street routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA cover. Class E plus HMO semi-commercial blocks through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. FarGo Village-adjacent creative workspace and converted office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Vacant office and frontage repositioning runs through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> during the works phase, with term-out to investment or trading-business mortgage once stabilised. Owner-occupier F&B operators buying their freehold via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Refinancing maturing student-led F&B and semi-commercial facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Far Gosford Street student-led F&B and FarGo Village creative workspace",
      body:
        "Student-led F&B and licensed trade along Far Gosford Street is the deepest single sector in the CV1 5 regeneration corridor, and the lender pool calibrates to operator EBITDA cover, licensed-trade history and the academic-year trading cycle. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Far Gosford Street licensed-trade and student-led F&B operator freehold at 60 to 70% LTV and 7.5 to 8.5% pa on operator EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong> covers mid-cap student-led F&B investment and FarGo Village-adjacent creative workspace at 65 to 75% LTV and 7.0 to 8.5% pa. <strong>InterBay Commercial</strong> and Together dominate Class E plus HMO semi-commercial across Far Gosford Street at up to 75% LTV on blended ICR. Paragon takes selected sui generis HMO above shop deals where the Class E commercial ground-floor income is established. <strong>LendInvest</strong> covers bridge-to-let on student-led F&B and frontage repositioning during the works phase. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest FarGo Village-adjacent investment and creative-workspace lots at 60 to 65% LTV and 6.5 to 7.5% pa. Allica Bank takes selected owner-occupier F&B operator freehold along the corridor at 70 to 75% LTV. HTB and YBS Commercial cover stronger-covenant student-led F&B investment. Cambridge & Counties carries strong appetite across Warwickshire and the wider West Midlands on Coventry University-led student F&B and HMO mixed-use and routes Far Gosford Street files through a Leicester-led commercial team. Refinancing on a stabilised Far Gosford Street F&B freehold or Class E plus HMO semi-commercial typically prices 7.0 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "semi-commercial", "hmo-block", "retail", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Far Gosford Street licensed-trade freehold?",
        answer:
          "Up to 70% LTV on a trading licensed venue or student-led bar freehold with operator EBITDA cover at 1.5 to 1.8x. A Far Gosford Street operator with two or more years of accounts and a stable trading record across the academic-year cycle prices best at 60 to 65% LTV at around 7.5 to 8.0% pa with <strong>Cynergy Bank</strong>, with independent licensed-trade stock at 65 to 70% LTV at 8.0 to 8.5% pa. The binding constraint is operator EBITDA and licensed-trade track record across the academic-year seasonality, not headline LTV.",
      },
      {
        question: "Can we fund a Far Gosford Street Class E plus HMO conversion?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the works phase and then term-out to a semi-commercial mortgage on blended ICR once the Class E ground floor is let and the sui generis HMO income above is stabilised. The Far Gosford Street CV1 5 scheme approved under planning reference 26/00802/COU is exactly this profile, a 12 to 18 month bridge funds the conversion works and re-letting, then terms out at 70 to 75% LTV with <strong>InterBay Commercial</strong>, Together or Paragon on blended ICR at around 145%.',
      },
      {
        question: "What product fits a FarGo Village creative workspace investor?",
        answer:
          'Commercial investment mortgage on ICR via <a href="/services/commercial-investment-mortgage">commercial investment route</a> at 65 to 75% LTV with <strong>Shawbrook</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong> or <strong>Santander</strong> depending on lot size, tenant covenant and lease length. Pricing 7.0 to 8.0% pa on let creative-workspace and FarGo Village-adjacent stock with established multi-tenant income. The FarGo Village CV1 scheme approved under planning reference 26/00892/FUL is illustrative of the creative-industries leisure investment pipeline that drives this lender pool.',
      },
      {
        question: "What about Article 4 directions affecting HMO conversion?",
        answer:
          "Coventry currently does not have a city-wide Article 4 direction across Far Gosford Street. New sui generis HMO conversion above ground-floor Class E retail typically requires full planning permission and licensing, with the live Far Gosford Street planning files such as 26/00802/COU sketching the current approval profile. Existing licensed HMOs refinance freely on blended ICR with the specialist semi-commercial desks. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "allesley-eastern-green": {
    slug: "allesley-eastern-green",
    name: "Allesley and Eastern Green",
    metaTitle: "Commercial Mortgages Allesley and Eastern Green Coventry | Suburban Broker, CV5",
    metaDescription:
      "Commercial mortgages for Allesley and Eastern Green, Coventry (CV5), Allesley village retail, Allesley Old Road suburban convenience, Eastern Green neighbourhood retail, affluent suburban fringe. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Allesley and Eastern Green",
      lede:
        "Allesley and Eastern Green sit on the western edge of Coventry in CV5, threading from the historic Allesley village conservation core along Allesley Old Road and Birmingham Road into the Eastern Green suburban district to the north of the A45 corridor. The fabric is a tightly woven mix of village high-street retail and small-cap F&B freehold along Allesley village frontage, Allesley Old Road suburban convenience and parade retail, Eastern Green neighbourhood retail clusters serving an established middle-class catchment, and a small-cap professional office and clinical owner-occupier base feeding off the affluent suburban resident catchment. We arrange commercial mortgages for CV5 Allesley village retail and F&B owner-occupier purchase, Allesley Old Road suburban retail investment and refinance, Eastern Green neighbourhood retail freehold, and the small-cap mixed-use blocks and professional-services freeholds that thread the suburban fringe. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Allesley and Eastern Green commercial property market",
      body: [
        "Allesley village anchors the historic conservation core on the western edge of Coventry, with a tight cluster of village-frontage retail, a small but well-regarded F&B and gastropub base trading against the affluent Allesley and Allesley Park resident catchment, and a handful of small-cap professional services freehold along Birmingham Road. Allesley Old Road carries a steadier suburban convenience and parade retail spine running east into the wider CV5 catchment. Eastern Green to the north of the A45 brings a more conventional 1960s and 1970s suburban district-centre retail cluster anchored by neighbourhood convenience operators and supermarkets serving the dense suburban resident base. Across the wider CV5 fringe, neighbourhood pharmacy, small-cap dental and a handful of nursery operators feed off the dual-income professional resident catchment.",
        "Most CV5 Allesley and Eastern Green commercial mortgage flow runs in the £250K to £900K bracket. Allesley village retail and F&B freehold prices currently 6.5 to 7.5% pa at 70 to 75% LTV with mainstream challenger desks, reflecting the affluent catchment and stable trading record. Allesley Old Road suburban convenience and parade retail investment prices 6.5 to 8.0% pa at 70 to 75% LTV on ICR. Eastern Green neighbourhood retail freehold prices in the same bracket. Small-cap professional services owner-occupier and neighbourhood clinical freehold prices 6.5 to 7.5% pa at 70 to 75% LTV. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic suburban retail recovery cycle matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the wider Allesley and Eastern Green catchment cluster towards the upper end of the CV5 price band, with recent files including freehold detached and semi-detached sales from £230,000 up to £625,000 at Allesley village. They are not a direct commercial signal but they confirm the affluent dual-income professional resident base that supports the village F&B underwriting on Allesley high street and the neighbourhood retail catchment that most of our Allesley and Eastern Green commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Allesley and Eastern Green (CV5)",
      body:
        'One headline Coventry City Council public-access file anchors the current Allesley and Eastern Green commercial mortgage pipeline. The Allesley village retail scheme (Ref <strong>25/01678/FUL</strong>) covers a retail or mixed-use file along the Allesley village frontage in CV5, the canonical Allesley archetype that an operator funds through commercial investment mortgage at 65 to 75% LTV on ICR or owner-occupier mortgage at 70 to 75% LTV on EBITDA cover once trading is in place. The Allesley village conservation-area designation governs shopfront, signage and external alteration but does not impede commercial mortgage availability. Around Allesley Old Road and Eastern Green, comparable suburban retail, convenience and small-cap F&B change-of-use activity is steady but typically routes through Class E permitted-development swaps that do not require full planning applications, a function of the stable suburban district-centre fabric. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.',
      refs: [
        {
          ref: "25/01678/FUL",
          address: "Allesley village, Coventry CV5",
          postcode: "CV5",
          proposal: "Retail or mixed-use file along the Allesley village conservation-area frontage in CV5, illustrative of the village retail and small-cap F&B repositioning pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Allesley and Eastern Green",
      items: [
        { label: "Allesley village retail and F&B", detail: "Conservation-area village retail, café and gastropub freehold along the Allesley high-street frontage.", typicalSize: "£300K to £900K facility" },
        { label: "Allesley Old Road convenience and parade", detail: "Suburban convenience and parade retail freehold along the Allesley Old Road CV5 spine.", typicalSize: "£250K to £700K" },
        { label: "Eastern Green neighbourhood retail", detail: "Eastern Green district-centre convenience and neighbourhood retail owner-occupier and small-cap investment.", typicalSize: "£250K to £800K" },
        { label: "Small-cap professional services office", detail: "Owner-occupier accountancy, legal and financial-adviser freehold along Birmingham Road and the wider CV5 fringe.", typicalSize: "£300K to £800K" },
        { label: "Neighbourhood pharmacy and clinical", detail: "CV5 independent pharmacy, small-cap dental and clinical owner-occupier freehold.", typicalSize: "£300K to £900K" },
        { label: "Semi-commercial shop and flat", detail: "Allesley Old Road and Eastern Green parade shop-with-flat freehold.", typicalSize: "£200K to £500K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Allesley and Eastern Green",
      body: 'Allesley village retail and F&B owner-occupier routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Allesley Old Road and Eastern Green neighbourhood retail investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Small-cap professional services and clinical freehold via owner-occupier mortgage on EBITDA cover with NHS contract value treated as additional security where relevant. Allesley village gastropub and F&B operator freehold through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Semi-commercial shop and flat blocks across the suburban parades through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Refinancing maturing suburban retail and professional services facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Allesley village retail and Eastern Green neighbourhood retail",
      body:
        "Suburban district-centre retail and small-cap professional services across the CV5 affluent fringe is one of the most lender-friendly profiles in Coventry, and the lender pool is wide and competitive. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Eastern Green neighbourhood retail and Allesley Old Road investment freehold and stronger-covenant Allesley village retail at 60 to 70% LTV and 6.5 to 7.5% pa across the West Midlands regional commercial RM coverage. <strong>Shawbrook</strong> covers mid-cap suburban retail investment and professional services freehold at 65 to 75% LTV and 6.5 to 7.5% pa. Allica Bank runs an active Coventry SME book on owner-occupier village retail, professional services and clinical freehold at 70 to 75% LTV. HTB and YBS Commercial cover stronger-covenant Allesley village retail owner-occupier and Eastern Green investment. <strong>InterBay Commercial</strong> and Together cover semi-commercial shop and flat across Allesley Old Road and Eastern Green at up to 75% LTV on blended ICR. <strong>Cynergy Bank</strong> covers Allesley village gastropub and F&B trading-business mortgage. Hampshire Trust Bank takes selected CV5 dental and small-cap clinical owner-occupier deals on EBITDA plus NHS contract value. Cambridge & Counties carries strong appetite across Warwickshire and the wider West Midlands on Allesley village retail and Eastern Green investment and routes CV5 affluent-fringe files through a Leicester-led commercial team. Paragon takes selected CV5 semi-commercial files with residential above. <strong>LendInvest</strong> covers bridge-to-let on suburban retail repositioning. Refinancing on a stabilised Allesley village retail or Eastern Green neighbourhood retail freehold typically prices 6.5 to 8.0% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "semi-commercial", "healthcare-care-home", "pub-restaurant", "nursery-school"],
    faqs: [
      {
        question: "What LTV is achievable on an Allesley village retail or F&B owner-occupier freehold?",
        answer:
          "Up to 75% LTV on a clean owner-occupier independent retailer or F&B operator purchase along Allesley village high street with EBITDA cover at 1.3 to 1.5x. Strong covenants with two or more years of accounts and a stable trading record across the affluent Allesley catchment price best at 70 to 75% LTV at around 6.5 to 7.5% pa with Allica Bank or HTB. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger lot sizes at 60 to 65% LTV. The Allesley conservation-area designation governs shopfront and signage but does not impact lending terms.",
      },
      {
        question: "What rate on Eastern Green neighbourhood retail investment?",
        answer:
          "Currently 6.5 to 8.0% pa at 65 to 75% LTV on let neighbourhood retail investment along Eastern Green and Allesley Old Road. ICR stress-tested at 140 to 160% on the passing rent. <strong>Shawbrook</strong>, <strong>Lloyds</strong> and <strong>NatWest</strong> compete on strong-covenant single-let or anchor-let stock with five or more years to first break. Refinancing maturing facilities is currently busy through 2026.",
      },
      {
        question: "Can we get 75% LTV on Allesley Old Road semi-commercial shop and flat?",
        answer:
          'Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on classic shop-with-flat archetypes along Allesley Old Road and the Eastern Green parade. Blended ICR around 145% on combined Class E commercial rent and AST residential income. Paragon takes selected blocks with HMO above. Pricing 7.0 to 8.5% pa.',
      },
      {
        question: "Which lenders are active on CV5 professional services and small-cap clinical owner-occupier?",
        answer:
          "Allica Bank runs an active CV5 SME book on professional services and clinical owner-occupier at 70 to 75% LTV at 6.5 to 7.5% pa with EBITDA cover at 1.3 to 1.5x. Hampshire Trust Bank takes selected CV5 dental and small-cap clinical freehold deals on EBITDA plus NHS contract value where relevant. <strong>Shawbrook</strong> takes selected mid-cap professional services investment. The Allesley village CV5 scheme approved under planning reference 25/01678/FUL is illustrative of the affluent-fringe village retail and small-cap professional services pipeline that drives this lender pool. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "willenhall-stoke-aldermoor": {
    slug: "willenhall-stoke-aldermoor",
    name: "Willenhall and Stoke Aldermoor",
    metaTitle: "Commercial Mortgages Willenhall and Stoke Aldermoor Coventry | Outer Trade Broker, CV3",
    metaDescription:
      "Commercial mortgages for Willenhall and Stoke Aldermoor, Coventry (CV3), Willenhall light industrial, Stoke Aldermoor outer trade, B2 workshop, trade-counter, vehicle trade and value-end semi-commercial. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Willenhall and Stoke Aldermoor",
      lede:
        "Willenhall and Stoke Aldermoor sit to the south-east of Coventry in CV3, threading from the Willenhall light industrial belt along London Road and Remembrance Road through Stoke Aldermoor's outer-trade and small-cap industrial cluster towards the wider A45 and Coventry Gateway corridor. The fabric is a tightly woven mix of B2 workshop and B8 storage stock across Willenhall, small-cap trade-counter and vehicle-trade freehold along the corridor, outer-trade industrial-adjacent owner-occupier purchases serving the JLR supplier ecosystem and the EV supply chain into UKBIC, and value-end semi-commercial shop and flat parades across the Stoke Aldermoor resident catchment. We arrange commercial mortgages for CV3 outer-trade light industrial owner-occupier purchase along Willenhall, Stoke Aldermoor small-cap industrial and vehicle-trade finance, trade-counter investment and the value-end semi-commercial freeholds that thread the corridor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Willenhall and Stoke Aldermoor commercial property market",
      body: [
        "Willenhall carries one of the steadiest light industrial and trade-counter clusters in south-east Coventry. London Road and Remembrance Road host SME B2 workshop and B8 storage freehold trading against the JLR supplier ecosystem, the wider EV supply chain feeding into UKBIC at Whitmoor Park, and the last-mile logistics demand along the A45 and Coventry Gateway corridor. Stoke Aldermoor immediately to the north carries a more outer-trade, small-cap industrial profile with vehicle-trade and MOT operators threading the corridor, a steady value-end semi-commercial shop and flat base across the inner Stoke Aldermoor parade, and inner-suburban convenience retail and takeaway. Across both districts, light industrial owner-occupier dominates the CM volume, with trade-counter and vehicle-trade as second-tier flows and value-end semi-commercial threading underneath.",
        "Most CV3 Willenhall and Stoke Aldermoor commercial mortgage flow runs in the £200K to £1M bracket. SME owner-occupier B2 workshop and B8 storage freehold along Willenhall prices currently 6.0 to 7.5% pa at 70 to 75% LTV with mainstream challenger desks, among the keenest available CM rates in the Coventry market reflecting strong industrial fundamentals. Trade-counter sits in the same bracket. Vehicle-trade and MOT operator freehold along the corridor prices 7.5 to 9.0% pa at 60 to 70% LTV on operator EBITDA cover. Value-end semi-commercial across Stoke Aldermoor runs wider at 7.5 to 9.0% pa via Together and InterBay Commercial, reflecting the value-end resident catchment. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic industrial recovery cycle matured.",
        "HM Land Registry residential transactions across the wider Willenhall and Stoke Aldermoor catchment sit in the lower CV3 price band, with recent files between £188,000 and £230,000 across the resident catchment. They are not a direct commercial signal but they confirm the value-end resident catchment that supports the convenience retail, takeaway and value-end semi-commercial underwriting that most of our CV3 outer-trade commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Willenhall and Stoke Aldermoor (CV3)",
      body:
        "Coventry City Council public-access activity across the Willenhall and Stoke Aldermoor CV3 outer-trade corridor is steady but typically routes through Class E permitted-development swaps that do not require full planning applications, a function of the stable light industrial and trade-counter fabric across London Road and the wider Stoke Aldermoor industrial-adjacent grid. Where change-of-use volume does land, it tends to track the wider Coventry industrial repositioning pipeline visible elsewhere across the city, including the Holbrook Lane CV6 file at planning reference 25/02345/COU which captures the light industrial repositioning into trade-counter, vehicle-trade and small-cap Class E light-industrial-adjacent leisure that recurs across the Willenhall and Stoke Aldermoor corridor. Vehicle-trade and MOT change-of-use deals along the CV3 spine typically run retrospective, meaning the operator is already trading and the file regularises the existing use, at which point the freehold becomes a fundable purchase or refinance through specialist trading-business desks. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing maturing facilities is unaffected.",
      refs: [],
    },
    schemeTypes: {
      h2: "Active commercial property types in Willenhall and Stoke Aldermoor",
      items: [
        { label: "Willenhall light industrial", detail: "B2 workshop and B8 storage owner-occupier along London Road and the Willenhall industrial fringe.", typicalSize: "£250K to £900K facility" },
        { label: "Trade-counter freehold", detail: "Trade-counter retail and small-cap industrial-edge stock supporting the wider Coventry trade base.", typicalSize: "£300K to £800K" },
        { label: "Vehicle-trade and MOT", detail: "Independent operator freehold along the outer-trade corridor.", typicalSize: "£250K to £700K" },
        { label: "Stoke Aldermoor value semi-commercial", detail: "Inner CV3 shop-with-flat parade freehold.", typicalSize: "£150K to £450K" },
        { label: "Convenience retail", detail: "Local convenience and parade retail serving the resident catchment.", typicalSize: "£200K to £500K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Willenhall and Stoke Aldermoor",
      body: 'Owner-occupier industrial via standard <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Value-end semi-commercial via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> through specialist desks. Vehicle-trade and MOT via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA cover. Refinancing maturing 5-year fixes through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume 2026 product.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Willenhall industrial and Stoke Aldermoor value semi-commercial",
      body:
        'Light industrial and trade-counter owner-occupier sits across mainstream challengers (<strong>Allica</strong>, Hampshire Trust Bank, YBS Commercial) at 70 to 75% LTV at 6.5 to 8.0% pa. <strong>Shawbrook</strong> covers selected mid-market stock. Together and <strong>InterBay Commercial</strong> dominate value-end semi-commercial across the inner CV3 grid. Vehicle-trade and MOT trading-business is Together-led across the West Midlands. Convenience retail owner-occupier covers across mainstream commercial desks. Cambridge & Counties is strong on Warwickshire and the wider West Midlands and brings keen appetite to small-cap CV3 owner-occupier freehold. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.',
    },
    relatedAssetClasses: ["industrial-warehouse", "retail", "semi-commercial", "mot-garage-petrol", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "Best lender for Willenhall light industrial owner-occupier?",
        answer:
          'Allica Bank, Hampshire Trust Bank and YBS Commercial all compete actively at 70 to 75% LTV and 6.5 to 8.0% pa. EBITDA cover at 1.3 to 1.5x is the typical test.',
      },
      {
        question: "Value-end semi-commercial across the CV3 grid, what LTV?",
        answer:
          'Up to 75% LTV via Together or InterBay Commercial on shop-with-flat archetypes. Blended ICR around 145% on combined commercial rent and AST income. Rates 7.5 to 9.0% pa reflecting the value-end profile.',
      },
      {
        question: "MOT or forecourt in Willenhall, what lender?",
        answer:
          'Together dominates the West Midlands MOT, garage and forecourt trading-business. Pricing 8.0 to 9.5% pa at 60 to 70% LTV. Refinancing existing facilities currently busy as 5-year fixes mature.',
      },
      {
        question: "Trade-counter freehold along the corridor?",
        answer:
          'Up to 75% LTV at 6.5 to 8.0% pa with Allica Bank, Hampshire Trust Bank or YBS Commercial. EBITDA cover and the trade-counter operator track record drive the credit decision.',
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
