import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prendre contact avec le cabinet de Maître Thomas Cohadon, avocat en dommage corporel à Marseille.",
  alternates: { canonical: "https://cohadon-avocat.fr/contact" },
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-40 md:pt-48 pb-12">
        <div className="grid grid-cols-12 gap-8 items-end">
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
            className="col-span-12 lg:col-span-3 t-lead"
            style={{ color: "var(--ink-light)" }}
          >
            Premier échange offert,
            <br />
            réponse sous 48 h ouvrées.
          </div>
        </div>
      </section>

      {/* FORM + INFOS */}
      <section className="container-x py-20 hairline">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="t-eyebrow">— Formulaire</div>
            <ContactForm />
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="t-eyebrow">— Cabinet</div>
            <div className="mt-10 space-y-10">
              {[
                {
                  title: "Adresse",
                  content: (
                    <p style={{ color: "var(--ink-light)" }}>
                      12 rue Grignan
                      <br />
                      13006 Marseille
                      <br />
                      France
                    </p>
                  ),
                },
                {
                  title: "Téléphone",
                  content: (
                    <p style={{ color: "var(--ink-light)" }}>
                      <a href="tel:+33491000000" className="hover:underline">
                        04 91 00 00 00
                      </a>
                    </p>
                  ),
                },
                {
                  title: "Email",
                  content: (
                    <p style={{ color: "var(--ink-light)" }}>
                      <a
                        href="mailto:contact@cohadon-avocat.fr"
                        className="hover:underline"
                      >
                        contact@cohadon-avocat.fr
                      </a>
                    </p>
                  ),
                },
                {
                  title: "Horaires",
                  content: (
                    <ul
                      className="space-y-1"
                      style={{ color: "var(--ink-light)" }}
                    >
                      <li className="flex justify-between gap-4">
                        <span>Lun — Ven</span>
                        <span>09h00 — 19h00</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>Samedi</span>
                        <span>Sur rendez-vous</span>
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Accès",
                  content: (
                    <ul
                      className="space-y-1 text-sm"
                      style={{ color: "var(--ink-light)" }}
                    >
                      <li>Métro · Estrangin Préfecture (M1)</li>
                      <li>Bus · 18 · 41 · 54</li>
                      <li>Parking · Préfecture</li>
                    </ul>
                  ),
                },
              ].map((block) => (
                <div key={block.title}>
                  <h3 className="font-serif text-2xl">{block.title}</h3>
                  <div className="mt-3">{block.content}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="container-x py-20">
        <div
          className="t-eyebrow mb-10"
          style={{ color: "var(--muted-foreground)" }}
        >
          — Le cabinet, à Marseille
        </div>
        <div className="map-frame relative" style={{ aspectRatio: "16/7" }}>
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
              12 rue Grignan · 13006 Marseille
            </div>
            <a
              className="btn btn-link mt-4 text-xs"
              href="https://maps.google.com/?q=12+rue+Grignan+Marseille"
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
      </section>
    </>
  )
}
