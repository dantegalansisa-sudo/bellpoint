import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { CatalogArea, CatalogItem } from '../data/catalog'
import type { Sector } from '../data/sectors'
import { getService, type Service } from '../data/services'
import { quoteLink, waLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { staggerItem } from './motion'
import { Media } from './ui'

export function ServiceCard({ s }: { s: Service }) {
  return (
    <motion.article className="service-card card-lift" variants={staggerItem}>
      <Link to={`/servicios/${s.slug}`} className="service-card__media" tabIndex={-1} aria-hidden="true">
        <Media src={s.image} placeholder={s.placeholder} alt="" ratio="4 / 3" cutout={s.cutout} />
        <span className="service-card__badge">
          <Icon name={s.icon} size={22} />
        </span>
      </Link>
      <div className="service-card__body">
        <h3>
          <Link to={`/servicios/${s.slug}`}>{s.title}</Link>
        </h3>
        <p>{s.summary}</p>
        <Link className="link-cta" to={`/servicios/${s.slug}`}>
          Ver servicio <Icon name="arrow" size={16} />
        </Link>
      </div>
    </motion.article>
  )
}

export function SectorCard({ s, detailed }: { s: Sector; detailed?: boolean }) {
  return (
    <motion.article className={`sector-card ${detailed ? 'is-detailed' : ''}`} variants={staggerItem}>
      <a
        className="sector-card__media"
        href={waLink(`Hola, busco soluciones de BELLPOINT para: ${s.title}`)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Cotizar para ${s.title}`}
      >
        <Media src={s.image} placeholder={s.placeholder} alt={s.title} ratio="16 / 10" />
        <span className="sector-card__cta">
          Cotizar <Icon name="arrow" size={14} />
        </span>
      </a>
      <h3>{s.title}</h3>
      <p>{s.subtitle}</p>
      {detailed && (
        <>
          <p className="sector-card__desc">{s.description}</p>
          <ul className="chips">
            {s.needs.map((slug) => {
              const sv = getService(slug)
              return sv ? (
                <li key={slug}>
                  <Link to={`/servicios/${slug}`}>
                    <Icon name={sv.icon} size={14} /> {sv.title}
                  </Link>
                </li>
              ) : null
            })}
          </ul>
        </>
      )}
    </motion.article>
  )
}

export function AreaCard({ a }: { a: CatalogArea }) {
  return (
    <motion.div variants={staggerItem}>
      <Link to={`/catalogo#${a.id}`} className="area-card card-lift">
        <div className="area-card__media">
          <img src={a.cover} alt="" loading="lazy" />
        </div>
        <div className="area-card__body">
          <span className="area-card__icon">
            <Icon name={a.icon} size={20} />
          </span>
          <h3>{a.title}</h3>
          <p>{a.items.length} categorías</p>
        </div>
        <Icon name="arrow" size={18} className="area-card__arrow" />
      </Link>
    </motion.div>
  )
}

export function ProductCard({ item, area }: { item: CatalogItem; area: CatalogArea }) {
  return (
    <motion.article className="product-card card-lift" variants={staggerItem}>
      <Media src={item.image} placeholder={item.placeholder} alt={item.name} ratio="1 / 1" cutout={!item.photo} className="product-card__media" />
      <h3>{item.name}</h3>
      <p className="product-card__spec">{item.examples}</p>
      <a
        className="btn btn--soft btn--pill btn--sm product-card__btn"
        href={quoteLink(`${item.name} (${area.title})`)}
        target="_blank"
        rel="noreferrer"
      >
        Solicitar cotización <Icon name="arrow" size={15} />
      </a>
    </motion.article>
  )
}
