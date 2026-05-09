import React from 'react'
import { BRAND } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="section" aria-label="Pie de página">
      <div className="section-inner">
        <p>© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
