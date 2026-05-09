import React from 'react'
import { BRAND, VALUES, DIFFERENTIATORS } from '../utils/constants'

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">Nosotros</div>
          <h2 className="section-title">{BRAND.tagline}</h2>
        </div>
        <div>
          {VALUES.map((v) => <p key={v.title}>{v.icon} <strong>{v.title}:</strong> {v.desc}</p>)}
        </div>
        <div>
          {DIFFERENTIATORS.map((d) => <p key={d.num}><strong>{d.num} {d.title}:</strong> {d.desc}</p>)}
        </div>
      </div>
    </section>
  )
}
