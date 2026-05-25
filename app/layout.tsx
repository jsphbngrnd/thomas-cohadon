import type { Metadata } from "next"
import { Playfair_Display, Inter_Tight } from "next/font/google"
import "./globals.css"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Thomas Cohadon — Avocat en dommage corporel, Marseille",
    template: "%s — Thomas Cohadon, avocat à Marseille",
  },
  description:
    "Cabinet d'avocat en dommage corporel à Marseille. Accompagnement des victimes d'accidents, de la procédure à l'indemnisation.",
  alternates: {
    canonical: "https://cohadon-avocat.fr/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cohadon-avocat.fr/",
    siteName: "Cabinet Thomas Cohadon",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${interTight.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
