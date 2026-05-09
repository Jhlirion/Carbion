import { useState, useEffect } from 'react'

/**
 * useNavScroll
 * Returns true when page has scrolled past 20px.
 * Used to add shadow/border to the navbar.
 */
export function useNavScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
