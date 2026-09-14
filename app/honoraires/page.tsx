import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Honoraires du cabinet Thomas Cohadon : honoraire forfaitaire et honoraire de résultat. Premier rendez-vous gratuit.",
  alternates: { canonical: "https://cohadon-avocat.fr/honoraires" },
}

export default function HonorairesPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-10 md:pb-14 lg:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="t-eyebrow">— Honoraires</div>
            <h1
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Des honoraires{" "}
              <span className="font-serif-italic">clairs,</span>
              <br />
              justes et transparents.
            </h1>
          </div>
          <div
            className="col-span-12 lg:col-span-7 mt-8 t-lead"
            style={{ color: "var(--ink-light)" }}
          >
            La question des honoraires inquiète souvent les victimes et leurs
            proches. Mon engagement est simple : dès le premier rendez-vous,
            je vous explique précisément comment mes honoraires fonctionnent,
            ce qu'ils couvrent et ce qu'ils ne couvrent pas. Pas de surprise,
            pas d'ambiguïté.
          </div>
        </div>
      </section>

      {/* TWO CARDS */}
      <section className="container-x py-10 md:py-14 lg:py-20 hairline-b">
        <div
          className="grid grid-cols-12 gap-px mb-10 md:mb-14 lg:mb-16"
          style={{ background: "var(--rule)" }}
        >
          <article
            className="col-span-12 md:col-span-6 p-8 md:p-10"
            style={{ background: "var(--background)" }}
          >
            <div className="numeral">i.</div>
            <h2 className="font-serif text-2xl mt-6">Honoraire forfaitaire</h2>
            <div
              className="t-small mt-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Forfait global de diligences
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--ink-light)" }}>
              Il couvre l'ensemble des démarches, sans limite de temps ni de
              juridiction — phases transactionnelle et contentieuse comprises.
              Les frais de déplacement sont inclus. En cas de protection
              juridique, une partie peut être prise en charge par votre
              assurance.
            </p>
          </article>
          <article
            className="col-span-12 md:col-span-6 p-8 md:p-10"
            style={{ background: "var(--background)" }}
          >
            <div className="numeral">ii.</div>
            <h2 className="font-serif text-2xl mt-6">Honoraire de résultat</h2>
            <div
              className="font-serif-italic text-3xl mt-6"
              style={{ color: "var(--primary)" }}
            >
              8 – 10 % HT
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--ink-light)" }}>
              Calculé uniquement sur le montant final de votre indemnisation,
              hors rentes et prestations sociales. Ce taux est fixé et écrit
              dans la convention d'honoraires dès le départ. Aucune surprise en
              fin de dossier.
            </p>
          </article>
        </div>

        {/* ENGAGEMENTS */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Mes engagements</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                {
                  title: "Premier rendez-vous gratuit",
                  body: "Une première consultation sans engagement, à votre domicile ou par appel, pour évaluer votre situation et répondre à toutes vos questions.",
                },
                {
                  title: "Convention d'honoraires écrite",
                  body: "Tout est formalisé par écrit dès le départ : honoraires de base, honoraires de résultat, conditions. Rien n'est laissé à l'interprétation.",
                },
                {
                  title: "Aucune avance d'honoraires",
                  body: "Je ne demande aucune avance : les honoraires de base ne sont facturés qu'après l'indemnisation, et peuvent en partie être pris en charge par votre assurance de protection juridique.",
                },
                {
                  title: "Intérêts alignés",
                  body: "Vous ne payez rien avant d'être indemnisé. Mon intérêt est aligné avec le vôtre — obtenir la meilleure indemnisation possible.",
                },
              ].map((item) => (
                <div key={item.title} className="card-quiet pr-8" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm" style={{ color: "var(--ink-light)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-10 md:mt-12 t-small max-w-2xl"
          style={{ color: "var(--muted-foreground)" }}
        >
          Le cabinet accepte l'aide juridictionnelle pour les clients éligibles.
          Une protection juridique souscrite par le client peut prendre en
          charge tout ou partie des honoraires.
        </div>
      </section>

      <section className="container-x py-10 md:py-14 lg:py-20 hairline-b">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="t-eyebrow">— Convention & recours</div>
            <h2 className="font-serif t-h2 mt-6">
              Une convention écrite,{" "}
              <span className="font-serif-italic">avant</span> toute mission.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 prose-editorial t-body">
            <p>
              Les honoraires, qui sont libres, sont déterminés notamment selon
              le temps consacré à l'affaire, le travail de recherche
              nécessaire, la nature et la difficulté du dossier, l'importance
              des intérêts en cause, l'incidence des charges du cabinet, ainsi
              que les avantages et le résultat obtenus, et la situation
              personnelle du client.
            </p>
            <p>
              Une facturation au forfait peut également être pratiquée. Dans
              ce cas, l'honoraire est déterminé à l'avance, d'un commun
              accord. Une convention d'honoraires est conclue entre l'avocat
              et son client. Depuis la loi du 8 août 2015 dite «&nbsp;loi
              Macron&nbsp;» (article 51), elle est obligatoire pour toute
              matière et tout type d'intervention. Elle doit être signée
              avant toute mission. Elle peut prévoir qu'une partie des
              honoraires dépendra du résultat obtenu.
            </p>
            <p>
              Vous pouvez saisir le Bâtonnier du Barreau de Marseille pour
              contester les honoraires&nbsp;: Ordre des Avocats du Barreau de
              Marseille — Service des honoraires, 51 rue Grignan, 13006
              Marseille.
            </p>
            <p>
              Vous pouvez également recourir au médiateur de la consommation
              de la profession d'avocat (articles L. 612-1 et suivants du Code
              de la consommation)&nbsp;: Sandra Werey, 180 boulevard
              Haussmann, 75008 Paris —{" "}
              <a
                href="mailto:mediateur-conso@mediateur-consommation-avocat.fr"
                className="underline"
              >
                mediateur-conso@mediateur-consommation-avocat.fr
              </a>
              {" — "}
              <a
                href="https://mediateur-consommation-avocat.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                mediateur-consommation-avocat.fr
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-14 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="t-eyebrow">— Premier rendez-vous</div>
            <h2
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Gratuit et{" "}
              <span className="font-serif-italic">sans engagement.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 prose-editorial t-body">
            <p>
              Le premier rendez-vous est offert. Il permet d'évaluer votre
              situation et de comprendre comment le cabinet peut vous
              accompagner.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Nous contacter <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
