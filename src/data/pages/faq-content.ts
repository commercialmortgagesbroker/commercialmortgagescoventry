/**
 * /faq page content, Commercial Mortgages Coventry.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, coventry, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial-warehouse, semi-commercial shop+flats, healthcare, hospitality and trading-business premises. In the Coventry market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. UHCW Walsgrave catchment dental and professional services, Earlsdon and Far Gosford Street independent F and B operators, Bayton Road and Holbrook Lane JLR Tier 1 and Tier 2 supplier ecosystem industrial trade-business owners, healthcare ancillary across the UHCW catchment, independent retail operators on Far Gosford Street, FarGo Village and Spon Street. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more, including the dense CV1, CV4, CV5 and CV6 HMO portfolios driven by the combined 65,000-student Coventry University and Warwick demand pool. <strong>Trading-business owner-operators</strong>, hotels, restaurants, pubs, day nurseries, care homes, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. A Holbrooks B2-to-mixed-use conversion or a vacant Far Gosford Street retail-to-Class E reposition is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Coventry?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (Cathedral Quarter boutique hotel, Earlsdon restaurant, UHCW Walsgrave care home) sits tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions, and the JLR Tier 1 and Tier 2 supplier ecosystem where the underlying contracts are visible. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a JLR Tier 1 supplier covenant on the Bayton Road belt or a UHCW-adjacent healthcare tenant prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank, HTB and Cambridge and Counties have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Coventry commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors (UHCW Walsgrave dental, healthcare ancillary, Westwood Business Park professional offices): <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including JLR Tier 1 supplier covenants on the Bayton Road and Holbrook Lane industrial belt and Coventry Gateway B8 logistics investment: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat across Far Gosford Street, Spon Street and the CV6 conversion belt: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (Cathedral Quarter boutique hotel, Earlsdon F and B, Far Gosford Street independent F and B, UHCW Walsgrave care home): <span class="figure-inline">7.5 to 9.0 percent</span> pa. HMO portfolio refinance across CV1, CV4, CV5 and CV6: <span class="figure-inline">7.0 to 8.5 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record.',
      },
      {
        question: "What fees should I expect on a Coventry commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (Cathedral Quarter boutique hotel, Friargate Grade A office, UHCW Walsgrave care home, listed-building work in the Cathedral Quarter conservation area, multi-let industrial at Coventry Gateway) and large investment lots cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Coventry?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Coventry. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above on Far Gosford Street, Spon Street or Earlsdon, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Coventry?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (Cathedral Quarter boutique hotel, Earlsdon F and B, UHCW Walsgrave care home) and HMO portfolio refinance reflecting the multi-property redemption sequencing across CV1, CV4, CV5 and CV6. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>28 working days</strong> from initial enquiry on a Westwood Business Park professional office acquisition, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same Midlands valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Midlands valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Coventry, Warwick and wider West Midlands commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant's accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Coventry-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Coventry commercial property?",
        answer:
          'One planning authority covers the entire Coventry city commercial market. <strong>Coventry City Council</strong> is the unitary planning authority and the Public Access portal sits at <a href="https://planning.coventry.gov.uk">planning.coventry.gov.uk</a>. The portal covers the full CV1 to CV6 city footprint, from the Cathedral Quarter, Friargate and the Coventry Station Masterplan area through Far Gosford Street, FarGo Village, Earlsdon, Cheylesmore, Westwood Heath, Tile Hill, Canley, Holbrooks, Foleshill, Radford, Wyken, Walsgrave, Hawkesbury, Spon End and Coundon. Filter by application type "Full" and use class E(a) to E(g), Sui Generis (hotel, pub, hot-food takeaway) or C4 / Sui Generis (HMO) to surface commercial-relevant decisions. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown. CV7 covers the Ansty Park and Bedworth fringe and crosses into the Nuneaton and Bedworth Borough Council portal at the eastern edge.',
      },
      {
        question: "Which Coventry postcodes do you cover?",
        answer:
          'The full CV postcode footprint that touches the Coventry commercial market. <strong>CV1</strong> covers the City Centre, Cathedral Quarter, Friargate and the Coventry Station Masterplan area. <strong>CV2</strong> covers Stoke, Wyken, Walsgrave, Hawkesbury and the UHCW Walsgrave hospital catchment in the north-east. <strong>CV3</strong> covers Whitley, Cheylesmore, Willenhall and Stoke Aldermoor in the south. <strong>CV4</strong> covers Tile Hill, Canley, Westwood Heath and the University of Warwick campus. <strong>CV5</strong> covers Allesley, Eastern Green and Spon End on the western edge. <strong>CV6</strong> covers Holbrooks, Foleshill, Radford and Coundon, the industrial-belt-and-conversion catchment. <strong>CV7</strong> covers the Coventry Gateway, Whitmoor Park and Ansty fringe across into Warwickshire. We also cover the wider Warwickshire SME catchment including Warwick, Leamington Spa, Kenilworth, Rugby and Nuneaton, all of which sit inside the same regional lender pool.',
      },
      {
        question: "How does JLR Tier 1 and Tier 2 automotive supply chain industrial lender appetite work in Coventry?",
        answer:
          'Jaguar Land Rover at Whitley anchors a substantial Tier 1 and Tier 2 supplier ecosystem across Bayton Road industrial estate (CV7), Holbrook Lane industrial (CV6) and Browns Lane (CV5), with adjacent EV-supply-chain demand driven by the UK Battery Industrialisation Centre (UKBIC) at Whitmoor Park. Lenders read JLR-adjacent supply chain covenants and the EV transition demand signal favourably because the underlying contracts are long-term and the wider Midlands automotive cluster is sticky. Allica Bank, HTB and Aldermore lead the owner-occupier and SME freehold competition on this corridor; YBS Commercial is strong on stabilised investment lots; <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> compete on multi-let industrial. Pricing for a stabilised single-let B2 unit at Bayton Road with four years of unexpired lease to a Tier 1 supplier covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 65 to 70 percent LTV. Multi-let estates and shorter-WAULT cases sit wider.',
      },
      {
        question: "How active is Coventry on HMO conversion finance compared to the wider network?",
        answer:
          'Coventry is the densest HMO conversion market in our four-city Midlands set (Birmingham, Leicester, Nottingham, Coventry). The combined 65,000-student demand pool from Coventry University (c. 37,000) and the University of Warwick (c. 28,000 students, Warwick campus sits inside Coventry CV4), the dense terraced CV1, CV4, CV5 and CV6 stock and the Coventry City Council additional HMO licensing scheme combine to drive the most active C3 to C4 and C4 to sui generis 7-bed-plus change-of-use planning pipeline of any Midlands city we cover. Stabilised HMO portfolios with existing C4 or sui generis consents are financeable cleanly at 65 to 75 percent LTV. <strong>InterBay Commercial</strong>, Paragon, Together, Foundation Home Loans and United Trust Bank lead the lender pool; pricing for a stabilised portfolio: <span class="figure-inline">7.0 to 8.0 percent</span> pa at 70 to 75 percent LTV. Speculative C3-to-C4 conversion finance is much harder to place without an existing planning consent in hand.',
      },
      {
        question: "How does the Cathedral Quarter and City of Culture leisure cluster price?",
        answer:
          'The Cathedral Quarter is Coventry\'s flagship heritage-and-leisure anchor, with Coventry Cathedral, the Belgrade Theatre and Coventry Transport Museum supported by sustained year-round footfall from the City of Culture 2021 legacy and the wider Far Gosford Street, FarGo Village, Spon Street and Earlsdon F and B catchment. The lender pool tightens to hospitality specialists on Cathedral Quarter boutique hotel and restaurant-with-rooms cases: <strong>Cynergy Bank</strong>, Reliance Bank, OakNorth and Foundation Home Loans lead, each pricing on EBITDA cover, ADR, occupancy track record and the building condition. Pricing for a stabilised independent restaurant-with-rooms or boutique hotel in the Cathedral Quarter or Bayley Lane catchment with three years of clean accounts: <span class="figure-inline">7.5 to 8.5 percent</span> pa at 65 to 70 percent LTV on a 15 to 20 year term. Listed-building work in the Cathedral Quarter conservation area triggers a specialist heritage valuation premium.',
      },
      {
        question: "How does UHCW Walsgrave healthcare ancillary lender appetite work?",
        answer:
          'University Hospitals Coventry and Warwickshire (UHCW) at Walsgrave (CV2) is the dominant regional acute trust for Coventry and Warwickshire, and the wider Walsgrave, Wyken and Hawkesbury corridor concentrates a substantial private-healthcare freehold catchment alongside care-home stock that extends into Holbrooks and Cheylesmore. Dental, GP, pharmacy and allied-healthcare freeholds with NHS contract evidence or a stable private-fee mix are a defensive sector for lenders. <strong>Cynergy Bank</strong>, HTB and Cambridge and Counties are the active desks on healthcare and dental owner-occupier; Cambridge and Counties prices particularly cleanly on Warwickshire SME freeholds. Pricing for a stabilised dental owner-occupier in the UHCW catchment with two years of clean accounts and an NHS GDS contract: <span class="figure-inline">6.0 to 7.0 percent</span> pa at 70 to 75 percent LTV on a 20 to 25 year term. The lender underwrites the CQC or GDC rating, the contract length and the principal\'s CV.',
      },
      {
        question: "Is Coventry Building Society on your lender panel?",
        answer:
          'No. Coventry Building Society is headquartered in Coventry but does not run a commercial mortgage book to brokers, so we do not place commercial deals with it. We mention this only because the name confusion comes up on the first call, and we are not Coventry Building Society. The Coventry commercial mortgage lender pool is led on the high-street side by NatWest, Lloyds, HSBC UK, Barclays and Santander out of the Birmingham regional desks that cover Coventry, and on the challenger side by Allica Bank, HTB, YBS Commercial and Aldermore, with Cambridge and Counties consistently strong on Warwickshire SME freeholds and the wider Coventry travel-to-work area. Paragon, Together, Foundation Home Loans and United Trust Bank lead the HMO portfolio and bridge-to-let side. Reliance Bank and OakNorth round out the Cathedral Quarter hospitality and £2M-plus owner-occupier side.',
      },
    ],
  },
];
