import React from 'react'
import { PLANS } from '../utils/constants'
import { waLink } from '../utils/helpers'

export default function Plans() {
  return (
    <section id="planes" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">Planes</div>
          <h2 className="section-title">Elige el plan ideal para tu etapa</h2>
        </div>
        <div>
          {PLANS.map((plan) => (
            <article key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.tagline}</p>
              <p><strong>{plan.price}</strong> {plan.period}</p>
              <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href={waLink(plan.waMsg)} target="_blank" rel="noreferrer">{plan.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
