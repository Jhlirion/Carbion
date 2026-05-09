import React from 'react'
import { SERVICES } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Services.module.css'

const TINT_CLASS = { purple: styles.tintPurple, blue: styles.tintBlue, teal: styles.tintTeal }

export default function Services() {
  const ref = useScrollReveal()
  return (
    <section id="servicios" ref={ref}>
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow reveal">Lo que hacemos</div>
          <h2 className="section-title reveal reveal-d1">Tres servicios,<br />un ecosistema</h2>
          <p className="section-sub reveal reveal-d2">
            Diseñados para trabajar juntos y escalar tu negocio en cada etapa de crecimiento.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <article key={s.num} className={`${styles.card} reveal reveal-d${i + 1}`}>
              <div className={styles.cardBg}>
                <img src={s.img} alt="" aria-hidden="true" loading="lazy" />
                <div className={`${styles.tint} ${TINT_CLASS[s.tint]}`} />
              </div>
              <div className={styles.content}>
                <div className={styles.num}>{s.num}</div>
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />{s.badge}
                </div>
                <h3 className={styles.title}>{s.title.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <ul className={styles.features}>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className={styles.price}>
                  <span className={styles.priceNum}>{s.price}</span>
                  <span className={styles.priceLabel}>&nbsp;{s.priceLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
