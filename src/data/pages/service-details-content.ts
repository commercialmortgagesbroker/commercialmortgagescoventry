/**
 * Per-service deep-dive content, Commercial Mortgages Coventry.
 *
 * Eight services covering the full mainstream commercial mortgage product set.
 *
 * Editorial discipline (Bradley Benner methodology):
 *   - Each page uses DIFFERENT entity variants across slug / metaTitle / H1 /
 *     whatItIs.h2 / howItWorks.h2 / whoItsFor.h2 / localAngle.h2 / FAQ Qs.
 *   - No phrase repeats verbatim across the heading tree.
 *
 * Required entity mentions on every page:
 *   - Financial Conduct Authority (clarifying what is OUTSIDE the regulated perimeter, never claiming authorisation)
 *   - stamp duty (SDLT)
 *   - limited companies / limited company
 *   - refinancing / refinance
 *   - loan-to-value (LTV)
 *   - interest rate
 *   - repayment
 *   - residential mortgage (in contrast, what we do NOT do)
 *
 * Voice rules:
 *   - "we" not "I"
 *   - NO em dashes
 *   - NOT FCA-authorised
 *   - rates 6.0 to 9.0% pa
 *   - ONLY 8 lenders bolded: Shawbrook, InterBay Commercial, LendInvest, Cynergy Bank,
 *     Lloyds, NatWest, Barclays, Santander
 *   - Cambridge & Counties strong on Warwickshire / East Mids, emphasised but NOT bolded
 *   - Allica Bank, HTB, YBS Commercial, Aldermore, Paragon, Together, Foundation
 *     Home Loans, OakNorth, United Trust Bank, Reliance Bank named but NOT bolded
 *   - Local CV-based building society NEVER cited (no commercial book)
 *
 * Slugs match src/lib/constants.ts SERVICE_LINKS.
 *
 */

export interface ServiceFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface ServiceDetail {
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
  whatItIs: { h2: string; body: string[] }; // body: paragraphs, HTML allowed
  howItWorks: { h2: string; steps: Array<{ label: string; detail: string }> };
  whoItsFor: { h2: string; items: string[] };
  localAngle: { h2: string; body: string };
  faqs: ServiceFaq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "owner-occupier-commercial-mortgage": {
    slug: "owner-occupier-commercial-mortgage",
    name: "Owner-Occupier Commercial Mortgage",
    metaTitle: "Owner-Occupier Commercial Mortgage Coventry | Specialist Broker",
    metaDescription:
      "Owner-occupied commercial mortgages in Coventry. Up to 75% LTV, EBITDA cover at 1.3 to 1.5x, interest rates from 6.0% pa, 5 to 25 year repayment terms. Shawbrook, Lloyds, NatWest, Barclays, Santander. Indicative terms in 48 hours.",
    hero: {
      eyebrow: "Up to 75% LTV, EBITDA-driven",
      h1: "Owner-Occupier Commercial Mortgage Coventry",
      lede:
        "Long-term debt funding the purchase of the property your business trades from. Up to 75% loan-to-value. EBITDA cover at 1.3 to 1.5x. Interest rates 6.0 to 7.5% pa for strong covenants. 5 to 25 year repayment terms. Active across the Walsgrave Triangle dental and medical cluster around UHCW, Whitley R&D office freeholds adjacent to the JLR engineering centre, Bayton Road and Holbrook Lane JLR Tier 1 supplier industrial, FarGo Village independent F&B, and Friargate professional services.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.0% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    whatItIs: {
      h2: "What is an owner-occupier mortgage and how does it differ from investment?",
      body: [
        'An owner-occupier commercial mortgage is long-term secured debt funding the purchase of the property your <strong>business trades from</strong>: your Walsgrave Triangle dental practice freehold within the University Hospitals Coventry &amp; Warwickshire (UHCW) halo, your Whitley business park R&amp;D office, your Bayton Road or Holbrook Lane industrial unit feeding the Jaguar Land Rover Tier 1 supply chain, your FarGo Village independent F&amp;B trading unit, or your Friargate professional services premises. The lender takes a first charge over the building; you fund a deposit (typically 25 to 30%); the facility is amortised over 15 to 25 years on monthly capital-and-interest repayments. Most owner-occupier deals in Coventry are taken out by a <strong>limited company</strong> trading entity with a personal guarantee from the directors, though sole traders, partnerships and LLPs are equally accommodated.',
        'The lending test is fundamentally different from an investment mortgage. Where investment lenders test rent against interest cost (ICR), owner-occupier lenders test <strong>EBITDA cover</strong>: trading profit (earnings before interest, tax, depreciation and amortisation) measured against the mortgage payment, with a typical comfort threshold of <strong>1.3 to 1.5x</strong>. Two years of clean filed accounts is the standard minimum, though specialist desks flex this for established sectors (dental, GP, pharmacy) on 12 to 18 months trading.',
        'It is also different from a <strong>residential mortgage</strong>, and that distinction matters legally. Owner-occupier commercial lending falls largely outside FCA-regulated mortgage rules, because the borrower is a business buying business premises (not an individual buying a home). The exception: where a sole trader uses the property partly as a residence, the deal can fall into FCA-regulated territory; we flag that at outset. For limited-company borrowers buying B-class commercial stock, the deal is unregulated commercial lending.',
        'In Coventry the typical owner-occupier facility size is <strong>£200K to £2.5M</strong>, with the bulk of volume in the £300K to £1.0M bracket reflecting per-square-foot values across CV1 Friargate professional stock, CV2 Walsgrave healthcare stock and the CV6 / CV7 industrial belt. LTVs of 70 to 75% are routine for established businesses, but Coventry valuers can trend conservative on suburban professional stock outside the central CV1 belt where commercial comparable evidence thins out. Interest rates currently <strong>6.0 to 7.5% pa</strong> for strong covenants, stretching to 9.0% on tighter cases. Term length is the most useful affordability lever; extending repayment from 15 to 20 years often clears the EBITDA test where rate alone will not. Stamp duty (SDLT) on commercial purchase applies up to 5% on the slice above £250,000; we factor it into the deposit-and-fees model before submission. <em>Indicative case seed:</em> a Walsgrave dental principal buying a freehold practice within the UHCW halo at £950K, EBITDA cover comfortably above 1.5x on NHS UDA plus private fee income, funded at 75% LTV (£712K facility) on a 15-year repayment at around 6.8% pa.',
      ],
    },
    howItWorks: {
      h2: "Lender appetite and pricing for owner-occupier deals across Coventry",
      steps: [
        { label: "1. Initial appraisal", detail: "Send the property details, last two years of accounts and current management figures. We assess affordability, sector appetite, likely loan-to-value and which lender desks will engage." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to five lender quotes covering interest rate, LTV, term, fees and conditions. You pick the preferred route before any valuation cost lands." },
        { label: "3. Application packaging", detail: "Full credit pack: filed accounts, business plan, property details, deposit proof, professional team. A clean pack speeds credit committee approval." },
        { label: "4. RICS Red Book valuation", detail: "Critical-path item, typically 2 to 3 weeks. The lender instructs from a panel; valuation comments on bricks-and-mortar value and any specialist sector overlay (dental, GP, pharmacy, healthcare, automotive supply chain)." },
        { label: "5. Credit approval", detail: "Most well-presented owner-occupier cases approve within 1 to 2 weeks of valuation. Clean covenant, clean property, clean numbers, minimum friction." },
        { label: "6. Legal completion and SDLT", detail: "Standard freehold conveyancing plus debenture and personal guarantee. Stamp duty land tax payable by the buyer at completion. 3 to 4 weeks typical." },
      ],
    },
    whoItsFor: {
      h2: "Sectors where Coventry owner-occupier lending is deepest",
      items: [
        "Dental practice principals buying their Walsgrave Triangle, Wyken or Hawkesbury freehold within the UHCW halo (CV2)",
        "GP partnerships and private medical operators acquiring premises around Walsgrave, Wyken and the wider CV2 healthcare belt anchored by University Hospitals Coventry & Warwickshire",
        "Whitley R&D and engineering office freeholders feeding the Jaguar Land Rover supplier ecosystem and the wider UKBIC battery R&D supply chain",
        "JLR Tier 1 supplier light-industrial operators on Bayton Road (CV7), Holbrook Lane (CV6) and the wider Coventry Gateway corridor",
        "FarGo Village independent F&B operators on Far Gosford Street acquiring their trading unit (CV1)",
        "Friargate professional services firms (legal, accountancy, consultancy) buying Grade A and refurbished Grade B office stock",
        "Earlsdon F&B and suburban hospitality operators acquiring trading premises along Earlsdon Avenue and Earlsdon Street",
        "Pharmacy and primary-care operators acquiring trading premises across CV1, CV2, CV3, CV4, CV5 and CV6 district high streets",
      ],
    },
    localAngle: {
      h2: "Why Coventry owner-occupier capacity is unusually broad",
      body: 'Coventry is a city of c. 345,000 anchored by an unusually diverse employer base: <strong>Jaguar Land Rover</strong> at the Whitley engineering centre, University Hospitals Coventry &amp; Warwickshire (UHCW) at Walsgrave, Coventry City Council, Severn Trent (HQ in CV1), the UK Battery Industrialisation Centre (UKBIC) at Whitmoor Park, and the combined c. 65,000-student footprint of Coventry University and Warwick. That demand pattern supports defensible owner-occupier purchases across healthcare, R&amp;D office and JLR-supply industrial stock. The <strong>Walsgrave Triangle dental and medical cluster</strong> in CV2 is the deepest healthcare owner-occupier vein we see, with principal purchases and partnership buy-outs running across the £400K to £1.4M bracket under the UHCW halo. The <a href="/areas/" class="text-secondary font-medium hover:underline">Whitley business park R&amp;D and office stock</a> in CV3 supports a steady flow of supplier-and-engineering SME freehold acquisitions adjacent to the JLR engineering centre, <a href="/areas/" class="text-secondary font-medium hover:underline">Bayton Road (CV7) and Holbrook Lane (CV6) JLR Tier 1 supplier industrial</a> generates regular owner-occupier flow for components, fabrication and logistics SMEs, FarGo Village on Far Gosford Street in CV1 is a reliable source of owner-operator independent F&amp;B freeholds, and Friargate professional services stock in central CV1 generates Grade A and refurbished Grade B office flow for legal, accountancy and consultancy firms. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> all run active Midlands programmes; Cambridge &amp; Counties Bank is notably strong on Warwickshire and East Midlands SME freehold cases (Coventry sits well within their core zone); Allica Bank and HTB are competitive on £400K to £3M Coventry cases; YBS Commercial, Aldermore, OakNorth, United Trust Bank and Reliance Bank engage on selected files. The clearing banks <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all field West Midlands commercial desks covering Coventry on cleaner owner-occupier cases up to around £5M. Refinancing volume is particularly strong on assets bought 2019 to 2021 where current valuations support a meaningfully better LTV than the original draw.',
    },
    faqs: [
      {
        question: "How much can I borrow against my Coventry business premises?",
        answer:
          'Typically up to <strong>75% loan-to-value</strong>, capped by the <strong>EBITDA cover test</strong> (1.3 to 1.5x). For a £1.0M Walsgrave dental freehold at 75% LTV that is a £750K facility; you need EBITDA covering the mortgage repayment by around 1.4x. Coventry valuers can trend conservative on suburban professional stock with thin commercial comparable evidence, so the headline LTV is sometimes capped by the valuer rather than by the cover test. Use our <a href="/calculator">commercial mortgage calculator</a> to model scenarios across rate and term.',
      },
      {
        question: "What deposit will I need?",
        answer:
          'Typically <strong>25 to 30%</strong>, normally funded from accumulated retained profit inside the limited company or from a director loan. Some specialist desks consider 80% LTV (20% deposit) for very strong covenants in defensive sectors (dental, GP, pharmacy, regulated professional services), but the interest rate steps up to compensate.',
      },
      {
        question: "Can I get an owner-occupier facility with limited trading history?",
        answer:
          'Two years of clean filed accounts is the comfortable minimum. <strong>12 to 18 months</strong> works in established sectors (dental, GP, pharmacy, regulated professions, automotive engineering with named OEM contracts) where the qualification or contract base itself underwrites the cashflow. Pre-trade or first-year buys are harder, usually need a higher deposit and a stronger personal guarantee.',
      },
      {
        question: "Is this an FCA-regulated mortgage?",
        answer:
          'No. Owner-occupier commercial mortgages are unregulated and fall outside the Financial Conduct Authority\'s regulated mortgage perimeter; a limited company buying commercial premises is an unregulated commercial loan, not a residential mortgage. We do not hold FCA authorisation because the products we arrange are unregulated. The exception: where a sole trader will personally occupy part of the premises as a residence, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "What about stamp duty on the purchase?",
        answer:
          'Stamp duty land tax (SDLT) on commercial property purchase runs at 0% on the slice up to £150K, 2% from £150K to £250K, and 5% above £250K. On a £1.0M Coventry business premises the SDLT bill is around £39,500. We factor it into your deposit-and-fees model so there are no surprises at completion.',
      },
      {
        question: "What repayment terms are available?",
        answer:
          'Up to 25 years. Most owner-occupier deals run on 15 to 20 year repayment schedules. Longer terms ease monthly affordability but increase total interest paid; we model both before recommending. Interest-only is occasionally available on the early years of larger structured deals; standard product is full capital-and-interest amortisation.',
      },
    ],
  },

  "commercial-investment-mortgage": {
    slug: "commercial-investment-mortgage",
    name: "Commercial Investment Mortgage",
    metaTitle: "Commercial Investment Mortgage Coventry | Specialist Broker",
    metaDescription:
      "Commercial investment mortgages in Coventry for let property held for income. Up to 75% LTV, ICR 140 to 160%, interest rates from 6.5% pa, 5 to 25 year repayment terms. Limited company SPV structures. NatWest, Lloyds, Shawbrook, InterBay Commercial, LendInvest.",
    hero: {
      eyebrow: "60 to 75% LTV, ICR-led",
      h1: "Commercial Investment Mortgage Coventry",
      lede:
        "Long-term mortgages secured against income-producing commercial property: Friargate Grade A office investment, City Centre South retail blocks, Cathedral Lanes mixed-use, FarGo Village independent retail and F&B, Earlsdon F&B parade stock, and Westwood Business Park office investment. Loan-to-value 60 to 75%, interest cover ratio 140 to 160% stressed, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. Limited company SPV, LLP and individual structures all supported.",
      metrics: [
        { label: "LTV", value: "60 to 75%" },
        { label: "Rate", value: "From 6.5% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "ICR", value: "140 to 160%" },
      ],
    },
    whatItIs: {
      h2: "What is an investment commercial mortgage and how is it underwritten?",
      body: [
        'A commercial investment mortgage is long-term debt secured against a <strong>let commercial property</strong> held as an income-producing asset. The borrower is typically a <strong>limited company</strong> SPV (the dominant structure for new acquisitions across the Coventry market), an LLP, or an individual investor; the security is the property; the affordability test is rent against the cost of borrowing. Unlike a residential buy-to-let mortgage, which tests personal income and rental yield against ASTs, commercial investment underwrites against business tenancies on FRI (full repairing and insuring) leases.',
        'The headline underwriting metric is the <strong>interest cover ratio (ICR)</strong>: gross rent divided by interest cost, typically required at <strong>140 to 160%</strong> stressed at a notional rate <strong>1 to 2% above pay rate</strong>. Some lenders also test <strong>DSCR (debt-service coverage ratio)</strong> on a fully-amortising basis at 130 to 145% cover. Loan-to-value commonly stretches to <strong>60 to 75%</strong> for income-producing Coventry assets with a clear lease; lenders can trend conservative on Coventry LTVs where the asset is concentrated retail (Lower Precinct, West Orchards, Cathedral Lanes, City Centre South phased delivery) given the cyclical risk profile, with prime Friargate office and Westwood Business Park stock pricing more keenly.',
        'Tenant covenant and lease length are the second-order drivers, and they matter as much as LTV. A 10-year unbroken lease to an investment-grade office tenant on Friargate or a national-brand retailer on Cathedral Lanes prices materially better than three two-year leases to local independents on a secondary Foleshill Road or Holbrook Lane parade. Vacant or part-let assets fund through specialist desks at tighter LTVs and wider interest rates, typically via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">commercial bridge-to-let</a> with an agreed term-out exit. Coventry deal flow is biased toward central retail and mixed-use, the Friargate Grade A office stream, the FarGo Village independent retail-and-leisure cluster on Far Gosford Street, the Earlsdon F&amp;B parade, and the Westwood Business Park multi-let office stock; industrial investment runs deep through the Coventry Gateway and Prologis Park Ryton corridor and the inner Holbrook Lane / Bayton Road belt.',
        'Investment commercial lending sits outside FCA regulation in almost all cases: it is a business borrowing against a business asset, not a residential mortgage. Stamp duty land tax applies on purchase at the standard commercial rates (0% to £150K, 2% £150K to £250K, 5% above £250K). For limited company SPV structures we factor SDLT, valuation, legal and arrangement fees into the all-in deposit requirement before submission. <em>Indicative case seed:</em> a £2.2M let Friargate Grade A office investment, FRI lease, 9 years unbroken, strong-covenant professional services tenant, priced at 65% LTV (£1.43M facility) on a 5-year fix at around 6.9% pa with ICR comfortably above 150%.',
      ],
    },
    howItWorks: {
      h2: "Pricing and lender appetite across the Coventry investment market",
      steps: [
        { label: "1. Asset and rent appraisal", detail: "We review the property, the lease, the tenant covenant and the rent roll. ICR and DSCR modelled at three lender stress rates so you see where each desk will land." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to five lender quotes covering interest rate, LTV, term, fees, ICR comfort and conditions. You pick the preferred route." },
        { label: "3. Credit pack", detail: "Property file, lease, tenant accounts (where covenant matters), borrower SPV pack, deposit proof. Sent to chosen lender." },
        { label: "4. RICS Red Book valuation", detail: "Includes market rent assessment and estimated rental value (ERV), both important to the underwrite. Typically 2 to 3 weeks; Cathedral Quarter listed-building instructions and City Centre South phased-delivery cases take longer." },
        { label: "5. Credit approval and legal pack", detail: "Approval typically 1 to 3 weeks post-valuation. Legals 3 to 5 weeks (longer if leasehold or complex tenant pack)." },
        { label: "6. Drawdown and SDLT", detail: "Funds drawn at completion. Stamp duty paid by buyer. ICR sometimes monitored through life of facility on larger or multi-let assets." },
      ],
    },
    whoItsFor: {
      h2: "Investor profiles we routinely place across Coventry",
      items: [
        "Office investment buyers across Friargate Grade A stock and the wider central CV1 office quarter (Greyfriars Road, Earl Street, Hertford Street)",
        "City Centre South retail investment buyers picking up phased-delivery retail-led mixed-use lots in central CV1",
        "Cathedral Lanes mixed-use investors holding national-brand retail with leisure and F&B overlay",
        "FarGo Village independent retail and F&B investors on Far Gosford Street (CV1)",
        "Earlsdon F&B parade investors with mixed independent food, drink and service tenancies along Earlsdon Avenue and Earlsdon Street (CV5)",
        "Westwood Business Park office investment buyers in CV4 8 with multi-tenant Grade B office stock",
        "Limited company SPV structures for new acquisitions; individual investor purchases at the smaller end",
        "Refinancing existing investment portfolios off maturing 5-year fixes from 2019 to 2021 vintage",
      ],
    },
    localAngle: {
      h2: "Where Coventry commercial investment volume actually sits",
      body: 'Coventry runs a distinctively diversified regional commercial investment market: a Friargate Grade A office spine in central CV1 (anchored by Two Friargate / HMRC and One Friargate / CCC HQ, with hotel and follow-on plots in delivery), a phased City Centre South retail-led mixed-use scheme by Shearer Property Regeneration Partners, the Cathedral Lanes leisure-and-retail block in the Cathedral Quarter, the FarGo Village independent retail and F&amp;B cluster on Far Gosford Street, the Earlsdon F&amp;B parade in CV5, and the Westwood Business Park multi-let office stock at CV4 8. Brokered investment volume splits roughly across <a href="/areas/" class="text-secondary font-medium hover:underline">Friargate office and the central CV1 office quarter</a>, <a href="/areas/" class="text-secondary font-medium hover:underline">City Centre South retail and Cathedral Lanes mixed-use</a>, FarGo Village on Far Gosford Street, Earlsdon F&amp;B in CV5, and Westwood Business Park office investment in CV4. The £350K to £1.8M bracket is the deep volume zone for smaller landlords: parade retail and semi-commercial blocks across Far Gosford Street, Earlsdon Avenue, Spon Street and Foleshill Road. The £2M to £15M+ bracket is where the Friargate office, City Centre South retail and Westwood Business Park multi-let flow sits. Industrial investment is well supported through the Coventry Gateway, Prologis Park Ryton and the inner Holbrook Lane / Bayton Road belt; that volume routes more often through the JLR Tier 1 supplier ecosystem owner-occupier channel than as third-party let investment. Interest rates currently <strong>6.5 to 8.5% pa</strong> depending on covenant and LTV; LTVs typically capped at <strong>60 to 75%</strong>. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, <strong>LendInvest</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on Coventry <a href="/property-types/" class="text-secondary font-medium hover:underline">commercial investment cases</a>; Cambridge &amp; Counties Bank is particularly strong on Warwickshire and East Midlands cases and engages actively on Coventry investment deals; Allica Bank, HTB, YBS Commercial, Aldermore and Paragon engage selectively across the West Midlands.',
    },
    faqs: [
      {
        question: "What ICR do Coventry investment lenders typically require?",
        answer:
          'Typically <strong>140 to 160%</strong>, stressed at a notional interest rate 1 to 2% above pay rate. Strong-covenant single-let assets price at the lower-cover end (140%); multi-let or short-lease assets at the higher end (155 to 160%). Some specialist desks will flex to 130% for prime Friargate or Cathedral Lanes stock with an unbroken 10+ year lease to an investment-grade tenant.',
      },
      {
        question: "Can I fund a vacant commercial investment asset?",
        answer:
          'Yes, but on tighter terms. <strong>Commercial bridging</strong> via <strong>LendInvest</strong>, <strong>Shawbrook</strong> or other specialist desks typically funds the vacant acquisition plus refurb, with an agreed exit onto a term mortgage once let. See our <a href="/services/commercial-bridge-to-let">commercial bridge-to-let</a> page. Direct-from-vacant term lending is rare and prices materially wider than fully-let.',
      },
      {
        question: "What interest rate should I expect on a Coventry commercial investment mortgage?",
        answer:
          'Currently <strong>6.5 to 8.5% pa</strong>. The drivers: covenant strength, lease length, loan-to-value, asset class. A 10-year FRI lease to a national covenant on Friargate at 60% LTV prices best (around 7.0%); a multi-let secondary Foleshill Road or Holbrook Lane retail asset at 75% LTV prices wider (around 8.5%). 5-year fixes typically price 0.25 to 0.50% above 2-year fixes.',
      },
      {
        question: "Do you handle limited company SPV structures?",
        answer:
          'Yes, limited company SPV holding is the standard structure for commercial investment across Coventry. We work with both new SPVs (with personal guarantee from the principal) and existing trading limited companies. Individual investor structures and LLPs are equally accommodated where appropriate; the underwriting treatment is similar but personal income evidence and tax position are weighed differently.',
      },
      {
        question: "How does commercial investment differ from a residential buy-to-let mortgage?",
        answer:
          'Residential buy-to-let covers single houses or flats let to tenants on ASTs and is FCA-regulated where the landlord is an individual or a consumer buy-to-let borrower. Commercial investment covers business tenancies on FRI leases (offices, retail, industrial, mixed-use) and is unregulated in almost all cases. Underwriting is fundamentally different: BTL leans on personal income; commercial weighs tenant covenant, lease length and ICR or DSCR cover. Do not apply for a BTL on a shop-with-flat-above: it will decline.',
      },
      {
        question: "What about stamp duty on a commercial investment purchase?",
        answer:
          'Standard commercial stamp duty land tax: 0% on the slice to £150K, 2% £150K to £250K, 5% above £250K. On a £1.5M let commercial asset the SDLT bill is around £64,500. The 3% additional-property surcharge that applies to residential second homes does not apply to commercial. We factor the SDLT into the all-in deposit-and-fees model.',
      },
    ],
  },

  "semi-commercial-mortgage": {
    slug: "semi-commercial-mortgage",
    name: "Semi-Commercial Mortgage",
    metaTitle: "Semi-Commercial Mortgage Coventry | Specialist Broker",
    metaDescription:
      "Mixed-use shop-with-flat finance for Coventry parades. Up to 75% LTV, blended cover around 145%, interest rates 6.5 to 8.5% pa, limited company SPV supported. InterBay Commercial, Shawbrook, LendInvest. Indicative terms in 48 hours.",
    hero: {
      eyebrow: "Up to 75% LTV, Blended cover",
      h1: "Semi-Commercial Mortgage Coventry",
      lede:
        "Single-facility finance for property where the residential element is at least 40% of total floorspace: the shop-with-flat archetype that defines Coventry\'s inner parades and Class E to mixed-use reshuffles. Up to 75% loan-to-value, blended cover around 145%, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. Active across Far Gosford Street, Earlsdon Avenue, the Spon Street heritage stretch, Foleshill Road, and the Westwood Way edge-of-CV4 mixed-use stock.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.5% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Blended cover", value: "~145%" },
      ],
    },
    whatItIs: {
      h2: "Defining mixed-use property: when does semi-commercial pricing apply?",
      body: [
        'Semi-commercial finance is a single facility funding mixed-use property, typically a <strong>commercial unit on the ground floor</strong> with one or more <strong>self-contained residential flats above</strong>. Where the residential element is at least 40% of total floorspace, semi-commercial pricing applies (instead of pure commercial investment pricing). Where residential is below 40%, lenders treat it as commercial investment and price accordingly.',
        'The lending test combines the commercial rent and the residential AST income on a <strong>blended basis</strong>, with a typical cover requirement around <strong>145%</strong>. Lenders take comfort from the residential security: a flat above is easier to re-let than a vacant retail unit if the commercial side falls vacant, so semi-commercial routinely prices 50 to 100bps inside pure commercial investment. Loan-to-value to 75% is achievable on standard Coventry archetypes via specialist desks; Coventry valuers can trend conservative on the commercial slice on secondary Foleshill Road and outer-Spon parades where retail rents have been volatile, which sometimes caps the achievable LTV below the headline.',
        'Specialist lenders dominate this market. <strong>InterBay Commercial</strong> (OSB Group) and <strong>Shawbrook</strong> are the two most active named desks; <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> also run active programmes for Coventry semi-commercial deals between £200K and £2.5M. Cambridge &amp; Counties Bank is notably engaged on Warwickshire and Midlands semi-commercial parade stock; HTB, Allica Bank, Aldermore, Foundation Home Loans and Together engage actively across the West Midlands. Limited company SPV structures are standard; individual investor and LLP variations are equally accommodated.',
        'Regulation matters here. Most semi-commercial lending is unregulated commercial: the borrower is a limited company or investor, the residential flats are let on ASTs to third parties. The exception: where the borrower (or an immediate family member) will personally occupy one of the flats, the deal can fall into FCA-regulated mortgage rules and routes to a regulated commercial lender. Stamp duty land tax follows non-residential rates on the whole property where commercial use is genuinely incidental, which is materially cheaper than residential SDLT and is part of why investors favour the structure. <em>Indicative case seed:</em> a Far Gosford Street parade unit with three flats above at £580K, blended rent £40K pa, structured at 70% LTV (£406K facility) with InterBay Commercial or Shawbrook at around 7.0% pa.',
      ],
    },
    howItWorks: {
      h2: "Underwriting steps for a Coventry shop-and-flats deal",
      steps: [
        { label: "1. Tenancy and split review", detail: "We check residential and commercial floorspace split, leases on the commercial side, ASTs on the residential side, tenant covenant on each." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to four specialist semi-commercial lenders quoted: interest rate, loan-to-value, term, fees." },
        { label: "3. Credit pack", detail: "Lease pack, AST pack, property file, borrower SPV (or individual) pack. InterBay Commercial and Shawbrook want clean tenancy evidence." },
        { label: "4. RICS Red Book valuation", detail: "Separates commercial value, residential value and total. Estimated rental value on the commercial unit important to the cover test. Spon Street listed-building parades add time for heritage considerations." },
        { label: "5. Credit approval", detail: "Specialist desks typically approve in 1 to 2 weeks post-valuation." },
        { label: "6. Legal completion and SDLT", detail: "Standard mixed-use conveyancing. Stamp duty at non-residential rates applies on the whole. 3 to 5 weeks typical." },
      ],
    },
    whoItsFor: {
      h2: "Buyer profiles for the Coventry shop-with-flat archetype",
      items: [
        "Investors buying classic shop-with-flat-above stock on Far Gosford Street (CV1), Earlsdon Avenue (CV5) and Foleshill Road (CV6)",
        "Spon Street heritage parade investors holding listed-building ground-floor F&B beneath upper-floor residential",
        "Westwood Way edge-of-CV4 mixed-use buyers picking up B-class to mixed-use conversions adjacent to the Westwood Business Park",
        "Limited company SPV landlords refinancing Coventry semi-commercial holdings off maturing 5-year fixes",
        "Portfolio investors with a mix of pure commercial and semi-commercial assets across the CV postcodes",
        "Coventry F&B operators with owner-occupier flat above (where the operator lives in the flat)",
        "Mixed-use conversion deals where consent is for ground-floor retail or F&B plus three to six flats above (Far Gosford Street regeneration, Foleshill Road change-of-use stock)",
        "First-time semi-commercial investors moving up from a residential buy-to-let portfolio",
      ],
    },
    localAngle: {
      h2: "Active Coventry semi-commercial parades and lender behaviour",
      body: 'Semi-commercial is a deep, active product across Coventry, sharpened further by the city\'s sustained Class E to mixed-use reshuffles where upper floors over retail have flipped from B-class office to C3 residential, putting fresh semi-commercial stock on the market. The classic parades, <a href="/property-types/semi-commercial" class="text-secondary font-medium hover:underline">Far Gosford Street in CV1 (FarGo Village halo), Earlsdon Avenue and Earlsdon Street in CV5, the Spon Street heritage stretch in CV1, Foleshill Road in CV6, and the Westwood Way edge-of-CV4 mixed-use stock</a>, run on shop-with-flat-above formats backed by exceptionally durable residential demand from the combined c. 65,000-student footprint of Coventry University and Warwick, the University Hospitals Coventry &amp; Warwickshire (UHCW) workforce at Walsgrave, and the JLR / UKBIC supplier ecosystem. Lot sizes are typically £280K to £900K for a single parade unit, often £1.2M+ for a four-unit run with multiple flats above. Gross blended yields run wider than the regional UK average given Coventry\'s exceptionally renter-heavy stock: typically 7.0 to 8.5% blended on Far Gosford Street and Earlsdon, slightly wider on Foleshill Road and the outer Spon parades. Recent change-of-use volume (Bishopgate / Lockhurst Lane / Foleshill B2 to mixed-use reshuffles, Far Gosford Street regeneration cases around the Coventry University estate, Spon Street heritage F&amp;B conversions) is typical Coventry semi-commercial profile. Lender appetite is strong: <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> all actively quote on Coventry semi-commercial deals; Cambridge &amp; Counties Bank is notably engaged on Warwickshire stock; HTB, Allica Bank, Aldermore, Foundation Home Loans and Together engage actively across the West Midlands.',
    },
    faqs: [
      {
        question: "What floorspace split counts as semi-commercial?",
        answer:
          'Mixed-use property where the residential element is typically <strong>40% or more</strong> of total floorspace. Below 40% residential, lenders treat it as pure commercial investment (and price it accordingly). The valuer measures GIA (gross internal area) on each element and the lender takes the split as evidence.',
      },
      {
        question: "Which lenders are most active for Coventry shop-with-flat finance?",
        answer:
          '<strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> lead on the specialist side. Each has a slightly different LTV, covenant and minimum-loan profile. Cambridge &amp; Counties Bank engages strongly on Warwickshire and Midlands cases. HTB, Allica Bank, Aldermore, Foundation Home Loans and Together engage actively across the West Midlands. Interest rates from 6.5% pa for clean stock.',
      },
      {
        question: "Can I get 75% loan-to-value on a Coventry semi-commercial?",
        answer:
          'Yes, InterBay Commercial and Shawbrook routinely quote 75% LTV on standard shop-with-flat archetypes. The blended cover test must still pass at 145%+; if rents are tight, LTV gets capped by the cover test rather than the headline maximum. Coventry valuers also occasionally cap LTV at 70% on secondary Foleshill Road and outer-Spon parades with thin or volatile comparable evidence.',
      },
      {
        question: "Is semi-commercial lending regulated by the FCA?",
        answer:
          'Generally <strong>unregulated</strong>. Semi-commercial lending against let mixed-use property sits outside the Financial Conduct Authority\'s regulated mortgage perimeter: the borrower is a limited company or investor and the residential flats are let on ASTs to third parties. We do not hold FCA authorisation because the products we arrange are unregulated. The exception: where the borrower or an immediate family member will personally occupy one of the residential flats, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "What about stamp duty on a mixed-use purchase?",
        answer:
          'Stamp duty land tax follows non-residential rates on a genuinely mixed-use property: 0% to £150K, 2% £150K to £250K, 5% above. On a £580K Far Gosford Street shop-with-three-flats purchase the SDLT bill is around £19,000. That is materially cheaper than the residential SDLT (with the 3% additional-property surcharge) that would apply to a pure residential equivalent: one of the structural reasons investors favour semi-commercial.',
      },
      {
        question: "Can I use a limited company to hold the asset?",
        answer:
          'Yes, limited company SPV is the standard structure for new semi-commercial acquisitions across Coventry. Specialist desks like InterBay Commercial are entirely comfortable with new SPV borrowers (with director personal guarantee). Existing trading limited companies, LLPs and individual investors are equally accommodated.',
      },
    ],
  },

  "portfolio-refinance": {
    slug: "portfolio-refinance",
    name: "Portfolio Refinance",
    metaTitle: "Commercial Portfolio Refinance Coventry | Specialist Broker",
    metaDescription:
      "Single-facility portfolio refinancing for Coventry HMO and commercial investors. Combined Coventry Uni + Warwick student HMO books, Holbrooks and Foleshill terraced HMO portfolios, professional office portfolios. £2M to £20M typical, LTV to 70%, interest rates from 6.5% pa. Paragon, Together, Foundation Home Loans, Aldermore.",
    hero: {
      eyebrow: "5+ assets, Single facility",
      h1: "Commercial Portfolio Refinance Coventry",
      lede:
        "Replace the patchwork of individual mortgages, maturity dates and lender relationships with a single facility, secured as a blanket charge or as aggregated charges. £2M to £20M typical. Loan-to-value 65 to 70% across the portfolio, aggregated interest cover 140 to 150%, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. The deepest portfolio market in our network sits here: combined Coventry University and Warwick student HMO portfolios, Holbrooks and Foleshill terraced HMO books in CV6, and professional office portfolios across Friargate and Westwood Business Park.",
      metrics: [
        { label: "Min portfolio", value: "5+ assets" },
        { label: "Facility size", value: "£2M to £20M+" },
        { label: "LTV", value: "Up to 70%" },
        { label: "Rate", value: "From 6.5% pa" },
      ],
    },
    whatItIs: {
      h2: "What does portfolio consolidation actually look like?",
      body: [
        'Portfolio refinancing is a single commercial facility secured against <strong>multiple investment assets</strong>, replacing the patchwork of individual mortgages and maturity dates that builds up over a typical landlord lifecycle. For Coventry-based investors carrying five or more commercial or semi-commercial properties (and Coventry runs unusually deep HMO portfolio books given the combined c. 65,000-student footprint of Coventry University and Warwick, the densest student-driven CM demand pool in our four-city Midlands set), the operational saving alone justifies the move: one quarterly review, one ICR test, one lender relationship, one renewal date.',
        'Two core structures. <strong>Blanket charge</strong>, one charge across all assets, prices keenest on interest rate but locks the whole portfolio together. <strong>Aggregated facility</strong>, individual charges aggregated against a single facility limit, is more flexible if you want optionality to sell or refinance specific assets out. Release fees apply on aggregated when a single asset is removed; the structure works because the rest of the portfolio absorbs the residual debt.',
        'Aggregate ICR is tested across the portfolio at <strong>140 to 150%</strong> stressed at a notional interest rate 1 to 2% above pay rate. Tenant concentration matters: if more than 20 to 25% of income comes from a single tenant, lenders may price wider or cap loan-to-value. Sector concentration matters similarly. Coventry portfolios commonly carry a heavy weighting to combined-university student HMO blocks across CV1, CV3 (Stoneleigh / Cheylesmore edge) and CV6 (Holbrooks / Foleshill terraced conversion belt), plus professional office books across Friargate and Westwood Business Park; lenders are familiar with that profile but read tenant concentration carefully on multi-tenanted sui generis HMO blocks (7+ bed). Geographic concentration in Coventry plus the surrounding Warwickshire ring (Kenilworth, Warwick, Leamington Spa, Nuneaton) is fine; lenders are comfortable with regional clustering when the borrower demonstrates local market knowledge.',
        'Most Coventry portfolio refinancing today is taken out by <strong>limited company</strong> holding structures (single corporate-level entity, or a topco with subsidiary SPVs), partly for tax efficiency, partly because lenders increasingly prefer a clean corporate counterparty for £5M+ facilities. Stamp duty land tax does not apply on refinancing (no transfer of beneficial ownership), which is part of what makes consolidation maths work even when ERCs on existing facilities have to be modelled in. Portfolio refinancing sits outside FCA regulation. <em>Indicative case seed:</em> a Coventry investor with six combined-university student HMO blocks across CV1 and CV6 (mix of C4 small-HMO and 7+ bed sui generis), plus a pair of Friargate office floorplates, £8.4M total value, refinanced into a single aggregated facility at 65% LTV (£5.46M) at around 6.8% pa with Paragon.',
      ],
    },
    howItWorks: {
      h2: "Process: from asset list to drawdown across multiple properties",
      steps: [
        { label: "1. Portfolio analysis", detail: "Asset list, current debt schedule, leases, rent roll, recent valuations. We model aggregated ICR, sector mix, tenant concentration, geographic spread." },
        { label: "2. Lender shortlist", detail: "Three to four portfolio lenders shortlisted based on facility size, sector mix and LTV target. Indicative terms within 7 working days." },
        { label: "3. Structure decision", detail: "Blanket charge versus aggregated. Term length. Fixed versus tracker interest rate. Trade-offs modelled before submission." },
        { label: "4. Credit pack", detail: "Asset-by-asset pack plus aggregated portfolio summary. Lender wants to see the whole shape clearly: concentration, covenant, lease maturities." },
        { label: "5. Co-ordinated valuations", detail: "Multiple RICS Red Book valuations co-ordinated across the portfolio, typically 4 to 6 weeks for the full set, the longest critical-path item." },
        { label: "6. Legals and ERC handling", detail: "Multi-asset legal pack, intercreditor handling for any retained debt, ERC settlement on existing facilities. 6 to 10 weeks total typical." },
      ],
    },
    whoItsFor: {
      h2: "Portfolio profiles where this product earns its keep",
      items: [
        "Coventry HMO landlords carrying 5+ combined Coventry University + Warwick student HMO blocks under different lenders (CV1 city-centre walking belt and CV6 terraced conversion belt)",
        "Sui generis large-HMO operators with 7+ bed properties across Holbrooks and Foleshill consolidating multiple individual mortgages",
        "Professional firm freehold portfolios (legal, accountancy, consultancy) holding Friargate Grade A and Westwood Business Park multi-let office stock",
        "Investor portfolios holding Cathedral Quarter retail alongside Friargate office and Earlsdon F&B semi-commercial",
        "Mixed semi-commercial books spanning Far Gosford Street, Earlsdon Avenue, Foleshill Road and the Westwood Way edge stock",
        "Investors approaching multiple maturity dates on individual fixes within a 24-month window",
        "Family offices and professional investor LLPs holding mixed commercial portfolios across Coventry and the wider Warwickshire ring",
        "Investors moving from individual SPVs into a single corporate-level holding limited company",
      ],
    },
    localAngle: {
      h2: "Active Coventry portfolio desks and typical book composition",
      body: 'Coventry runs the deepest portfolio market in our Midlands network, driven by the city\'s exceptional HMO conversion volume (the highest in our four-city Midlands coverage given the combined c. 65,000-student footprint of Coventry University and Warwick, the JLR / UKBIC working-age population growth, and the sustained sui generis 7+ bed planning pipeline). Paragon, Together, Foundation Home Loans and Aldermore are prominent on the Coventry HMO portfolio book and route most of the £2M to £15M Holbrooks, Foleshill and CV1 multi-block refinances. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> compete on the mixed semi-commercial and pure commercial portfolio bracket. <strong>Lloyds</strong> and <strong>NatWest</strong> commercial banking compete on the prime end, with West Midlands corporate relationship teams active across the Coventry market. Cambridge &amp; Counties Bank is notably engaged on Warwickshire portfolio cases (Coventry sits inside their core zone); Allica Bank, HTB, YBS Commercial and OakNorth engage on smaller portfolios. The typical Coventry portfolio profile we see has three distinct flavours: the <strong>combined-university student HMO portfolio</strong> (multi-block CV1 city-centre walking belt and CV6 Holbrooks / Foleshill terraced conversion stock, mix of C4 small-HMO and sui generis 7+ bed, blended yield 7.5 to 9.0%, durable demand from both Coventry University and Warwick); the <strong>Holbrooks and Foleshill terraced HMO portfolio</strong> in CV6 (often acquired during the 2019 to 2022 conversion wave on the terraced stock between the city centre and the M6 J3 corridor); and the <strong>professional office portfolio</strong> (Friargate Grade A stock and Westwood Business Park multi-let, held by legal, accountancy and consultancy partnerships). A smaller fourth cluster is the <strong>Cathedral Quarter and Earlsdon retail-and-mixed-use book</strong>, often with shorter WAULTs and higher tenant rotation. Refinancing volume is particularly strong on portfolios with original draws from 2019 to 2021 where current valuations support a meaningfully better consolidated LTV. Pricing currently <strong>6.5 to 8.5% pa</strong> across portfolio facilities. See also our <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">single-asset commercial remortgage</a> route for smaller books.',
    },
    faqs: [
      {
        question: "How many commercial assets do I need to portfolio-refinance?",
        answer:
          'Typically <strong>5+</strong>. Some lenders accept 3+ for the right covenant; some require 7+ for the full programme rate. Below five properties, individual investment commercial mortgages usually price better: the consolidation premium is not worth paying. Specialist HMO portfolio desks (Paragon, Foundation Home Loans, Aldermore) often start their programme at 4+ HMO blocks.',
      },
      {
        question: "Blanket charge or aggregated, which is right?",
        answer:
          'Blanket charge prices keenest on interest rate but locks the portfolio together: selling an asset is harder. <strong>Aggregated</strong> is more flexible if you want to sell or refinance individual properties; release fees apply when an asset is removed but the structure works. We model both before recommending.',
      },
      {
        question: "What aggregated ICR do portfolio lenders need?",
        answer:
          'Aggregate ICR <strong>140 to 150%</strong> stressed at a notional interest rate 1 to 2% above pay rate. Single-asset ICR can dip below this if the aggregate passes: that is the whole point of the structure (it absorbs weaker-covenant assets across stronger ones). On HMO-heavy portfolios Paragon and Foundation Home Loans typically size the aggregate at 145%.',
      },
      {
        question: "Can I add or remove assets from the facility later?",
        answer:
          'Yes, most facilities allow add or remove with lender consent. Adding an asset usually triggers a top-up application (new RICS valuation on the new asset, fresh ICR test). Removing triggers a release fee but is generally straightforward; the residual debt has to still pass the aggregate cover test on the rest of the portfolio.',
      },
      {
        question: "Does stamp duty apply on a portfolio refinance?",
        answer:
          'No, refinancing existing debt against properties you already own does not transfer beneficial ownership, so SDLT does not apply. The exception is where a refinance is structured alongside a transfer between connected limited companies for tax purposes; we flag and route that through the borrower\'s tax adviser before structuring.',
      },
      {
        question: "Is portfolio refinancing FCA-regulated?",
        answer:
          'No, commercial portfolio facilities sit outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. The borrower is a limited company or LLP, the assets are commercial, semi-commercial or HMO held for investment income, and the facility is unregulated commercial lending. We do not hold FCA authorisation because the products we arrange are unregulated; where a deal would require regulated permissions, we refer to a regulated firm.',
      },
    ],
  },

  "trading-business-mortgage": {
    slug: "trading-business-mortgage",
    name: "Trading-Business Mortgage",
    metaTitle: "Trading-Business Commercial Mortgage Coventry | Specialist Broker",
    metaDescription:
      "Sector-specialist commercial mortgages for Coventry operators: Cathedral Quarter boutique hotels (City of Culture legacy), FarGo Village leisure, Earlsdon F&B, UHCW Walsgrave care homes. EBITDA-driven underwriting, LTVs 60 to 70%, interest rates 7.0 to 9.0% pa, 15 to 25 year repayment terms. Cynergy Bank, Shawbrook, InterBay Commercial.",
    hero: {
      eyebrow: "Sector-specialist, 60 to 70% LTV",
      h1: "Trading Business Mortgage Coventry",
      lede:
        "Hotels, pubs, restaurants, care homes, dental practices, day nurseries, banqueting and wedding venues. Operational property where value is bound up with the business that runs from it. EBITDA-led underwriting plus sector-specific overlays: occupancy, ADR, CQC, Ofsted, NHS UDA, license category. LTVs 60 to 70%, interest rates 7.0 to 9.0% pa, 15 to 25 year repayment terms. Limited company structures supported. Active across the Cathedral Quarter boutique hotel cluster (City of Culture 2021 legacy footfall), FarGo Village leisure on Far Gosford Street, the Earlsdon F&B parade, and the UHCW Walsgrave care-home corridor.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Rate", value: "7.0 to 9.0% pa" },
        { label: "Term", value: "15 to 25 years" },
        { label: "Facility", value: "£250K to £5M" },
      ],
    },
    whatItIs: {
      h2: "What is a sector-specialist commercial mortgage?",
      body: [
        'Trading-business mortgages fund operational commercial property where the value is bound up with the <strong>business that runs from it</strong>. Unlike pure investment property, where the test is rent against mortgage cost, trading-business mortgages test <strong>EBITDA cover</strong>: the trading profit of the business covering the mortgage repayment, typically at 1.5 to 2.0x cover. Goodwill, brand, sector regulation and going-concern value all influence the lend.',
        'Underwriting is sector-specific and depends entirely on the property type. <strong>Hotels</strong>: occupancy, ADR (average daily rate), RevPAR, brand affiliation, location. The Cathedral Quarter boutique hotel cluster (anchored by Coventry Cathedral, the Belgrade Theatre and the Coventry Transport Museum, with City of Culture 2021 legacy footfall sustained through 2026), the mid-tier hotel stock added during 2018 to 2022 (Premier Inn and Travelodge expansions across the city centre and ring), and the FarGo Village leisure stretch on Far Gosford Street are the three named hospitality sub-markets, supported by the combined c. 65,000-student footprint of Coventry University and Warwick. <strong>Pubs and bars</strong>: barrelage, EBITDA, beer-tie status, license type, trading record. <strong>Care homes</strong>: CQC rating, occupancy, weighted-average bed value, fee rates (council versus private mix). The UHCW Walsgrave care-home corridor (anchored by University Hospitals Coventry &amp; Warwickshire, with concentration across Holbrooks, Foleshill and Cheylesmore care-home stock) is the deepest care vein in this network. <strong>Dental practices</strong>: NHS UDA contract value, private fee mix, principal versus associate structure, surgery count. <strong>Day nurseries</strong>: Ofsted rating, registered places, occupancy, fee structure. <strong>Wedding and banqueting venues</strong>: forward booking pipeline, average spend per event, accounts seasonality.',
        'Loan-to-value runs <strong>60 to 70%</strong> typically for Coventry trading-business cases, lower than pure investment because the asset value is sector-locked and harder to repurpose if the business fails. Heritage hospitality and listed-building stock on the Spon Street and Cathedral Quarter heritage stretches can flex slightly lower (55 to 65%) where re-purpose options are constrained by listed-building consent. Term <strong>15 to 25</strong> years; interest rates <strong>7.0 to 9.0% pa</strong> reflecting the specialist underwrite. Different sub-sectors route to different lenders, and getting the right desk first time is the broker\'s entire job. Most trading-business mortgages are taken out by a limited company trading entity with personal guarantee from the operating principal, and most fall outside FCA-regulated mortgage rules because they finance business premises, not residential property.',
        'Stamp duty land tax on a trading-business purchase follows commercial rates (0% to £150K, 2% to £250K, 5% above), and where a deal is structured as a share purchase of an existing operating limited company rather than an asset purchase, SDLT can be deferred or partly avoided. We work alongside the buyer\'s tax adviser on the structure before submission. Refinancing an existing trading-business mortgage (typically off a maturing 5-year fix) is a frequent reason to re-engage; the current rate environment is creating refinancing demand particularly on Cathedral Quarter boutique hotel and UHCW Walsgrave care-home operator books. <em>Indicative case seed:</em> a 28-room Cathedral Quarter boutique hotel, stable occupancy and ADR underpinned by Coventry Cathedral and Belgrade Theatre visitor flow plus year-round student-and-professional accommodation demand, EBITDA cover comfortably above 1.7x, purchased at £4.2M with a £2.52M facility at 60% LTV around 7.5% pa via Cynergy Bank.',
      ],
    },
    howItWorks: {
      h2: "Steps from sector review to specialist credit committee",
      steps: [
        { label: "1. Sector and trading review", detail: "Two years of accounts, current management figures, sector-specific data: occupancy and ADR for hotel, CQC for care, Ofsted for nursery, barrelage for pub." },
        { label: "2. Specialist lender shortlist", detail: "Sector dictates lender. Hotels: Cynergy Bank, Allied Irish Bank UK and Metro Bank lead. Care and dental: Shawbrook and Cynergy Bank. Pubs and bars: Cynergy Bank plus licensed-trade specialist desks." },
        { label: "3. Indicative terms in 48 hours", detail: "Interest rate, loan-to-value, EBITDA cover requirement, repayment term, fees. From a clean enquiry only." },
        { label: "4. Sector-specific credit pack", detail: "STR or PKF hotel benchmarking report for hotels, CQC inspection report for care, Ofsted report for nursery, NHS UDA contract for dental, license and barrelage for pub. Cleaner pack equals faster credit." },
        { label: "5. Specialist RICS valuation", detail: "Sector-accredited RICS valuer instructed by the lender. Critical-path item, typically 3 to 5 weeks. Spon Street heritage and Cathedral Quarter listed-building stock adds time for listed-building considerations." },
        { label: "6. Credit approval and completion", detail: "Specialist desks underwrite slower than mainstream commercial. Allow 6 to 10 weeks total from indicative to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Operator profiles routing through this product",
      items: [
        "Cathedral Quarter boutique hotel operators within the City of Culture 2021 legacy footfall halo",
        "FarGo Village leisure operators on Far Gosford Street running bar, restaurant and entertainment-venue trading floors",
        "Mid-tier hotel operators across the city ring (Premier Inn and Travelodge style stock added 2018 to 2022)",
        "Licensed-trade operators across the Earlsdon F&B parade, FarGo Village and the Spon Street heritage stretch",
        "Dental and primary-care principals (Walsgrave, Wyken, Hawkesbury) buying within the UHCW halo",
        "Care home operators across the UHCW Walsgrave corridor and the wider Holbrooks, Foleshill and Cheylesmore care-home concentrations",
        "Day nursery operators across Cheylesmore, Earlsdon, Allesley and the suburban CV5 ring",
        "Heritage hospitality operators with year-round trading underpinned by Coventry Cathedral, Belgrade Theatre and Coventry Transport Museum visitor flow",
      ],
    },
    localAngle: {
      h2: "Sub-sector clusters and lender behaviour across the Coventry market",
      body: 'Coventry runs an unusually leisure-and-care-heavy trading-business commercial mortgage flow, driven by the City of Culture 2021 legacy (Coventry Cathedral, Belgrade Theatre, Coventry Transport Museum), the combined c. 65,000-student footprint of Coventry University and Warwick, and the University Hospitals Coventry &amp; Warwickshire (UHCW) workforce at Walsgrave plus the wider CV6 / CV3 care-home corridor. The <a href="/property-types/leisure-hospitality" class="text-secondary font-medium hover:underline">Cathedral Quarter boutique hotel cluster, the mid-tier hotel ring around the city centre, and the FarGo Village leisure stretch on Far Gosford Street</a> support firm hotel EBITDA cover and route primarily through specialist hospitality lenders. <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank lead the hotel underwriting market for Coventry; <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> take selected larger hospitality cases. The Coventry independent F&amp;B sub-market on <a href="/areas/" class="text-secondary font-medium hover:underline">Earlsdon Avenue, Far Gosford Street and the Spon Street heritage stretch</a> is well-supported by visitor footfall and student-driven evening trade, with <strong>Cynergy Bank</strong> and licensed-trade specialist desks active on F&amp;B and pub cases. The <a href="/property-types/healthcare-care-home" class="text-secondary font-medium hover:underline">UHCW Walsgrave care-home corridor</a> through Holbrooks, Foleshill and Cheylesmore is the deepest care vein in this network; Shawbrook and Cynergy Bank hold significant care-home books across the West Midlands. Dental and primary-care principal buy-outs around Walsgrave, Wyken and the wider UHCW halo route through clearing bank healthcare desks at <strong>Lloyds</strong> and <strong>NatWest</strong>, with OakNorth competitive on the £2M+ end. Day nurseries cluster across Cheylesmore, Earlsdon, Allesley and the CV5 suburban ring, with specialist desks providing the core appetite. Cambridge &amp; Counties Bank engages selectively on Warwickshire trading-business cases. Refinancing volume from 2019 to 2021 vintage operator books is particularly strong in 2026 on Cathedral Quarter boutique hospitality stock and on the UHCW Walsgrave care-home cluster.',
    },
    faqs: [
      {
        question: "Can I buy a Coventry hotel on a trading-business mortgage?",
        answer:
          'Yes. Hotel mortgages are typically structured at 60 to 70% loan-to-value, term 15 to 20 years, interest rate 7.0 to 9.0% pa. Lender appetite depends heavily on occupancy, ADR and RevPAR, brand affiliation and trading record. Specialist hospitality desks dominate the Cathedral Quarter boutique cluster and the mid-tier hotel ring; <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank are the most active named lenders on Coventry hotel underwriting; clearing banks engage selectively on larger Cathedral Quarter deals.',
      },
      {
        question: "What CQC rating do care home lenders need?",
        answer:
          'Generally <strong>Good</strong> or above on the most recent inspection. <strong>Requires Improvement</strong> can sometimes fund at tighter LTV (50 to 60%) and wider interest rate. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage at materially wider pricing. The UHCW Walsgrave care-home corridor and the wider Holbrooks, Foleshill and Cheylesmore concentrations generally hold a strong CQC profile and are consequently well-served by lender appetite.',
      },
      {
        question: "Are dental practice mortgages owner-occupier or trading-business?",
        answer:
          'Dental can route either way. Pure freehold purchase by the practice principal is normally placed as <a href="/services/owner-occupier-commercial-mortgage">owner-occupier</a> on EBITDA cover via clearing bank healthcare desks at <strong>Lloyds</strong> or <strong>NatWest</strong>. Larger dental groups buying multi-site portfolios route as trading-business with specialist sector lenders. We choose based on facility size and group structure.',
      },
      {
        question: "How long does a trading-business mortgage take to complete?",
        answer:
          'Typically <strong>6 to 10 weeks</strong> from indicative to drawdown, longer than mainstream commercial because of sector-specific RICS valuation, regulatory due diligence (CQC, Ofsted, NHS contract assignment, license category for pubs) and sometimes listed-building considerations on Spon Street heritage and Cathedral Quarter listed-building hospitality stock.',
      },
      {
        question: "Is this lending FCA-regulated?",
        answer:
          'No, trading-business commercial mortgages finance business premises and sit outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. They are not residential mortgages and are not consumer credit. We do not hold FCA authorisation because the products we arrange are unregulated; where a deal would require regulated permissions, we refer to a regulated firm.',
      },
      {
        question: "Can I refinance an existing trading-business mortgage?",
        answer:
          'Yes, refinancing volume is currently strong on hotel and care-home operator books taken out 2019 to 2021, where current valuations and stronger trading records support a meaningfully better LTV than the original draw. We model the ERC on the existing facility against the saving on the new interest rate before recommending the move. See our <a href="/services/commercial-remortgage">commercial remortgage</a> page for the wider mechanics.',
      },
    ],
  },

  "commercial-remortgage": {
    slug: "commercial-remortgage",
    name: "Commercial Remortgage",
    metaTitle: "Commercial Remortgage Coventry | Specialist Broker",
    metaDescription:
      "Refinancing existing commercial debt across Coventry. End-of-fix transitions, capital-raise refinancing, ERC modelled. Loan-to-value to 75%, interest rates from 6.0% pa, repayment terms 5 to 25 years. NatWest, Lloyds, Barclays, Santander, Shawbrook.",
    hero: {
      eyebrow: "End-of-fix, Capital raise",
      h1: "Commercial Remortgage Coventry",
      lede:
        "Refinancing existing commercial mortgages: moving lender at end of a 5-year fix, releasing capital from an appreciated asset, or moving from specialist back to mainstream once trading has stabilised. Whole-of-market benchmark across 90+ lenders. Loan-to-value to 75%, interest rates from 6.0% pa, 5 to 25 year repayment terms. Active across the post-2022 refinance wave, the Friargate Grade A office refinance stream, and the City Centre South retail refinance flow.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.0% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£150K to £15M" },
      ],
    },
    whatItIs: {
      h2: "What does refinancing a commercial mortgage actually involve?",
      body: [
        'Commercial remortgage covers two distinct moments. <strong>End of fix</strong>: a typical 5-year fixed-rate facility matures and you transition to a new rate environment, either a fresh fix with the same lender (a product transfer) or a full refinancing to a new lender. <strong>Capital-raise refinancing</strong>: releasing equity from a property that has grown in value since the original draw, where the increased loan amount funds onward investment, business growth or working capital. Both are legitimate uses of refinancing; both are routine across the Coventry commercial market in 2026.',
        'The first conversation is always <strong>ERC (early repayment charge) handling</strong>. If you are inside an ERC window, the maths often still works: saving 1.5% on rate over a fresh five-year term outweighs an ERC of 3% of the redemption sum on most £1M+ facilities. We run the numbers both ways before recommending the move. Some lenders will pay-down ERC against new arrangement fees as a competitive incentive; we know which.',
        'For end-of-fix transitions the underwriting story is usually clean: the asset is income-producing, the borrower has a trading record, the lender has comfort. <strong>NatWest</strong>, <strong>Lloyds</strong> commercial banking, <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> all compete hard on clean Coventry remortgage business; Cambridge &amp; Counties Bank is notably strong on Warwickshire and East Midlands cases; Allica Bank, HTB, YBS Commercial, Aldermore and Together engage selectively across the West Midlands. The pricing competition is real: even a 50bps move on a £1.5M facility saves £7,500 a year.',
        'For capital-raise refinancing, the test is the borrower\'s use of funds plus the new ICR or DSCR cover at the higher loan amount. Common use cases: deposit on the next acquisition, working capital injection into the trading business, partner buy-out, refurbishment programme, cross-collateralisation across a small portfolio. Where the funds are being released from an investment property, the deal is unregulated commercial; where the borrower is a sole trader using the property partly as a residence, the deal can fall under FCA-regulated mortgage rules: we flag at outset. Stamp duty does not apply on a refinance (no transfer of beneficial ownership), unlike a fresh purchase, which is part of why refinancing maths can work even with ERCs in the model. <em>Indicative case seed:</em> a Coventry investor refinancing a £2.0M let Friargate Grade A office investment off a maturing 2021 fix, current value £2.7M, refinanced at 70% LTV (£1.89M) at around 6.8% pa, releasing roughly £450K for the next acquisition deposit.',
      ],
    },
    howItWorks: {
      h2: "From existing facility review to redemption and drawdown",
      steps: [
        { label: "1. Existing facility review", detail: "Current interest rate, ERC window, maturity date, redemption schedule. New ICR, DSCR or EBITDA cover modelled at multiple lender stress rates." },
        { label: "2. Whole-of-market benchmark", detail: "Five to eight lenders shortlisted across high-street, challenger and specialist desks. Indicative terms in 48 hours." },
        { label: "3. ERC modelling", detail: "Cost of break versus benefit of new interest rate over remaining fix. Where it is close, we hold the deal until the ERC window opens." },
        { label: "4. Application packaging", detail: "Standard credit pack: accounts, leases (if investment), property file, borrower SPV or limited company pack. Cleaner than a fresh acquisition." },
        { label: "5. RICS Red Book valuation", detail: "Existing valuation is not portable. Fresh RICS valuation instructed by the new lender, typically 2 to 3 weeks." },
        { label: "6. Completion and redemption", detail: "Existing facility redeemed from new draw. Charge updated at Land Registry. 4 to 6 weeks total typical from start to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Borrowers most likely to benefit from refinancing now",
      items: [
        "Borrowers approaching the end of a 5-year fix in the next 6 to 12 months",
        "Owner-occupier businesses where trading is now stronger and supports better-priced repayment terms",
        "Friargate Grade A office investors refinancing off 2019 to 2021 vintage facilities as the central CBD stabilises post-pandemic",
        "City Centre South retail investors refinancing off post-2021 fixes as the phased delivery scheme matures and footfall stabilises",
        "Cathedral Quarter and Spon Street heritage freehold owners refinancing as asset values catch up with the post-2022 repricing",
        "Commercial investment landlords whose properties have appreciated since acquisition (the post-2022 refinance wave on Coventry holdings particularly)",
        "Limited company SPV portfolios consolidating individual mortgages into a single facility (see also Portfolio Refinance)",
        "Operators moving from a high-cost specialist lender back to a mainstream rate post-stabilisation",
      ],
    },
    localAngle: {
      h2: "Why current Coventry refinancing volume is high",
      body: 'With Bank of England base-rate trajectory through 2026 looking flatter than the 2023 to 2024 cycle, refinancing demand across Coventry is strong, particularly on the <strong>post-2022 refinance wave</strong> on Coventry investment and semi-commercial holdings, on the <strong>Friargate Grade A office refinance</strong> stream where 5-year fixes from 2021 are rolling off into a more competitive market and the central CBD has stabilised around Two Friargate (HMRC) and One Friargate (CCC HQ), and on the <strong>City Centre South retail refinance</strong> flow as the Shearer Property Regeneration Partners phased delivery scheme matures. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and <strong>InterBay Commercial</strong> are the most aggressive challenger desks competing for clean Coventry remortgage business. <strong>NatWest</strong>, <strong>Lloyds</strong> commercial banking and <strong>Barclays</strong> all run dedicated remortgage propositions on the high-street side, with West Midlands corporate relationship teams covering the Coventry market. <strong>Santander</strong> is competitive on the £2M+ end. Cambridge &amp; Counties Bank is notably engaged on Warwickshire refinance cases (Coventry sits inside their core zone); Allica Bank, HTB, YBS Commercial, Aldermore and Together hold meaningful positions on local refinance business across the West Midlands. Refinancing demand is concentrated in Friargate Grade A office stock, City Centre South phased-delivery retail, Cathedral Lanes mixed-use, the FarGo Village independent retail-and-leisure cluster, and the Far Gosford Street, Earlsdon Avenue, Foleshill Road and Spon Street semi-commercial parade stock where rents have grown faster than pure capital values. Where the existing first charge is on a competitive 2019 to 2021 legacy rate (3.5 to 4.5%) and breaking it would cost more than the saving, see also our <a href="/services/second-charge-commercial-mortgage" class="text-secondary font-medium hover:underline">second-charge commercial mortgage</a> route.',
    },
    faqs: [
      {
        question: "When should I start the remortgage process?",
        answer:
          'Start <strong>4 to 6 months</strong> before fix expiry. That gives time for benchmarking, ERC modelling, valuation and completion without time pressure. For capital-raise refinancing there is no fixed time constraint, but allow 6 to 8 weeks from start to drawdown.',
      },
      {
        question: "Should I pay an ERC to remortgage early?",
        answer:
          'Sometimes, if the rate saving over the remaining fix outweighs ERC plus new arrangement fees. We model the break-even precisely. On a £1.5M facility, a 1.5% interest rate saving over 3 years is £67,500; a 3% ERC is £45,000. So a 3% ERC is worth breaking. Lower spreads need careful modelling.',
      },
      {
        question: "Can I capital-raise as part of a remortgage?",
        answer:
          'Yes, provided the new loan-to-value stays within lender comfort (typically 70 to 75% for owner-occupier and investment) and the new ICR, DSCR or EBITDA cover passes at the higher loan amount. Common use of funds: business growth, onward acquisition, deposit on next purchase, partner buy-out.',
      },
      {
        question: "Does the existing valuation get re-used?",
        answer:
          'No, the new lender will instruct a fresh RICS Red Book valuation. The existing valuation is not portable across lenders. Allow 2 to 3 weeks for the new valuation; cost typically £1,500 to £4,500 depending on facility size and asset complexity.',
      },
      {
        question: "Is commercial remortgaging FCA-regulated?",
        answer:
          'No. Commercial remortgaging, both investment and owner-occupier, is unregulated and sits outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. The borrower is a limited company, LLP or trading entity; the asset is commercial. We do not hold FCA authorisation because the products we arrange are unregulated. The exception: where a sole trader uses the property partly as a residence, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "Does stamp duty apply on a remortgage?",
        answer:
          'No, stamp duty land tax does not apply on a refinance because there is no transfer of beneficial ownership. SDLT only applies on a purchase. That is part of why refinancing maths can work even where ERCs on the existing facility have to be paid.',
      },
    ],
  },

  "commercial-bridge-to-let": {
    slug: "commercial-bridge-to-let",
    name: "Commercial Bridge-to-Let",
    metaTitle: "Commercial Bridging Loan Coventry | Specialist Broker",
    metaDescription:
      "Short-term commercial bridge-to-let finance in Coventry. 12 to 24 month bridge funding Cathedral Lanes reconfigurations, Browns Lane mixed-use plays and Foleshill Road B2 to mixed-use conversions. £500K to £5M, LTV to 70%, bridge interest 0.75 to 1.10% pm. LendInvest, Shawbrook.",
    hero: {
      eyebrow: "12 to 24m bridge, Clean term-out",
      h1: "Commercial Bridging Loan Coventry",
      lede:
        "Acquire a vacant or value-add commercial property on a 12 to 24 month bridge, refurbish or convert and let, then term out onto a long-term commercial investment mortgage. £500K to £5M typical. Bridge interest rate 0.75 to 1.10% pm; term-out 6.5 to 8.5% pa once stabilised. Active across Cathedral Lanes reconfigurations, Browns Lane (CV5) mixed-use plays, and Foleshill Road B2 to mixed-use conversions in CV6.",
      metrics: [
        { label: "Bridge term", value: "12 to 24 months" },
        { label: "Bridge rate", value: "0.75 to 1.10% pm" },
        { label: "LTV (bridge)", value: "Up to 70%" },
        { label: "Term-out", value: "6.5 to 8.5% pa" },
      ],
    },
    whatItIs: {
      h2: "What is bridge-to-let and when does it make sense?",
      body: [
        'Commercial bridge-to-let is a two-stage facility. The first stage, the <strong>bridge</strong>, funds acquisition of a commercial property that is not immediately fundable on a long-term mortgage: vacant, partly tenanted, mid-refurbishment, mid-conversion, or with an unsigned lease at point of purchase. The second stage, the <strong>term-out</strong>, refinances the bridge onto a standard commercial investment mortgage once the asset is income-producing and the ICR test passes.',
        'Bridges typically run <strong>12 to 24 months</strong>, with interest serviced monthly or rolled-up into the loan balance (useful where the asset is not income-producing during the bridge period). Bridge LTV up to 70% of current value, sometimes higher with refurb-funded value where lenders consider GDV (gross development value). Bridge interest rate currently <strong>0.75 to 1.10% pm</strong>, equivalent to 8.5 to 11.0% pa: meaningfully more expensive than long-term debt, but the right answer for a 12-month value-add play where no term lender will engage on the day-one position.',
        'The agreed exit onto term debt is the underwriting comfort. Specialist lenders like <strong>LendInvest</strong> and <strong>Shawbrook</strong> either provide both legs (bridge then term with the same lender, on a pre-agreed product transfer) or partner with a sister term lender. <strong>InterBay Commercial</strong> takes selected larger Coventry cases on the bridging side. We model the all-in cost across the bridge period plus term-out so you see the true total cost of the strategy before drawdown.',
        'Most commercial bridge-to-let is taken out by a <strong>limited company</strong> SPV with director personal guarantee, and is unregulated commercial lending. The exception: where the bridge is secured against a property with a residential element that the borrower will personally occupy, the deal can fall under FCA-regulated bridging rules and routes to a regulated bridging lender. Stamp duty land tax applies on the day-one purchase at standard commercial rates; it is paid by the buyer at completion of the bridge, not at term-out (because term-out is a refinance, not a fresh purchase). That timing matters for cash-flow planning on the deal. <em>Indicative case seed:</em> a Foleshill Road B2 freehold bought as a Class E plus C3 mixed-use conversion at £880K on an 18-month bridge at 0.95% pm, refurbished and converted under prior approval, termed out at 65% LTV at around 7.5% pa once let to a mix of independent commercial tenants and AST residential.',
      ],
    },
    howItWorks: {
      h2: "From auction or off-market acquisition to stabilised investment",
      steps: [
        { label: "1. Strategy review", detail: "We review the asset, the refurb or conversion plan, the target term-out exit. All-in cost modelled: bridge interest, bridge fees, term-out arrangement, valuation set." },
        { label: "2. Bridge terms in 48 hours", detail: "Bridge LTV, interest rate, term, fees from three specialist desks. Plus indicative term-out terms post-stabilisation." },
        { label: "3. Bridge completion", detail: "Bridge can complete in 2 to 3 weeks for clean cases. Asset acquired. SDLT paid at completion." },
        { label: "4. Conversion or refurb phase", detail: "Borrower executes the plan over 6 to 18 months. Property stabilises into income-producing asset with leases or AST tenancies in place." },
        { label: "5. Term-out refinancing", detail: "Once let with valid commercial leases or ASTs, refinance onto term mortgage at standard 6.5 to 8.5% pa pricing. ICR test passes." },
        { label: "6. Bridge redeemed", detail: "Bridge redeemed from term-out drawdown. Exit complete. Borrower now on long-term repayment schedule." },
      ],
    },
    whoItsFor: {
      h2: "Deal types where short-term commercial debt is the right tool",
      items: [
        "Cathedral Lanes reconfiguration plays where retail-led mixed-use floorplates are being re-cut for new lettings",
        "Browns Lane (CV5) mixed-use buyers picking up edge-of-Allesley sites with prior-approval potential",
        "Foleshill Road B2 to mixed-use conversion deals through Coventry City Council planning (industrial to Class E plus C3 reshuffles in CV6)",
        "Class E to HMO conversion plays across CV1, CV3 and CV6 within the combined Coventry University and Warwick walking belt",
        "Sui generis 7+ bed HMO conversion deals where Coventry City Council prior approval and full FUL applications need bridge funding through the determination cycle",
        "Investors buying vacant Westwood Business Park office floorplates for sub-division refurbishment and re-letting",
        "Trading-business operator buyouts where the new operator needs 12 months of accounts before high-street refinancing",
        "Auction-bought commercial assets (typical 28-day completion timeframe rules out term mortgage processing)",
      ],
    },
    localAngle: {
      h2: "Active Coventry bridge-to-term value-add territory",
      body: '<strong>LendInvest</strong> and <strong>Shawbrook</strong> are the most active commercial bridging desks for Coventry £500K to £5M deals; <strong>InterBay Commercial</strong> takes selected cases on the larger end. Together and Foundation Home Loans engage on the HMO-conversion bridging side. The standout value-add territory in 2026 is the <a href="/areas/" class="text-secondary font-medium hover:underline">Cathedral Lanes reconfiguration stream, the Browns Lane mixed-use pipeline and the Foleshill Road B2 to mixed-use conversion belt</a>: Coventry runs strong sui generis (7+ bed) HMO change-of-use volume driven by the combined c. 65,000-student footprint of Coventry University and Warwick and the densest student-driven CM demand pool in our four-city Midlands set. The Cathedral Lanes reconfiguration stream produces consented retail-led mixed-use plays as Cathedral Quarter footfall stabilises post City of Culture 2021, and the Foleshill Road B2 to mixed-use conversion belt (anchored by the Bishopgate / Lockhurst Lane / Foleshill change-of-use volume from industrial / Class B2 to mixed-use and residential conversions in CV6) generates a steady flow of bridge-and-convert enquiries. The Browns Lane edge-of-Allesley (CV5) mixed-use pipeline picks up smaller redevelopment plots. Auction-bought assets are another standing source: the 28-day completion clock simply cannot be met by term-mortgage process. Far Gosford Street regeneration around the Coventry University estate produces a parallel stream of conversion-and-let cases.',
    },
    faqs: [
      {
        question: "How quickly can a Coventry commercial bridge complete?",
        answer:
          'Clean cases, <strong>2 to 3 weeks</strong>. Bridging desks are speed-specialists; <strong>LendInvest</strong> routinely completes in 14 working days where the legal pack is clean. Auction-bought assets with 28-day completion clocks are well within bridging\'s comfort zone.',
      },
      {
        question: "What interest rate should I expect on a Coventry bridge-to-let?",
        answer:
          'Bridge: <strong>0.75 to 1.10% pm</strong> (8.5 to 11.0% pa equivalent). Term-out: <strong>6.5 to 8.5% pa</strong>. The headline cost of the bridge looks high, but over a 12-month value-add play (typical for a Foleshill Road B2 to mixed-use conversion through Coventry City Council\'s determination cycle) it is often the only route that works, and the all-in cost across bridge plus term-out usually beats the alternatives.',
      },
      {
        question: "Can I roll bridge interest into the loan?",
        answer:
          'Yes, most commercial bridges roll interest into the balance rather than requiring monthly servicing. Useful when the asset is not income-producing during the bridge period (typical for a vacant B2 to mixed-use conversion or a Class E to sui generis HMO conversion). Fully-serviced bridges price marginally cheaper because the lender is taking less roll-up risk.',
      },
      {
        question: "Does the same lender provide bridge and term-out?",
        answer:
          'Sometimes (<strong>LendInvest</strong> and <strong>Shawbrook</strong> both do this on a pre-agreed product transfer). Sometimes the bridge is one lender and the term-out is a different specialist or high-street commercial desk; we structure the agreed exit at outset so the term-out lender is identified and pre-aligned before bridge drawdown. On Coventry HMO conversions Paragon, Foundation Home Loans and Aldermore are common term-out destinations.',
      },
      {
        question: "Is commercial bridge-to-let FCA-regulated?",
        answer:
          'No. Commercial bridge-to-let falls outside the Financial Conduct Authority\'s regulated mortgage perimeter in standard cases: limited company SPV borrower, business asset, no residential occupation. We do not hold FCA authorisation because the products we arrange are unregulated. The exception: where the bridge is secured against a property with a residential element that the borrower or an immediate family member will personally occupy, the deal falls into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "What happens with stamp duty across the two stages?",
        answer:
          'Stamp duty land tax is paid at the day-one purchase, when the bridge completes, not at term-out. Term-out is a refinance (no transfer of ownership) so no further SDLT applies. That timing matters for cash-flow planning: you need the SDLT in addition to the bridge deposit at the front end.',
      },
    ],
  },

  "second-charge-commercial-mortgage": {
    slug: "second-charge-commercial-mortgage",
    name: "Second-Charge Commercial Mortgage",
    metaTitle: "Second-Charge Commercial Mortgage Coventry | Specialist Broker",
    metaDescription:
      "Subordinated commercial finance behind your existing first-charge facility. Keep the legacy interest rate intact and raise £100K to £2M against the same Coventry asset. Combined LTV to 75%, interest rates 10 to 14% pa. Capital raise on Coventry industrial portfolios (JLR Tier 1 supply chain) and central commercial freehold equity release. InterBay Commercial, LendInvest, specialist private credit.",
    hero: {
      eyebrow: "Behind senior, £100K to £2M",
      h1: "Second-Charge Commercial Mortgage Coventry",
      lede:
        "Subordinated commercial debt sitting behind your existing first-charge mortgage, secured against the same property. Keep the legacy interest rate and avoid breaking ERCs while raising £100K to £2M. Combined loan-to-value to 70 to 75%, interest rates 10 to 14% pa, 5 to 25 year repayment terms. Active across capital raise on Coventry industrial portfolios (JLR Tier 1 supply chain, Bayton Road and Holbrook Lane stock) and central commercial freehold equity release on Friargate, Cathedral Quarter and Westwood Business Park stock.",
      metrics: [
        { label: "Combined LTV", value: "Up to 75%" },
        { label: "Rate", value: "10 to 14% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£100K to £2M" },
      ],
    },
    whatItIs: {
      h2: "What does sitting behind a senior commercial lender actually mean?",
      body: [
        'A second-charge commercial mortgage sits <strong>behind your existing first-charge facility</strong>, secured against the same property. The senior lender retains priority on the asset; the second-charge lender takes a subordinated position, meaning that in any default scenario, the senior gets repaid in full before the second-charge sees a penny. You keep the existing senior facility intact (and its interest rate) while raising additional debt against the same security.',
        'The use case is narrow but valuable. Typically: your existing first charge is on a competitive legacy interest rate (3.5 to 4.5% from the 2019 to 2021 era) with significant ERCs to break; you need to raise £200K to £2M for working capital, business growth, partner buy-out, deposit on the next industrial unit or onward expansion of a Coventry portfolio; refinancing the whole stack would cost more than the second-charge route. Run the maths and second-charge often wins on a 3-year horizon, particularly where the legacy rate has 18+ months left to run.',
        'It is a smaller, more specialist market than first-charge. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and select private-credit desks are the active second-charge commercial lenders for the Coventry market. Paragon and Together engage on second-charge against HMO portfolios. Pricing reflects the subordinated risk profile: <strong>10 to 14% pa</strong> typically, with arrangement fees of 2 to 3%. Combined loan-to-value (first charge plus second charge) usually capped at <strong>70 to 75%</strong> on owner-occupier and standard investment, occasionally flexed to 80% on strong covenant cases; Coventry lenders read combined LTV carefully on JLR-supply industrial stock where covenant rests on OEM contract continuity and on concentrated HMO blocks where the cover test is more sensitive to void exposure.',
        'Most second-charge commercial lending is taken out by a <strong>limited company</strong> trading entity or SPV with director personal guarantee, and is unregulated commercial lending, not a residential mortgage. The senior lender has to consent to the second charge being registered (a deed of consent at typically £500 to £2K is standard); some clearing bank commercial desks refuse on policy grounds, in which case the route is closed and refinancing the whole stack is the only option. Stamp duty does not apply on a second-charge (no transfer of ownership). Repayment is on a standard amortising basis or, occasionally, interest-only with a balloon at year 5; we structure based on the cash-flow profile of the underlying business. <em>Indicative case seed:</em> a Coventry JLR Tier 1 supplier operating a four-unit industrial portfolio across Bayton Road and Holbrook Lane with a £1.6M legacy first charge at 4.0% (2.5 years left to run) raises £580K of equity via a second-charge at 12% pa to fund tooling capex for a new OEM programme, without disturbing the cheap senior.',
      ],
    },
    howItWorks: {
      h2: "Process: from senior consent to subordinated drawdown",
      steps: [
        { label: "1. Combined-LTV review", detail: "Current first-charge balance, current property valuation, target combined loan-to-value. Most second-charges sit at 70 to 75% combined." },
        { label: "2. First-charge consent check", detail: "Existing senior lender must consent to the second charge being registered. Some refuse on policy; most allow with a deed of consent fee." },
        { label: "3. Indicative terms in 48 hours", detail: "From two to three specialist subordinated desks. Interest rate, LTV, term, fees, conditions." },
        { label: "4. Credit pack", detail: "Standard commercial credit pack plus first-charge documentation. Lenders want clarity on the priority position and any cross-default clauses in the senior." },
        { label: "5. Valuation and intercreditor", detail: "RICS Red Book valuation. Deed of priority or intercreditor agreement between senior and second-charge lenders. Adds 1 to 2 weeks versus first-charge process." },
        { label: "6. Completion and drawdown", detail: "Funds drawn. First-charge facility unaffected. 5 to 7 weeks total typical from indicative to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Profiles where keeping the senior intact is the right call",
      items: [
        "Coventry JLR Tier 1 supplier industrial portfolio operators raising capex capital on Bayton Road (CV7) and Holbrook Lane (CV6) stock without disturbing competitive legacy first charges",
        "Central freehold owners on Friargate, Cathedral Quarter, Cathedral Lanes and Spon Street stock executing equity release without breaking a cheap senior",
        "Westwood Business Park (CV4 8) office freehold owners releasing equity for partner buy-out or onward acquisition",
        "Combined-university HMO portfolio operators raising deposit capital for the next conversion through the Coventry City Council planning pipeline",
        "Borrowers with a competitive legacy first-charge interest rate they cannot afford to break",
        "Trading-business owners raising working capital secured against owner-occupied Coventry premises",
        "Operators with significant ERCs on existing facility making full refinancing uneconomic",
        "Asset-rich borrowers with cashflow pressure needing capital release without facility break",
      ],
    },
    localAngle: {
      h2: "When subordinated debt is doing real work in the Coventry market",
      body: '<strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and select private-credit desks are the active second-charge commercial lenders for Coventry, with Paragon and Together engaging on the HMO portfolio side. The product sees most use on two distinct Coventry profiles. First, <strong>capital raise on Coventry industrial portfolios</strong>: a JLR Tier 1 supplier operating a multi-unit industrial book across Bayton Road, Holbrook Lane and the wider Coventry Gateway corridor needs equity for tooling capex, new OEM programme launch, or onward acquisition through the live UKBIC battery supply-chain pipeline. The second-charge route preserves the original cheap rate against an asset where refinancing the whole stack would trip break costs that outweigh the rate saving. This is one of the two deepest second-charge drivers in the network given Coventry\'s automotive supply chain concentration. Second, <strong>central commercial freehold equity release</strong>: an asset-rich owner of a Friargate Grade A, Cathedral Quarter heritage, Cathedral Lanes mixed-use, Spon Street listed-building or Westwood Business Park freehold raises capital for business growth without breaking the senior. Combined first plus second LTV usually capped at 70 to 75% on owner-occupier; investment assets sometimes flex to 80% combined, with Coventry lenders weighing combined LTV carefully on JLR-supply industrial stock where covenant rests on OEM contract continuity. On a £1.8M owner-occupied Friargate professional services freehold with a £750K legacy first charge at 4% (with 3 years left), a £540K second-charge at 12% costs less in absolute terms than a full refinancing of the £1.29M total at 7.5% with a £36K ERC, by around £22K over three years. We run the same comparison for Coventry industrial portfolio operators, central freehold owners and Earlsdon semi-commercial investors before recommending. See also our <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> route where the whole-stack refinancing actually beats the second-charge maths.',
    },
    faqs: [
      {
        question: "Will my first-charge lender consent to a second charge?",
        answer:
          '<strong>Most will</strong>, with a deed of consent (typical fee £500 to £2K). Some clearing bank commercial desks refuse on policy grounds. Your existing facility documentation will say. We confirm before formally applying for the second charge: wasting credit committee time on a deal the senior will not consent to is the easiest mistake to avoid.',
      },
      {
        question: "Why is second-charge commercial lending more expensive than first-charge?",
        answer:
          'Subordinated risk. In a default scenario the first-charge lender is repaid in full from the asset before the second-charge lender sees anything. The interest rate reflects that. <strong>10 to 14% pa</strong> is the typical Coventry second-charge range, against 6.0 to 9.0% pa for a comparable first-charge.',
      },
      {
        question: "When does second-charge make sense versus full refinancing?",
        answer:
          'When the legacy first-charge rate is materially below current market and the ERC to break is significant. Run the numbers: if (rate saving x remaining term) is less than (ERC + new arrangement fees), second-charge usually wins. We model both routes and recommend the cheaper all-in. On Coventry JLR-supply industrial portfolios this calculation comes up regularly given the 2019 to 2021 vintage of much of the original portfolio debt.',
      },
      {
        question: "Can I get a second-charge against a trading-business premises?",
        answer:
          'Yes, but the lender pool is narrower. Specialist private credit desks cover this; mainstream trading-business lenders rarely take subordinated positions. Pricing is typically 12 to 15% pa given the dual-risk profile (subordinated security plus sector-specific underwrite). Coventry hotel and care-home freeholds along the Cathedral Quarter boutique cluster and the UHCW Walsgrave corridor are common cases in point.',
      },
      {
        question: "Is second-charge commercial regulated?",
        answer:
          'No. Second-charge commercial lending against owner-occupied or investment commercial premises sits outside the Financial Conduct Authority\'s regulated mortgage perimeter. We do not hold FCA authorisation because the products we arrange are unregulated. The exception: where the borrower will personally occupy a residential element of the property, the deal can fall into the regulated second-charge perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "Does stamp duty apply on a second-charge?",
        answer:
          'No, there is no transfer of beneficial ownership on a second-charge (it is a charge against an existing asset, not a purchase). Stamp duty land tax does not apply. Arrangement fees (2 to 3%) and intercreditor legal costs are the meaningful cost on top of interest rate.',
      },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | null {
  return serviceDetails[slug] ?? null;
}
