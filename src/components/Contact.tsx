import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { config } from '../config'
import { faqs, testimonials } from '../data/content'
import { products } from '../data/products'
import { services } from '../data/services'
import { waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './Icon'
import { Logo } from './Logo'
import { Magnetic, Reveal, TextReveal } from './motion'
import { ArrowButton, SectionHead, useCarousel } from './ui'

/* ───────────── Testimonios ───────────── */
export function Testimonials() {
  const { trackRef, canPrev, canNext, scroll } = useCarousel()
  return (
    <section className="section testimonials" aria-labelledby="testimonios">
      <div className="container">
        <SectionHead
          eyebrow="Lo que dicen nuestros clientes"
          title="La confianza de nuestros clientes nos impulsa"
          action={
            <div className="testimonials__nav">
              <ArrowButton dir="prev" onClick={() => scroll(-1)} disabled={!canPrev} />
              <ArrowButton dir="next" onClick={() => scroll(1)} disabled={!canNext} />
            </div>
          }
        />
        <Reveal>
          <div className="testimonials__track" ref={trackRef}>
            {testimonials.map((t) => (
              <figure key={t.name} className="testimonial card-lift">
                <div className="testimonial__avatar" aria-hidden="true">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                    <span className="testimonial__stars" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="star" size={16} />
                      ))}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── FAQ + Formulario de cotización ───────────── */
const options = [
  ...services.map((s) => `Servicio: ${s.title}`),
  ...products.map((p) => `Producto: ${p.name}`),
  'Otro / Varios',
]

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState({ empresa: '', nombre: '', telefono: '', email: '', interes: '', mensaje: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      'Hola, quiero solicitar una cotización.',
      `• Empresa: ${form.empresa}`,
      `• Nombre: ${form.nombre}`,
      `• Teléfono: ${form.telefono}`,
      form.email && `• Email: ${form.email}`,
      `• Interés: ${form.interes}`,
      form.mensaje && `• Mensaje: ${form.mensaje}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container contact__grid">
        <div>
          <SectionHead
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            text="Lo que más nos preguntan empresas e instituciones antes de trabajar con nosotros."
          />
          <div className="faq">
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={f.q} className={`faq__item ${open ? 'is-open' : ''}`}>
                  <button
                    className="faq__q"
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    {f.q}
                    <span className="faq__icon">
                      <Icon name="plus" size={18} strokeWidth={2.2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-${i}`}
                        className="faq__a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form className="quote-form" onSubmit={onSubmit}>
            <h3>Solicita tu cotización</h3>
            <p>Completa el formulario y te respondemos por WhatsApp.</p>
            <div className="quote-form__row">
              <label>
                Empresa / Institución
                <input required value={form.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" />
              </label>
              <label>
                Nombre
                <input required value={form.nombre} onChange={set('nombre')} placeholder="Tu nombre" autoComplete="name" />
              </label>
            </div>
            <div className="quote-form__row">
              <label>
                Teléfono
                <input
                  required
                  type="tel"
                  value={form.telefono}
                  onChange={set('telefono')}
                  placeholder="(809) 000-0000"
                  autoComplete="tel"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="correo@empresa.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label>
              Servicio o producto
              <select required value={form.interes} onChange={set('interes')}>
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                rows={4}
                value={form.mensaje}
                onChange={set('mensaje')}
                placeholder="Cantidades, fechas, detalles del proyecto…"
              />
            </label>
            <button type="submit" className="btn btn--primary btn--pill btn--lg btn--block">
              <WhatsAppIcon size={20} /> Enviar por WhatsApp <Icon name="arrow" size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── CTA final ───────────── */
export function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-title">
      <img src="/images/cta-fondo.webp" alt="" className="cta-banner__bg" loading="lazy" />
      <div className="container cta-banner__inner">
        <div>
          <TextReveal as="h2" className="cta-banner__title" text="¿Listo para llevar tu empresa al siguiente nivel?" />
          <Reveal delay={0.15}>
            <p id="cta-title">Solicita tu cotización hoy y recibe asesoría personalizada de nuestro equipo.</p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Magnetic>
            <a
              className="btn btn--primary btn--pill btn--lg"
              href={waLink('Hola, quiero solicitar una cotización.')}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="file" size={20} /> Solicita una cotización <Icon name="arrow" size={17} />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── Footer ───────────── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo className="footer__logo" />
          <p>Tu aliado en suministros, equipos y servicios para empresas e instituciones.</p>
          <div className="footer__social">
            <a href={config.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Icon name="facebook" size={18} /></a>
            <a href={config.socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Icon name="instagram" size={18} /></a>
            <a href={config.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /></a>
            <a href={config.socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Icon name="youtube" size={18} /></a>
          </div>
        </div>

        <div>
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#sectores">Sectores</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4>Servicios destacados</h4>
          <ul>
            <li><a href="#servicios">Suministros de oficina</a></li>
            <li><a href="#servicios">Productos de limpieza</a></li>
            <li><a href="#servicios">Cámaras y redes de internet</a></li>
            <li><a href="#servicios">Pantallas interactivas</a></li>
            <li><a href="#servicios">Construcción, banilería y gyprock</a></li>
            <li><a href="#productos">Venta de equipos y mobiliario</a></li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer__contact">
            <li><Icon name="pin" size={18} /> {config.address}</li>
            <li><Icon name="phone" size={18} /> <a href={config.phoneHref}>{config.phone}</a></li>
            <li><Icon name="mail" size={18} /> <a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li><Icon name="clock" size={18} /> {config.hours}</li>
          </ul>
        </div>

        <div className="footer__map">
          <iframe
            title={`Ubicación de ${config.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(config.address)}&z=12&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="btn btn--primary btn--pill btn--sm" href={config.mapsUrl} target="_blank" rel="noreferrer">
            Cómo llegar <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {config.name}. Todos los derechos reservados.</p>
        <div className="footer__legal">
          <a href="#">Términos de uso</a>
          <a href="#">Política de privacidad</a>
          <a href="#inicio" className="footer__top" aria-label="Volver arriba">
            <Icon name="chevronUp" size={18} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ───────────── WhatsApp flotante ───────────── */
export function WhatsAppFloat() {
  return (
    <motion.a
      className="wa-float"
      href={waLink('Hola, vengo desde la web de Belpoint y quiero información.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={30} />
    </motion.a>
  )
}

