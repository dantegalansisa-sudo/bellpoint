import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroHighlights, heroStats } from '../data/content'
import { services } from '../data/services'
import { quoteLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { AnimatedCounter, Magnetic, TextReveal } from './motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120])
  const photoScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.04, 1.12])
  const stripsY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60])

  return (
    <section className="hero" id="inicio" ref={ref}>
      <div className="hero__visual" aria-hidden="true">
        <motion.img
          src="/images/hero.webp"
          alt=""
          className="hero__photo"
          style={{ y: photoY, scale: photoScale }}
        />
        <div className="hero__fade" />
      </div>

      <motion.ul className="hero__strips" style={{ y: stripsY }}>
        {services.map((s, i) => (
          <motion.li
            key={s.id}
            className="hero__strip"
            initial={reduce ? false : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 + i * 0.1, ease }}
          >
            <img src={s.image} alt="" loading="eager" />
            <a href="#servicios" className="hero__strip-card">
              <Icon name={s.icon} size={26} />
              <span>{s.short}</span>
              <span className="hero__strip-arrow">
                <Icon name="chevronRight" size={14} strokeWidth={2.4} />
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="container hero__content">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Más que suministros
        </motion.p>
        <TextReveal
          as="h1"
          className="hero__title"
          text={'Soluciones integrales\npara empresas\ne instituciones'}
          highlight={['empresas', 'e', 'instituciones']}
          delay={0.1}
        />
        <motion.p
          className="hero__lead"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          Suministros de oficina, equipos, tecnología, limpieza, mobiliario y servicios especializados. Todo lo que tu
          empresa necesita, en un solo aliado.
        </motion.p>

        <motion.ul
          className="hero__highlights"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
        >
          {heroHighlights.map((h) => (
            <li key={h.label}>
              <Icon name={h.icon} size={34} strokeWidth={1.6} />
              <span>{h.label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="hero__ctas"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
        >
          <Magnetic>
            <a className="btn btn--primary btn--lg btn--pill" href={quoteLink()} target="_blank" rel="noreferrer">
              <Icon name="file" size={20} /> Solicita una cotización <Icon name="arrow" size={18} />
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--outline btn--lg btn--pill" href="#servicios">
              <Icon name="play" size={22} /> Conoce nuestros servicios
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="container hero__stats-wrap">
        <motion.ul
          className="hero__stats"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease }}
        >
          {heroStats.map((s) => (
            <li key={s.label}>
              <Icon name={s.icon} size={38} strokeWidth={1.7} />
              <div>
                <strong>{s.value ? <AnimatedCounter to={s.value} prefix={s.prefix} /> : s.title}</strong>
                <span>{s.label}</span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
