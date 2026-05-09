import React from 'react'
import { STEPS } from '../utils/constants'

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">Cómo trabajamos</div>
          <h2 className="section-title">Proceso simple y medible</h2>
        </div>
        <div>
          {STEPS.map((step) => (
            <article key={step.num}>
              <h3>{step.num}. {step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
