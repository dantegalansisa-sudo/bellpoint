import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { config } from '../config'
import { navLinks } from '../data/content'
import { products } from '../data/products'
import { sectors } from '../data/sectors'
import { services } from '../data/services'
import { quoteLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './Icon'
import { Logo } from './Logo'
import { Magnetic } from './motion'

const dropdowns: Record<string, { label: string; href: string }[]> = {
  Productos: products.map((p) => ({ label: p.name, href: '#productos' })),
  Servicios: services.map((s) => ({ label: s.title, href: '#servicios' })),
  Sectores: sectors.map((s) => ({ label: s.title, href: '#sectores' })),
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item">
            <Icon name="pin" size={15} /> {config.address}
          </span>
          <span className="topbar__sep" />
          <span className="topbar__item topbar__hide-sm">
            <Icon name="building" size={15} /> Ventas al sector público y privado
          </span>
        </div>
        <div className="topbar__group">
          <a className="topbar__item" href={config.phoneHref}>
            <Icon name="phone" size={15} /> {config.phone}
          </a>
          <a className="topbar__item topbar__hide-sm" href={`mailto:${config.email}`}>
            <Icon name="mail" size={15} /> {config.email}
          </a>
          <span className="topbar__social topbar__hide-sm">
            <a href={config.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Icon name="facebook" size={15} /></a>
            <a href={config.socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Icon name="instagram" size={15} /></a>
            <a href={config.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" size={15} /></a>
            <a href={config.socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Icon name="youtube" size={15} /></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo" aria-label="Bellpoint — inicio">
          <Logo />
        </a>

        <nav className="navbar__nav" aria-label="Principal">
          {navLinks.map((l) => (
            <div key={l.label} className="navbar__item">
              <a href={l.href} className={`navbar__link ${active === l.href ? 'is-active' : ''}`}>
                {l.label}
                {l.dropdown && <Icon name="chevronDown" size={14} strokeWidth={2.2} />}
              </a>
              {l.dropdown && (
                <div className="navbar__dropdown">
                  {dropdowns[l.label].map((d) => (
                    <a key={d.label} href={d.href}>
                      {d.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#productos" className="navbar__search" aria-label="Buscar productos">
            <Icon name="search" size={22} />
          </a>
          <Magnetic>
            <a className="btn btn--primary btn--pill navbar__cta" href={quoteLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Solicita una cotización <Icon name="arrow" size={17} />
            </a>
          </Magnetic>
          <button className="navbar__burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
            <Icon name="menu" size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu__head">
              <Logo variant="light" className="mobile-menu__logo" />
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)}>
                <Icon name="close" size={28} />
              </button>
            </div>
            <nav>
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a className="btn btn--primary btn--pill" href={quoteLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Solicita una cotización
            </a>
            <p className="mobile-menu__contact">
              {config.phone} · {config.email}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
