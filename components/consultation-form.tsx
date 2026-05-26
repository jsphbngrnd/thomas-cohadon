"use client"

import { useState } from "react"
import Link from "next/link"

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = { ...Object.fromEntries(new FormData(form)), _type: "consultation" }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Erreur lors de l'envoi")
      setSubmitted(true)
      form.reset()
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="mt-10 p-10 hairline">
        <div className="t-eyebrow">— Demande envoyée</div>
        <h3 className="font-serif text-3xl mt-4">Merci.</h3>
        <p className="mt-5 max-w-prose" style={{ color: "var(--ink-light)" }}>
          Votre question a bien été transmise. Je vous répondrai dans les
          délais indiqués, de manière personnelle et confidentielle.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 md:mt-10 grid grid-cols-2 gap-x-8 md:gap-x-10 gap-y-6 md:gap-y-8">
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="cl-firstname">Prénom</label>
        <input
          id="cl-firstname"
          name="firstname"
          type="text"
          required
          autoComplete="given-name"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="cl-lastname">Nom</label>
        <input
          id="cl-lastname"
          name="lastname"
          type="text"
          required
          autoComplete="family-name"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="cl-email">Email</label>
        <input
          id="cl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="cl-phone">Téléphone</label>
        <input id="cl-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field col-span-2">
        <label htmlFor="cl-question">Votre question</label>
        <textarea
          id="cl-question"
          name="question"
          rows={5}
          required
          placeholder="Décrivez brièvement votre situation ou posez directement votre question."
        />
      </div>

      <div className="col-span-2">
        <div className="t-small mb-4" style={{ color: "var(--muted-foreground)" }}>
          — Mode de réponse souhaité
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {[
            { value: "email", label: "Email", sub: "réponse sous 24h" },
            { value: "phone", label: "Téléphone", sub: "rappel sous 12h" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-4 p-5 cursor-pointer hairline"
              style={{ flex: 1 }}
            >
              <input
                type="radio"
                name="preferred_contact"
                value={opt.value}
                defaultChecked={opt.value === "email"}
                className="shrink-0"
              />
              <span>
                <span className="font-serif text-base">{opt.label}</span>
                <span
                  className="block t-small"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {opt.sub}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden />

      <label
        className="col-span-2 flex items-start gap-3 text-sm cursor-pointer"
        style={{ color: "var(--ink-light)" }}
      >
        <input type="checkbox" required name="rgpd" className="mt-1.5" />
        <span>
          Je reconnais avoir pris connaissance des{" "}
          <Link href="/mentions-legales" className="underline">
            mentions légales
          </Link>{" "}
          et j'accepte que mes données soient utilisées uniquement pour
          répondre à ma demande.
        </span>
      </label>

      {error && (
        <div
          className="col-span-2 text-sm"
          style={{ color: "hsl(0 70% 40%)" }}
        >
          {error}
        </div>
      )}

      <div className="col-span-2 flex flex-wrap items-center gap-6 mt-4">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Envoi…" : "Envoyer ma question"}{" "}
          {!loading && <span className="arrow">→</span>}
        </button>
        <span className="t-small" style={{ color: "var(--muted-foreground)" }}>
          Premier échange gratuit et sans engagement.
        </span>
      </div>
    </form>
  )
}
