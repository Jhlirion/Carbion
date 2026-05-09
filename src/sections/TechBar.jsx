import React from 'react'
import { TECH_LOGOS } from '../utils/constants'

export default function TechBar() {
  return (
    <section className="section" aria-label="Tecnologías">
      <div className="section-inner">
        <p>{TECH_LOGOS.join(' · ')}</p>
      </div>
    </section>
  )
}
