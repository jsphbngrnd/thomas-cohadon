import type { Metadata } from "next"
import Link from "next/link"
import { domains } from "@/content/domains"
import { FaqAccordion } from "@/components/faq-accordion"
import { faqItems } from "@/content/faq"

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Domaines d'intervention, postes de préjudice, honoraires et questions fréquentes en droit du dommage corporel.",
  alternates: { canonical: "https://cohadon-avocat.fr/expertise" },
}

const dintilhac = [
  {
    category: "Préjudices patrimoniaux",
    groups: [
      {
        label: "Temporaires — avant consolidation",
        items: [
          { abbr: "DSA", label: "Dépenses de santé actuelles" },
          { abbr: "PGPA", label: "Pertes de gains professionnels actuels" },
          { abbr: "FD", label: "Frais divers" },
        ],
      },
      {
        label: "Permanents — après consolidation",
        items: [
          { abbr: "DSF", label: "Dépenses de santé futures" },
          { abbr: "FLA", label: "Frais de logement adapté" },
          { abbr: "FVA", label: "Frais de véhicule adapté" },
          { abbr: "PGPF", label: "Pertes de gains professionnels futurs" },
          { abbr: "IP", label: "Incidence professionnelle" },
          { abbr: "PA", label: "Préjudice scolaire, universitaire ou de formation" },
          { abbr: "ATP", label: "Assistance par tierce personne" },
        ],
      },
    ],
  },
  {
    category: "Préjudices extrapatrimoniaux",
    groups: [
      {
        label: "Temporaires — avant consolidation",
        items: [
          { abbr: "DFTT", label: "Déficit fonctionnel temporaire" },
          { abbr: "SE", label: "Souffrances endurées" },
          { abbr: "PE", label: "Préjudice esthétique temporaire" },
        ],
      },
      {
        label: "Permanents — après consolidation",
        items: [
          { abbr: "DFP", label: "Déficit fonctionnel permanent" },
          { abbr: "PEP", label: "Préjudice esthétique permanent" },
          { abbr: "PA", label: "Préjudice d'agrément" },
          { abbr: "PS", label: "Préjudice sexuel" },
          { abbr: "PEtab", label: "Préjudice d'établissement" },
          { abbr: "PPC", label: "Préjudices permanents exceptionnels" },
        ],
      },
    ],
  },
  {
    category: "Victimes indirectes",
    groups: [
      {
        label: "Proches de la victime directe",
        items: [
          { abbr: "PAP", label: "Préjudice d'accompagnement" },
          { abbr: "PA", label: "Préjudice d'affection" },
          { abbr: "Pe", label: "Préjudice économique" },
        ],
      },
    ],
  },
]

export default function ExpertisePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-10 md:pb-14 lg:pb-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="t-eyebrow">— Domaine d'expertise</div>
            <h1
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Le droit du
              <br />
              <span className="font-serif-italic">dommage corporel.</span>
            </h1>
          </div>
          <div
            className="col-span-12 lg:col-span-7 lg:col-start-1 mt-8 t-lead"
            style={{ color: "var(--ink-light)" }}
          >
            Toute personne qui subit un dommage corporel — du fait d'un tiers,
            d'un accident ou d'un aléa médical — a droit à la réparation
            intégrale de ses préjudices. Le cabinet se consacre exclusivement à
            cette discipline.
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="container-x py-10 md:py-14 lg:py-20 hairline-b" id="domaines">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-8 md:mb-12 lg:mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Interventions</div>
            <h2 className="font-serif t-h1 mt-6">
              Six terrains
              <br />
              <span className="font-serif-italic">d'action.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {domains.map((d) => (
            <article key={d.num} className="grid grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 hairline-b">
              <div className="col-span-2 md:col-span-1">
                <span className="numeral" style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}>
                  {d.num}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-2xl">{d.title}</h3>
                <p className="t-small mt-2" style={{ color: "var(--muted-foreground)" }}>
                  {d.subtitle}
                </p>
                <p className="mt-3 text-sm italic" style={{ color: "var(--ink-light)" }}>
                  {d.tagline}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="prose-editorial t-body">
                  {d.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {d.procedure && (
                  <div className="mt-6 pt-6 hairline">
                    <div className="t-small mb-2" style={{ color: "var(--muted-foreground)" }}>
                      — Procédure applicable
                    </div>
                    <p className="text-sm" style={{ color: "var(--ink-light)" }}>
                      {d.procedure}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DINTILHAC */}
      <section className="container-x py-14 md:py-20 lg:py-32" id="prejudices">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-8 md:mb-12 lg:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="t-eyebrow">— Nomenclature Dintilhac</div>
            <h2 className="font-serif t-h1 mt-6">
              Chaque <span className="font-serif-italic">préjudice</span>
              <br />a un nom.
            </h2>
            <p
              className="mt-8 t-lead max-w-md"
              style={{ color: "var(--ink-light)" }}
            >
              Derrière chaque blessure, il y a des préjudices précis que le
              droit reconnaît et indemnise. Maîtriser ce référentiel, c'est
              s'assurer que chaque préjudice est nommé, évalué et défendu.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {dintilhac.map((section) => (
              <div key={section.category}>
                <div className="t-eyebrow mb-8">{section.category}</div>
                {section.groups.map((group) => (
                  <div key={group.label} className="mb-8">
                    <div
                      className="text-xs mb-4 pb-2 hairline-b italic"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {group.label}
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.abbr + item.label} className="flex items-baseline gap-4">
                          <span
                            className="font-serif-italic text-sm w-12 shrink-0"
                            style={{ color: "var(--primary)" }}
                          >
                            {item.abbr}
                          </span>
                          <span className="text-sm" style={{ color: "var(--ink-light)" }}>
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 md:py-20 lg:py-32" id="faq">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Questions fréquentes</div>
            <h2 className="font-serif t-h1 mt-6">
              Ce que les victimes{" "}
              <span className="font-serif-italic">demandent</span>
              {" "}le plus souvent.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-14 md:py-20 lg:py-32 hairline-b">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="t-eyebrow">— Prendre contact</div>
            <h2
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Faire <span className="font-serif-italic">le point</span>
              <br />
              sur votre dossier.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 prose-editorial t-body">
            <p>
              Un échange initial vous permet de comprendre les démarches à
              entreprendre et l'opportunité d'engager une procédure.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Prendre rendez-vous <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
