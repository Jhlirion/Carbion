/* ============================================================
   Carbion — Constantes globales
   Cambia aquí el número de WhatsApp, email, redes, etc.
   ============================================================ */

export const BRAND = {
  name:     'Carbion',
  tagline:  'Agencia de crecimiento con IA — Lima, Perú',
  email:    'hola@carbion.pe',
  phone:    '+51 999 999 999',
  whatsapp: '51999999999',   // ← Cambia por tu número real (sin + ni espacios)
  address:  'Lima, Perú',
  hours:    'Lun–Vie 9am–7pm · Sáb 9am–1pm',
  instagram: 'https://instagram.com/carbion',
  linkedin:  'https://linkedin.com/company/carbion',
}

export const WA_BASE = `https://wa.me/${BRAND.whatsapp}`

export const WA_MSGS = {
  default:   encodeURIComponent('Hola Carbion, quiero agendar una llamada gratuita'),
  agenda:    encodeURIComponent('Hola Carbion, quiero información sobre Agenda Inteligente por WhatsApp'),
  ventas:    encodeURIComponent('Hola Carbion, quiero información sobre Ventas Automatizadas con Catálogo Dinámico'),
  seguimiento: encodeURIComponent('Hola Carbion, quiero información sobre Seguimiento IA para Leads y Atención Automática'),
  esencial:  encodeURIComponent('Hola Carbion, quiero información sobre el plan Esencial'),
  crecimiento: encodeURIComponent('Hola Carbion, quiero información sobre el plan Crecimiento'),
  enterprise:  encodeURIComponent('Hola Carbion, quiero información sobre el plan Enterprise'),
}

export const NAV_LINKS = [
  { label: 'Servicios',  href: '#servicios'  },
  { label: 'Proceso',    href: '#proceso'    },
  { label: 'Planes',     href: '#planes'     },
  { label: 'Nosotros',   href: '#nosotros'   },
  { label: 'Contacto',   href: '#contacto'   },
]

export const STATS = [
  { num: '+96%',    label: 'pymes peruanas necesitan digitalización' },
  { num: '3x ventas', label: 'con automatización IA' },
  { num: '48 horas',  label: 'para tener tu web lista' },
]

export const SERVICES = [
  {
    num: '01',
    badge: 'Web & Diseño',
    title: 'Web con IA\nen 48 horas',
    desc: 'Presencia profesional inmediata. Tu web diseñada con inteligencia artificial, optimizada para ventas y lista para escalar.',
    features: ['Diseño personalizado con IA', 'Optimizado para Google (SEO)', 'Formularios y WhatsApp integrados', 'Hosting y dominio incluido', 'Entrega garantizada en 48h'],
    price: 'Desde S/990',
    priceLabel: 'pago único',
    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=85&auto=format&fit=crop',
    tint: 'purple',
  },
  {
    num: '02',
    badge: 'Marketing IA',
    title: 'Agencia de\ncrecimiento IA',
    desc: 'Estrategia completa de marketing digital potenciada con IA. Más clientes, más ventas, con reportes en tiempo real.',
    features: ['Gestión de Meta y Google Ads', 'Contenido generado con IA', 'Dashboard de resultados 24/7', 'Automatización de leads', 'Reunión mensual incluida'],
    price: 'Desde S/1,490',
    priceLabel: '/mes',
    img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=85&auto=format&fit=crop',
    tint: 'blue',
  },
  {
    num: '03',
    badge: 'Automatización',
    title: 'Automatización\nenterprise',
    desc: 'Conectamos, automatizamos y optimizamos los procesos de tu empresa con IA. Reduce costos y escala sin contratar más.',
    features: ['Auditoría de procesos gratis', 'Flujos n8n y Make personalizados', 'Integración con tu CRM', 'Soporte técnico mensual', 'Ahorro medible desde mes 1'],
    price: 'A medida',
    priceLabel: '— cotización gratis',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=85&auto=format&fit=crop',
    tint: 'teal',
  },
]

export const SOLUTIONS = [
  {
    tag: 'Agenda inteligente',
    title: 'Reserva automática\npor WhatsApp',
    desc: 'Tu cliente escribe, la IA agenda, confirma y recuerda. Sin llamadas, sin formularios. 24/7.',
    img: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=900&q=85&auto=format&fit=crop',
    tint: 'purple',
    waMsg: 'agenda',
  },
  {
    tag: 'Ventas automatizadas',
    title: 'Catálogo dinámico\nconectado',
    desc: 'La IA muestra tus productos, responde preguntas y cierra ventas en WhatsApp mientras duermes.',
    img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=900&q=85&auto=format&fit=crop',
    tint: 'blue',
    waMsg: 'ventas',
  },
  {
    tag: 'Seguimiento IA',
    title: 'Leads y atención\nautomática',
    desc: 'Captura, califica y nutre tus leads con IA. Seguimiento automático hasta que el cliente esté listo para comprar.',
    img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=900&q=85&auto=format&fit=crop',
    tint: 'teal',
    waMsg: 'seguimiento',
  },
]

export const STEPS = [
  { num: '1', title: 'Diagnóstico gratuito',  desc: 'Analizamos tu negocio, sector y competencia. Sin costo, sin compromiso. En 30 min sabes exactamente qué necesitas.' },
  { num: '2', title: 'Propuesta a medida',    desc: 'Diseñamos un plan específico para tu industria con metas claras, timeline definido y precio transparente.' },
  { num: '3', title: 'Implementación ágil',   desc: 'Tu web en 48h, tu campaña en una semana. Iteramos con datos reales, no suposiciones.' },
  { num: '4', title: 'Seguimiento continuo',  desc: 'Dashboard en tiempo real, reporte mensual y reunión de optimización incluidos en cada plan.' },
]

export const METRICS = [
  { num: '+340%', title: 'Aumento en consultas web',    desc: 'Clientes con web profesional vs. sin presencia digital activa.' },
  { num: '-60%',  title: 'Tiempo en tareas manuales',   desc: 'Reducción de horas en procesos repetitivos con automatización IA.' },
  { num: '2.8x',  title: 'Retorno sobre inversión',     desc: 'ROI promedio en campañas de marketing con seguimiento y optimización.' },
]

export const PLANS = [
  {
    name: 'Esencial',
    tagline: 'Para pymes que quieren presencia digital profesional desde hoy.',
    price: 'S/990',
    period: 'pago único',
    featured: false,
    features: ['Web con IA en 48 horas', 'Diseño personalizado', 'SEO básico incluido', 'WhatsApp y formulario', '1 mes de soporte técnico'],
    waMsg: 'esencial',
    cta: 'Empezar →',
  },
  {
    name: 'Crecimiento',
    tagline: 'Marketing digital completo con IA para escalar tus ventas.',
    price: 'S/1,490',
    period: '/mes',
    featured: true,
    features: ['Web + campañas Meta & Google', 'Contenido IA semanal', 'Dashboard en tiempo real', 'Automatización de leads', 'Reunión mensual incluida', 'Soporte prioritario'],
    waMsg: 'crecimiento',
    cta: 'Quiero crecer →',
  },
  {
    name: 'Enterprise',
    tagline: 'Automatización total para empresas que quieren escalar sin límites.',
    price: 'A medida',
    period: 'según tu negocio',
    featured: false,
    features: ['Todo lo de Crecimiento', 'Automatización de procesos', 'Integraciones CRM / ERP', 'Agentes IA personalizados', 'SLA y soporte dedicado', 'Consultor asignado'],
    waMsg: 'enterprise',
    cta: 'Hablar con un asesor →',
  },
]

export const FAQS = [
  { q: '¿Realmente entregan la web en 48 horas?',            a: 'Sí, siempre que tengamos la información de tu negocio lista. Al confirmar el proyecto te enviamos un formulario de onboarding. Con eso en mano, tu web está lista en 48 horas hábiles.' },
  { q: '¿Cuánto tengo que invertir en publicidad además del plan?', a: 'Recomendamos mínimo S/600–S/800/mes en pauta para ver resultados consistentes. Te ayudamos a definir el presupuesto según tu industria y objetivos en la llamada de diagnóstico.' },
  { q: '¿Puedo cancelar en cualquier momento?',               a: 'Sí. Trabajamos mensualmente sin permanencia mínima. Solo necesitamos 15 días de aviso para cerrar el servicio ordenadamente y entregarte todos tus activos digitales.' },
  { q: '¿Trabajan con cualquier tipo de negocio?',            a: 'Trabajamos mejor con restaurantes, clínicas, retail, consultorios, estudios y servicios profesionales. En la llamada de diagnóstico te decimos honestamente si podemos ayudarte.' },
  { q: '¿Qué pasa si no veo resultados en el primer mes?',    a: 'Hacemos una reunión de revisión al mes 1 y ajustamos la estrategia sin costo adicional. Si al mes 2 seguimos sin resultados claros, te devolvemos el mes y cerramos sin problema.' },
  { q: '¿Necesito saber de marketing o tecnología?',          a: 'Para nada. Tú te concentras en atender a tus clientes. Nosotros manejamos todo lo digital: la web, las campañas, los reportes y las optimizaciones. Sin tecnicismos en las reuniones.' },
]

export const TECH_LOGOS = ['Claude AI', 'Meta Ads', 'Google Ads', 'n8n', 'Make.com', 'Framer', 'Looker Studio', 'Manychat', 'HubSpot']

export const VALUES = [
  { icon: '🎯', title: 'Orientados a resultados', desc: 'Cada acción tiene una métrica. No hacemos cosas por hacerlas.' },
  { icon: '🔍', title: 'Transparencia total',      desc: 'Dashboard en vivo. Ves todo lo que hacemos y lo que cuesta.' },
  { icon: '⚡', title: 'Velocidad real',            desc: '48h para entregar. No semanas de reuniones sin avance.' },
  { icon: '🤝', title: 'Socios, no proveedores',   desc: 'Tu éxito es el nuestro. Alineamos incentivos desde el día 1.' },
]

export const DIFFERENTIATORS = [
  { num: '01', title: 'IA real, no buzzwords',                   desc: 'Usamos modelos de IA en producción, no solo en el PowerPoint de ventas.' },
  { num: '02', title: 'Resultados en días, no meses',            desc: 'Web en 48h, primera campaña en una semana. El tiempo de tu negocio vale.' },
  { num: '03', title: 'Especialistas en el mercado peruano',     desc: 'Conocemos a tu competencia, a tu cliente y cómo se mueve Lima.' },
  { num: '04', title: 'Sin contratos trampa',                    desc: 'Mensual, sin permanencia mínima. Nos ganamos tu continuidad cada mes.' },
  { num: '05', title: 'Precio transparente desde el inicio',     desc: 'Lo que cotizamos es lo que pagas. Sin sorpresas al tercer mes.' },
]
