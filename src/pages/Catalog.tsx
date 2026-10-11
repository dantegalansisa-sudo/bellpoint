import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/cards'
import { Icon, WhatsAppIcon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Reveal, Stagger } from '../components/motion'
import { PageHero } from '../components/ui'
import { catalog } from '../data/catalog'
import { getService } from '../data/services'
import { quoteLink, waLink } from '../lib/whatsapp'
import { usePageMeta } from '../lib/seo'

export default function Catalog() {
  usePageMeta(
    'Catálogo de productos',
    'Impresoras, tintas y tóners, papelería, limpieza institucional, mobiliario, climatización, equipos y material educativo. Solicita tu cotización a BELLPOINT.',
  )
  const [active, setActive] = useState(catalog[0].id)

  // resalta el área visible en la barra de chips
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    catalog.forEach((a) => {
      const el = document.getElementById(a.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Catálogo' }]}
        eyebrow="Catálogo de productos"
        title="Productos por área, listos para cotizar"
        lead="Una selección de nuestras líneas de productos. Si no ves lo que buscas, escríbenos: trabajamos con pedidos a la medida de cada institución."
        image="/images/servicio-oficina.webp"
      >
        <a className="btn btn--primary btn--pill" href={waLink('Hola BELLPOINT, quiero recibir el catálogo completo de productos.')} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> Pedir catálogo completo
        </a>
      </PageHero>

      <nav className="chip-nav chip-nav--sticky" aria-label="Áreas del catálogo">
        <div className="container chip-nav__inner">
          {catalog.map((a) => (
            <a key={a.id} href={`#${a.id}`} className={active === a.id ? 'is-active' : ''}>
              <Icon name={a.icon} size={16} /> {a.short}
            </a>
          ))}
        </div>
      </nav>

      {catalog.map((a, i) => {
        const svc = a.service ? getService(a.service) : undefined
        return (
          <section key={a.id} id={a.id} className={`section section--tight catalog-area ${i % 2 ? 'section--alt' : ''}`}>
            <div className="container">
              <div className="catalog-area__head">
                <Reveal>
                  <span className="catalog-area__icon">
                    <Icon name={a.icon} size={24} />
                  </span>
                  <h2 className="section-title">{a.title}</h2>
                  <p className="section-text">{a.intro}</p>
                </Reveal>
                <Reveal delay={0.1} className="catalog-area__actions">
                  <a className="btn btn--primary btn--pill btn--sm" href={quoteLink(`productos de ${a.title}`)} target="_blank" rel="noreferrer">
                    Cotizar esta área <Icon name="arrow" size={15} />
                  </a>
                  {svc && (
                    <Link className="link-cta" to={`/servicios/${svc.slug}`}>
                      Ver servicio de {svc.title.toLowerCase()} <Icon name="arrow" size={15} />
                    </Link>
                  )}
                  {a.id === 'educacion' && (
                    <Link className="link-cta" to="/educacion">
                      Soluciones para educación <Icon name="arrow" size={15} />
                    </Link>
                  )}
                </Reveal>
              </div>
              <Stagger className="product-grid" gap={0.04}>
                {a.items.map((item) => (
                  <ProductCard key={item.name} item={item} area={a} />
                ))}
              </Stagger>
            </div>
          </section>
        )
      })}

      <CtaBanner title="¿Necesitas varios productos a la vez?" text="Envíanos tu lista y te preparamos una sola cotización, con una sola factura." label="Enviar mi lista" message="Hola BELLPOINT, quiero cotizar la siguiente lista de productos:" />
    </>
  )
}
