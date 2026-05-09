import React from 'react'
import { METRICS } from '../utils/constants'

export default function Metrics() {
  return (
    <section className="section" aria-label="Métricas">
      <div className="section-inner">
        <div>
          {METRICS.map((m) => (
            <article key={m.title}>
              <h3>{m.num}</h3>
              <p><strong>{m.title}</strong></p>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
