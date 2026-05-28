import type { Metadata } from "next"
import { ConsultationForm } from "@/components/consultation-form"

export const metadata: Metadata = {
  title: "Consultation en ligne",
  description:
    "Posez votre question directement à Maître Thomas Cohadon. Réponse personnelle sous 24 h par email ou sous 12 h par téléphone. Premier échange gratuit.",
  alternates: { canonical: "https://cohadon-avocat.fr/consultation" },
}

export default function ConsultationPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-32 md:pt-40 lg:pt-48 pb-10 md:pb-14 lg:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="t-eyebrow">— Consultation en ligne</div>
            <h1
              className="font-serif t-display mt-6"
              style={{ lineHeight: 1.02 }}
            >
              Une question{" "}
              <span className="font-serif-italic">simple ?</span>
            </h1>
          </div>
          <div
            className="col-span-12 lg:col-span-7 mt-6 t-lead"
            style={{ color: "var(--ink-light)" }}
          >
            Pas besoin d'un rendez-vous formel pour obtenir une première
            réponse. Posez votre question directement : je vous réponds
            personnellement, sous 24 h par email ou sous 12 h par téléphone.
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="container-x py-10 md:py-14 lg:py-20 hairline-b">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="t-eyebrow">— Formulaire</div>
            <div
              className="mt-10 space-y-8 t-small"
              style={{ color: "var(--muted-foreground)" }}
            >
              {[
                {
                  label: "Confidentialité",
                  body: "Vos informations sont strictement confidentielles et ne sont jamais transmises à des tiers.",
                },
                {
                  label: "Délai de réponse",
                  body: "Sous 24 h par email, sous 12 h par téléphone.",
                },
                {
                  label: "Engagement",
                  body: "Premier échange gratuit et sans engagement.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="t-eyebrow mb-2">{item.label}</div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  )
}
