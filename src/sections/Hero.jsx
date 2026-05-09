import React, { useEffect, useRef } from 'react'
import { STATS } from '../utils/constants'
import { scrollTo } from '../utils/helpers'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  // Reveal hero elements immediately on mount
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.reveal')
    setTimeout(() => els?.forEach(el => el.classList.add('visible')), 80)
  }, [])

  return (
    <section className={styles.hero} id="inicio" ref={heroRef} aria-label="Sección principal">
      {/* Cosmic background image */}
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=2000&q=90&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className={styles.bgImg}
          loading="eager"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        {/* Left — copy */}
        <div className={styles.content}>
          <div className={`${styles.tag} reveal`}>
            <span className={styles.tagDot} />
            Agencia de crecimiento · Lima, Perú
          </div>

          <h1 className={`display reveal reveal-d1`}>
            Hacemos crecer<br />
            tu negocio con<br />
            <em>inteligencia</em>
          </h1>

          <p className={`${styles.sub} reveal reveal-d2`}>
            Marketing digital, automatización con IA y páginas web que convierten.
            Todo en una sola corporación, con resultados medibles desde el primer mes.
          </p>

          <div className={`${styles.ctas} reveal reveal-d3`}>
            <button className="btn-primary" onClick={() => scrollTo('#contacto')}>
              Quiero crecer ahora →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#servicios')}>
              Ver servicios
            </button>
          </div>

          <div className={`${styles.stats} reveal reveal-d4`}>
            {STATS.map((s) => (
              <div key={s.num} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating cards */}
        <div className={`${styles.visual} reveal reveal-d2`}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.cardLabel}>ROI promedio</div>
            <div className={styles.cardVal}>2.8x</div>
            <div className={styles.cardSub}>en campañas con IA</div>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.badgeLive}>
              <span className={styles.liveDot} />
              Dashboard en vivo
            </div>
            <div className={styles.card2Num}>+340%</div>
            <div className={styles.card2Label}>consultas web</div>
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardLabel}>Entrega</div>
            <div className={styles.cardVal} style={{ fontSize: 20 }}>48h ⚡</div>
            <div className={styles.cardSub}>web lista y funcionando</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
