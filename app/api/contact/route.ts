import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstname, lastname, email, phone, subject, message, rgpd, _honey } = body

    // Honeypot check
    if (_honey) {
      return NextResponse.json({ ok: true })
    }

    // Basic validation
    if (!firstname || !lastname || !email || !subject || !message || !rgpd) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      )
    }

    // TODO: replace with Resend when RESEND_API_KEY is configured
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: process.env.CONTACT_FROM!,
    //   to: process.env.CONTACT_TO!,
    //   subject: `Nouveau contact — ${subject}`,
    //   text: `De : ${firstname} ${lastname} <${email}>\nTéléphone : ${phone || "—"}\nSujet : ${subject}\n\n${message}`,
    // })

    console.log("Contact form submission:", {
      from: `${firstname} ${lastname} <${email}>`,
      phone: phone || "—",
      subject,
      message,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
