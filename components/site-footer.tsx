import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="container-x py-16 hairline">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="font-serif text-2xl">
            Thomas <span className="font-serif-italic">Cohadon</span>
          </div>
          <div
            className="mt-3 text-sm max-w-xs"
            style={{ color: "var(--ink-light)" }}
          >
            Thomas Cohadon — avocat au barreau de Marseille.
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="t-eyebrow">Cabinet</div>
          <ul className="mt-5 space-y-2 text-sm">
            <li>35 rue Saint-Jacques</li>
            <li>13006 Marseille</li>
            <li>France</li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="t-eyebrow">Contact</div>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href="tel:+33640135176" className="hover:underline">
                06 40 13 51 76
              </a>
            </li>
            <li>
              <a
                href="mailto:tc@cohadon-avocat.fr"
                className="hover:underline"
              >
                tc@cohadon-avocat.fr
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2">
          <div className="t-eyebrow">Pages</div>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/cabinet" className="hover:underline">
                Le cabinet
              </Link>
            </li>
            <li>
              <Link href="/expertise" className="hover:underline">
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 hairline flex flex-col md:flex-row md:justify-between gap-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
        <span>© {new Date().getFullYear()} Thomas Cohadon — Tous droits réservés</span>
        <span>Site soumis aux règles déontologiques de la profession d'avocat</span>
      </div>
    </footer>
  )
}
