import React, { useState } from 'react'
import { useNavScroll } from '../hooks/useNavScroll'
import { BRAND, NAV_LINKS } from '../utils/constants'
import { scrollTo } from '../utils/helpers'
import styles from './Navbar.module.css'

export default function Navbar() {
  const scrolled  = useNavScroll()
  const [open, setOpen] = useState(false)

  function handleNav(e, href) {
    e.preventDefault()
    setOpen(false)
    scrollTo(href)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Menú principal">
      <a href="#inicio" className={styles.logo} onClick={(e) => handleNav(e, '#inicio')} aria-label="Carbion — Inicio">
        {BRAND.name.slice(0, -2)}<span>{BRAND.name.slice(-2)}</span>
      </a>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contacto" className={styles.cta} onClick={(e) => handleNav(e, '#contacto')}>
        Agendar llamada →
      </a>

      {/* Mobile hamburger */}
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}>
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Menú móvil">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a>
          ))}
          <a href="#contacto" className={styles.mobileCta} onClick={(e) => handleNav(e, '#contacto')}>
            Agendar llamada →
          </a>
        </div>
      )}
    </nav>
  )
}
