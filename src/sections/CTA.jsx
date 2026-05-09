import React from 'react'
import { waLink } from '../utils/helpers'

export default function CTA() {
  return (
    <section className="section" aria-label="Llamado a la acción">
      <div className="section-inner">
        <h2 className="section-title">¿Listo para crecer?</h2>
        <a className="btn-primary" href={waLink('default')} target="_blank" rel="noreferrer">Agendar llamada</a>
      </div>
    </section>
  )
}
