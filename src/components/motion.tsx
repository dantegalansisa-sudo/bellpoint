import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

/** Fade + subida al entrar en viewport */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Comp>
  )
}

/** Titular que se revela palabra por palabra detrás de una máscara */
export function TextReveal({
  text,
  as = 'h2',
  className,
  highlight = [],
  delay = 0,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  /** palabras a pintar con el color de acento */
  highlight?: string[]
  delay?: number
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const lines = text.split('\n')
  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }
  const word: Variants = {
    hidden: { y: '110%' },
    show: { y: '0%', transition: { duration: 0.85, ease } },
  }
  return (
    <Tag
      className={className}
      variants={container}
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      aria-label={text.replace(/\n/g, ' ')}
    >
      {lines.map((line, li) => (
        <span key={li} className="tr-line" aria-hidden="true">
          {line.split(' ').map((w, wi) => (
            <span key={wi} className="tr-mask">
              <motion.span
                variants={word}
                className={highlight.includes(w) ? 'tr-word is-accent' : 'tr-word'}
              >
                {w}
              </motion.span>
              {wi < line.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}

/** Contenedor que escalona la aparición de sus hijos <StaggerItem> */
export function Stagger({ children, className, gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

/** Efecto magnético para CTAs */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.span className="magnetic" style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  )
}

/** Contador animado al entrar en viewport */
export function AnimatedCounter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
