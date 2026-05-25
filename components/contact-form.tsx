"use client"

import { useState } from "react"
import Link from "next/link"

const subjectOptions = [
  "Accident de la circulation",
  "Accident médical",
  "Accident de la vie",
  "Accident du travail",
  "Agression / infraction",
  "Préjudice d'affection",
  "Autre",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

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
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="mt-10 p-10 hairline">
        <div className="t-eyebrow">— Message envoyé</div>
        <h3 className="font-serif text-3xl mt-4">Merci.</h3>
        <p className="mt-5 max-w-prose" style={{ color: "var(--ink-light)" }}>
          Votre demande a bien été transmise au cabinet. Une réponse personnelle
          vous sera adressée sous 48 heures ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="firstname">Prénom</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          required
          autoComplete="given-name"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="lastname">Nom</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          required
          autoComplete="family-name"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="field col-span-2 md:col-span-1">
        <label htmlFor="phone">Téléphone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field col-span-2">
        <label htmlFor="subject">Nature de votre demande</label>
        <select id="subject" name="subject" required>
          <option value="">Sélectionnez —</option>
          {subjectOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field col-span-2">
        <label htmlFor="message">Décrivez brièvement votre situation</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Évitez les informations sensibles à ce stade — un rendez-vous sera fixé pour les détails."
        />
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
          et j'accepte que mes données soient utilisées uniquement pour répondre
          à ma demande.
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
          {loading ? "Envoi…" : "Envoyer le message"}{" "}
          {!loading && <span className="arrow">→</span>}
        </button>
        <span className="t-small" style={{ color: "var(--muted-foreground)" }}>
          Vos échanges sont couverts par le secret professionnel.
        </span>
      </div>
    </form>
  )
}
