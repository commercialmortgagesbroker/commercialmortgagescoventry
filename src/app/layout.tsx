import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { SchemaInjector } from "@/components/SchemaInjector";
import {
  generateFinancialServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const kw = siteConfig.keyword;
const loc = siteConfig.locationName;
const brand = siteConfig.name;

const siteTitle = `Commercial Mortgages Coventry | Commercial Mortgage Brokers Coventry, Commercial Finance, West Midlands`;
const siteDescription = `Commercial mortgages Coventry: specialist commercial mortgage broker and intermediary for the JLR Whitley engineering centre, UK Battery Industrialisation Centre (UKBIC), Coventry Gateway logistics corridor, Friargate CBD, City Centre South retail regen, FarGo Village independent F and B, the Coventry University and Warwick student belt and the UHCW Walsgrave care-home corridor. Owner-occupier, investment, semi-commercial, limited company buy to let HMO portfolio, bridging loan, bridge and development finance. 90 plus lender panel, indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.`;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${brand}`,
  },
  description: siteDescription,
  keywords: [
    kw,
    `commercial mortgage broker ${loc}`,
    `${loc} commercial mortgages`,
    `${loc} commercial property finance`,
    `${loc} commercial investment mortgage`,
    `${loc} owner-occupier mortgage`,
    `${loc} semi-commercial mortgage`,
    `${loc} HMO portfolio mortgage`,
    `${loc} industrial commercial mortgage`,
    `JLR Whitley commercial mortgage`,
    `Friargate office investment Coventry`,
    `Coventry Gateway logistics finance`,
    `West Midlands commercial mortgage broker`,
  ],
  authors: [{ name: "Matt", url: `https://${siteConfig.domain}/about` }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${siteConfig.domain}`,
    siteName: brand,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: brand,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${siteConfig.domain}` },
};

/** Per-site accent, overrides the default declared in globals.css `@theme`. */
const accentOverride = `:root { --color-accent: ${siteConfig.accent.hex}; }`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: accentOverride }} />
      </head>
      <body className="font-sans antialiased">
        <SchemaInjector schema={generateFinancialServiceSchema()} />
        <SchemaInjector schema={generateLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactCTA />
        <CookieConsent />
              {/* GHL Chat Widget, populate data-widget-id for Liverpool when GHL widget is provisioned */}
      </body>
    </html>
  );
}
