import type { Metadata } from "next"
import Link from "next/link"
import { parcours } from "@/content/parcours"
import { processSteps } from "@/content/process"

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "Avocat au Barreau de Marseille, Thomas Cohadon défend exclusivement les victimes de dommages corporels.",
  alternates: { canonical: "https://cohadon-avocat.fr/cabinet" },
}

export default function CabinetPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-40 md:pt-48 pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="t-eyebrow">— Le cabinet</div>
            <h1
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Thomas
              <br />
              <span className="font-serif-italic">Cohadon</span>
            </h1>
            <div
              className="mt-8 t-lead max-w-xl"
              style={{ color: "var(--ink-light)" }}
            >
              Avocat inscrit au Barreau de Marseille, exclusivement dédié au
              droit du dommage corporel et à la défense des victimes.
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-light)" }}>
              {[
                ["Barreau", "Marseille"],
                ["Toque", "1834"],
                ["Spécialité", "Dommage corporel"],
                ["Langues", "FR · EN"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex justify-between gap-6 hairline-b pb-3"
                >
                  <span>{label}</span>
                  <span style={{ color: "var(--foreground)" }}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="container-x py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div
              className="img-frame placeholder aspect-[4/5]"
              data-placeholder="Portrait — photo à fournir"
            />
            <div
              className="mt-3 text-xs flex justify-between"
              style={{ color: "var(--muted-foreground)" }}
            >
              <span>Portrait — cabinet de Marseille</span>
              <span className="font-serif-italic">↳ Photo à remplacer</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="t-eyebrow">— Biographie</div>
            <h2 className="font-serif t-h1 mt-6">
              Une vocation,
              <br />
              <span className="font-serif-italic">une seule matière.</span>
            </h2>
            <div className="mt-10 prose-editorial t-body">
              <p>
                Thomas Cohadon a fait du droit du dommage corporel le cœur
                unique de sa pratique. Depuis sa prestation de serment, il a
                choisi de ne défendre que les particuliers — victimes
                d'accidents, d'agressions, ou d'aléas médicaux — face aux
                compagnies d'assurance et aux organismes payeurs.
              </p>
              <p>
                Cette discipline exige rigueur médicale et écoute humaine. Elle
                suppose aussi du temps&nbsp;: celui d'accompagner un dossier sur
                plusieurs années, jusqu'à ce que la consolidation soit prononcée
                et la réparation obtenue.
              </p>
              <p>
                Le cabinet, installé au cœur de Marseille, intervient partout en
                France et plus particulièrement dans le ressort des Cours
                d'appel d'Aix-en-Provence, Nîmes et Montpellier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="container-x py-24 hairline-b">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Parcours</div>
            <h2 className="font-serif t-h1 mt-6">
              Formation
              <br />&amp;{" "}
              <span className="font-serif-italic">trajectoire.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ol className="space-y-0">
              {parcours.map((p, i) => (
                <li
                  key={p.year}
                  className={`grid grid-cols-12 gap-6 py-8${i < parcours.length - 1 ? " hairline-b" : ""}`}
                >
                  <div className="col-span-3 numeral">{p.year}</div>
                  <div className="col-span-9">
                    <div className="font-serif text-xl">{p.title}</div>
                    <div
                      className="t-small mt-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {p.institution}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-32">
        <div className="t-eyebrow">— Engagements</div>
        <h2 className="font-serif t-h1 mt-6 max-w-4xl">
          Trois principes qui{" "}
          <span className="font-serif-italic">structurent</span> la défense de
          chaque dossier.
        </h2>
        <div className="grid grid-cols-12 gap-10 mt-16">
          {[
            {
              n: "— 01",
              title: "Indépendance",
              body: "Le cabinet n'accepte aucun dossier pour le compte d'une compagnie d'assurance, garantissant une défense entière de l'intérêt du blessé.",
            },
            {
              n: "— 02",
              title: "Présence",
              body: "L'avocat assiste personnellement le client à chaque expertise médicale et plaide lui-même les audiences importantes.",
            },
            {
              n: "— 03",
              title: "Transparence",
              body: "Honoraires expliqués dès la première consultation, convention écrite, et information régulière de l'avancement du dossier.",
            },
          ].map((v) => (
            <article key={v.n} className="col-span-12 md:col-span-4 card-quiet">
              <div className="t-small" style={{ color: "var(--muted-foreground)" }}>
                {v.n}
              </div>
              <h3 className="font-serif text-2xl mt-4">{v.title}</h3>
              <p className="mt-4" style={{ color: "var(--ink-light)" }}>
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="container-x py-12">
        <div
          className="img-frame placeholder aspect-[21/8]"
          data-placeholder="Marseille — photo à fournir"
        />
      </section>

      {/* PROCESS */}
      <section className="container-x py-32 hairline-b">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="t-eyebrow">— Méthode</div>
            <h2 className="font-serif t-h1 mt-6">
              Comment se déroule un{" "}
              <span className="font-serif-italic">dossier</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 prose-editorial t-body">
            <p>
              Un dossier de dommage corporel suit un parcours long, parfois sur
              plusieurs années. Voici les cinq étapes qui le rythment.
            </p>
          </div>
        </div>

        <ol>
          {processSteps.map((s, i) => (
            <li
              key={s.num}
              className={`grid grid-cols-12 gap-6 py-10 items-start${i < processSteps.length - 1 ? " hairline-b" : ""}`}
            >
              <div className="col-span-2 md:col-span-1 numeral">{s.num}</div>
              <div className="col-span-10 md:col-span-4">
                <div className="font-serif text-2xl">{s.title}</div>
              </div>
              <div
                className="col-span-12 md:col-span-6 md:col-start-7"
                style={{ color: "var(--ink-light)" }}
              >
                {s.body}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="container-x py-32">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="t-eyebrow">— Prendre contact</div>
            <h2
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Un premier
              <br />
              <span className="font-serif-italic">échange.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 prose-editorial t-body">
            <p>
              Le premier rendez-vous est offert. Présentez librement votre
              situation, en toute confidentialité.
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
