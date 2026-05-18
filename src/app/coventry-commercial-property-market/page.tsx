/**
 * Editorial flagship, the Coventry commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Coventry commercial
 * property market 2026". Designed to host the contextual outbound link
 * to the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/west-midlands/coventry
 * inside the lender-pool section, framed as the wider regional network
 * we sit inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only
 * the 8 named lenders are bolded on this site: Shawbrook, InterBay
 * Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays and
 * Santander. Cambridge and Counties is named without bolding but
 * emphasised as the strong Warwickshire-focused challenger. Other panel
 * names (Allica Bank, HTB, YBS Commercial, Aldermore, Paragon, Together,
 * Foundation Home Loans, United Trust Bank, Reliance Bank, OakNorth)
 * are named without bolding. Rates 6.0 to 9.0% pa overall. No
 * FCA-authorisation claims. Commercial mortgages on non-dwelling
 * property are unregulated.
 *
 * Data: real Coventry economy figures (c. 345,000 population, City of
 * Culture 2021 legacy, Jaguar Land Rover Whitley engineering centre
 * and the UK Battery Industrialisation Centre at Whitmoor Park, the
 * combined Coventry University and University of Warwick c. 65,000
 * student footprint, Friargate modern CBD, City Centre South retail
 * regeneration, Coventry Gateway logistics corridor, Ansty Park
 * advanced-engineering cluster, Severn Trent HQ and University
 * Hospitals Coventry and Warwickshire at Walsgrave) and the sold-data
 * digest from the CV1 to CV7 postcode footprint.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/coventry-commercial-property-market`;
const publishDate = "2026-05-18";
const modifiedDate = "2026-05-18";

const westMidlandsBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/west-midlands/coventry";

const title = "Coventry Commercial Property Market 2026";
const description =
  "An editorial read on the Coventry commercial property market at mid-2026: the Jaguar Land Rover Whitley engineering anchor, the UK Battery Industrialisation Centre at Whitmoor Park, the Coventry Gateway logistics corridor, the Friargate modern CBD and the Cathedral Quarter City of Culture legacy, the City Centre South retail regeneration, the Far Gosford Street and FarGo Village independent leisure spine, the combined Coventry University and University of Warwick 65,000-student HMO catchment across CV1, CV4, CV5 and CV6, the University Hospitals Coventry and Warwickshire healthcare cluster at Walsgrave and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Coventry`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Coventry regeneration anchors and commercial-mortgage-relevant
// planning highlights, drawn from the master brief at mid-2026. Each
// entry reflects a publicly-documented commercial-relevant scheme or
// regeneration cluster inside the city footprint. The Coventry City
// Council Public Access feed is not yet in the network data lake, so
// these are anchored on the named regeneration schemes rather than
// live application IDs.
const planningHighlights = [
  {
    ref: "Friargate, CV1",
    address: "Friargate modern CBD, adjacent to Coventry station",
    proposal:
      "The 14-hectare mixed-use scheme delivered by the Friargate JV with Cannon Kirk alongside Coventry City Council. Two Friargate carries the HMRC regional hub, One Friargate carries the Coventry City Council headquarters. Plot 8, the planned hotel and the follow-on commercial plots remain on the delivery programme through 2026 and 2027, with a steady refinance window opening on the stabilised lots.",
  },
  {
    ref: "City Centre South, CV1",
    address: "City Centre South retail-led regeneration",
    proposal:
      "The Shearer Property Regeneration Partners scheme is the largest Coventry retail-led redevelopment, a multi-phase mixed-use rebuild covering retail, leisure and residential floor plate inside the central spine south of the Cathedral Quarter. Phased delivery through 2026 and 2027 with refinance windows opening on stabilised retail and leisure lots once trading volume settles.",
  },
  {
    ref: "Coventry Gateway, CV3",
    address: "Coventry Gateway logistics, A45 corridor",
    proposal:
      "The major employment-land delivery on the southern flank of the city with Jaguar Land Rover, Arrival, IKEA distribution and wider logistics occupiers on the floor plate. The structural anchor of the Coventry industrial and logistics market, driving owner-occupier and investor demand on warehouse, last-mile and trade-counter freehold across the A45 corridor.",
  },
  {
    ref: "UK Battery Industrialisation Centre, CV3",
    address: "Whitmoor Park, UKBIC strategic battery R&D facility",
    proposal:
      "The strategic national battery industrialisation facility sitting at Whitmoor Park inside the Coventry Gateway footprint. The surrounding EV and battery supply chain occupier base drives lender appetite for owner-occupier industrial and trade-counter freehold across the wider Whitmoor Park, Whitley and Ansty Park advanced-engineering cluster.",
  },
  {
    ref: "Whitley business park, CV3",
    address: "Jaguar Land Rover Whitley engineering centre",
    proposal:
      "The Jaguar Land Rover Whitley engineering centre alongside the wider Whitley business park footprint. The dominant Coventry R&D and office anchor outside the central CBD, with a supplier-led occupier base across smaller plots on the Whitley estate. Owner-occupier acquisition demand stays steady through the EV transition cycle.",
  },
  {
    ref: "Cathedral Quarter and Far Gosford Street, CV1",
    address: "Cathedral Quarter, Far Gosford Street and FarGo Village",
    proposal:
      "The City of Culture 2021 legacy footprint covering the Cathedral, the Belgrade Theatre, the Coventry Transport Museum and the Bayley Lane heritage office cluster, alongside the Far Gosford Street independent retail spine and the FarGo Village leisure cluster. Steady change-of-use application volume through the Far Gosford Street historic high street.",
  },
];

const comparables = [
  {
    headline: "Coventry Gateway logistics warehouse owner-occupier acquisition",
    detail:
      "An owner-occupier acquiring a 28,000 sq ft last-mile distribution unit on the Coventry Gateway estate off the A45, with three years of clean automotive supply chain trading accounts and a Jaguar Land Rover tier-one contract underpinning the trading covenant.",
    terms: "65% LTV · 6.95% pa · 5-year fix · 20-year term · Shawbrook",
  },
  {
    headline: "Friargate multi-let office investment refinance",
    detail:
      "An investor holding a 35,000 sq ft Class E office investment on the Friargate modern CBD plate adjacent to Coventry station, refinancing off a 2021 five-year fix. Stabilised multi-tenant occupier base with regional professional services and naval and automotive supply chain covenants underpinning the rent roll.",
    terms: "65% LTV · 7.25% pa · 5-year fix · 20-year term · Cynergy Bank",
  },
  {
    headline: "Earlsdon CV5 large-format HMO portfolio refinance",
    detail:
      "An investor refinancing four large-format sui generis seven and eight-bedroom HMO freeholds across Earlsdon CV5 and the Westwood Heath CV4 university-edge belt onto a single portfolio loan. Stabilised combined Coventry University and University of Warwick catchment, three years of HMO trading.",
    terms: "70% LTV · 7.45% pa · 5-year fix · 25-year term · InterBay Commercial",
  },
];

export default function CoventryCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Coventry commercial property market 2026",
            href: "/coventry-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Coventry Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Coventry commercial
                property market at mid-2026. The Jaguar Land Rover
                Whitley engineering centre and the wider automotive
                R&amp;D cluster running through Ansty Park. The UK
                Battery Industrialisation Centre at Whitmoor Park
                anchoring the national EV and battery supply chain.
                The Coventry Gateway logistics corridor on the A45
                feeding last-mile and trade-counter demand. The
                Friargate modern CBD adjacent to Coventry station and
                the City Centre South retail-led regeneration. The
                Cathedral Quarter City of Culture 2021 legacy
                footprint. The Far Gosford Street and FarGo Village
                independent leisure spine. The combined Coventry
                University and University of Warwick 65,000-student
                HMO catchment across the CV1, CV4, CV5 and CV6
                postcodes. The University Hospitals Coventry and
                Warwickshire healthcare anchor at Walsgrave. The
                lender pool that funds it. Where rates sit now and
                what we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Coventry
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>18 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>19 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Coventry is a unitary authority on the eastern
                    edge of the West Midlands conurbation, sitting on
                    the M6, M69 and M40 spine with a population of
                    roughly{" "}
                    <span className="figure-inline">345,000</span> and
                    one of the fastest-growing working-age cohorts of
                    any UK city through the last census cycle. The
                    economy is anchored by the Jaguar Land Rover
                    Whitley engineering centre, the UK Battery
                    Industrialisation Centre at Whitmoor Park, the
                    Coventry Gateway logistics corridor and a
                    combined Coventry University and University of
                    Warwick student catchment of around{" "}
                    <span className="figure-inline">65,000</span>.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    The new-build premium across the city sits at{" "}
                    <span className="figure-inline">+47.7%</span>{" "}
                    over existing stock, the largest new-build premium
                    of any West Midlands city in our network. The
                    Friargate modern CBD adjacent to Coventry station
                    carries the prime office plate, the City Centre
                    South redevelopment carries the retail-led
                    regeneration spine, and the Coventry Gateway
                    logistics estate carries the dominant industrial
                    and warehouse anchor on the southern flank.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    The combined{" "}
                    <span className="figure-inline">65,000</span>{" "}
                    student footprint from Coventry University at
                    around 37,000 and the University of Warwick at
                    around 28,000 makes Coventry the densest
                    university-driven commercial mortgage demand
                    pool in the four-city West Midlands set. Far
                    Gosford Street, Holbrooks and Foleshill CV6,
                    Earlsdon CV5 and the Westwood Heath CV4
                    university-edge belt carry the densest HMO
                    conversion stock, with sui generis seven and
                    eight-bedroom configurations the recurring
                    application shape.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Friargate, City Centre South, Coventry Gateway,
                    the UK Battery Industrialisation Centre at
                    Whitmoor Park, the Jaguar Land Rover Whitley
                    engineering centre, Ansty Park and the Cathedral
                    Quarter are the seven anchors of the Coventry
                    regeneration and innovation spine through to
                    2027. The Coventry Gateway logistics corridor and
                    UKBIC together are the single largest driver of
                    industrial and trade-counter commercial mortgage
                    demand in the city.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    Median residential price across the city sits at{" "}
                    <span className="figure-inline">&pound;220,000</span>{" "}
                    on the latest twelve-month sold data with a
                    flat-to-positive reading of{" "}
                    <span className="figure-inline">+0.9%</span>{" "}
                    year on year, the only positive print of the four
                    Midlands cities in our network this cycle. Twelve-month
                    residential turnover sits at around{" "}
                    <span className="figure-inline">2,674</span>{" "}
                    transactions, with active churn through the CV6
                    Holbrooks and Foleshill terraces, the CV5
                    Earlsdon and Allesley belt, the CV4 Tile Hill
                    and Westwood Heath flank and the CV1 city-centre
                    flatted stock.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 Coventry commercial mortgage rates sit
                    at{" "}
                    <span className="figure-inline">6.0 to 9.0%</span>{" "}
                    pa across the eight main product types.
                    Owner-occupier industrial and trade-counter on
                    the automotive and battery supply chain runs 60
                    to 70 percent LTV at the stronger end of the
                    range. Retail and office investment runs 65 to
                    75 percent LTV. Student and professional HMO
                    refinance runs 65 to 75 percent LTV. Hospitality
                    trading-business runs 60 to 70 percent LTV at
                    the higher pricing end.{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong> are the eight on our
                    active panel, with Cambridge and Counties, the
                    Cambridge-based Warwickshire-focused challenger,
                    sitting alongside on the wider pool as one of
                    the strongest Coventry relationship names.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Coventry economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Coventry in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn
                from Coventry City Council, the published Jaguar Land
                Rover and University Hospitals Coventry and
                Warwickshire employment base, the combined Coventry
                University and University of Warwick student roll,
                ONS sub-national indicators, the 2021 census and
                Land Registry sold data for the CV1 through CV7
                postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  345K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  City population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Coventry City Council unitary boundary
                  at the latest mid-year estimate, on one of the
                  fastest-growing UK city populations through the
                  last census cycle.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  65K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined student roll
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Coventry University at around 37,000 and the
                  University of Warwick at around 28,000, the
                  densest university-driven commercial mortgage
                  demand pool in the four-city Midlands set.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  +47.7%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  New-build premium
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  New-build over existing stock across the city,
                  the largest new-build premium of any West Midlands
                  city in our network and a meaningful signal for
                  owner-occupier mortgage demand on new estates.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;220K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Median res price
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month median across the CV1 through CV7
                  postcodes, a proxy for general market temperature
                  on a terraced and semi-detached dominant
                  residential stock.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  2,674
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Res transactions
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month residential turnover across the
                  city, with active churn through the CV6 Holbrooks
                  and Foleshill terraces, the CV5 Earlsdon belt and
                  the CV4 Tile Hill and Westwood Heath flank.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  +0.9%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Year on year
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Year-on-year change in median residential price,
                  the only positive print of the four Midlands
                  cities in our network this cycle, reflecting the
                  structural depth of the JLR and UKBIC employer
                  base.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  41
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  New build count
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month new build delivery count across the
                  city, reflecting suburban-edge new-build delivery
                  on the CV4 and CV5 fringes commanding a premium
                  over existing stock.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  60min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Avanti West Coast service from Coventry station
                  to London Euston on the West Coast Main Line,
                  with the M6, M69 and M40 running through the
                  city onto the wider Midlands and London corridor.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Coventry City Council, Jaguar Land Rover and
            University Hospitals Coventry and Warwickshire published
            employment data, combined Coventry University and
            University of Warwick student roll, ONS sub-national
            economic indicators, the 2021 census and Land Registry
            sold data for the CV1 through CV7 postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Coventry at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Coventry at a glance: a 345,000-population West
                Midlands city, the Jaguar Land Rover and UK Battery
                Industrialisation Centre engineering anchor, the City
                of Culture 2021 legacy and a combined 65,000-student
                university footprint.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Coventry
                  commercial property market at mid-2026. We have
                  written it for owner-occupiers and investors
                  looking at automotive and battery supply chain
                  industrial stock along the Coventry Gateway
                  corridor and Whitmoor Park, hospitality operators
                  thinking about buying or refinancing on the
                  Cathedral Quarter, Far Gosford Street and the
                  Earlsdon suburban food and beverage spine,
                  investors holding student and professional HMO
                  stock through the CV1 Far Gosford Street fringe,
                  the CV4 Westwood Heath university-edge belt and
                  the CV5 Earlsdon and CV6 Foleshill terraced
                  conversion belts, retail and food and beverage
                  operators on the City Centre South regeneration
                  and the Cathedral Lanes and Lower Precinct retail
                  spine, office occupiers watching the Friargate
                  modern CBD plate and the Whitley R&amp;D cluster,
                  healthcare investors holding stock on the
                  University Hospitals Coventry and Warwickshire
                  halo at Walsgrave and developer-investors watching
                  the City Centre South delivery and the wider
                  Friargate follow-on lots. The aim is practical:
                  what is happening in each part of the market,
                  where lender appetite sits in 2026, what the rate
                  range is across each product and how we read the
                  Coventry pipeline through to the end of 2027. The
                  voice is first-person plural because we sit across
                  deals every week, not because we are pretending to
                  speak for anyone else. Where we name a lender, it
                  is one of the eight on our active panel that we
                  quote against routinely on Coventry deals, with
                  the wider ninety-strong network sitting behind
                  that for the automotive supply chain, hospitality,
                  HMO portfolio and specialist cases.
                </p>
                <p>
                  Coventry is a unitary authority on the eastern
                  edge of the West Midlands conurbation, sitting on
                  the national motorway spine where the M6, M69 and
                  M40 converge with the A45 and the A46 ring road
                  feeding the wider Midlands logistics labour shed.
                  The city population sits at roughly 345,000 and
                  has been one of the fastest-growing UK city
                  populations through the 2011 to 2021 census
                  window, driven by university growth and the
                  expanding Jaguar Land Rover and EV supply chain
                  employer base. Coventry station sits on the West
                  Coast Main Line with Avanti West Coast services
                  running to London Euston in around 60 minutes and
                  cross-country services running through to
                  Birmingham, Leamington Spa and beyond. The city
                  is one of three central UK locations inside a
                  two-hour drive of two-thirds of the UK
                  population, which is why the Coventry Gateway
                  logistics corridor on the A45 has emerged as one
                  of the dominant Midlands distribution clusters.
                </p>
                <p>
                  The economy is anchored by four structural
                  pillars. Advanced engineering and automotive is
                  the first and the most structurally important.
                  The Jaguar Land Rover Whitley engineering centre
                  on the southern flank of the city carries the
                  dominant automotive R&amp;D headcount alongside
                  the wider supplier-led occupier base on the
                  Whitley business park and the adjacent Ansty Park
                  advanced-engineering cluster, which carries
                  Rolls-Royce and the Manufacturing Technology
                  Centre. The UK Battery Industrialisation Centre at
                  Whitmoor Park, the strategic national battery
                  R&amp;D facility inside the Coventry Gateway
                  footprint, anchors the EV and battery supply
                  chain demand that feeds the wider Holbrook Lane,
                  Bayton Road and Prologis Park Coventry industrial
                  occupier base. The cluster is the structural
                  backbone of the Coventry industrial market and
                  underpins the lender stance on industrial freehold
                  and owner-occupier covenant on automotive and
                  battery supply chain assets.
                </p>
                <p>
                  Higher education is the second pillar. Coventry
                  University carries around 37,000 students across
                  the central CV1 campus footprint, and the
                  University of Warwick carries around 28,000
                  students across the Warwick campus, which
                  technically sits inside the Coventry CV4 postcode
                  on the western edge of the city. The combined
                  65,000 student footprint is the densest
                  university-driven commercial mortgage demand pool
                  in the four-city Midlands set, and it drives the
                  deepest sui generis HMO conversion pipeline in
                  the network outside the South Coast. The Far
                  Gosford Street CV1 fringe carries the central
                  HMO and shop-with-HMO-above conversion stock; the
                  CV4 Westwood Heath and Tile Hill belt sitting
                  next to the Warwick campus carries the
                  university-edge professional HMO stock; the CV5
                  Earlsdon belt carries the leafy professional
                  sharer pool; and the CV6 Holbrooks and Foleshill
                  terraces pick up the cheaper student and worker
                  HMO flow.
                </p>
                <p>
                  Leisure, healthcare and corporate occupiers round
                  out the picture. The City of Culture 2021 legacy
                  underpins the Cathedral Quarter footfall, with
                  Coventry Cathedral, the Belgrade Theatre and the
                  Coventry Transport Museum carrying the central
                  tourism draw. The Far Gosford Street independent
                  retail spine and the FarGo Village leisure
                  cluster carry the working alternative-economy
                  hospitality flank. University Hospitals Coventry
                  and Warwickshire at Walsgrave in CV2 is the
                  dominant regional acute trust and one of the
                  largest NHS estates in the West Midlands,
                  anchoring a thick care home, day hospital and
                  healthcare-ancillary commercial cluster across
                  Walsgrave and Wyken. Severn Trent runs its
                  headquarters in central Coventry CV1 alongside
                  the wider central professional services occupier
                  base. We pull the threads together in the sector
                  deep-dives below.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Jaguar Land Rover Whitley engineering anchor, the
                UK Battery Industrialisation Centre at Whitmoor
                Park, the Coventry Gateway logistics corridor and a
                combined 65,000-student catchment from Coventry
                University and Warwick are the four pillars that
                lenders read very differently to any other West
                Midlands city.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Coventry commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak,
                  the Coventry commercial market has reset around
                  four defining shapes. The automotive and battery
                  supply chain industrial anchor running through
                  Coventry Gateway, the UK Battery Industrialisation
                  Centre at Whitmoor Park, the Jaguar Land Rover
                  Whitley engineering centre and the Ansty Park
                  advanced-engineering cluster. The Friargate modern
                  CBD plate adjacent to Coventry station and the
                  City Centre South retail-led regeneration. A deep
                  HMO conversion pipeline on the combined Coventry
                  University and Warwick 65,000-student catchment
                  across the CV1, CV4, CV5 and CV6 postcodes. And a
                  structurally strong new-build market with the
                  largest new-build premium of any West Midlands
                  city in our network. Each shape runs on its own
                  cycle. Together they produce a commercial market
                  with a structurally defensive industrial base, a
                  meaningful regeneration pipeline, a deep
                  semi-commercial and HMO refinance floor and a new
                  build delivery story on the suburban edge.
                </p>
                <p>
                  Retail in Coventry tells a stratified story. The
                  City Centre South redevelopment by Shearer
                  Property Regeneration Partners is the largest
                  retail-led regeneration in the city, a multi-phase
                  rebuild of the central spine south of the
                  Cathedral Quarter with phased delivery through
                  2026 and 2027. Cathedral Lanes, West Orchards and
                  Lower Precinct carry the working covered retail
                  anchors alongside Coventry Market. The Cathedral
                  Quarter on the Bayley Lane footprint and around
                  Coventry Cathedral picks up the heritage-led
                  retail and hospitality flank with the City of
                  Culture 2021 legacy footfall sustaining demand.
                  Far Gosford Street and FarGo Village pick up the
                  independent retail and leisure cluster on the CV1
                  eastern fringe, with Class E flexibility feeding
                  steady upper-floor conversion and semi-commercial
                  refinance flow. Lender appetite is strongest on
                  the Cathedral Lanes and Lower Precinct
                  shop-with-flats archetype and on the stabilised
                  Cathedral Quarter heritage stock, with
                  semi-commercial pricing at 65 to 75 percent LTV
                  through the challenger and specialist panel.
                </p>
                <p>
                  Industrial and logistics is the second defining
                  shape and the structural anchor of the city
                  commercial market. The Coventry Gateway estate
                  off the A45 on the southern flank carries the
                  dominant logistics, last-mile and warehouse
                  occupier base, with Jaguar Land Rover, Arrival,
                  IKEA distribution and a wide tail of automotive
                  and battery supply chain occupiers on the floor
                  plate. The UK Battery Industrialisation Centre at
                  Whitmoor Park sits inside the Gateway footprint
                  as the strategic national battery R&amp;D
                  facility, anchoring the EV supply chain occupier
                  demand. The wider industrial belt across the
                  Holbrook Lane CV6 cluster, Bayton Road industrial
                  estate, Prologis Park Coventry at Ryton and the
                  Whitley business park itself feeds the supplier
                  and trade-counter market. Lender stance on
                  automotive and battery supply chain industrial
                  freehold is structurally strong, with the JLR and
                  UKBIC covenant underpinning the long-term
                  occupier picture and pricing running 60 to 70
                  percent LTV at the stronger end of the rate range.
                </p>
                <p>
                  HMO and student depth is the third shape and the
                  most distinctive feature of the Coventry
                  semi-commercial market. The combined 65,000
                  student footprint from Coventry University at
                  around 37,000 and the University of Warwick at
                  around 28,000 drives the densest
                  university-driven HMO conversion pipeline in the
                  four-city Midlands set. The CV1 Far Gosford Street
                  fringe carries the central HMO and
                  shop-with-HMO-above conversion stock; the CV4
                  Westwood Heath and Tile Hill belt sitting next
                  to the Warwick campus carries the
                  university-edge professional HMO stock; the CV5
                  Earlsdon belt carries the leafy professional
                  sharer pool; and the CV6 Holbrooks and Foleshill
                  terraces pick up the cheaper student and worker
                  HMO flow. Stabilised licensed sui generis stock
                  with three years of clean rent rolls draws the
                  strongest lender appetite, with portfolio
                  refinance through the specialist HMO panel
                  running at 65 to 75 percent LTV.
                </p>
                <p>
                  Yields across the city held through 2025 and into
                  the first half of 2026 broadly in line with the
                  regional West Midlands average. Prime Friargate
                  office investment with strong unexpired sits at
                  7.5 to 8.5 percent net. Whitley and Ansty Park
                  R&amp;D multi-let office investment runs 7.5 to
                  8.5 percent gross depending on weighted average
                  lease term and occupier mix. Industrial-warehouse
                  on the Coventry Gateway logistics corridor with
                  automotive or battery covenant runs 6.75 to 7.75
                  percent net, the tightest priced asset class in
                  the city. Trading-business hospitality on the
                  Cathedral Quarter, Far Gosford Street, FarGo
                  Village and the Earlsdon suburban food and
                  beverage spine runs 7.5 to 9.0 percent gross.
                  Semi-commercial mixed-use on Cathedral Lanes,
                  Lower Precinct, the Far Gosford Street parade and
                  the Earlsdon village parade runs 7.0 to 8.5
                  percent gross. Stabilised sui generis HMO
                  portfolio across the CV1, CV4, CV5 and CV6 belts
                  runs 7.0 to 8.0 percent gross on three-year rent
                  rolls. The pricing reflects what we read as an
                  automotive and battery-anchored, university-led
                  and regeneration-flanked market with a deep
                  semi-commercial floor underpinning the freehold
                  yield stack.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live regeneration and planning callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live regeneration and innovation spine</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the Coventry City Council regeneration
                  pipeline and the public-domain Coventry
                  innovation cluster at mid-2026. A
                  market-temperature read on what is being
                  delivered, what is rotating and what is being
                  absorbed across the central, southern, eastern
                  and Warwick-edge flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-18
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Regeneration and innovation spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Regeneration and innovation spine</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The regeneration and innovation spine: Friargate,
                City Centre South, Cathedral Quarter, FarGo Village
                and Far Gosford Street, Coventry Gateway logistics,
                the UK Battery Industrialisation Centre, the Jaguar
                Land Rover Whitley estate and Ansty Park.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The Coventry regeneration and innovation spine
                  runs across the CV1, CV3, CV5, CV6 and CV7
                  footprint, with the central CBD plate at
                  Friargate and City Centre South bolted onto the
                  southern industrial corridor at Coventry Gateway
                  and the wider Ansty Park and Whitley R&amp;D
                  cluster. Each scheme and each cluster sits on its
                  own delivery programme, but together they make up
                  the most significant addition to Coventry
                  commercial, retail, industrial and R&amp;D supply
                  this decade. We cover them in the order that
                  matters most for lenders watching pipeline.
                </p>
                <p>
                  Friargate, sitting in central CV1 adjacent to
                  Coventry station, is the modern CBD plate of the
                  city. The 14-hectare Friargate JV scheme delivered
                  by Cannon Kirk alongside Coventry City Council
                  has already delivered Two Friargate, carrying the
                  HMRC regional hub, and One Friargate, carrying
                  the Coventry City Council headquarters as the
                  anchor occupier. Plot 8, the planned hotel and
                  the follow-on commercial plots remain on the
                  delivery programme through 2026 and 2027, with a
                  steady refinance window opening on the stabilised
                  lots and development finance demand translating
                  to commercial mortgage refinance at stabilisation.
                  Lender stance on Friargate stabilised investment
                  sits with the clearing-bank corporate desks
                  alongside the larger SME challenger panel;
                  owner-occupier acquisition on smaller floor
                  plates within the Friargate footprint sits with
                  the SME and specialist challenger panel.
                </p>
                <p>
                  City Centre South, the multi-phase mixed-use
                  redevelopment delivered by Shearer Property
                  Regeneration Partners, is the largest Coventry
                  retail-led regeneration scheme and the most
                  meaningful addition to the central retail and
                  leisure plate this decade. The scheme covers
                  retail, leisure and residential floor plate
                  across the central spine south of the Cathedral
                  Quarter, with phased delivery running through
                  2026 and 2027 alongside a reshaped public realm.
                  Investment appetite on stabilised City Centre
                  South retail and leisure product will sit with
                  the clearing-bank corporate desks once the
                  trading volume settles; trading-business
                  refinance on the marina-front of the central
                  precinct will sit with the SME hospitality
                  challenger panel at 60 to 70 percent LTV. The
                  retail-led regeneration sits next to the
                  Cathedral Quarter footfall halo and inherits the
                  City of Culture 2021 legacy visitor base.
                </p>
                <p>
                  The Cathedral Quarter, the City of Culture 2021
                  legacy footprint, carries the heritage-led retail
                  and hospitality anchor of the central spine.
                  Coventry Cathedral, the Belgrade Theatre and the
                  Coventry Transport Museum sit at the heart of the
                  quarter, drawing the central tourism visitor
                  flow alongside the wider Bayley Lane heritage
                  office cluster and Spon Street heritage food and
                  beverage stock. The City of Culture 2021 legacy
                  visitor base has held through 2025 and into 2026,
                  with mid-tier hotel stock added during the 2018
                  to 2022 cycle through Premier Inn and Travelodge
                  expansion. Lender appetite on Cathedral Quarter
                  hospitality is steady, with trading-business
                  refinance on three-year accounts running 65 to
                  70 percent LTV at the higher pricing end through
                  the SME hospitality panel.
                </p>
                <p>
                  Far Gosford Street and FarGo Village, sitting on
                  the eastern CV1 fringe next to the Coventry
                  University campus, carry the alternative-economy
                  independent retail and leisure cluster of the
                  city. The Far Gosford Street historic high
                  street carries the densest change-of-use
                  application volume in the central footprint,
                  with shop-with-HMO-above and shop-with-flats
                  conversion archetypes feeding the semi-commercial
                  refinance pipeline. FarGo Village picks up the
                  shipping-container-style independent food and
                  beverage and creative-business cluster alongside.
                  The cluster reads as a working
                  alternative-economy hospitality flank that draws
                  the combined Coventry University and Warwick
                  student visitor flow, with the Coventry
                  University CV1 campus halo underpinning the
                  occupier demand picture.
                </p>
                <p>
                  Coventry Gateway, the major employment-land
                  delivery on the southern flank of the city off
                  the A45, is the structural anchor of the
                  Coventry industrial and logistics market. The
                  estate carries Jaguar Land Rover, Arrival, IKEA
                  distribution, Amazon at Ryton on Prologis Park
                  Coventry and a wide tail of automotive and
                  battery supply chain occupiers on the floor
                  plate. The UK Battery Industrialisation Centre at
                  Whitmoor Park sits inside the Gateway footprint
                  as the strategic national battery R&amp;D
                  facility. The wider industrial belt across the
                  Holbrook Lane CV6 cluster, Bayton Road industrial
                  estate, the Ryton Prologis Park and the Whitley
                  business park itself feeds the supplier and
                  trade-counter market. Lender stance on Coventry
                  Gateway industrial freehold is structurally
                  strong, with the JLR and UKBIC covenant
                  underpinning the long-term occupier picture.
                </p>
                <p>
                  The Jaguar Land Rover Whitley engineering centre,
                  sitting on the southern CV3 flank, is the
                  dominant automotive R&amp;D anchor of the city
                  outside the central CBD. The Whitley estate
                  carries the JLR engineering headcount alongside
                  the wider supplier-led occupier base on smaller
                  plots across the Whitley business park. Severn
                  Trent runs its central headquarters from the
                  CV1 footprint alongside the wider Friargate and
                  Greyfriars Road professional services occupier
                  base. Ansty Park, sitting on the CV7 fringe just
                  outside the unitary boundary, carries the
                  advanced-engineering cluster with Rolls-Royce
                  and the Manufacturing Technology Centre as
                  anchor occupiers. The wider Westwood Business
                  Park at CV4 picks up the secondary office and
                  R&amp;D cluster on the university-edge belt.
                </p>
                <p>
                  Lender stance on Coventry regeneration and
                  innovation finance is positioned as follows.
                  Stabilised investment with strong unexpired on
                  the Friargate plate, the post-delivery City
                  Centre South commercial floor plate and the
                  Ansty Park and Whitley R&amp;D stock sits with
                  the clearing-bank corporate desks alongside the
                  larger SME challengers, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> all carrying West
                  Midlands and Warwickshire appetite into the 2
                  million to 15 million pound lot size band on the
                  cleanest cases. Owner-occupier acquisition on
                  smaller floor plates and on Coventry Gateway,
                  Holbrook Lane, Bayton Road and Whitley industrial
                  freehold sits with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>Cynergy Bank</strong> and{" "}
                  <strong>LendInvest</strong> on the more SME-led
                  cases, with Cambridge and Counties, the
                  Cambridge-based Warwickshire-focused challenger,
                  sitting alongside as one of the strongest
                  Coventry relationship names on owner-occupier and
                  investment freehold deals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Coventry Gateway logistics corridor and the UK
                Battery Industrialisation Centre at Whitmoor Park
                are the single largest driver of industrial and
                trade-counter commercial mortgage demand in the
                city. The Jaguar Land Rover and UKBIC covenant
                underpins the industrial yield stack.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Automotive industrial supply chain, office, HMO and
                student, healthcare and leisure.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Automotive industrial supply chain: Coventry
                    Gateway, Whitmoor Park UKBIC, Whitley, Bayton
                    Road, Holbrook Lane, Prologis Park Coventry at
                    Ryton.
                  </strong>{" "}
                  Coventry carries one of the densest automotive
                  and battery supply chain industrial clusters in
                  the UK, structurally anchored by the Jaguar Land
                  Rover Whitley engineering centre, the UK Battery
                  Industrialisation Centre at Whitmoor Park and the
                  wider Coventry Gateway logistics estate on the
                  A45. The Holbrook Lane CV6 industrial belt,
                  Bayton Road industrial estate at CV7 and Prologis
                  Park Coventry at Ryton pick up the wider supplier
                  and last-mile occupier base. Lot sizes on
                  Coventry Gateway distribution and last-mile
                  freehold typically run 1.5 million to 12 million
                  pounds; smaller trade-counter and supplier
                  freehold across Holbrook Lane, Bayton Road and
                  the wider supplier belt runs 400,000 to 2.5
                  million. Owner-occupier industrial acquisition
                  prices 6.75 to 8.0 percent pa at 60 to 70
                  percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on the SME and
                  clearing bank panel, with Cambridge and Counties
                  consistently competitive on the Warwickshire
                  relationship flank and Allica Bank, OakNorth and
                  United Trust Bank writing into the larger SME
                  cases.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office: Friargate modern CBD, Greyfriars Road,
                    Bayley Lane Cathedral Quarter, Whitley R&amp;D,
                    Westwood Business Park, Severn Trent HQ.
                  </strong>{" "}
                  Coventry office trades on the Friargate modern
                  CBD plate adjacent to the station as the prime
                  anchor, with Greyfriars Road, Earl Street and
                  Hertford Street picking up the secondary central
                  office cluster and the Bayley Lane Cathedral
                  Quarter footprint picking up the heritage office
                  flank. The Whitley R&amp;D cluster on the
                  southern CV3 flank, the Westwood Business Park
                  at CV4 on the university-edge belt and the
                  Severn Trent headquarters in central CV1 carry
                  the wider corporate occupier base. Multi-let
                  office investment on the Friargate plate prices
                  7.5 to 8.5 percent net on stabilised stock with
                  strong unexpired; secondary multi-let office
                  on the Greyfriars Road, Bayley Lane and Whitley
                  flanks prices 7.5 to 9.0 percent gross
                  depending on weighted average lease term and
                  occupier mix. Owner-occupier office acquisition
                  prices 6.5 to 7.75 percent pa at 65 to 75
                  percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Cynergy Bank</strong>,{" "}
                  <strong>Lloyds</strong> and{" "}
                  <strong>NatWest</strong> on the SME and
                  clearing bank panel, with HTB and YBS Commercial
                  consistently competitive on the secondary
                  multi-let office investment flank.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and student: Far Gosford Street, Holbrooks
                    and Foleshill CV6, Westwood Heath CV4, Earlsdon
                    CV5, 65,000 combined Coventry and Warwick
                    student catchment.
                  </strong>{" "}
                  Coventry carries the densest university-driven
                  HMO conversion pipeline in the four-city
                  Midlands set, on the combined 65,000 student
                  footprint from Coventry University at around
                  37,000 and the University of Warwick at around
                  28,000. The Far Gosford Street CV1 fringe
                  carries the central student HMO and
                  shop-with-HMO-above conversion stock; the CV4
                  Westwood Heath and Tile Hill belt sitting next
                  to the Warwick campus carries the
                  university-edge professional HMO stock; the CV5
                  Earlsdon belt carries the leafy professional
                  sharer pool; and the CV6 Holbrooks and
                  Foleshill terraces pick up the cheaper student
                  and worker HMO flow. Lot sizes on converted
                  Victorian and Edwardian HMO product across CV1,
                  CV4, CV5 and CV6 typically run 300,000 to
                  850,000 pounds; sui generis large-format HMO
                  with mansard extension runs 450,000 to 1.2
                  million. HMO acquisition or refinance prices
                  7.0 to 8.5 percent pa at 65 to 75 percent LTV
                  through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> on the specialist
                  HMO panel, with Paragon, Together and Foundation
                  Home Loans on the wider HMO portfolio panel.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Healthcare and leisure: University Hospitals
                    Coventry and Warwickshire Walsgrave halo,
                    Cathedral Quarter hotels, FarGo Village
                    leisure, Earlsdon food and beverage.
                  </strong>{" "}
                  University Hospitals Coventry and Warwickshire
                  at Walsgrave in CV2 is the dominant regional
                  acute trust and one of the largest NHS estates
                  in the West Midlands. The UHCW Walsgrave halo
                  carries a thick care home, day hospital and
                  healthcare-ancillary commercial cluster across
                  the wider Walsgrave, Wyken and Hawkesbury
                  footprint. The Cathedral Quarter carries the
                  central hotel cluster with Premier Inn,
                  Travelodge and independent mid-tier hotel stock
                  added during the 2018 to 2022 cycle. FarGo
                  Village picks up the alternative-economy
                  independent leisure and food and beverage
                  cluster on the CV1 eastern fringe. The Earlsdon
                  suburban food and beverage spine on the CV5
                  village footprint carries the steady local
                  independent restaurant and pub freehold flow.
                  Care home and trading-business hospitality
                  prices 7.0 to 8.75 percent pa at 60 to 70
                  percent LTV through{" "}
                  <strong>Cynergy Bank</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Santander</strong> on the SME panel,
                  with Reliance Bank consistently competitive on
                  care home freehold cases.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Coventry Gateway logistics corridor, the Friargate
                modern CBD plate, the combined 65,000-student HMO
                catchment and the University Hospitals Coventry and
                Warwickshire halo at Walsgrave carry the four most
                active commercial mortgage conversations on Coventry
                desks in 2026.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Coventry in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Coventry runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant,
                  LTV and term. Owner-occupier industrial and
                  trade-counter freehold along the Coventry Gateway
                  corridor, the Whitley estate, the Holbrook Lane
                  CV6 belt and the Bayton Road industrial cluster
                  sits at the strongest end of the range, 6.75 to
                  8.0 percent pa at 60 to 70 percent LTV on five
                  to fifteen-year fixed-amortisation terms.
                  Owner-occupier professional services and creative
                  freehold on the Friargate modern CBD plate and
                  the Greyfriars Road and Bayley Lane flanks runs
                  similar pricing where the borrower has credible
                  trading accounts, 6.5 to 7.5 percent pa at 65 to
                  75 percent LTV. Investment commercial mortgages
                  on stabilised retail and office product with
                  strong unexpired sit at 6.5 to 7.75 percent pa
                  at 65 to 75 percent LTV on the cleanest cases.
                </p>
                <p>
                  Automotive and battery supply chain industrial is
                  the strongest priced segment in the city,
                  reflecting the Jaguar Land Rover and UK Battery
                  Industrialisation Centre covenant and the
                  structural appetite from challenger and clearing
                  bank panels. Coventry Gateway logistics investment
                  with strong unexpired runs 6.75 to 8.0 percent pa
                  at 65 to 70 percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on the clearing bank
                  and SME panel. Owner-occupier trade-counter and
                  small industrial freehold on Holbrook Lane,
                  Bayton Road and the Whitley supplier belt prices
                  6.75 to 8.0 percent pa at 60 to 70 percent LTV
                  on cases with three years of clean trading
                  accounts. Cambridge and Counties, the
                  Cambridge-based Warwickshire-focused challenger,
                  is consistently competitive on Coventry
                  industrial freehold deals across the supplier
                  belt.
                </p>
                <p>
                  Hospitality trading-business is the toughest
                  segment: typically 7.5 to 9.0 percent pa at 60
                  to 70 percent LTV, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> the most active
                  trading-business names on the Cathedral Quarter
                  hotel cluster, the FarGo Village leisure flank,
                  the Far Gosford Street independent food and
                  beverage parade and the Earlsdon suburban
                  hospitality spine. Independent hotel freeholds
                  in the Cathedral Quarter price 7.5 to 8.5
                  percent pa at 60 to 65 percent LTV on cases
                  with three years of clean trading accounts.
                  Branded hotel investment with strong covenant
                  on the central Friargate and Cathedral Quarter
                  flanks sits with the clearing-bank corporate
                  desks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong>.
                </p>
                <p>
                  HMO acquisition or refinance on the student and
                  professional sharer stock through the Far
                  Gosford Street CV1 fringe, the CV4 Westwood
                  Heath belt, the CV5 Earlsdon belt and the CV6
                  Holbrooks and Foleshill terraces runs 7.0 to 8.5
                  percent pa at 65 to 75 percent LTV.{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> anchor the HMO
                  specialist panel alongside Paragon, Together and
                  Foundation Home Loans on the wider HMO
                  portfolio panel. Coventry portfolio refinancers
                  particularly value the depth of large-format
                  sui generis coverage across the panel, with
                  seven and eight-bedroom HMO product the
                  recurring application shape on the combined
                  Coventry University and Warwick catchment.
                  Semi-commercial mixed-use shop-with-flats on
                  Cathedral Lanes, Lower Precinct, the Far
                  Gosford Street parade and the Earlsdon village
                  parade runs up to 75 percent LTV at 7.0 to 8.0
                  percent pa across the strong shop-with-flat
                  archetype with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> consistently
                  competitive. Bridging across the catchment sits
                  at 0.75 to 1.10 percent per month on the
                  mainstream specialist desks, with the cleanest
                  cases on lower-LTV change-of-use and
                  refurb-to-term plays pricing toward the lower
                  end.
                </p>
                <p>
                  Lender appetite splits by sector. Automotive and
                  battery supply chain industrial on Coventry
                  Gateway is the most contested asset class in
                  Coventry, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong>,{" "}
                  <strong>Santander</strong> and{" "}
                  <strong>Shawbrook</strong> all bidding into the
                  JLR and UKBIC covenant cases alongside
                  Cambridge and Counties on the local relationship
                  flank. HMO and portfolio is the second most
                  active segment, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> writing the bulk of
                  the CV1, CV4, CV5 and CV6 sui generis pipeline
                  alongside Paragon and Together on the wider
                  portfolio panel. The clearing banks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> carry credible
                  Coventry appetite into the prime Friargate
                  office, City Centre South anchor stock,
                  Cathedral Quarter heritage investment and the
                  central professional services freehold flank.
                  The challenger SME panel writes the bulk of the
                  mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the
                  centre of the specialist pool, with Allica
                  Bank, HTB, YBS Commercial, Aldermore, Paragon,
                  Together, Foundation Home Loans, United Trust
                  Bank, Reliance Bank and OakNorth on the wider
                  90-strong network. Cambridge and Counties sits
                  inside the wider panel as the Cambridge-based
                  Warwickshire-focused challenger and one of the
                  strongest Coventry relationship names on
                  industrial and SME owner-occupier freehold
                  deals.
                </p>
                <p>
                  A note on naming, because the question comes up
                  on most Coventry intros. Coventry Building
                  Society is headquartered in central Coventry on
                  the Binley Business Park footprint and is the
                  second-largest building society in the UK, but
                  it does not run a commercial mortgage book to
                  brokers. We do not work with Coventry Building
                  Society on commercial deals and they are not
                  on our panel because they do not write to
                  commercial lending. The mention is included for
                  disambiguation only; the name often comes up in
                  Coventry conversations and we want it clear
                  that the local relationship lender on Coventry
                  commercial business is Cambridge and Counties
                  rather than the building society.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across the West Midlands, taking in Birmingham,
                  Solihull, Warwick, Leamington Spa, Nuneaton and
                  the wider M6 and M40 corridor alongside the
                  Coventry catchment, see{" "}
                  <a
                    href={westMidlandsBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our West Midlands commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage Coventry
                  desk and the panel coverage across the wider
                  West Midlands and Warwickshire footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, large HMO, owner-occupier industrial
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">6.95 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, HMO, hospitality
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        HMO, BTL portfolio, refurb-to-term
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, hospitality, healthcare
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, owner-occupier
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, automotive supply chain
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, corporate
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, hospitality, healthcare, investment
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.25 to 7.75%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Cambridge and Counties, the Cambridge-based
                  Warwickshire-focused challenger, sitting on the
                  wider panel as one of the strongest Coventry
                  relationship names. Plus Allica Bank, HTB, YBS
                  Commercial, Aldermore, Paragon, Together,
                  Foundation Home Loans, United Trust Bank,
                  Reliance Bank and OakNorth on the wider HMO,
                  portfolio and SME challenger panel. Plus another
                  80 panel members across challenger banks,
                  specialists and private credit. Rates indicative
                  for mid-2026 Coventry primary product. Actual
                  offers depend on covenant, LTV, sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and
                lender across three of the most common Coventry
                case shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Coventry.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each
                  drawn from the recurring shapes we see across
                  Coventry. Names removed, terms representative of
                  the range we are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Coventry Gateway last-mile warehouse
                    acquisition.
                  </strong>{" "}
                  An owner-occupier acquiring a 28,000 sq ft
                  last-mile distribution unit on the Coventry
                  Gateway estate off the A45, with a Jaguar Land
                  Rover tier-one supplier contract and three years
                  of clean automotive trading accounts. 65% LTV at
                  6.95% pa with <strong>Shawbrook</strong>,
                  five-year fix, 20-year amortisation.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Friargate multi-let office investment
                    refinance.
                  </strong>{" "}
                  An investor holding a 35,000 sq ft Class E
                  office investment on the Friargate modern CBD
                  plate adjacent to Coventry station, refinancing
                  off a 2021 five-year fix. Stabilised multi-tenant
                  occupier base with regional professional services
                  and automotive supply chain covenants. 65% LTV
                  at 7.25% pa with <strong>Cynergy Bank</strong>,
                  five-year fix, 20-year amortisation.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Earlsdon CV5 large-format HMO portfolio
                    refinance.
                  </strong>{" "}
                  An investor refinancing four large-format sui
                  generis seven and eight-bedroom HMO freeholds
                  across Earlsdon CV5 and the Westwood Heath CV4
                  university-edge belt onto a single portfolio
                  loan with <strong>InterBay Commercial</strong>.
                  70% LTV at 7.45% pa, five-year fix, 25-year
                  amortisation. Stabilised combined Coventry
                  University and University of Warwick catchment
                  and three years of HMO trading on the wider
                  portfolio supported the underwrite at the upper
                  LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Cathedral Quarter heritage hotel refinance.
                  </strong>{" "}
                  An independent operator holding a 38-bed
                  heritage hotel freehold in the Bayley Lane
                  Cathedral Quarter footprint refinancing off a
                  2021 five-year fix into a stabilised
                  trading-business facility with{" "}
                  <strong>Santander</strong>. 60% LTV at 7.85% pa,
                  five-year fix, 20-year amortisation. The City
                  of Culture 2021 legacy visitor base and three
                  years of clean trading accounts supported the
                  trading-business underwrite on the heritage
                  hospitality archetype.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Walsgrave CV2 care home portfolio refinance.
                  </strong>{" "}
                  An operator with three 40-bed care home
                  freeholds on the University Hospitals Coventry
                  and Warwickshire halo at Walsgrave and the
                  wider CV2 footprint refinancing onto a single
                  portfolio loan with{" "}
                  <strong>Santander</strong>. 65% LTV at 7.35% pa,
                  five-year fix, 20-year amortisation. Three years
                  of clean CQC inspection record and stabilised
                  occupancy above 92 percent on the wider
                  portfolio. The UHCW Walsgrave halo and the
                  surrounding A4082 and A444 corridor catchment
                  supported the SME underwrite on the care home
                  archetype.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The UKBIC growth pipeline, the Coventry Gateway
                expansion, the City Centre South delivery, the EV
                supply chain investment cycle and the 2020 to 2022
                refinance wave sit at the centre of our Coventry
                watching brief through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five structural factors sit at the centre of the
                  Coventry market watching brief through late 2026
                  and 2027. The first is UK Battery
                  Industrialisation Centre growth. UKBIC at
                  Whitmoor Park anchors the national EV and
                  battery supply chain pipeline and the
                  surrounding industrial occupier base across the
                  wider Coventry Gateway, Whitley and Ansty Park
                  footprint is structurally tied to the
                  investment cycle. Continued battery R&amp;D
                  growth feeds owner-occupier industrial demand on
                  the supplier belt and underpins the lender
                  stance on automotive and battery covenant
                  through 2027. The second is the Coventry Gateway
                  logistics corridor expansion. Continued
                  employment-land delivery on the A45 corridor
                  alongside Jaguar Land Rover, Arrival, IKEA
                  distribution and the wider supplier base
                  produces a structurally tight industrial-warehouse
                  yield stack, with investment yields among the
                  tightest in the West Midlands commercial market.
                  We expect that to hold through 2027.
                </p>
                <p>
                  The third is the City Centre South delivery
                  programme. The Shearer Property Regeneration
                  Partners scheme is the largest Coventry
                  retail-led redevelopment, with phased delivery
                  through 2026 and 2027 and refinance windows
                  opening on stabilised retail, leisure and
                  residential lots once trading volume settles.
                  Letting pace, occupier mix on the retail and
                  leisure floor plate and the ground-floor
                  hospitality tenancy shape will reset reference
                  values for the central Coventry retail market.
                  The fourth is the EV supply chain investment
                  cycle. Continued Jaguar Land Rover Whitley
                  R&amp;D growth, the UKBIC roadmap and the wider
                  Ansty Park advanced-engineering cluster
                  underpin the Coventry industrial occupier base
                  through the decade. We read the EV supply chain
                  investment cycle as a structurally positive
                  driver of Coventry industrial freehold pricing
                  and lender appetite through 2027.
                </p>
                <p>
                  The fifth is the structural refinancing wave
                  from the 2020 to 2022 vintage of five-year fixed
                  commercial mortgage debt. Borrowers who locked
                  at 3 to 4.5 percent pa five years ago are
                  refinancing into a 6 to 9 percent world. For
                  Coventry assets the maths usually works because
                  rents and yields have held: automotive and
                  battery supply chain industrial on the JLR and
                  UKBIC covenant, HMO and portfolio on the
                  structurally strong combined Coventry University
                  and Warwick catchment, central retail and
                  mixed-use on the steady Cathedral Lanes, Lower
                  Precinct and Cathedral Quarter absorption flow,
                  semi-commercial on the shop-with-flats and
                  shop-with-HMO-above archetype, and healthcare on
                  the University Hospitals Coventry and
                  Warwickshire halo at Walsgrave. The conversation
                  is structural rather than distressed. The
                  trading-business hospitality flank on the
                  Cathedral Quarter and FarGo Village carries the
                  most case-by-case underwrite work; automotive
                  and battery supply chain industrial carries the
                  cleanest refinance pipeline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a Coventry Gateway
                    logistics or last-mile warehouse acquisition, a
                    Holbrook Lane CV6 or Bayton Road trade-counter
                    industrial freehold on the automotive or
                    battery supply chain, a Friargate or
                    Greyfriars Road office investment refinance, a
                    Cathedral Quarter or FarGo Village
                    trading-business hospitality refinance, a Far
                    Gosford Street semi-commercial shop-with-flats
                    acquisition, an Earlsdon CV5 or Westwood Heath
                    CV4 sui generis HMO portfolio refinance on the
                    combined Coventry University and Warwick
                    catchment, a Walsgrave CV2 care home freehold
                    on the University Hospitals Coventry and
                    Warwickshire halo, or a City Centre South
                    commercial play, the working method is the
                    same. Send through the property details, the
                    LTV target, a rough sense of the trading
                    position or rental income, and we will take
                    it from there. We shortlist three to five
                    lenders from the eight on our active panel,{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong>, plus the wider
                    ninety-strong network including Cambridge and
                    Counties on the Warwickshire relationship
                    flank, Allica Bank, HTB, YBS Commercial and
                    Aldermore on the SME challenger flank,
                    Paragon, Together and Foundation Home Loans
                    on the HMO portfolio flank, United Trust Bank
                    and Reliance Bank on the healthcare and
                    specialist flank and OakNorth on the larger
                    SME flank. We run live appetite and come back
                    with structured terms covering rate, LTV,
                    term, fees and conditions inside 48 hours.
                    If the numbers do not work, you will know
                    inside two business hours. Phone, email or
                    send through the site contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Coventry commercial mortgage market in May 2026.
            Indicative only; actual offers depend on individual
            deal characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We are not FCA-authorised because
            the products we arrange are unregulated. Where a deal
            would require FCA authorisation, we refer to a
            regulated firm.
          </p>
        </div>
      </section>
    </>
  );
}
