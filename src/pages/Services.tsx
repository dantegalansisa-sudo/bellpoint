import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProductCard, ServiceCard } from '../components/cards'
import { QuoteForm } from '../components/forms'
import { Icon, WhatsAppIcon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Reveal, Stagger, staggerItem } from '../components/motion'
import { PageHero, SectionHead } from '../components/ui'
import { getArea } from '../data/catalog'
import { crossSell } from '../data/sectors'
import { getService, serviceGroups, services } from '../data/services'
import { quoteLink, waLink } from '../lib/whatsapp'
import { usePageMeta } from '../lib/seo'

export function ServicesIndex() {
  usePageMeta(
    'Servicios',
    'Reparación de PDI, impresoras, software, energía de respaldo, construcción, climatización, cámaras, redes, suministros de oficina, limpieza institucional y mobiliario.',
  )
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Servicios' }]}
        eyebrow="Servicios"
        title="Productos y servicios técnicos, en un solo proveedor"
        lead="Organizamos nuestras soluciones en cuatro grandes áreas para que encuentres rápido lo que tu empresa o institución necesita."
        image="/images/servicio-pantallas.webp"
      >
        <a className="btn btn--primary btn--pill" href={quoteLink()} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> Solicitar cotización
        </a>
        <Link className="btn btn--outline btn--pill" to="/servicios/pdi">
          Servicio técnico PDI
        </Link>
      </PageHero>

      <nav className="chip-nav container" aria-label="Áreas de servicio">
        {serviceGroups.map((g) => (
          <a key={g.id} href={`#${g.id}`}>
            {g.title}
          </a>
        ))}
      </nav>

      {serviceGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`section section--tight ${i % 2 ? 'section--alt' : ''}`}>
          <div className="container service-group">
            <div className="service-group__head">
              <SectionHead eyebrow={`0${i + 1} · Área`} title={g.title} text={g.text} />
            </div>
            <Stagger className="services__grid services__grid--auto">
              {services
                .filter((s) => s.group === g.id)
                .map((s) => (
                  <ServiceCard key={s.slug} s={s} />
                ))}
            </Stagger>
          </div>
        </section>
      ))}

      <CrossSell />
      <CtaBanner title="¿No sabes por dónde empezar?" text="Cuéntanos qué necesita tu organización y te orientamos con la mejor solución." label="Hablar por WhatsApp" />
    </>
  )
}

export function CrossSell() {
  return (
    <section className="section cross">
      <div className="container">
        <SectionHead
          eyebrow="Un proveedor, múltiples necesidades"
          title="Empiezas con una necesidad. Resolvemos las demás."
          text="Así acompañamos a nuestros clientes más allá del primer pedido."
        />
        <Stagger className="cross__grid" gap={0.1}>
          {crossSell.map((c) => (
            <motion.div key={c.who} className="cross__card" variants={staggerItem}>
              <p className="cross__who">{c.who}</p>
              <p className="cross__start">{c.starts}…</p>
              <p className="cross__then">y luego también necesita:</p>
              <ul className="chips">
                {c.then.map((slug) => {
                  const s = getService(slug)!
                  return (
                    <li key={slug}>
                      <Link to={`/servicios/${slug}`}>
                        <Icon name={s.icon} size={14} /> {s.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

const pdiSteps = [
  { icon: 'truck' as const, title: 'Desmonte y traslado', text: 'Retiramos el equipo de forma segura.' },
  { icon: 'search' as const, title: 'Diagnóstico', text: 'Fuentes de poder, tarjetas y panel táctil.' },
  { icon: 'tools' as const, title: 'Reparación', text: 'Cambio de tarjetas lógicas y componentes.' },
  { icon: 'gear' as const, title: 'Calibración y firmware', text: 'Ajuste táctil y actualización de software.' },
  { icon: 'monitor' as const, title: 'Instalación y entrega', text: 'Montaje, pruebas y seguimiento.' },
]

export function ServiceDetail() {
  const { slug = '' } = useParams()
  const s = getService(slug)
  usePageMeta(s ? s.title : 'Servicio', s ? s.summary : '')
  if (!s) return <Navigate to="/servicios" replace />
  const group = serviceGroups.find((g) => g.id === s.group)!
  const areas = (s.catalog ?? []).map((id) => getArea(id)!).filter(Boolean)
  const products = areas.flatMap((a) => a.items.slice(0, 4).map((item) => ({ item, area: a }))).slice(0, 8)
  const preset = `Servicio: ${s.title}`

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Servicios', to: '/servicios' }, { label: s.title }]}
        eyebrow={group.title}
        title={s.title}
        lead={s.summary}
        image={s.image}
        placeholder={s.placeholder}
        cutout={s.cutout}
      >
        <a className="btn btn--primary btn--pill" href="#solicitud">
          {s.cta} <Icon name="arrow" size={16} />
        </a>
        <a className="btn btn--outline btn--pill" href={waLink(`Hola BELLPOINT, quiero información sobre: ${s.title}`)} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> Hablar por WhatsApp
        </a>
      </PageHero>

      <section className="section section--tight">
        <div className="container split">
          <div>
            <SectionHead eyebrow="El servicio" title="Qué hacemos" />
            <Reveal>
              <p className="prose">{s.description}</p>
            </Reveal>
          </div>
          <Stagger className="include-grid" gap={0.06}>
            {s.includes.map((i) => (
              <motion.div key={i} className="include" variants={staggerItem}>
                <span>
                  <Icon name="check" size={16} strokeWidth={2.6} />
                </span>
                {i}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {s.slug === 'pdi' && (
        <section className="section section--alt section--tight">
          <div className="container">
            <SectionHead eyebrow="Proceso" title="Cómo atendemos tu pantalla interactiva" />
            <Stagger className="steps" gap={0.1}>
              {pdiSteps.map((st, i) => (
                <motion.div key={st.title} className="steps__item" variants={staggerItem}>
                  <span className="steps__num">{i + 1}</span>
                  <Icon name={st.icon} size={28} strokeWidth={1.6} />
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {products.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <SectionHead
              eyebrow="Productos relacionados"
              title="Del catálogo"
              action={
                <Link className="btn btn--ghost btn--pill btn--sm" to={`/catalogo#${areas[0].id}`}>
                  Ver catálogo <Icon name="arrow" size={16} />
                </Link>
              }
            />
            <Stagger className="product-grid" gap={0.05}>
              {products.map(({ item, area }) => (
                <ProductCard key={item.name} item={item} area={area} />
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="section section--alt" id="solicitud">
        <div className="container contact__grid">
          <div>
            <SectionHead eyebrow="Solicitud" title={s.cta} text="Completa el formulario y te respondemos por WhatsApp con los siguientes pasos." />
            <Reveal>
              <h3 className="sub-title">También te puede interesar</h3>
            </Reveal>
            <Stagger className="related" gap={0.08}>
              {s.related.map((r) => {
                const rs = getService(r)!
                return (
                  <motion.div key={r} variants={staggerItem}>
                    <Link to={`/servicios/${r}`} className="related__item">
                      <span className="related__icon">
                        <Icon name={rs.icon} size={20} />
                      </span>
                      <span>
                        <strong>{rs.title}</strong>
                        <small>{rs.summary}</small>
                      </span>
                      <Icon name="chevronRight" size={18} />
                    </Link>
                  </motion.div>
                )
              })}
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <QuoteForm
              key={s.slug}
              initialMode={s.formMode}
              preset={preset}
              presetEquipment={s.slug === 'pdi' ? 'Pantalla interactiva (PDI)' : s.slug === 'impresoras' ? 'Impresora' : ''}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
