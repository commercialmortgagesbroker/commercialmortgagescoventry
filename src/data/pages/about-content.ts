/**
 * /about page content, Commercial Mortgages Coventry.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-18): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Coventry, the West Midlands and Warwickshire",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £250M+ of unregulated commercial mortgages arranged across automotive supply chain industrial owner-occupier, Coventry Gateway logistics investment, HMO portfolio refinance, Cathedral Quarter leisure, University Hospitals Coventry and Warwickshire healthcare ancillary, Friargate office investment and Far Gosford Street semi-commercial deals. Placed with the eight named lenders below and another eighty across our panel, including Allica Bank, HTB, YBS Commercial and Aldermore on the owner-occupier and SME freehold side and Paragon, Together, Foundation Home Loans and United Trust Bank on the HMO portfolio and bridge-to-let side, each active across the CV postcode footprint and the wider West Midlands and Warwickshire corridor. Cambridge and Counties is consistently strong on Warwickshire SME freeholds and prices keenly across the wider Coventry travel-to-work area.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Coventry commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;250M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector relevant to the Coventry market: Bayton Road and Holbrook Lane automotive supply chain industrial owner-occupier, Coventry Gateway and Prologis Park Coventry B8 logistics investment, Friargate Grade A office investment refinance, FarGo Village and Far Gosford Street independent F and B owner-occupier and semi-commercial, University Hospitals Coventry and Warwickshire (UHCW) Walsgrave catchment dental and allied-healthcare owner-occupier, Cathedral Quarter boutique hotel acquisition, Earlsdon professional services and F and B parade refinance, Westwood Business Park multi-let office portfolio refinance, and Holbrooks B2-to-mixed-use bridge-to-let conversion. Our work covers the CV1 to CV7 postcode footprint across the city and the wider Coventry and Warwickshire travel-to-work area, including Warwick, Leamington Spa, Kenilworth, Rugby and Nuneaton, all of which sit comfortably inside the same regional lender pool. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      'Coventry has three specialisms that shape our weekly deal flow. <strong>Automotive supply chain industrial and EV-supply-chain owner-occupier.</strong> Jaguar Land Rover (Whitley engineering centre), the JLR Tier 1 and Tier 2 supplier ecosystem clustered across Bayton Road, Holbrook Lane and Browns Lane, the UK Battery Industrialisation Centre (UKBIC) at Whitmoor Park, and the wider EV battery supply chain anchor an industrial owner-occupier and investment pipeline lenders price favourably on the long-term demand signal. Allica Bank, HTB, YBS Commercial and Aldermore lead the owner-occupier and SME freehold competition on this corridor; Cambridge and Counties is consistently strong on Warwickshire-side SME freeholds, including Ansty Park and the Rugby and Warwick fringe. <strong>HMO portfolio and student-let conversion.</strong> Coventry University (c. 37,000 students) and the University of Warwick (c. 28,000 students, Warwick campus sits inside Coventry CV4) generate a combined 65,000-student catchment, the densest HMO conversion demand pool in our four-city Midlands network across Birmingham, Leicester, Nottingham and Coventry. The dense terraced CV1, CV4, CV5 and CV6 stock and the Coventry City Council additional HMO licensing scheme combine to drive an active C3 to C4 and C4 to sui generis 7-bed-plus change-of-use planning pipeline. Paragon, Together, Foundation Home Loans and United Trust Bank lead the lender pool on stabilised HMO portfolio refinance where the C4 or sui generis consent is already in hand. <strong>Cathedral Quarter and City of Culture leisure.</strong> The Cathedral Quarter cluster (Coventry Cathedral, Belgrade Theatre, Coventry Transport Museum), Far Gosford Street and FarGo Village independent F and B regen, Spon Street heritage F and B and Earlsdon suburban F and B together drive a defensible leisure footprint anchored by sustained City of Culture 2021 legacy footfall. Reliance Bank, OakNorth and Foundation Home Loans are active across hospitality and mixed-use cases in this catchment.',

      "<strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Our consumer credit and regulated mortgage referrals are handled by FCA-authorised partners. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope. We are also not Coventry Building Society. Coventry Building Society is headquartered in Coventry but does not run a commercial mortgage book to brokers, so it does not sit on our panel; we mention this only because the name confusion comes up on the first call.",
    ],
  },

  numbers: [
    { value: "£250M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms.",
      },
      {
        label: "Coventry market depth",
        detail:
          "We know the West-Midlands-active and Warwickshire-active lender desks personally. NatWest, Lloyds, HSBC UK, Barclays and Santander commercial banking out of the Birmingham regional desks that cover Coventry, with named relationship managers we speak to weekly. Shawbrook, InterBay Commercial and LendInvest cover the central retail, semi-commercial and HMO stock from the Friargate and Cathedral Quarter cluster through Far Gosford Street and FarGo Village into the CV4, CV5 and CV6 student-let and conversion belt. Cynergy Bank prices well on the Cathedral Quarter boutique hospitality cluster and on healthcare ancillary across the UHCW Walsgrave catchment. Allica Bank, HTB and Aldermore take the owner-occupier file from UHCW dental and Earlsdon professional services through to Bayton Road, Holbrook Lane and Whitley JLR-adjacent industrial. YBS Commercial leads on stabilised industrial investment along the Coventry Gateway, Prologis Park and Ansty Park corridor; Cambridge and Counties prices keenly on Warwickshire SME freeholds and is consistently strong on Ansty Park, Warwick, Kenilworth and Rugby cases; Paragon, Together, Foundation Home Loans and United Trust Bank lead the lender pool on CV1, CV4, CV5 and CV6 HMO portfolio refinance, with Together particularly active given the university-led HMO and semi-commercial density. Reliance Bank and OakNorth round out the Cathedral Quarter hospitality and £2M-plus owner-occupier side. We know which Midlands and Warwickshire RICS valuers each lender prefers and which comparable evidence the local panel will accept.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Coventry broker",
    body: 'The Coventry commercial mortgage market has genuine regional nuance: <strong>Coventry City Council</strong> as the unitary planning authority with its portal at <a href="https://planning.coventry.gov.uk">planning.coventry.gov.uk</a> covering the full CV1 to CV6 city footprint plus CV7 (Ansty, Bedworth fringe) under the Coventry travel-to-work area; the Jaguar Land Rover Whitley engineering centre and the JLR Tier 1 and Tier 2 supplier ecosystem clustered across Bayton Road, Holbrook Lane, Browns Lane and the Coventry Gateway / Whitmoor Park (CV3 4) employment-land corridor anchoring the automotive supply chain industrial belt; the UK Battery Industrialisation Centre (UKBIC) at Whitmoor Park as the strategic EV battery R and D anchor driving lender appetite for EV-supplier owner-occupier mortgages; Friargate as the modern CBD with Two Friargate (HMRC), One Friargate (CCC HQ) and follow-on plots; the Coventry Station Masterplan and City Centre South retail-led redevelopment by Shearer Property Regeneration Partners as the largest multi-phase mixed-use scheme; Coventry Gateway logistics, Prologis Park Coventry (Ryton) and Ansty Park as the major B8 logistics and industrial-investment anchors; Westwood Business Park (CV4 8) as the main university-edge office cluster; the Cathedral Quarter (Coventry Cathedral, Belgrade Theatre, Coventry Transport Museum) and the Far Gosford Street and FarGo Village independent F and B and leisure regen catchment as the City of Culture 2021 legacy hospitality footprint; University Hospitals Coventry and Warwickshire (UHCW) at Walsgrave as the dominant healthcare anchor driving dental and allied-healthcare freehold demand in CV2; and the dense CV1, CV4, CV5 and CV6 terraced HMO conversion catchment that, combined with the 65,000-student Coventry University and Warwick demand pool, makes Coventry the densest student-driven HMO conversion city in our four-city Midlands set. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Allica Bank, HTB, YBS Commercial, Aldermore, Paragon, Together, Foundation Home Loans, United Trust Bank, Reliance Bank and OakNorth, plus Cambridge and Counties which prices consistently keenly on Warwickshire SME freeholds and the wider Coventry travel-to-work area, plus the long tail of specialist commercial mortgage desks. Cambridge and Counties is the desk we lean on most often for Warwickshire-side SME freeholds where the borrower has clean filed accounts and a coherent deposit story. We do not work with Coventry Building Society as a commercial mortgage lender; Coventry Building Society is headquartered in Coventry but does not run a commercial book to brokers. National brokers tend to default to whichever desk paid the broker conference fee that quarter. We default to whichever desk will fund your deal cleanest, and we will tell you which one that is on the first call.',
  },
};
