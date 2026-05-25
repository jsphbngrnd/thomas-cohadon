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

export default function ExpertisePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-40 md:pt-48 pb-20">
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
      <section className="container-x py-20 hairline-b" id="domaines">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Interventions</div>
            <h2 className="font-serif t-h1 mt-6">
              Six terrains
              <br />
              <span className="font-serif-italic">d'action.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-10 gap-y-0">
          {domains.map((d) => (
            <article key={d.num} className="col-span-12 md:col-span-6 py-10 hairline-b">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{d.title}</h3>
                <span
                  className="t-small"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {d.num}
                </span>
              </div>
              <p
                className="mt-5 max-w-prose"
                style={{ color: "var(--ink-light)" }}
              >
                {d.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DINTILHAC */}
      <section className="container-x py-32">
        <div className="grid grid-cols-12 gap-10">
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
              La réparation intégrale suppose d'identifier chaque poste de
              préjudice, qu'il soit patrimonial ou extrapatrimonial, temporaire
              ou permanent.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: "var(--rule)" }}
            >
              {[
                {
                  label: "Patrimoniaux",
                  items: [
                    "Dépenses de santé",
                    "Pertes de gains professionnels",
                    "Incidence professionnelle",
                    "Frais de logement adapté",
                    "Tierce personne",
                  ],
                },
                {
                  label: "Extrapatrimoniaux",
                  items: [
                    "Souffrances endurées",
                    "Préjudice esthétique",
                    "Préjudice d'agrément",
                    "Préjudice sexuel",
                    "Déficit fonctionnel",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="p-6"
                  style={{ background: "var(--background)" }}
                >
                  <div
                    className="t-small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {col.label}
                  </div>
                  <ul className="mt-4 font-serif text-base space-y-2">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="container-x py-12">
        <div
          className="img-frame placeholder aspect-[21/8]"
          data-placeholder="Marseille — photo à fournir"
        />
      </section>

      {/* HONORAIRES */}
      <section className="container-x py-32 hairline-b" id="honoraires">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="t-eyebrow">— Honoraires</div>
            <h2 className="font-serif t-h1 mt-6">
              Une <span className="font-serif-italic">transparence</span>
              <br />
              totale.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 prose-editorial t-body">
            <p>
              Les honoraires font systématiquement l'objet d'une convention
              écrite, signée avant toute intervention. Trois modalités sont
              proposées, parfois combinées.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-12 gap-px"
          style={{ background: "var(--rule)" }}
        >
          {[
            {
              num: "i.",
              title: "Premier rendez-vous",
              price: "Offert",
              body: "Une heure pour exposer votre situation, évaluer la recevabilité du dossier et déterminer les démarches à engager. Confidentialité absolue, sans engagement.",
            },
            {
              num: "ii.",
              title: "Honoraire de diligence",
              price: "Forfait",
              body: "Forfait fixé en début de mission selon la complexité, couvrant les actes de procédure et la défense devant les juridictions. Échéancier possible.",
            },
            {
              num: "iii.",
              title: "Honoraire de résultat",
              price: "Au succès",
              body: "Pourcentage prélevé sur les sommes effectivement obtenues, plafonné et fixé conventionnellement. Aucune somme due en l'absence d'indemnisation.",
            },
          ].map((h) => (
            <article
              key={h.num}
              className="col-span-12 md:col-span-4 p-10"
              style={{ background: "var(--background)" }}
            >
              <div className="numeral">{h.num}</div>
              <h3 className="font-serif text-2xl mt-6">{h.title}</h3>
              <div
                className="font-serif-italic text-3xl mt-6"
                style={{ color: "var(--primary)" }}
              >
                {h.price}
              </div>
              <p className="mt-6 text-sm" style={{ color: "var(--ink-light)" }}>
                {h.body}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-12 t-small max-w-2xl"
          style={{ color: "var(--muted-foreground)" }}
        >
          Le cabinet accepte l'aide juridictionnelle pour les clients éligibles.
          Une protection juridique souscrite par le client peut prendre en
          charge tout ou partie des honoraires.
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-32" id="faq">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Questions fréquentes</div>
            <h2 className="font-serif t-h1 mt-6">
              Ce que les
              <br />
              victimes{" "}
              <span className="font-serif-italic">demandent</span>
              <br />
              le plus souvent.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-32 hairline-b">
        <div className="grid grid-cols-12 gap-8 items-end">
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
