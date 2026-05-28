import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du site du cabinet Thomas Cohadon.",
  alternates: { canonical: "https://cohadon-avocat.fr/mentions-legales" },
}

const sections = [
  {
    id: "editeur",
    title: "Éditeur du site",
    content: (
      <p className="mt-6">
        Le présent site est édité par&nbsp;:
        <br />
        Maître Thomas Cohadon, avocat inscrit au Barreau de Marseille
        <br />
        35 rue Saint-Jacques — 13006 Marseille
        <br />
        Téléphone&nbsp;: 06 40 13 51 76
        <br />
        Email&nbsp;: tc@cohadon-avocat.fr
        <br />
        SIRET&nbsp;: 909 056 640 00016
        <br />
        Numéro d'identification TVA intracommunautaire&nbsp;: FR91909056640
        <br />
        Directeur de la publication&nbsp;: Maître Thomas Cohadon.
      </p>
    ),
  },
  {
    id: "hebergeur",
    title: "Hébergement",
    content: (
      <p className="mt-6">
        Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
        Covina, CA 91723, États-Unis.
      </p>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: (
      <p className="mt-6">
        L'ensemble du contenu du site — textes, images, identité visuelle, code
        — est la propriété exclusive de Maître Thomas Cohadon, sauf mentions
        contraires. Toute reproduction, totale ou partielle, est soumise à
        autorisation écrite préalable.
      </p>
    ),
  },
  {
    id: "donnees",
    title: "Données personnelles",
    content: (
      <>
        <p className="mt-6">
          Les informations transmises via le formulaire de contact sont utilisées
          exclusivement pour traiter votre demande et sont protégées par le
          secret professionnel de l'avocat. Elles ne font l'objet d'aucune
          cession ni d'aucun traitement commercial.
        </p>
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), vous disposez d'un droit d'accès, de rectification,
          d'opposition, de portabilité et d'effacement de vos données. Pour
          l'exercer, écrivez à{" "}
          <a
            href="mailto:tc@cohadon-avocat.fr"
            className="underline"
          >
            tc@cohadon-avocat.fr
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p className="mt-6">
        Le site n'utilise pas de cookies de mesure d'audience ni de traceurs
        publicitaires. Seuls des cookies strictement techniques peuvent être
        déposés, sans consentement requis.
      </p>
    ),
  },
  {
    id: "deontologie",
    title: "Déontologie",
    content: (
      <>
        <p className="mt-6">
          Le présent site respecte les règles déontologiques de la profession
          d'avocat — Règlement Intérieur National (RIN) et règlement intérieur
          du Barreau de Marseille — ainsi que les dispositions du décret
          n° 2014-1251 du 28 octobre 2014. Les informations diffusées ne
          constituent ni un conseil juridique personnalisé, ni une sollicitation
          commerciale.
        </p>
        <p>
          Pour toute réclamation, le client peut saisir le Bâtonnier de l'Ordre
          des Avocats de Marseille — Maison de l'Avocat, 51 rue Grignan, 13006
          Marseille.
        </p>
      </>
    ),
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="container-x pt-40 md:pt-48 pb-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="t-eyebrow">— Informations</div>
            <h1 className="font-serif t-h1 mt-6">
              Mentions <span className="font-serif-italic">légales</span>{" "}
              &amp;
              <br />
              politique de confidentialité.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-x pb-32">
        <div className="grid grid-cols-12 gap-10">
          <aside className="col-span-12 lg:col-span-3">
            <nav className="sticky top-32 space-y-3 text-sm">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block hover:underline" style={{ color: "var(--foreground)" }}>
                  — {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5 prose-editorial t-body space-y-16 max-w-prose">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2 className="font-serif text-3xl">{s.title}</h2>
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
