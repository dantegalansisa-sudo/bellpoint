import { Link } from 'react-router-dom'
import { Faq, QuoteForm } from '../components/forms'
import { Icon, WhatsAppIcon } from '../components/Icon'
import { Reveal, Stagger, staggerItem } from '../components/motion'
import { PageHero, SectionHead } from '../components/ui'
import { config, mapsEmbed, mapsUrl } from '../config'
import { quoteLink } from '../lib/whatsapp'
import { usePageMeta } from '../lib/seo'
import { motion } from 'framer-motion'

export default function Contact() {
  usePageMeta(
    'Contacto y cotizaciones',
    'Solicita una cotización, servicio técnico o visita a BELLPOINT. Teléfonos (809) 281-9109 y (809) 869-1198. Evaristo Morales, Distrito Nacional.',
  )
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contacto' }]}
        eyebrow="Contacto"
        title="Hablemos de lo que necesita tu organización"
        lead="Solicita una cotización, un servicio técnico o una visita de evaluación. Te respondemos por WhatsApp o teléfono."
      />

      <section className="section section--tight">
        <div className="container">
          <Stagger className="contact-cards" gap={0.08}>
            <motion.a variants={staggerItem} className="contact-card card-lift" href={quoteLink()} target="_blank" rel="noreferrer">
              <span className="contact-card__icon is-wa">
                <WhatsAppIcon size={24} />
              </span>
              <strong>WhatsApp</strong>
              <span>{config.phones[0].label}</span>
            </motion.a>
            <motion.div variants={staggerItem} className="contact-card card-lift">
              <span className="contact-card__icon">
                <Icon name="phone" size={22} />
              </span>
              <strong>Llámanos</strong>
              {config.phones.map((p) => (
                <a key={p.href} href={p.href}>
                  {p.label}
                </a>
              ))}
            </motion.div>
            <motion.div variants={staggerItem} className="contact-card card-lift">
              <span className="contact-card__icon">
                <Icon name="building" size={22} />
              </span>
              <strong>Compras institucionales</strong>
              <span>Proveedor del Estado (RPE) · comprobantes B15 y B01</span>
            </motion.div>
            <motion.a variants={staggerItem} className="contact-card card-lift" href={mapsUrl} target="_blank" rel="noreferrer">
              <span className="contact-card__icon">
                <Icon name="pin" size={22} />
              </span>
              <strong>Visítanos</strong>
              <span>
                {config.address}, {config.city}
              </span>
            </motion.a>
          </Stagger>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container contact__grid">
          <div>
            <SectionHead eyebrow="Formulario" title="Elige el tipo de solicitud" text="Cotización de productos o servicios, servicio técnico para tus equipos o visita de evaluación para proyectos." />
            <Reveal>
              <div className="map">
                <iframe title={`Ubicación de ${config.name}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="map__note">
                <Icon name="pin" size={16} /> {config.address}, {config.city}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          <SectionHead eyebrow="Preguntas frecuentes" title="Antes de escribirnos" text="Si tu duda no está aquí, escríbenos por WhatsApp." />
          <Faq />
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  usePageMeta('Página no encontrada', 'La página que buscas no existe.')
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 className="page-hero__title">Esta página no existe</h1>
        <p className="section-text">Puede que el enlace haya cambiado. Vuelve al inicio o explora nuestros servicios.</p>
        <div className="btn-row">
          <Link className="btn btn--primary btn--pill" to="/">
            Ir al inicio
          </Link>
          <Link className="btn btn--outline btn--pill" to="/servicios">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
