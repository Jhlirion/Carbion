import React from 'react'
import { FAQS } from '../utils/constants'

export default function FAQ() {
  return (
    <section className="section" aria-label="Preguntas frecuentes">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
