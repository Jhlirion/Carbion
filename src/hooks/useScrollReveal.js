import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a container ref.
 * All children with class "reveal" inside it animate in on scroll.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <section ref={ref}>
 *     <div className="reveal">...</div>
 *   </section>
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold }
    )

    const targets = el.querySelectorAll('.reveal')
    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
