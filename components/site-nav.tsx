"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/cabinet", label: "Le cabinet" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      ref={navRef}
      className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
    >
      <div className="container-x flex items-center justify-between">
        <Link
          href="/"
          className="nav__brand font-serif text-xl tracking-tight z-50 relative"
        >
          Thomas <span className="font-serif-italic">Cohadon</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav__link${pathname === l.href ? " is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-xs">
            Prendre contact <span className="arrow">→</span>
          </Link>
        </nav>

        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className="block h-px w-full origin-center transition-all duration-300"
            style={{
              background: "var(--foreground)",
              transform: open ? "translateY(6px) rotate(45deg)" : undefined,
            }}
          />
          <span
            className="block h-px w-full transition-all duration-300"
            style={{
              background: "var(--foreground)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-full origin-center transition-all duration-300"
            style={{
              background: "var(--foreground)",
              transform: open ? "translateY(-6px) rotate(-45deg)" : undefined,
            }}
          />
        </button>
      </div>

      <div className="nav__panel">
        <nav className="flex flex-col">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`py-5 hairline-b font-serif text-4xl${pathname === l.href ? " font-serif-italic" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10 flex flex-col gap-3">
          <div className="t-eyebrow mb-2">— Contact</div>
          <a
            href="tel:+33491000000"
            className="font-serif text-2xl"
            style={{ color: "var(--foreground)" }}
          >
            04 91 00 00 00
          </a>
          <a
            href="mailto:contact@cohadon-avocat.fr"
            className="text-sm"
            style={{ color: "var(--ink-light)" }}
          >
            contact@cohadon-avocat.fr
          </a>
          <Link href="/contact" className="btn btn-primary mt-4 self-start">
            Prendre rendez-vous <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
