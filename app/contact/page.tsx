import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Coordonnées du cabinet de Maître Thomas Cohadon, avocat en dommage corporel à Marseille. Premier rendez-vous gratuit.",
  alternates: { canonical: "https://cohadon-avocat.fr/contact" },
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-8 md:pb-12">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="t-eyebrow">— Prendre contact</div>
            <h1
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Parlons
              <br />
              de votre <span className="font-serif-italic">situation.</span>
            </h1>
          </div>
          <div
            className="col-span-12 lg:col-span-7 mt-6 t-lead"
            style={{ color: "var(--ink-light)" }}
          >
            Le premier rendez-vous est gratuit et sans engagement. Appelez
            directement ou envoyez un email — je vous réponds personnellement.
          </div>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section className="container-x py-10 md:py-14 lg:py-20 hairline hairline-b">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="t-eyebrow">— Cabinet</div>
            <div className="mt-10 space-y-10">
              <div>
                <h2 className="font-serif text-2xl">Adresse</h2>
                <p className="mt-3" style={{ color: "var(--ink-light)" }}>
                  35 rue Saint-Jacques
                  <br />
                  13006 Marseille
                  <br />
                  France
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">Téléphone</h2>
                <p className="mt-3">
                  <a
                    href="tel:+33640135176"
                    className="font-serif text-2xl hover:underline"
                    style={{ color: "var(--foreground)" }}
                  >
                    06 40 13 51 76
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">Email</h2>
                <p className="mt-3">
                  <a
                    href="mailto:tc@cohadon-avocat.fr"
                    className="hover:underline"
                    style={{ color: "var(--ink-light)" }}
                  >
                    tc@cohadon-avocat.fr
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">Horaires</h2>
                <ul className="mt-3 space-y-1" style={{ color: "var(--ink-light)" }}>
                  <li className="flex justify-between gap-4">
                    <span>Lun — Ven</span>
                    <span>09h00 — 19h00</span>
                  </li>
                </ul>
                <p
                  className="mt-3 t-small"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Sur rendez-vous uniquement.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="tel:+33640135176" className="btn btn-primary">
                Appeler <span className="arrow">→</span>
              </a>
              <Link href="/consultation" className="btn btn-ghost">
                Consultation en ligne <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="t-eyebrow mb-10">— Le cabinet, à Marseille</div>
            <div className="map-frame relative" style={{ aspectRatio: "4/3" }}>
              <div className="map-pin" style={{ left: "48%", top: "54%" }} />
              <div
                className="absolute top-6 left-6 p-5 max-w-xs"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--rule)",
                }}
              >
                <div className="font-serif text-lg">Cabinet Cohadon</div>
                <div
                  className="t-small mt-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  35 rue Saint-Jacques · 13006 Marseille
                </div>
                <a
                  className="btn btn-link mt-4 text-xs"
                  href="https://maps.google.com/?q=35+rue+Saint-Jacques+Marseille"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur Google Maps →
                </a>
              </div>
              <div
                className="absolute bottom-6 right-6 text-xs font-serif italic px-3 py-2"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--rule)",
                  color: "var(--muted-foreground)",
                }}
              >
                6ᵉ arrondissement — quartier Préfecture
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
