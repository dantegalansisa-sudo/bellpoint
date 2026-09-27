import { motion } from 'framer-motion'
import { aboutValues, processSteps, whyUs } from '../data/content'
import { products } from '../data/products'
import { sectors } from '../data/sectors'
import { services } from '../data/services'
import { quoteLink, waLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { Magnetic, Reveal, Stagger, TextReveal, staggerItem } from './motion'
import { ArrowButton, SectionHead, useCarousel } from './ui'

/* ───────────── Servicios ───────────── */
export function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <SectionHead
          eyebrow="Nuestras soluciones"
          title="Todo lo que tu empresa necesita, en un solo lugar"
          text="Ofrecemos una amplia gama de productos y servicios para mantener tu empresa, institución o negocio siempre en marcha."
        />
        <Stagger className="services__grid">
          {services.map((s) => (
            <motion.article key={s.id} className="service-card card-lift" variants={staggerItem}>
              <div className="service-card__media">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="service-card__badge">
                  <Icon name={s.icon} size={22} />
                </span>
              </div>
              <div className="service-card__body">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a
                  className="link-cta"
                  href={waLink(`Hola, quiero información sobre el servicio: ${s.title}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Cotizar servicio <Icon name="arrow" size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ───────────── ¿Por qué elegirnos? ───────────── */
export function WhyUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__panel">
        <Reveal>
          <h2 id="why-title" className="why__title">
            ¿Por qué elegir <br />
            <span>Belpoint?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Somos un aliado confiable que entiende las necesidades de tu empresa o institución. Te ofrecemos soluciones
            completas, productos de calidad y un servicio personalizado.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Magnetic>
            <a className="btn btn--primary btn--pill" href="#nosotros">
              <Icon name="file" size={18} /> Conoce más sobre nosotros <Icon name="arrow" size={16} />
            </a>
          </Magnetic>
        </Reveal>
      </div>

      <Stagger className="why__grid" gap={0.07}>
        {whyUs.map((w) => (
          <motion.div key={w.title} className="why__item" variants={staggerItem}>
            <Icon name={w.icon} size={36} strokeWidth={1.5} />
            <strong>{w.title}</strong>
            <span>{w.text}</span>
          </motion.div>
        ))}
      </Stagger>

      <div className="why__photo">
        <img src="/images/porque-elegirnos.webp" alt="Asesor de Bellpoint revisando inventario en tableta" loading="lazy" />
      </div>
    </section>
  )
}

/* ───────────── Productos destacados ───────────── */
export function Products() {
  const { trackRef, canPrev, canNext, scroll } = useCarousel()
  return (
    <section className="section products" id="productos">
      <div className="container">
        <SectionHead
          eyebrow="Productos destacados"
          title="Los más solicitados por nuestros clientes"
          text="Descubre algunos de los productos más populares para oficinas, instituciones y negocios."
          action={
            <a
              className="btn btn--ghost btn--pill btn--sm"
              href={waLink('Hola, quiero recibir el catálogo completo de productos.')}
              target="_blank"
              rel="noreferrer"
            >
              Ver catálogo completo <Icon name="arrow" size={16} />
            </a>
          }
        />
        <div className="carousel">
          <ArrowButton dir="prev" onClick={() => scroll(-1)} disabled={!canPrev} className="carousel__prev" />
          <Stagger className="carousel__track products__track" gap={0.08}>
            <div ref={trackRef} className="products__scroller">
              {products.map((p) => (
                <motion.article key={p.id} className="product-card card-lift" variants={staggerItem}>
                  <div className="product-card__media">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <h3>{p.name}</h3>
                  <p className="product-card__spec">{p.spec}</p>
                  <div className="product-card__foot">
                    <span className="product-card__price">{p.price}</span>
                    <a
                      className="product-card__btn"
                      href={quoteLink(p.name)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Solicitar cotización: ${p.name}`}
                    >
                      <span>Solicitar cotización</span>
                      <Icon name="cart" size={18} strokeWidth={2} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </Stagger>
          <ArrowButton dir="next" onClick={() => scroll(1)} disabled={!canNext} className="carousel__next" />
        </div>
      </div>
    </section>
  )
}

/* ───────────── Nosotros / Tu aliado ───────────── */
export function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__media">
        <Reveal y={0}>
          <img src="/images/nosotros.webp" alt="Sede de Bellpoint SRL con su flota de vehículos de entrega" loading="lazy" />
        </Reveal>
      </div>
      <div className="about__content">
        <Reveal>
          <p className="eyebrow eyebrow--sm">Sobre nosotros</p>
        </Reveal>
        <TextReveal className="section-title" text="Tu aliado en soluciones empresariales e institucionales" />
        <Reveal delay={0.15}>
          <p className="section-text">
            En Belpoint SRL nos especializamos en la venta de suministros, equipos y servicios para empresas,
            instituciones públicas y privadas. Contamos con un equipo comprometido en ofrecer soluciones de calidad, con
            un servicio confiable y atención personalizada.
          </p>
        </Reveal>
        <Stagger className="about__values">
          {aboutValues.map((v) => (
            <motion.div key={v.label} className="about__value" variants={staggerItem}>
              <Icon name={v.icon} size={34} strokeWidth={1.6} />
              <span>{v.label}</span>
            </motion.div>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <Magnetic>
            <a className="btn btn--primary btn--pill" href="#contacto">
              Conoce más sobre nosotros <Icon name="arrow" size={16} />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── Proceso ───────────── */
export function Process() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          eyebrow="Nuestro proceso"
          title="Así de fácil es trabajar con nosotros"
          text="Te acompañamos en cada paso, desde la cotización hasta la entrega o ejecución del servicio."
        />
        <Stagger className="process__grid" gap={0.12}>
          {processSteps.map((s, i) => (
            <motion.div key={s.title} className="process__step card-lift" variants={staggerItem}>
              <div className="process__icon">
                <Icon name={s.icon} size={34} strokeWidth={1.6} />
                <span className="process__num">{i + 1}</span>
              </div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < processSteps.length - 1 && (
                <span className="process__arrow" aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              )}
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ───────────── Sectores ───────────── */
export function Sectors() {
  return (
    <section className="section sectors" id="sectores">
      <div className="container">
        <SectionHead
          light
          eyebrow="Sectores que atendemos"
          title="Soluciones para cada sector"
          text="Trabajamos con empresas privadas, instituciones gubernamentales y diversos sectores de la economía dominicana."
        />
        <Stagger className="sectors__grid" gap={0.07}>
          {sectors.map((s) => (
            <motion.a
              key={s.id}
              className="sector-card"
              variants={staggerItem}
              href={waLink(`Hola, busco soluciones para el sector: ${s.title}`)}
              target="_blank"
              rel="noreferrer"
            >
              <div className="sector-card__media">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="sector-card__cta">
                  Cotizar <Icon name="arrow" size={14} />
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.subtitle}</p>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
