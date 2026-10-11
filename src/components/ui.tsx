import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { Reveal, TextReveal } from './motion'

export function SectionHead({
  eyebrow,
  title,
  text,
  light,
  action,
  center,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
  action?: ReactNode
  center?: boolean
}) {
  return (
    <div className={`section-head ${light ? 'is-light' : ''} ${center ? 'is-center' : ''}`}>
      <div>
        <Reveal>
          <p className="eyebrow eyebrow--sm">{eyebrow}</p>
        </Reveal>
        <TextReveal text={title} className="section-title" />
        {text && (
          <Reveal delay={0.15}>
            <p className="section-text">{text}</p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.2}>{action}</Reveal>}
    </div>
  )
}

/** Cabecera de páginas interiores */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  image,
  placeholder,
  cutout,
  children,
}: {
  crumbs: { label: string; to?: string }[]
  eyebrow: string
  title: string
  lead: string
  image?: string
  placeholder?: string
  cutout?: boolean
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div className="page-hero__text">
          <nav className="crumbs" aria-label="Ruta de navegación">
            <Link to="/">Inicio</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <Icon name="chevronRight" size={13} strokeWidth={2.2} />
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <TextReveal as="h1" text={title} className="page-hero__title" />
          <Reveal delay={0.15}>
            <p className="page-hero__lead">{lead}</p>
          </Reveal>
          {children && (
            <Reveal delay={0.25}>
              <div className="page-hero__actions">{children}</div>
            </Reveal>
          )}
        </div>
        {(image || placeholder) && (
          <motion.div
            className={`page-hero__media ${cutout ? 'is-cutout' : ''}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Media src={image} placeholder={placeholder} alt="" ratio="4 / 3" eager />
          </motion.div>
        )}
      </div>
    </section>
  )
}

/** Imagen con fallback a placeholder estilizado (Imágenes pendientes) */
export function Media({
  src,
  placeholder,
  alt,
  ratio,
  cutout,
  eager,
  className = '',
}: {
  src?: string
  placeholder?: string
  alt: string
  ratio?: string
  cutout?: boolean
  eager?: boolean
  className?: string
}) {
  if (!src) return <ImagePlaceholder file={placeholder ?? 'imagen.webp'} ratio={ratio} />
  return (
    <div className={`media ${cutout ? 'is-cutout' : ''} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
    </div>
  )
}

export function ImagePlaceholder({ file, ratio = '4 / 3' }: { file: string; ratio?: string }) {
  return (
    <div className="img-placeholder" style={{ aspectRatio: ratio }} role="img" aria-label="Imagen pendiente">
      <Icon name="camera" size={22} />
      <span>Foto pendiente</span>
      <code>{file}</code>
    </div>
  )
}

/** Carrusel con scroll-snap nativo y flechas */
export function useCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const item = el.firstElementChild as HTMLElement | null
    const step = item ? item.offsetWidth + 22 : el.clientWidth * 0.8
    el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  return { trackRef, canPrev, canNext, scroll }
}

export function ArrowButton({
  dir,
  onClick,
  disabled,
  className = '',
}: {
  dir: 'prev' | 'next'
  onClick: () => void
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      className={`arrow-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Anterior' : 'Siguiente'}
    >
      <Icon name={dir === 'prev' ? 'chevronLeft' : 'chevronRight'} size={18} strokeWidth={2.2} />
    </button>
  )
}
