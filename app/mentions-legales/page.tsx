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
        Maître Thomas Cohadon, entrepreneur individuel (EI), avocat inscrit au
        Barreau de Marseille
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
        Directeur de la publication&nbsp;: Maître Thomas Cohadon, entrepreneur
        individuel (EI).
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
        <br />
        Téléphone&nbsp;: +1 (951) 383-6898
        <br />
        Email&nbsp;:{" "}
        <a href="mailto:privacy@vercel.com" className="underline">
          privacy@vercel.com
        </a>
        <br />
        Site&nbsp;:{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          vercel.com
        </a>
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
          En application des articles 13 et 14 du Règlement européen général
          sur la protection des données (2016/679) et de l'article 32 de la
          loi Informatique et Libertés du 6 janvier 1978 modifiée, le
          Directeur de la publication du site vous informe que&nbsp;:
        </p>
        <p>
          <strong>Qui protège&nbsp;?</strong> Le responsable du traitement est
          Maître Thomas Cohadon, entrepreneur individuel (EI), 35 rue
          Saint-Jacques, 13006 Marseille —{" "}
          <a href="mailto:tc@cohadon-avocat.fr" className="underline">
            tc@cohadon-avocat.fr
          </a>
          , 06 40 13 51 76.
        </p>
        <p>
          <strong>Qu'est-ce qui est protégé&nbsp;?</strong> L'ensemble de vos
          données personnelles, notamment celles transmises lors d'une prise
          de contact, d'une demande de rendez-vous ou dans le cadre du
          traitement de votre dossier. Elles sont également protégées par le
          secret professionnel de l'avocat et ne font l'objet d'aucune
          cession ni d'aucun traitement commercial.
        </p>
        <p>
          <strong>Pourquoi&nbsp;?</strong> Pour la protection de votre vie
          privée, dans le cadre du traitement de votre dossier — qu'il
          s'agisse d'un dossier juridique, judiciaire ou d'arbitrage — ainsi
          que pour l'établissement d'un devis ou la prise d'un rendez-vous.
        </p>
        <p>
          <strong>Où&nbsp;?</strong> Dans un registre tenu par Maître Thomas
          Cohadon.
        </p>
        <p>
          <strong>Jusqu'à quand&nbsp;?</strong> Vos données sont traitées et
          conservées dès votre prise d'attache, y compris pour le simple
          établissement d'un devis ou lors de la prise d'un rendez-vous. Elles
          ne sont conservées que quatre semaines si le rendez-vous n'est pas
          honoré. Dans les autres cas, elles sont conservées pendant cinq ans
          à compter du dernier acte juridique ou judiciaire réalisé par
          Maître Thomas Cohadon.
        </p>
        <p>
          <strong>Comment&nbsp;?</strong> Par un système informatique protégé
          et sécurisé, ainsi que par des locaux et un système informatique
          protégés et sécurisés.
        </p>
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'opposition, de
          portabilité et d'effacement de vos données. Pour l'exercer, écrivez
          à{" "}
          <a href="mailto:tc@cohadon-avocat.fr" className="underline">
            tc@cohadon-avocat.fr
          </a>
          . Vous pouvez également adresser une réclamation à la CNIL.
        </p>
      </>
    ),
  },
  {
    id: "assurance",
    title: "Assurance responsabilité civile professionnelle",
    content: (
      <>
        <p className="mt-6">
          L'avocat justifie d'une assurance garantissant sa responsabilité
          civile professionnelle. Tous les avocats inscrits au barreau de
          Marseille sont automatiquement couverts par la police d'assurance
          souscrite par l'Ordre.
        </p>
        <p>
          La police d'assurance RCP est automatiquement souscrite par le
          Barreau de Marseille auprès de la Compagnie MMA IARD Assurances
          Mutuelle, société d'assurance mutuelle à cotisations fixes, RCS Le
          Mans 775 652 126, et de la Compagnie MMA IARD, société anonyme au
          capital de 537&nbsp;052&nbsp;368 euros entièrement versé, RCS Le
          Mans 440 048 882. Sièges sociaux&nbsp;: 160 rue Henri Champion,
          72030 Le Mans Cedex 9. Entreprises régies par le Code des
          assurances.
        </p>
        <p>
          Cette assurance couvre les fautes, omissions ou négligences
          nécessairement involontaires commises dans le cadre de l'exercice
          normal de la profession. L'exercice normal s'entend comme
          l'ensemble des activités autorisées par le RIN, sauf le cas de la
          fiducie ou de la représentation fiscale.
        </p>
        <p>
          Plus précisément, le contrat a pour objet de garantir les
          conséquences pécuniaires de la responsabilité civile encourue par
          l'avocat à raison des dommages ou des préjudices causés à un
          tiers, dans l'exercice de ses activités professionnelles, soit de
          son fait personnel, soit du fait de ses auxiliaires,
          collaborateurs et préposés occasionnels ou permanents, ou de
          toutes personnes dont il est civilement responsable, résultant
          notamment&nbsp;:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-3">
          <li>
            d'erreurs de fait ou de droit, omissions, oublis, retards,
            fautes, inexactitudes, indiscrétions et, d'une manière
            générale, de tous actes dommageables, notamment à la suite de
            tous actes de postulation, d'assistance ou de conseil&nbsp;;
          </li>
          <li>
            de vols, malversations, détournements, escroqueries ou abus de
            confiance, commis au préjudice de la clientèle de l'avocat par
            toute personne dont celui-ci serait reconnu responsable. Dans
            ces cas, une plainte devra être déposée par l'avocat, soit
            contre l'auteur du dommage, soit contre inconnu.
          </li>
        </ul>
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
          Pour toute réclamation relative aux honoraires, le client peut
          saisir le Bâtonnier du Barreau de Marseille — Service des
          honoraires, 51 rue Grignan, 13006 Marseille.
        </p>
      </>
    ),
  },
  {
    id: "mediation",
    title: "Médiation de la consommation",
    content: (
      <>
        <p className="mt-6">
          Conformément aux articles L. 612-1 et suivants du Code de la
          consommation, le client consommateur a la possibilité de recourir
          gratuitement au médiateur de la consommation de la profession
          d'avocat&nbsp;:
        </p>
        <p>
          Sandra Werey, médiatrice de la consommation de la profession
          d'avocat
          <br />
          180 boulevard Haussmann — 75008 Paris
          <br />
          Courriel&nbsp;:{" "}
          <a
            href="mailto:mediateur-conso@mediateur-consommation-avocat.fr"
            className="underline"
          >
            mediateur-conso@mediateur-consommation-avocat.fr
          </a>
          <br />
          Site&nbsp;:{" "}
          <a
            href="https://mediateur-consommation-avocat.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            mediateur-consommation-avocat.fr
          </a>
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
            <p className="t-small" style={{ color: "var(--muted-foreground)" }}>
              Site conçu et développé par{" "}
              <a
                href="https://josephbongrand.work/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Joseph Bongrand
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
