import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Reveal, Stagger, TextReveal, staggerItem } from '../components/motion'
import { PageHero, SectionHead } from '../components/ui'
import { config } from '../config'
import { about, coverage, directorMessage, history, mission, valueProposition, values, vision } from '../data/company'
import { usePageMeta } from '../lib/seo'
import { Process } from './Home'

export default function About() {
  usePageMeta(
    'Nosotros',
    'BELLPOINT, SRL: empresa dominicana de soluciones integrales para instituciones y empresas. Historia, misión, visión, valores y mensaje de la dirección.',
  )
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Nosotros' }]}
        eyebrow="Quiénes somos"
        title="Tu aliado en soluciones empresariales e institucionales"
        lead={about.lead}
        image="/images/nosotros.webp"
      />

      {/* Quiénes somos + propuesta de valor */}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="BELLPOINT, SRL" title="Más que un proveedor: un solo responsable para resolver" />
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
          </div>
          <Stagger className="feature-grid">
            {valueProposition.map((v) => (
              <motion.div key={v.title} className="feature card-lift" variants={staggerItem}>
                <span className="feature__icon">
                  <Icon name={v.icon} size={24} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Historia */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Nuestra historia" title="De proveedor educativo a aliado integral" center />
          <Stagger className="timeline" gap={0.15}>
            {history.map((h, i) => (
              <motion.div key={h.title} className="timeline__item" variants={staggerItem}>
                <span className="timeline__dot">{String(i + 1).padStart(2, '0')}</span>
                <p className="timeline__chapter">{h.chapter}</p>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mensaje de la dirección */}
      <section className="section director">
        <div className="container director__grid">
          <Reveal className="director__photo">
            <img src={directorMessage.photo} alt={`${config.director.name}, ${config.director.role} de BELLPOINT`} loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow eyebrow--sm">Mensaje de la dirección</p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="director__quote">“{directorMessage.quote}”</blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="director__closing">{directorMessage.closing}</p>
              <p className="director__name">
                <strong>{config.director.name}</strong>
                <span>{config.director.role}, BELLPOINT, SRL</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Misión / visión / valores */}
      <section className="section section--alt">
        <div className="container">
          <div className="mv">
            <Reveal className="mv__card">
              <span className="mv__icon">
                <Icon name="target" size={26} />
              </span>
              <h3>Misión</h3>
              <p>{mission}</p>
            </Reveal>
            <Reveal className="mv__card mv__card--dark" delay={0.1}>
              <span className="mv__icon">
                <Icon name="eye" size={26} />
              </span>
              <h3>Visión</h3>
              <p>{vision}</p>
            </Reveal>
          </div>
          <div className="values-head">
            <TextReveal className="section-title" text="Nuestros valores" />
          </div>
          <Stagger className="values-grid" gap={0.05}>
            {values.map((v) => (
              <motion.div key={v.title} className="value" variants={staggerItem}>
                <Icon name={v.icon} size={26} strokeWidth={1.6} />
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.text}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Respaldo y cobertura */}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Respaldo institucional"
              title="Formalidad para compras públicas y privadas"
              text="Empresa dominicana legalmente constituida, registrada como proveedor del Estado (RPE) y con emisión de comprobantes fiscales gubernamentales (B15) y de valor fiscal (B01) según las normativas de la DGII."
            />
            <Reveal delay={0.2}>
              <Link className="btn btn--primary btn--pill" to="/contacto">
                Quiero trabajar con BELLPOINT <Icon name="arrow" size={16} />
              </Link>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h3 className="sub-title">Experiencia en distintas regiones del país</h3>
            </Reveal>
            <Stagger className="coverage">
              {coverage.map((c) => (
                <motion.div key={c.region} className="coverage__item" variants={staggerItem}>
                  <Icon name="pin" size={20} />
                  <div>
                    <strong>{c.region}</strong>
                    <p>{c.text}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner title="Construyamos una relación de largo plazo" text="Cuéntanos qué necesita tu organización y te proponemos una solución completa." />
    </>
  )
}
