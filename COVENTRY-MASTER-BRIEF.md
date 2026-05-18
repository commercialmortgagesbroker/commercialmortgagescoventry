# City Market Brief — Coventry

> Shared brief for both Coventry domain PRDs (`commercialmortgagescoventry.co.uk`, `coventrycommercialmortgages.co.uk`).

## City: Coventry, West Midlands

### Snapshot stats (12-month window, dataset refresh 2026-04-27)

- **Median residential price:** £220,000 — same headline as Birmingham at the median, but the Coventry distribution is tighter and skews lower in price-per-sqft, with industrial/automotive land more affordably structured.
- **Residential transactions (12m):** 2,674
- **YoY price change:** +0.9% — the only positive print of the four Midlands cities in this brief (Birmingham, Leicester both negative; Nottingham flat).
- **Planning applications (12m):** dataset records 0 at the city aggregator; raw Coventry City Council Public Access feed not in `data/planning-exports/`. Manual planning anchors used in v1 (see below).
- **Pipeline units / GDV:** not modelled at city aggregator.

> Source: `data/generated/town-stats/west-midlands/coventry.json`

### Sold-data digest (Land Registry, 12m to Feb 2026)

- **Median by type:** D £385,000 / S £265,000 / T £210,000 / F £125,000
- **New build count (12m):** 41
- **New build premium:** **+47.7%** — by far the biggest new-build premium of the four Midlands cities. Reflects suburban-edge new-build delivery (CV4, CV5 north fringes) commanding a meaningful premium over existing stock; relevant for owner-occupier mortgage demand on new estates.
- **Top postcode clusters in recent transactions:** CV1 (city centre) £290K (small sample); CV2 (north-east) £210K–£232K; CV3 (south) £188K–£310K; CV4 (Tile Hill / Westwood Heath) £163K–£625K (a single £625K detached at CV5 6FW pushed the top); CV5 £230K–£625K (Allesley); CV6 (Holbrooks / Foleshill) £80K–£232K; one notable **commercial transaction at CV4 8** under "Ensign Business Centre, Westwood Way" — units 2/3/4/16/17/18 sold at £422,500 leasehold (this appears in Land Registry as "O" — other — which is the proxy commercial flag we capture).

> Source: `data/generated/sold-data/west-midlands/coventry/latest.json`

### Planning data — commercial-mortgage-relevant slice

Coventry City Council's Public Access portal is the canonical source — not currently in `data/planning-exports/`. v1 anchors qualitative content in named regen schemes. v2 enriches with live application IDs once a Coventry feed lands.

- **Friargate** (CCC + Friargate JV with Cannon Kirk) — 14ha mixed-use scheme adjacent to Coventry station. Two Friargate (HMRC), One Friargate (CCC HQ) delivered. Plot 8 / hotel and follow-on plots remain — refinance windows for stabilised lots; new lots come with development finance demand that translates to CM at stabilisation.
- **City Centre South / Coventry Station Masterplan** — the Coventry Station Masterplan delivered improved interchange. City Centre South redevelopment (Shearer Property Regeneration Partners) is the largest Coventry retail-led scheme — multi-phase, mixed-use, retail + leisure + residential. Status: phased delivery. Refinance windows on stabilised retail or leisure space.
- **Coventry Gateway logistics** (south of the city, A45 corridor) — major employment-land delivery; Jaguar Land Rover, Arrival, IKEA distribution — drives industrial-warehouse owner-occupier and investor demand.
- **Whitley business park** — JLR Whitley engineering centre and surrounding business park; office and R&D stock; supplier-led owner-occupier demand on smaller plots.
- **UK Battery Industrialisation Centre (UKBIC), Whitmoor Park** — strategic battery R&D facility; surrounding industrial supply chain drives lender appetite for EV-supplier owner-occupier mortgages.
- **Bishopgate / Lockhurst Lane / Foleshill** — change-of-use volume from industrial / Class B2 to mixed-use and residential conversions; relevant for semi-commercial mortgage lenders.
- **Coventry University estate / Far Gosford Street regeneration** — university-driven retail/F&B demand in CV1 / CV2. Notable change-of-use applications around Far Gosford Street historic high street.
- **Belgrade Theatre / Cathedral Quarter** — leisure-led regeneration, City of Culture (2021) legacy footfall sustained by Coventry Cathedral, Belgrade, Coventry Transport Museum.

### Commercial property anchors

- **Named business parks / industrial estates:** Coventry Business Park (CV4), Westwood Heath / Westwood Business Park (CV4 8), Whitley Business Park (CV3), Ansty Park (CV7 — adjacent), Holbrook Lane industrial (CV6), Bayton Road industrial estate (CV7), Prologis Park Coventry (Ryton), Coventry Gateway / Whitmoor Park (CV3 4), Browns Lane (CV5).
- **Named retail / mixed-use regen schemes:** City Centre South, Friargate, West Orchards, Lower Precinct, Cathedral Lanes, FarGo Village (independent retail/F&B in Far Gosford Street), Coventry Market.
- **Named office quarters / CBD streets:** Friargate (modern CBD), Greyfriars Road, Earl Street, Hertford Street, Bayley Lane (Cathedral Quarter), Whitley business park (out-of-town corporate).
- **Named leisure / hospitality clusters:** Cathedral Quarter (Cathedral, Belgrade, transport museum), Far Gosford Street + FarGo Village (independent F&B), Spon Street (heritage F&B), Earlsdon (suburban F&B).
- **Named healthcare / care home stock concentrations:** University Hospitals Coventry & Warwickshire (UHCW) — Walsgrave (CV2). Care-home stock concentrated north (Holbrooks / Foleshill) and south (Cheylesmore).

### Lender presence in Coventry

Coventry is well-served but thinner on local-RM presence than Birmingham; most Coventry deals route via West Midlands regional desks based in Birmingham.

- **High-street with West Midlands commercial RM coverage including Coventry:** NatWest, Lloyds, HSBC UK, Barclays, Santander Corporate. Regional RM teams cover Coventry from Birmingham desks.
- **Challenger banks:** Allica Bank (active on Coventry SME owner-occupier), Shawbrook (investment + portfolio), Cambridge & Counties (Cambridge-based, strong on East Mids + Warwickshire — Coventry well within their zone), YBS Commercial, HTB, Aldermore, Paragon.
- **Specialist:** Together (semi-commercial, light-refurb commercial bridge-to-term — strong Coventry presence given university-led HMO/semi-comm density), Lendinvest, OakNorth (£2M+ owner-occupier), United Trust Bank, Reliance Bank, Interbay.
- **Local-presence note:** Coventry Building Society HQ is in Coventry but does not run a commercial-mortgage book to brokers — irrelevant to the panel; worth noting for branding clarity (we are not Coventry Building Society).

### Sub-areas to cover (10 launch slugs, suitable for both domains; city-led runs 12)

1. **City Centre / Cathedral Quarter** — CV1. Office, retail, leisure, mixed-use.
2. **Friargate** — CV1 west. Modern CBD, prime office.
3. **Whitley** — CV3. Out-of-town offices, R&D, JLR-adjacent.
4. **Coventry Gateway / Whitmoor / Ansty** — CV3 4 + CV7. Major industrial / logistics.
5. **Westwood Heath / Tile Hill / Canley** — CV4. Business parks, university-edge office, suburban retail.
6. **Earlsdon / Stoneleigh / Cheylesmore** — CV5, CV3. Suburban F&B, professional offices, care-home stock.
7. **Holbrooks / Foleshill / Radford** — CV6. Industrial belt, last-mile, change-of-use volume.
8. **Wyken / Walsgrave / Hawkesbury** — CV2. Hospital-adjacent (UHCW), suburban retail.
9. **Spon End / Coundon** — CV1 west / CV6. Heritage retail, mixed-use.
10. **Far Gosford Street + FarGo Village** — CV1 5. Independent F&B, leisure regen.

Sister/city-led adds: 11. Allesley / Eastern Green (CV5), 12. Willenhall / Stoke Aldermoor (CV3).

### Demand-side signals

- **Largest employers / job clusters:** Jaguar Land Rover (Whitley engineering centre), Coventry City Council, University Hospitals Coventry & Warwickshire (UHCW NHS Trust), Coventry University (~37K students), University of Warwick (~28K students; Warwick campus is technically Coventry CV4), UKBIC, Severn Trent (HQ in Coventry CV1), Arrival, IKEA (Coventry distribution), Amazon (Ryton).
- **University presence:** Coventry University ~37K, Warwick ~28K — combined 65K students drive city-centre F&B, mid-market hotel demand, HMO investment, student-let portfolios. This is the densest student / university-driven CM demand pool in the four-city set.
- **Tourism profile:** City of Culture 2021 legacy; Cathedral, Belgrade Theatre, Transport Museum, FarGo Village. Mid-tier hotel stock added during 2018–2022 (Premier Inn, Travelodge expansions).
- **NHS trust footprint:** UHCW NHS Trust (Walsgrave) — major regional acute trust; drives healthcare property demand including allied-health and care-home stock.
- **Population + working-age trend:** Coventry ~345K, growing — one of the fastest-growing UK cities in the 2011→2021 census window. Working-age cohort expanding due to university growth and JLR / EV supply chain.

### Data gaps

- **Coventry City Council planning feed** — not in `data/planning-exports/`. Public Access portal (`https://planning.coventry.gov.uk/`) needs scraping or PlanIt aggregator pull before launch.
- **Commercial-tagged transactions** — Land Registry "Other" property type is the only commercial proxy in our dataset; one Westwood Way Ensign Business Centre transaction visible in our 12-month sample. Companies House charges register or EG Radius needed for accurate commercial volume.
- **Warwick University CV4 commercial stock** — University of Warwick estate sits in Coventry postcodes but has its own commercial leasing pattern; underwriter-relevant signal not currently captured.
- **Whitley / JLR supplier ecosystem mapping** — Companies House owner-mapping required for accurate Whitley supplier-park CM demand sizing.
