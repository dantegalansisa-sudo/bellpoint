import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon'
import { Reveal, TextReveal } from './motion'

export function SectionHead({
  eyebrow,
  title,
  text,
  light,
  action,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
  action?: ReactNode
}) {
  return (
    <div className={`section-head ${light ? 'is-light' : ''}`}>
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
    const step = item ? item.offsetWidth + 24 : el.clientWidth * 0.8
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

/** Placeholder estilizado para imágenes pendientes */
export function ImagePlaceholder({ file, ratio = '4 / 3', label }: { file: string; ratio?: string; label?: string }) {
  return (
    <div className="img-placeholder" style={{ aspectRatio: ratio }} role="img" aria-label={label ?? file}>
      <Icon name="file" size={22} />
      <span>{label ?? 'Imagen pendiente'}</span>
      <code>{file}</code>
    </div>
  )
}
