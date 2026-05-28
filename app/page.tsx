import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thomas Cohadon — Avocat en dommage corporel, Marseille",
  description:
    "Cabinet d'avocat en dommage corporel à Marseille. Accompagnement des victimes d'accidents, de la procédure à l'indemnisation.",
  alternates: { canonical: "https://cohadon-avocat.fr/" },
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="t-eyebrow rise d-1">
              Cabinet d'avocat — Barreau de Marseille
            </div>
            <h1
              className="font-serif t-display mt-6 rise d-2"
              style={{ lineHeight: 1.02 }}
            >
              Au service
              <br />
              des <span className="font-serif-italic">victimes</span>
              <br />
              de dommages
              <br />
              corporels.
            </h1>
            <div
              className="mt-8 md:mt-12 max-w-md t-lead rise d-3"
              style={{ color: "var(--ink-light)" }}
            >
              Le cabinet accompagne les personnes blessées et leurs proches dans
              la reconnaissance de leurs préjudices et l'obtention d'une
              indemnisation juste.
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 rise d-4">
              <Link href="/contact" className="btn btn-primary">
                Premier échange confidentiel <span className="arrow">→</span>
              </Link>
              <Link href="/expertise" className="btn btn-link">
                Découvrir l'expertise
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pl-10">
            <div
              className="img-frame placeholder aspect-[3/4] rise d-3"
              data-placeholder="Marseille — photo à fournir"
            />
            <div
              className="mt-4 text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              — Marseille
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="container-x py-12 md:py-16 lg:py-24 hairline-b">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Le cabinet</div>
            <h2 className="font-serif t-h2 mt-6">
              Une pratique
              <br />
              <span className="font-serif-italic">entièrement</span>
              <br />
              dédiée aux victimes.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 prose-editorial t-lead">
            <p>
              Le droit du dommage corporel se trouve à la croisée du droit
              civil, du droit pénal et du droit médical. Il exige une
              connaissance fine de la procédure, mais aussi une lecture précise
              du dossier médical et de la nomenclature Dintilhac.
            </p>
            <p>
              Le cabinet défend des particuliers, jamais des compagnies
              d'assurance. Chaque dossier est mené personnellement, de la
              première consultation jusqu'à la liquidation des préjudices.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="container-x py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {[
            {
              num: "i.",
              title: "Écoute & analyse",
              body: "Un premier rendez-vous gratuit, sans engagement, pour comprendre votre situation et évaluer la recevabilité de votre dossier.",
            },
            {
              num: "ii.",
              title: "Stratégie & procédure",
              body: "Constitution du dossier médical, expertise contradictoire, négociation amiable ou contentieuse selon l'intérêt du client.",
            },
            {
              num: "iii.",
              title: "Indemnisation",
              body: "Évaluation rigoureuse de chaque poste de préjudice et obtention d'une réparation à la hauteur de ce qui a été subi.",
            },
          ].map((p) => (
            <article key={p.num} className="col-span-12 md:col-span-4 card-quiet">
              <div className="numeral">{p.num}</div>
              <h3 className="font-serif t-h3 mt-6">{p.title}</h3>
              <p className="mt-4" style={{ color: "var(--ink-light)" }}>
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="container-x py-8 md:py-10 lg:py-12">
        <div className="img-frame aspect-[21/9]">
          <Image
            src="/images/palais-de-justice-marseille.png"
            alt="Palais de Justice de Marseille — façade néoclassique"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="mt-3 text-xs"
          style={{ color: "var(--muted-foreground)" }}
        >
          Palais de Justice de Marseille
        </div>
      </section>

      {/* EXPERTISE TEASER */}
      <section className="container-x py-12 md:py-16 lg:py-24 hairline-b">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Domaines d'intervention</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-serif t-h1">
              Tous les <span className="font-serif-italic">préjudices</span>
              <br />
              corporels, sans exception.
            </h2>
            <ul className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {[
                "Accidents de la circulation",
                "Accidents médicaux",
                "Accidents de la vie",
                "Accidents du travail",
                "Agressions & infractions",
                "Militaires blessés",
              ].map((item, i) => (
                <li
                  key={item}
                  className="py-4 md:py-6 hairline-b flex items-baseline justify-between gap-6"
                >
                  <span className="font-serif text-xl">{item}</span>
                  <span
                    className="t-small"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/expertise" className="btn btn-link">
                Voir le détail des prestations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-x py-14 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="col-span-12 md:col-span-5">
            <div
              className="img-frame placeholder aspect-[4/5]"
              data-placeholder="Marseille — photo à fournir"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="t-eyebrow">— Approche</div>
            <h2 className="font-serif t-h1 mt-6">
              Un dossier,
              <br />
              <span className="font-serif-italic">un avocat,</span>
              <br />
              un engagement.
            </h2>
            <div className="mt-10 prose-editorial t-body max-w-xl">
              <p>
                La pratique du dommage corporel ne se délègue pas. Chaque
                dossier est suivi personnellement par Maître Cohadon, du premier
                rendez-vous à la dernière audience.
              </p>
              <p>
                Cette continuité est la condition d'une défense vraiment ajustée
                à la réalité du blessé&nbsp;: à sa douleur, à ses pertes, à la
                trajectoire de sa reconstruction.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/cabinet" className="btn btn-ghost">
                Découvrir le parcours <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS RIBBON */}
      <section className="container-x py-10 md:py-14 lg:py-20">
        <div className="hairline pt-10 md:pt-14 lg:pt-16">
          <div className="t-eyebrow">— Comment se déroule un dossier</div>
          <div className="grid grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-10">
            {[
              {
                num: "01",
                title: "Prise de contact",
                body: "Échange initial téléphonique ou en personne, gratuit et confidentiel.",
              },
              {
                num: "02",
                title: "Étude du dossier",
                body: "Analyse des pièces médicales, des rapports d'expertise et des décisions antérieures.",
              },
              {
                num: "03",
                title: "Expertise & négociation",
                body: "Assistance lors des expertises médicales, échanges avec les débiteurs d'indemnisation.",
              },
              {
                num: "04",
                title: "Indemnisation",
                body: "Liquidation des préjudices selon la nomenclature Dintilhac, transaction ou jugement.",
              },
            ].map((s) => (
              <div key={s.num} className="col-span-12 md:col-span-3">
                <div className="numeral">{s.num}</div>
                <h4 className="font-serif text-lg mt-3">{s.title}</h4>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--ink-light)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
