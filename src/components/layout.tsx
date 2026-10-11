import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { config, mapsEmbed, mapsUrl } from '../config'
import { catalog } from '../data/catalog'
import { nav } from '../data/company'
import { sectors } from '../data/sectors'
import { serviceGroups, services } from '../data/services'
import { quoteLink, waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './Icon'
import { Logo } from './Logo'
import { Magnetic, Reveal, TextReveal } from './motion'

/* ───────────── Top bar ───────────── */
export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item">
            <Icon name="pin" size={15} /> {config.address}, D.N.
          </span>
          <span className="topbar__sep" />
          <span className="topbar__item topbar__hide-sm">
            <Icon name="building" size={15} /> Proveedor del Estado · sector público y privado
          </span>
        </div>
        <div className="topbar__group">
          {config.phones.map((p, i) => (
            <a key={p.href} className={`topbar__item ${i > 0 ? 'topbar__hide-sm' : ''}`} href={p.href}>
              <Icon name="phone" size={15} /> {p.label}
            </a>
          ))}
          {config.email && (
            <a className="topbar__item topbar__hide-sm" href={`mailto:${config.email}`}>
              <Icon name="mail" size={15} /> {config.email}
            </a>
          )}
          {config.socials.length > 0 && (
            <span className="topbar__social topbar__hide-sm">
              {config.socials.map((s) => (
                <a key={s.name} href={s.url} aria-label={s.name} target="_blank" rel="noreferrer">
                  <Icon name={s.name} size={15} />
                </a>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ───────────── Navbar ───────────── */
function Dropdown({ menu }: { menu: 'servicios' | 'catalogo' | 'sectores' }) {
  if (menu === 'servicios')
    return (
      <div className="navbar__dropdown navbar__dropdown--mega">
        {serviceGroups.map((g) => (
          <div key={g.id}>
            <p className="navbar__dd-title">{g.title}</p>
            {services
              .filter((s) => s.group === g.id)
              .map((s) => (
                <Link key={s.slug} to={`/servicios/${s.slug}`}>
                  <Icon name={s.icon} size={16} /> {s.title}
                </Link>
              ))}
          </div>
        ))}
      </div>
    )
  if (menu === 'catalogo')
    return (
      <div className="navbar__dropdown">
        {catalog.map((a) => (
          <Link key={a.id} to={`/catalogo#${a.id}`}>
            <Icon name={a.icon} size={16} /> {a.title}
          </Link>
        ))}
      </div>
    )
  return (
    <div className="navbar__dropdown">
      {sectors.map((s) => (
        <Link key={s.id} to={s.id === 'educacion' ? '/educacion' : `/sectores#${s.id}`}>
          {s.title}
        </Link>
      ))}
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="BELLPOINT — inicio">
          <Logo />
        </Link>

        <nav className="navbar__nav" aria-label="Principal">
          {nav.map((l) => (
            <div key={l.label} className="navbar__item">
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>
                {l.label}
                {l.menu && <Icon name="chevronDown" size={14} strokeWidth={2.2} />}
              </NavLink>
              {l.menu && <Dropdown menu={l.menu} />}
            </div>
          ))}
        </nav>

        <div className="navbar__actions">
          <Magnetic>
            <a className="btn btn--primary btn--pill navbar__cta" href={quoteLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Solicitar cotización
            </a>
          </Magnetic>
          <button className="navbar__burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
            <Icon name="menu" size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="mobile-menu__head">
              <Logo variant="light" className="mobile-menu__logo" />
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)}>
                <Icon name="close" size={28} />
              </button>
            </div>
            <nav>
              {nav.map((l, i) => (
                <motion.div key={l.label} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i + 0.1 }}>
                  <Link to={l.to}>{l.label}</Link>
                </motion.div>
              ))}
            </nav>
            <Link to="/servicios/pdi" className="mobile-menu__pdi">
              <Icon name="monitor" size={18} /> ¿Necesitas reparar tu PDI?
            </Link>
            <a className="btn btn--primary btn--pill" href={quoteLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Solicitar cotización
            </a>
            <p className="mobile-menu__contact">{config.phones.map((p) => p.label).join(' · ')}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ───────────── CTA final ───────────── */
export function CtaBanner({
  title = '¿Listo para llevar tu empresa al siguiente nivel?',
  text = 'Solicita tu cotización hoy y recibe asesoría personalizada de nuestro equipo.',
  label = 'Solicitar cotización',
  message = 'Hola BELLPOINT, quiero solicitar una cotización.',
}: {
  title?: string
  text?: string
  label?: string
  message?: string
}) {
  return (
    <section className="cta-banner">
      <img src="/images/cta-fondo.webp" alt="" className="cta-banner__bg" loading="lazy" />
      <div className="container cta-banner__inner">
        <div>
          <TextReveal as="h2" className="cta-banner__title" text={title} />
          <Reveal delay={0.15}>
            <p>{text}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Magnetic>
            <a className="btn btn--primary btn--pill btn--lg" href={waLink(message)} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> {label} <Icon name="arrow" size={17} />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────── Footer ───────────── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo className="footer__logo" />
          <p>Soluciones integrales de suministro, tecnología, mantenimiento e infraestructura para empresas e instituciones en República Dominicana.</p>
          <ul className="footer__badges">
            <li>
              <Icon name="building" size={15} /> Proveedor del Estado (RPE)
            </li>
            <li>
              <Icon name="file" size={15} /> Comprobantes B15 · B01
            </li>
          </ul>
        </div>

        <div>
          <h4>Empresa</h4>
          <ul>
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul>
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/servicios/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={18} /> {config.address}, {config.city}
            </li>
            {config.phones.map((p) => (
              <li key={p.href}>
                <Icon name="phone" size={18} /> <a href={p.href}>{p.label}</a>
              </li>
            ))}
            <li>
              <WhatsAppIcon size={18} />{' '}
              <a href={quoteLink()} target="_blank" rel="noreferrer">
                Escríbenos por WhatsApp
              </a>
            </li>
            {config.email && (
              <li>
                <Icon name="mail" size={18} /> <a href={`mailto:${config.email}`}>{config.email}</a>
              </li>
            )}
            {config.hours && (
              <li>
                <Icon name="clock" size={18} /> {config.hours}
              </li>
            )}
          </ul>
        </div>

        <div className="footer__map">
          <iframe title={`Ubicación de ${config.name}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="btn btn--primary btn--pill btn--sm" href={mapsUrl} target="_blank" rel="noreferrer">
            Cómo llegar <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {config.name}. Todos los derechos reservados.
        </p>
        <button className="footer__top" aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon name="chevronUp" size={18} strokeWidth={2.4} />
        </button>
      </div>
    </footer>
  )
}

/* ───────────── WhatsApp flotante ───────────── */
export function WhatsAppFloat() {
  return (
    <motion.a
      className="wa-float"
      href={waLink('Hola BELLPOINT, vengo desde la web y quiero información.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={30} />
    </motion.a>
  )
}

/** Scroll al inicio en cada cambio de ruta, o al ancla si hay #hash */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <>
      <ScrollManager />
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
