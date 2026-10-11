import type { IconName } from '../components/Icon'

// Contenido institucional. Fuentes: Documento Maestro (oct. 2026) y Dossier Corporativo 2026–2027.
// Cuando ambos difieren, manda el Documento Maestro (§19 lo declara versión vigente).

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios', menu: 'servicios' as const },
  { label: 'Catálogo', to: '/catalogo', menu: 'catalogo' as const },
  { label: 'Sectores', to: '/sectores', menu: 'sectores' as const },
  { label: 'Educación', to: '/educacion' },
  { label: 'Contacto', to: '/contacto' },
]

export const about = {
  lead: 'Empresa dominicana de soluciones integrales para instituciones educativas, empresas y organizaciones del sector público y privado.',
  body: [
    'BELLPOINT combina suministro de productos con servicios técnicos especializados: mantenimiento, reparación, instalación y soluciones de infraestructura para que cada organización opere sin interrupciones.',
    'Nuestra experiencia más sólida está en el diagnóstico, reparación, mantenimiento, instalación y logística de pantallas interactivas (PDI) y equipos tecnológicos. Desde ahí crecimos hacia un modelo integral de suministro y servicios recurrentes.',
  ],
}

export const valueProposition: { icon: IconName; title: string; text: string }[] = [
  { icon: 'layers', title: 'Un solo proveedor', text: 'Tecnología, suministros, mobiliario y mantenimiento en una sola relación comercial.' },
  { icon: 'monitor', title: 'Experiencia técnica real', text: 'Reparación, mantenimiento y gestión de equipos, especialmente PDI.' },
  { icon: 'truck', title: 'Coordinación completa', text: 'Técnicos, talleres, transporte, suministro y entrega bajo un mismo responsable.' },
  { icon: 'target', title: 'Resolvemos el problema', text: 'No solo vendemos un producto: acompañamos hasta que la necesidad queda cubierta.' },
]

export const history = [
  {
    chapter: 'Origen',
    title: 'Atención al sector educativo',
    text: 'Nacemos identificando las necesidades de colegios e instituciones en infraestructura e insumos, con trato cercano y entregas garantizadas.',
  },
  {
    chapter: 'Especialización',
    title: 'Tecnología interactiva y soporte técnico',
    text: 'Creamos una unidad dedicada al desmonte, traslado, diagnóstico, reparación e instalación de pantallas interactivas y sistemas audiovisuales.',
  },
  {
    chapter: 'Expansión',
    title: 'Proveedor integral',
    text: 'Hoy abastecemos tecnología, mobiliario, papelería, limpieza e infraestructura para empresas e instituciones de todo tipo.',
  },
]

export const mission =
  'Brindar soluciones integrales de suministro, mantenimiento, tecnología y servicios para instituciones y empresas, ofreciendo atención responsable, soluciones prácticas y seguimiento oportuno que contribuya al buen funcionamiento de nuestros clientes.'

export const vision =
  'Convertirnos en una empresa dominicana de referencia en soluciones integrales para instituciones y empresas, reconocida por su capacidad de respuesta, confiabilidad, organización y calidad de servicio, con presencia progresiva a nivel nacional.'

export const values: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Responsabilidad', text: 'Cumplimiento puntual en tiempos de entrega y especificaciones.' },
  { icon: 'handshake', title: 'Honestidad', text: 'Decimos lo que podemos cumplir, y lo cumplimos.' },
  { icon: 'headset', title: 'Servicio', text: 'Atención técnica y comercial personalizada.' },
  { icon: 'target', title: 'Compromiso', text: 'Asumimos los objetivos de nuestros clientes como propios.' },
  { icon: 'award', title: 'Calidad', text: 'Productos y trabajos que duran.' },
  { icon: 'bolt', title: 'Rapidez', text: 'Capacidad de respuesta cuando más se necesita.' },
  { icon: 'eye', title: 'Transparencia', text: 'Claridad absoluta en cotizaciones y procesos de contratación.' },
  { icon: 'spark', title: 'Innovación', text: 'Actualización constante en tecnología y equipamiento.' },
  { icon: 'users', title: 'Trabajo en equipo', text: 'Técnicos, logística y ventas coordinados para cada proyecto.' },
]

export const directorMessage = {
  quote:
    'Una institución educativa o empresarial necesita mucho más que un proveedor tradicional de productos: necesita un aliado estratégico que comprenda sus necesidades operativas, responda con rapidez logística y técnica, y acompañe de forma permanente su desarrollo.',
  closing: 'Será un honor construir una relación sólida y de largo plazo con su institución.',
  photo: '/images/direccion-jhonas-bello.webp',
}

/** Ventajas competitivas (Dossier p. 25 + Documento Maestro §4) */
export const advantages: { icon: IconName; title: string; text: string }[] = [
  { icon: 'layers', title: 'Proveedor unificado', text: 'tecnología, mobiliario, papelería y limpieza en una sola factura' },
  { icon: 'pin', title: 'Soporte local inmediato', text: 'respuesta en RD, sin intermediarios distantes' },
  { icon: 'monitor', title: 'Servicio técnico propio', text: 'especialistas en PDI y equipos tecnológicos' },
  { icon: 'school', title: 'Capacitación incluida', text: 'inducción al personal sobre la tecnología instalada' },
  { icon: 'file', title: 'Respaldo fiscal', text: 'comprobantes gubernamentales B15 y de valor fiscal B01' },
  { icon: 'building', title: 'Proveedor del Estado', text: 'registrados como proveedor del Estado (RPE)' },
]

/** Metodología de servicio (Dossier p. 24) */
export const process: { icon: IconName; title: string; text: string }[] = [
  { icon: 'search', title: 'Levantamiento y diagnóstico', text: 'Evaluamos tus necesidades en sitio.' },
  { icon: 'file', title: 'Propuesta personalizada', text: 'Cotización técnica y económica a tu medida.' },
  { icon: 'truck', title: 'Entrega e instalación', text: 'Logística puntual y montaje calificado.' },
  { icon: 'school', title: 'Capacitación', text: 'Entrenamos a tu personal en el uso de los equipos.' },
  { icon: 'support', title: 'Soporte continuo', text: 'Mantenimiento preventivo y atención de garantías.' },
]

/** Regiones con proyectos realizados (Dossier p. 26). No se nombran clientes sin autorización. */
export const coverage = [
  { region: 'Gran Santo Domingo', text: 'Distritos educativos, escuelas, clínicas y colegios privados.' },
  { region: 'Santiago y región Norte', text: 'Centros educativos y empresas del Cibao.' },
  { region: 'Monte Plata y región Este', text: 'Escuelas y centros comunitarios.' },
  { region: 'Samaná', text: 'Liceos e instituciones regionales.' },
]

export const heroHighlights: { icon: IconName; label: string }[] = [
  { icon: 'layers', label: 'Un solo\nproveedor' },
  { icon: 'monitor', label: 'Servicio técnico\nespecializado' },
  { icon: 'building', label: 'Sector público\ny privado' },
  { icon: 'headset', label: 'Asesoría\npersonalizada' },
]

export const heroStats: { icon: IconName; value?: number; title?: string; label: string }[] = [
  { icon: 'layers', value: 11, label: 'líneas de servicio' },
  { icon: 'building', title: 'Registro RPE', label: 'proveedor del Estado' },
  { icon: 'file', title: 'B15 · B01', label: 'comprobantes fiscales' },
  { icon: 'monitor', title: 'Especialistas', label: 'en pantallas interactivas' },
]

export const faqs = [
  {
    q: '¿Trabajan con instituciones del Estado?',
    a: 'Sí. Somos proveedor del Estado (RPE) y emitimos comprobantes fiscales gubernamentales (B15) y de valor fiscal (B01) conforme a las normativas de la DGII.',
  },
  {
    q: '¿Qué marcas de pantallas interactivas reparan?',
    a: 'Trabajamos con Clevermax, Huawei IdeaHub y otras marcas líderes. Hacemos diagnóstico de fuentes, cambio de tarjetas lógicas, calibración táctil, actualización de firmware, traslado e instalación.',
  },
  {
    q: '¿Puedo comprar suministros y contratar servicios a la vez?',
    a: 'Sí, esa es nuestra propuesta: un solo proveedor para tecnología, suministros, mobiliario, limpieza y mantenimiento, con una sola relación comercial.',
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Escríbenos por WhatsApp o completa el formulario indicando qué necesitas. Para instalaciones, construcción o redes coordinamos primero una visita de levantamiento.',
  },
  {
    q: '¿Incluyen capacitación cuando instalan equipos?',
    a: 'Sí. Cuando instalamos tecnología entrenamos a tu personal en su uso y damos seguimiento con mantenimiento preventivo y atención de garantías.',
  },
]
