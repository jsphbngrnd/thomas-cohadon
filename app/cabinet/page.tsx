import type { Metadata } from "next"
import Link from "next/link"
import { parcours } from "@/content/parcours"

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "Avocat au Barreau de Marseille, Thomas Cohadon défend exclusivement les victimes de dommages corporels.",
  alternates: { canonical: "https://cohadon-avocat.fr/cabinet" },
}

const engagements = [
  {
    n: "— 01",
    title: "L'humain d'abord",
    body: "Écoute, compréhension du vécu et accompagnement personnalisé à chaque étape.",
  },
  {
    n: "— 02",
    title: "Expertise juridique",
    body: "Connaissance approfondie du droit du dommage corporel pour défendre vos droits avec précision.",
  },
  {
    n: "— 03",
    title: "Transparence",
    body: "Une relation claire et directe sur les possibilités, les obstacles et les étapes de votre dossier.",
  },
  {
    n: "— 04",
    title: "Ne jamais lâcher",
    body: "La même combativité que dans le sport : jusqu'au bout, pour vos intérêts.",
  },
  {
    n: "— 05",
    title: "Indépendance totale",
    body: "Mon rôle d'avocat de victimes me confère une indépendance totale vis-à-vis des compagnies d'assurances. Cette autonomie me permet de refuser tout accord qui ne servirait pas au mieux vos intérêts.",
  },
]

export default function CabinetPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-10 md:pb-14 lg:pb-16">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
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
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="container-x py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
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
            <div className="t-eyebrow">— Qui suis-je</div>
            <h2 className="font-serif t-h1 mt-6">
              Une vocation,
              <br />
              <span className="font-serif-italic">une seule matière.</span>
            </h2>
            <div className="mt-10 prose-editorial t-body">
              <p>
                Victime d'un accident, d'une erreur médicale ou d'un dommage
                corporel : votre vie s'arrête. Tout change. C'est précisément
                dans ces moments là qu'un accompagnement humain et rigoureux
                fait la différence.
              </p>
              <p>
                Ma conviction est simple : défendre une victime, c'est d'abord
                comprendre ce qu'elle a traversé. Ce n'est pas une relation
                impersonnelle — c'est un engagement. Chaque dossier porte une
                histoire, et c'est en la comprenant pleinement que je peux la
                défendre avec justesse.
              </p>
              <p>
                À cela s'ajoute une exigence de rigueur absolue. La confiance
                que vous placez en votre avocat mérite d'être fondée sur une
                maîtrise pointue du droit, une identification claire des enjeux
                juridiques et une stratégie adaptée à votre situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPORT */}
      <section className="container-x py-12 md:py-16 lg:py-24 hairline-b">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— L'esprit du sportif</div>
            <h2 className="font-serif t-h1 mt-6">
              On ne gagne pas
              en <span className="font-serif-italic">renonçant.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 prose-editorial t-body">
            <p>
              J'ai toujours pratiqué de nombreux sports. Cette passion m'a
              appris une chose fondamentale : on ne gagne pas en renonçant. On
              gagne en se préparant mieux, en allant plus loin, en refusant de
              lâcher.
            </p>
            <p>
              Cet état d'esprit, je le retrouve pleinement dans mon métier.
              Quand je défends un client, je mets la même détermination que sur
              un terrain : je ne lâche rien. Chaque obstacle juridique est un
              défi à surmonter, chaque argument adverse une occasion de répondre
              avec encore plus de précision.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="container-x py-14 md:py-20 lg:py-32">
        <div className="t-eyebrow">— Mes engagements</div>
        <h2 className="font-serif t-h1 mt-6 max-w-3xl">
          Cinq engagements concrets qui structurent chaque collaboration.
        </h2>
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16">
          {engagements.map((v) => (
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
      <section className="container-x py-8 md:py-10 lg:py-12">
        <div
          className="img-frame placeholder aspect-[21/8]"
          data-placeholder="Marseille — photo à fournir"
        />
      </section>

      {/* PARCOURS */}
      <section className="container-x py-12 md:py-16 lg:py-24 hairline-b">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Formation</div>
            <h2 className="font-serif t-h1 mt-6">
              Parcours &amp;{" "}
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
                  <div className="col-span-3 numeral" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
                    {p.year}
                  </div>
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

      {/* CTA */}
      <section className="container-x py-14 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
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
