import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AreaCard, SectorCard, ServiceCard } from '../components/cards'
import { Faq, QuoteForm } from '../components/forms'
import { Hero } from '../components/Hero'
import { Icon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Magnetic, Reveal, Stagger, TextReveal, staggerItem } from '../components/motion'
import { SectionHead } from '../components/ui'
import { catalog } from '../data/catalog'
import { about, advantages, process } from '../data/company'
import { sectors } from '../data/sectors'
import { featuredServices, getService } from '../data/services'
import { usePageMeta } from '../lib/seo'

export default function Home() {
  usePageMeta(
    'BELLPOINT | Soluciones integrales para empresas e instituciones en RD',
    'Suministros de oficina, limpieza institucional, mobiliario, impresoras, reparación de pantallas interactivas (PDI), cámaras, redes y construcción para empresas e instituciones en República Dominicana.',
  )
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <PdiBand />
      <CatalogAreas />
      <About />
      <Process />
      <Sectors />
      <HomeContact />
      <CtaBanner />
    </>
  )
}

function Services() {
  return (
    <section className="section services">
      <div className="container">
        <SectionHead
          eyebrow="Nuestras soluciones"
          title="Todo lo que tu organización necesita, con un solo proveedor"
          text="Productos, servicios técnicos, mantenimiento e infraestructura para mantener tu empresa o institución siempre en marcha."
          action={
            <Link className="btn btn--ghost btn--pill btn--sm" to="/servicios">
              Ver todos los servicios <Icon name="arrow" size={16} />
            </Link>
          }
        />
        <Stagger className="services__grid">
          {featuredServices.map((slug) => (
            <ServiceCard key={slug} s={getService(slug)!} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__panel">
        <Reveal>
          <h2 id="why-title" className="why__title">
            ¿Por qué elegir <br />
            <span>BELLPOINT?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>Un aliado que entiende la operación de tu empresa o institución, responde con rapidez y da seguimiento hasta resolver el problema completo.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <Magnetic>
            <Link className="btn btn--primary btn--pill" to="/nosotros">
              Conoce más sobre nosotros <Icon name="arrow" size={16} />
            </Link>
          </Magnetic>
        </Reveal>
      </div>

      <Stagger className="why__grid" gap={0.07}>
        {advantages.map((w) => (
          <motion.div key={w.title} className="why__item" variants={staggerItem}>
            <Icon name={w.icon} size={36} strokeWidth={1.5} />
            <strong>{w.title}</strong>
            <span>{w.text}</span>
          </motion.div>
        ))}
      </Stagger>

      <div className="why__photo">
        <img src="/images/porque-elegirnos.webp" alt="Asesor de BELLPOINT revisando inventario en una tableta" loading="lazy" />
      </div>
    </section>
  )
}

function PdiBand() {
  const pdi = getService('pdi')!
  return (
    <section className="pdi-band">
      <div className="container pdi-band__grid">
        <Reveal className="pdi-band__media">
          <img src="/images/edu-pdi-aula.webp" alt="Pantalla interactiva instalada en un aula" loading="lazy" />
          <span className="pdi-band__tag">
            <Icon name="monitor" size={16} /> Nuestra especialidad
          </span>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow eyebrow--sm">Servicio técnico PDI</p>
          </Reveal>
          <TextReveal className="section-title" text="¿Tu pantalla interactiva dejó de funcionar?" />
          <Reveal delay={0.1}>
            <p className="section-text">
              Diagnosticamos, reparamos, trasladamos e instalamos pantallas digitales interactivas de Clevermax, Huawei IdeaHub y otras marcas.
            </p>
          </Reveal>
          <Stagger className="check-list">
            {pdi.includes.slice(0, 4).map((i) => (
              <motion.li key={i} variants={staggerItem}>
                <Icon name="check" size={18} strokeWidth={2.4} /> {i}
              </motion.li>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <div className="btn-row">
              <Magnetic>
                <Link className="btn btn--primary btn--pill" to="/servicios/pdi">
                  Necesito reparar mi PDI <Icon name="arrow" size={16} />
                </Link>
              </Magnetic>
              <Link className="btn btn--outline-light btn--pill" to="/educacion">
                Soluciones para educación
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CatalogAreas() {
  return (
    <section className="section areas">
      <div className="container">
        <SectionHead
          eyebrow="Catálogo"
          title="Productos organizados por área"
          text="Explora nuestras líneas de productos y solicita la cotización de lo que necesitas."
          action={
            <Link className="btn btn--ghost btn--pill btn--sm" to="/catalogo">
              Ver catálogo completo <Icon name="arrow" size={16} />
            </Link>
          }
        />
        <Stagger className="areas__grid" gap={0.06}>
          {catalog.slice(0, 6).map((a) => (
            <AreaCard key={a.id} a={a} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <div className="about__media">
        <Reveal y={0}>
          <img src="/images/nosotros.webp" alt="Sede de BELLPOINT con su flota de vehículos de entrega" loading="lazy" />
        </Reveal>
      </div>
      <div className="about__content">
        <Reveal>
          <p className="eyebrow eyebrow--sm">Sobre nosotros</p>
        </Reveal>
        <TextReveal className="section-title" text="Tu aliado en soluciones empresariales e institucionales" />
        <Reveal delay={0.15}>
          <p className="section-text">{about.lead} {about.body[0]}</p>
        </Reveal>
        <Stagger className="about__values">
          {[
            { icon: 'shield' as const, label: 'Responsabilidad\ny compromiso' },
            { icon: 'bolt' as const, label: 'Rapidez y capacidad\nde respuesta' },
            { icon: 'eye' as const, label: 'Transparencia\nen cada proceso' },
          ].map((v) => (
            <motion.div key={v.label} className="about__value" variants={staggerItem}>
              <Icon name={v.icon} size={34} strokeWidth={1.6} />
              <span>{v.label}</span>
            </motion.div>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <Magnetic>
            <Link className="btn btn--primary btn--pill" to="/nosotros">
              Conoce nuestra historia <Icon name="arrow" size={16} />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHead
          eyebrow="Cómo trabajamos"
          title="Así de fácil es trabajar con nosotros"
          text="Te acompañamos en cada paso, desde el levantamiento hasta el soporte después de la entrega."
        />
        <Stagger className="process__grid" gap={0.1}>
          {process.map((s, i) => (
            <motion.div key={s.title} className="process__step card-lift" variants={staggerItem}>
              <div className="process__icon">
                <Icon name={s.icon} size={32} strokeWidth={1.6} />
                <span className="process__num">{i + 1}</span>
              </div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function Sectors() {
  return (
    <section className="section sectors">
      <div className="container">
        <SectionHead
          light
          eyebrow="Sectores que atendemos"
          title="Soluciones para cada sector"
          text="Desde una escuela o una clínica hasta una oficina, un hotel o una constructora."
          action={
            <Link className="btn btn--outline-light btn--pill btn--sm" to="/sectores">
              Ver todos los sectores <Icon name="arrow" size={16} />
            </Link>
          }
        />
        <Stagger className="sectors__grid" gap={0.07}>
          {sectors
            .filter((s) => s.image)
            .slice(0, 6)
            .map((s) => (
              <SectorCard key={s.id} s={s} />
            ))}
        </Stagger>
      </div>
    </section>
  )
}

function HomeContact() {
  return (
    <section className="section contact">
      <div className="container contact__grid">
        <div>
          <SectionHead eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" text="Lo que más nos preguntan empresas e instituciones antes de trabajar con nosotros." />
          <Faq />
        </div>
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  )
}
