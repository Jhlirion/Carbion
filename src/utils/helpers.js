import { WA_BASE, WA_MSGS } from './constants'

/**
 * Build a WhatsApp URL with a pre-written message.
 * @param {string} msgKey - key from WA_MSGS (e.g. 'default', 'agenda')
 */
export function waLink(msgKey = 'default') {
  return `${WA_BASE}?text=${WA_MSGS[msgKey] ?? WA_MSGS.default}`
}

/**
 * Smooth scroll to a section by id.
 * @param {string} id - e.g. '#servicios'
 */
export function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
