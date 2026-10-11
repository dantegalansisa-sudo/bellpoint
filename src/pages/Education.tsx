import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { QuoteForm } from '../components/forms'
import { Icon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Reveal, Stagger, staggerItem } from '../components/motion'
import { Media, PageHero, SectionHead } from '../components/ui'
import { usePageMeta } from '../lib/seo'

// Fuente: Dossier Corporativo (divisiones 1–6) y Documento Maestro §6 y §9.
const blocks = [
  {
    icon: 'monitor' as const,
    title: 'Tecnología educativa y aulas inteligentes',
    text: 'Pantallas digitales interactivas 4K multitáctiles, laboratorios de cómputo, proyectores e impresoras, con instalación, mantenimiento y soporte técnico.',
    bullets: ['Pantallas interactivas (PDI)', 'Laboratorios de cómputo', 'Impresoras y consumibles'],
    image: '/images/edu-pdi-aula.webp',
    link: '/servicios/pdi',
  },
  {
    icon: 'chair' as const,
    title: 'Mobiliario escolar',
    text: 'Mobiliario ergonómico y resistente para cada nivel, además de áreas administrativas y comedores institucionales.',
    bullets: ['Mesas regulables y sillas de polipropileno', 'Pupitres y sillas universitarias', 'Laboratorios, oficinas docentes y comedores'],
    image: '/images/edu-mobiliario-escolar.webp',
    link: '/servicios/mobiliario',
  },
  {
    icon: 'school' as const,
    title: 'Educación inicial y material didáctico',
    text: 'Recursos pedagógicos para potenciar el aprendizaje psicomotriz y conceptual en la primera infancia.',
    bullets: ['Línea Montessori y materiales sensoriales', 'Ábacos, regletas y bloques multibase', 'Alfabetos móviles y áreas de juego seguro'],
    image: '/images/edu-material-didactico.webp',
    link: '/catalogo#educacion',
  },
  {
    icon: 'spark' as const,
    title: 'Arte escolar y creatividad',
    text: 'Materiales de arte, dibujo y manualidades seguros para estudiantes.',
    bullets: ['Temperas, pinceles y lienzos', 'Caballetes de mesa y de pie', 'Crayones, plastilinas y tijeras de seguridad'],
    placeholder: 'edu-arte-escolar.webp',
    link: '/catalogo#educacion',
  },
]

const support = [
  { icon: 'briefcase' as const, title: 'Papelería y oficina', to: '/servicios/oficina' },
  { icon: 'drop' as const, title: 'Limpieza institucional', to: '/servicios/limpieza' },
  { icon: 'tools' as const, title: 'Mantenimiento y remozamiento', to: '/servicios/construccion' },
  { icon: 'wifi' as const, title: 'Redes Wi-Fi para aulas', to: '/servicios/redes' },
  { icon: 'camera' as const, title: 'Cámaras de seguridad', to: '/servicios/camaras' },
  { icon: 'snowflake' as const, title: 'Climatización', to: '/servicios/climatizacion' },
]

export default function Education() {
  usePageMeta(
    'Soluciones para centros educativos',
    'Reparación y mantenimiento de PDI, mobiliario escolar, material didáctico, arte escolar, suministros y limpieza para centros educativos públicos y privados en República Dominicana.',
  )
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Educación' }]}
        eyebrow="Soluciones para educación"
        title="Todo lo que necesita tu centro educativo"
        lead="El sector educativo es donde nació BELLPOINT. Equipamos aulas, mantenemos su tecnología y abastecemos la operación diaria de centros públicos y privados."
        image="/images/edu-aula-colaborativa.webp"
      >
        <Link className="btn btn--primary btn--pill" to="/servicios/pdi">
          Necesito reparar mi PDI <Icon name="arrow" size={16} />
        </Link>
        <a className="btn btn--outline btn--pill" href="#solicitud">
          Solicitar cotización
        </a>
      </PageHero>

      {blocks.map((b, i) => (
        <section key={b.title} className={`section section--tight ${i % 2 ? 'section--alt' : ''}`}>
          <div className={`container feature-row ${i % 2 ? 'is-reversed' : ''}`}>
            <Reveal className="feature-row__media">
              <Media src={b.image} placeholder={b.placeholder} alt={b.title} ratio="16 / 10" />
            </Reveal>
            <div>
              <Reveal>
                <span className="feature__icon">
                  <Icon name={b.icon} size={24} />
                </span>
              </Reveal>
              <SectionHead eyebrow={`División ${i + 1}`} title={b.title} text={b.text} />
              <Stagger className="check-list check-list--dark">
                {b.bullets.map((x) => (
                  <motion.li key={x} variants={staggerItem}>
                    <Icon name="check" size={18} strokeWidth={2.4} /> {x}
                  </motion.li>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <Link className="link-cta" to={b.link}>
                  Ver más <Icon name="arrow" size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight">
        <div className="container">
          <SectionHead
            eyebrow="Operación del centro"
            title="Y todo lo que el centro necesita para funcionar"
            text="Una escuela que nos llama por sus pantallas interactivas también puede resolver con nosotros su papelería, limpieza, mantenimiento y conectividad."
          />
          <Stagger className="support-grid" gap={0.05}>
            {support.map((s) => (
              <motion.div key={s.title} variants={staggerItem}>
                <Link to={s.to} className="support card-lift">
                  <Icon name={s.icon} size={26} strokeWidth={1.6} />
                  <span>{s.title}</span>
                  <Icon name="chevronRight" size={18} />
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--alt" id="solicitud">
        <div className="container contact__grid">
          <div>
            <SectionHead
              eyebrow="Capacitación incluida"
              title="Tecnología que tu personal sí va a usar"
              text="Cuando instalamos tecnología en tu centro, entrenamos a docentes y personal en su uso, y damos seguimiento con mantenimiento preventivo y atención de garantías."
            />
          </div>
          <Reveal delay={0.1}>
            <QuoteForm initialMode="cotizacion" preset="Productos: Educación" />
          </Reveal>
        </div>
      </section>

      <CtaBanner title="¿Tu PDI necesita reparación?" text="Diagnóstico, reparación, traslado e instalación de pantallas interactivas." label="Necesito reparar mi PDI" message="Hola BELLPOINT, necesito reparar una pantalla interactiva (PDI)." />
    </>
  )
}
