import React from 'react'
import { BRAND } from '../utils/constants'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">Contacto</div>
          <h2 className="section-title">Hablemos de tu negocio</h2>
        </div>
        <p>Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
        <p>Teléfono: <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></p>
        <p>Dirección: {BRAND.address}</p>
      </div>
    </section>
  )
}
