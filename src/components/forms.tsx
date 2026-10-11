import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { catalog } from '../data/catalog'
import { faqs } from '../data/company'
import { services, type FormMode } from '../data/services'
import { waLink } from '../lib/whatsapp'
import { Icon, WhatsAppIcon } from './Icon'

const modes: { id: FormMode; label: string; title: string; text: string }[] = [
  { id: 'cotizacion', label: 'Cotización', title: 'Solicita tu cotización', text: 'Productos, suministros o servicios. Te respondemos por WhatsApp.' },
  { id: 'servicio', label: 'Servicio técnico', title: 'Solicita servicio técnico', text: 'PDI, impresoras, climatización y otros equipos.' },
  { id: 'visita', label: 'Visita / evaluación', title: 'Solicita una visita', text: 'Para construcción, redes, cámaras, climatización o energía.' },
]

const interestOptions = [
  ...services.map((s) => `Servicio: ${s.title}`),
  ...catalog.map((a) => `Productos: ${a.title}`),
  'Varios / no estoy seguro',
]
const equipment = ['Pantalla interactiva (PDI)', 'Impresora', 'Aire acondicionado', 'Computadora / laptop', 'Equipo de red o cámaras', 'Otro']
const workTypes = ['Construcción o remozamiento', 'Redes / Wi-Fi', 'Cámaras de seguridad', 'Climatización', 'Energía de respaldo', 'Software', 'Otro']

type Props = {
  initialMode?: FormMode
  /** valor preseleccionado (p. ej. "Servicio: Pantallas interactivas (PDI)") */
  preset?: string
  presetEquipment?: string
  compact?: boolean
}

export function QuoteForm({ initialMode = 'cotizacion', preset = '', presetEquipment = '', compact }: Props) {
  const [mode, setMode] = useState<FormMode>(initialMode)
  const [f, setF] = useState({
    empresa: '',
    nombre: '',
    telefono: '',
    email: '',
    interes: preset,
    equipo: presetEquipment,
    marca: '',
    cantidad: '',
    ubicacion: '',
    tipo: '',
    fecha: '',
    mensaje: '',
  })
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const current = modes.find((m) => m.id === mode)!

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const head = {
      cotizacion: 'Hola BELLPOINT, quiero solicitar una cotización.',
      servicio: 'Hola BELLPOINT, necesito servicio técnico.',
      visita: 'Hola BELLPOINT, quiero solicitar una visita / evaluación.',
    }[mode]
    const lines = [
      head,
      `• Empresa / institución: ${f.empresa}`,
      `• Nombre: ${f.nombre}`,
      `• Teléfono: ${f.telefono}`,
      f.email && `• Email: ${f.email}`,
      mode === 'cotizacion' && `• Interés: ${f.interes}`,
      mode === 'servicio' && `• Equipo: ${f.equipo}`,
      mode === 'servicio' && f.marca && `• Marca / modelo: ${f.marca}`,
      mode === 'servicio' && f.cantidad && `• Cantidad: ${f.cantidad}`,
      mode === 'visita' && `• Tipo de trabajo: ${f.tipo}`,
      mode !== 'cotizacion' && f.ubicacion && `• Ubicación: ${f.ubicacion}`,
      mode === 'visita' && f.fecha && `• Fecha preferida: ${f.fecha}`,
      f.mensaje && `• Detalles: ${f.mensaje}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <form className={`quote-form ${compact ? 'is-compact' : ''}`} onSubmit={onSubmit}>
      <div className="quote-form__tabs" role="tablist" aria-label="Tipo de solicitud">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={mode === m.id}
            className={mode === m.id ? 'is-active' : ''}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div>
        <h3>{current.title}</h3>
        <p>{current.text}</p>
      </div>

      <div className="quote-form__row">
        <label>
          Empresa / institución
          <input required value={f.empresa} onChange={set('empresa')} placeholder="Nombre de la organización" />
        </label>
        <label>
          Nombre
          <input required value={f.nombre} onChange={set('nombre')} placeholder="Tu nombre" autoComplete="name" />
        </label>
      </div>
      <div className="quote-form__row">
        <label>
          Teléfono
          <input required type="tel" value={f.telefono} onChange={set('telefono')} placeholder="(809) 000-0000" autoComplete="tel" />
        </label>
        <label>
          <span>
            Email <span className="opt">(opcional)</span>
          </span>
          <input type="email" value={f.email} onChange={set('email')} placeholder="correo@empresa.com" autoComplete="email" />
        </label>
      </div>

      {mode === 'cotizacion' && (
        <label>
          ¿Qué necesitas?
          <select required value={f.interes} onChange={set('interes')}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {interestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      )}

      {mode === 'servicio' && (
        <>
          <div className="quote-form__row">
            <label>
              Equipo
              <select required value={f.equipo} onChange={set('equipo')}>
                <option value="" disabled>
                  Selecciona el equipo
                </option>
                {equipment.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              <span>
                Marca / modelo <span className="opt">(opcional)</span>
              </span>
              <input value={f.marca} onChange={set('marca')} placeholder="Ej. Clevermax 75”" />
            </label>
          </div>
          <div className="quote-form__row">
            <label>
              Cantidad de equipos
              <input inputMode="numeric" value={f.cantidad} onChange={set('cantidad')} placeholder="1" />
            </label>
            <label>
              Ubicación
              <input value={f.ubicacion} onChange={set('ubicacion')} placeholder="Sector, ciudad" />
            </label>
          </div>
        </>
      )}

      {mode === 'visita' && (
        <>
          <label>
            Tipo de trabajo
            <select required value={f.tipo} onChange={set('tipo')}>
              <option value="" disabled>
                Selecciona una opción
              </option>
              {workTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <div className="quote-form__row">
            <label>
              Ubicación
              <input required value={f.ubicacion} onChange={set('ubicacion')} placeholder="Sector, ciudad" />
            </label>
            <label>
              <span>
                Fecha preferida <span className="opt">(opcional)</span>
              </span>
              <input type="date" value={f.fecha} onChange={set('fecha')} />
            </label>
          </div>
        </>
      )}

      <label>
        {mode === 'servicio' ? 'Describe la falla' : 'Detalles'}
        <textarea
          rows={compact ? 3 : 4}
          value={f.mensaje}
          onChange={set('mensaje')}
          placeholder={mode === 'servicio' ? 'Ej. la pantalla enciende pero no responde al tacto' : 'Cantidades, plazos, detalles del proyecto…'}
        />
      </label>
      <button type="submit" className="btn btn--primary btn--pill btn--lg btn--block">
        <WhatsAppIcon size={20} /> Enviar por WhatsApp <Icon name="arrow" size={17} />
      </button>
    </form>
  )
}

export function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
              {f.q}
              <span className="faq__icon">
                <Icon name="plus" size={18} strokeWidth={2.2} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  className="faq__a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
