import type { IconName } from '../components/Icon'

export type FormMode = 'cotizacion' | 'servicio' | 'visita'

export type ServiceGroup = { id: string; title: string; text: string }

export type Service = {
  slug: string
  group: string
  title: string
  /** etiqueta corta con salto de línea, usada en la tira del hero */
  short: string
  summary: string
  description: string
  includes: string[]
  /** foto; si falta se muestra un placeholder con el nombre esperado */
  image?: string
  /** true para fotos de producto recortadas (se muestran con contain sobre blanco) */
  cutout?: boolean
  placeholder?: string
  icon: IconName
  related: string[]
  /** áreas del catálogo relacionadas */
  catalog?: string[]
  formMode: FormMode
  cta: string
}

export const serviceGroups: ServiceGroup[] = [
  { id: 'tecnologia', title: 'Tecnología y servicio técnico', text: 'Diagnóstico, reparación y soporte para los equipos que mantienen tu operación en marcha.' },
  { id: 'infraestructura', title: 'Infraestructura y mantenimiento', text: 'Construcción, remozamiento y climatización para espacios que funcionan.' },
  { id: 'conectividad', title: 'Seguridad y conectividad', text: 'Cámaras, redes y cableado diseñados para cada instalación.' },
  { id: 'suministros', title: 'Suministros y equipamiento', text: 'Lo que tu organización consume cada día, con un solo proveedor.' },
]

export const services: Service[] = [
  {
    slug: 'pdi',
    group: 'tecnologia',
    title: 'Pantallas interactivas (PDI)',
    short: 'Reparación de pantallas\ninteractivas (PDI)',
    summary: 'Diagnóstico, reparación, mantenimiento, instalación y traslado de pantallas digitales interactivas.',
    description:
      'Nuestra especialidad. Contamos con una unidad dedicada al desmonte, traslado, diagnóstico, reparación e instalación de Pantallas Digitales Interactivas (PDI) y sistemas audiovisuales para aulas y salas de reuniones. Trabajamos con Clevermax, Huawei IdeaHub y otras marcas líderes.',
    includes: [
      'Diagnóstico de fuentes de poder y tarjetas',
      'Cambio de tarjetas lógicas',
      'Calibración táctil y actualización de firmware',
      'Desmonte, traslado e instalación',
      'Mantenimiento preventivo',
      'Suministro de pantallas nuevas (4K, multitáctil)',
    ],
    image: '/images/servicio-pantallas.webp',
    icon: 'monitor',
    related: ['impresoras', 'redes', 'mobiliario'],
    catalog: ['impresion'],
    formMode: 'servicio',
    cta: 'Necesito reparar mi PDI',
  },
  {
    slug: 'impresoras',
    group: 'tecnologia',
    title: 'Impresoras y consumibles',
    short: 'Impresoras\ny consumibles',
    summary: 'Venta, reparación, mantenimiento y soporte de impresoras, más tintas y tóners originales.',
    description:
      'Impresoras multifuncionales y de alto rendimiento Canon, Epson y HP, con el soporte técnico para mantenerlas operando. Suministramos tintas y tóners originales y compatibles para los modelos más usados en oficinas e instituciones.',
    includes: [
      'Venta de impresoras láser, de tanque y multifuncionales',
      'Reparación y mantenimiento',
      'Tintas y tóners originales y compatibles',
      'Cintas para impresoras matriciales',
      'Soporte y configuración en red',
    ],
    image: '/images/catalogo/impresion-multifuncional.webp',
    cutout: true,
    icon: 'printer',
    related: ['oficina', 'pdi', 'redes'],
    catalog: ['impresion'],
    formMode: 'servicio',
    cta: 'Solicitar servicio técnico',
  },
  {
    slug: 'software',
    group: 'tecnologia',
    title: 'Soporte y desarrollo de software',
    short: 'Soporte y desarrollo\nde software',
    summary: 'Herramientas tecnológicas y soluciones de software según las necesidades de tu organización.',
    description:
      'Nuestro equipo de ingeniería en telemática y desarrollo apoya a empresas e instituciones con soluciones de software, configuración de servidores y herramientas tecnológicas adaptadas a su operación.',
    includes: [
      'Desarrollo de soluciones a la medida',
      'Venta e implementación de software',
      'Configuración de servidores',
      'Soporte técnico a usuarios',
    ],
    placeholder: 'servicio-software.webp',
    icon: 'code',
    related: ['redes', 'impresoras', 'energia'],
    formMode: 'visita',
    cta: 'Solicitar una evaluación',
  },
  {
    slug: 'energia',
    group: 'tecnologia',
    title: 'Energía de respaldo',
    short: 'Energía\nde respaldo',
    summary: 'Bancos de baterías de ciclo profundo para inversores y UPS: suministro, instalación y mantenimiento.',
    description:
      'Mantén operando tus equipos críticos durante los cortes de energía. Suministramos, instalamos y mantenemos bancos de baterías de ciclo profundo (Trojan, Tronic) para sistemas de inversores y UPS.',
    includes: ['Bancos de baterías de ciclo profundo', 'Instalación para inversores y UPS', 'Mantenimiento preventivo', 'Evaluación de carga'],
    placeholder: 'servicio-energia.webp',
    icon: 'battery',
    related: ['redes', 'pdi', 'construccion'],
    formMode: 'visita',
    cta: 'Solicitar una evaluación',
  },
  {
    slug: 'construccion',
    group: 'infraestructura',
    title: 'Construcción y remozamiento',
    short: 'Construcción\ny remozamiento',
    summary: 'Construcción nueva, remodelaciones, albañilería, pintura, herrería, ebanistería, plomería y electricidad.',
    description:
      'Adecuamos y mantenemos los espacios de tu empresa o institución: desde una reparación puntual hasta una remodelación completa o construcción nueva, coordinando cada oficio con un solo responsable.',
    includes: [
      'Construcción nueva',
      'Reparaciones, remodelaciones y remozamientos',
      'Albañilería y trabajos de terminación',
      'Pintura',
      'Herrería y ebanistería',
      'Plomería y electricidad',
    ],
    image: '/images/servicio-construccion.webp',
    icon: 'tools',
    related: ['climatizacion', 'camaras', 'limpieza'],
    formMode: 'visita',
    cta: 'Solicitar una visita',
  },
  {
    slug: 'climatizacion',
    group: 'infraestructura',
    title: 'Climatización',
    short: 'Climatización',
    summary: 'Instalación, mantenimiento y venta de aires acondicionados, abanicos y extractores.',
    description:
      'Equipos de climatización y ventilación para oficinas, aulas, clínicas y comercios, con instalación y mantenimiento para que funcionen de forma eficiente durante todo el año.',
    includes: ['Venta de aires acondicionados', 'Instalación', 'Mantenimiento preventivo y correctivo', 'Abanicos y extractores'],
    image: '/images/producto-aire.webp',
    cutout: true,
    icon: 'snowflake',
    related: ['construccion', 'energia', 'mobiliario'],
    catalog: ['equipos'],
    formMode: 'visita',
    cta: 'Solicitar una visita',
  },
  {
    slug: 'camaras',
    group: 'conectividad',
    title: 'Cámaras de seguridad',
    short: 'Cámaras\nde seguridad',
    summary: 'Diseño, suministro e instalación de sistemas de videovigilancia.',
    description:
      'Diseñamos el sistema de cámaras que tu instalación necesita, suministramos los equipos y los instalamos con su grabador y acceso remoto.',
    includes: ['Levantamiento y diseño del sistema', 'Suministro de cámaras y grabadores', 'Instalación y configuración', 'Acceso remoto y mantenimiento'],
    image: '/images/servicio-camaras.webp',
    icon: 'camera',
    related: ['redes', 'energia', 'construccion'],
    formMode: 'visita',
    cta: 'Solicitar una visita',
  },
  {
    slug: 'redes',
    group: 'conectividad',
    title: 'Redes e internet',
    short: 'Redes\ne internet',
    summary: 'Diseño y expansión de redes Wi-Fi, cableado estructurado e infraestructura de red.',
    description:
      'Conectividad estable para oficinas, aulas y edificios: diseñamos la infraestructura de red, tendemos el cableado y ampliamos la cobertura Wi-Fi donde más se necesita.',
    includes: [
      'Diseño de infraestructura de red',
      'Cableado estructurado y tramería',
      'Redes Wi-Fi para oficinas y aulas',
      'Expansión de cobertura',
      'Configuración de equipos y servidores',
    ],
    placeholder: 'servicio-redes.webp',
    icon: 'wifi',
    related: ['camaras', 'software', 'pdi'],
    formMode: 'visita',
    cta: 'Solicitar una visita',
  },
  {
    slug: 'oficina',
    group: 'suministros',
    title: 'Suministros de oficina',
    short: 'Suministros\nde oficina',
    summary: 'Papelería, materiales gastables y artículos para la operación diaria de oficinas e instituciones.',
    description:
      'Papel bond, carpetas, archivo, artículos de escritorio, escritura y todo lo que tu equipo consume a diario. Consolidamos tus pedidos en una sola factura.',
    includes: ['Papel y resmas carta/oficio', 'Archivo y organización', 'Artículos de escritorio', 'Escritura y marcadores de pizarra', 'Consumibles de impresión', 'Cafetería'],
    image: '/images/servicio-oficina.webp',
    icon: 'briefcase',
    related: ['impresoras', 'limpieza', 'mobiliario'],
    catalog: ['oficina', 'impresion', 'cafeteria'],
    formMode: 'cotizacion',
    cta: 'Solicitar cotización',
  },
  {
    slug: 'limpieza',
    group: 'suministros',
    title: 'Limpieza institucional',
    short: 'Limpieza\ninstitucional',
    summary: 'Químicos, dispensadores, zafacones, equipos y máquinas de limpieza para instituciones.',
    description:
      'Un catálogo amplio para la limpieza e higiene de oficinas, escuelas, clínicas, hoteles y comercios: desde químicos y dispensadores hasta máquinas cristalizadoras y aspiradoras.',
    includes: [
      'Químicos, desinfectantes y detergentes',
      'Dispensadores de papel y jabón',
      'Zafacones y contenedores',
      'Mopas, escobas, cubos y bayetas',
      'Máquinas y secadores de mano',
      'Guantes y señalización',
    ],
    image: '/images/servicio-limpieza.webp',
    icon: 'drop',
    related: ['oficina', 'mobiliario', 'construccion'],
    catalog: ['limpieza'],
    formMode: 'cotizacion',
    cta: 'Solicitar cotización',
  },
  {
    slug: 'mobiliario',
    group: 'suministros',
    title: 'Mobiliario y equipamiento',
    short: 'Mobiliario\ny equipamiento',
    summary: 'Escritorios, sillas, archivadores, mobiliario escolar y equipos para oficinas e instituciones.',
    description:
      'Equipamos áreas administrativas, aulas, comedores y salas de espera con mobiliario resistente y ergonómico, además de electrodomésticos y equipos de cómputo.',
    includes: ['Escritorios y sillas ejecutivas', 'Archivadores y armarios', 'Mobiliario escolar', 'Comedores institucionales', 'Cómputo y electrodomésticos'],
    image: '/images/producto-silla.webp',
    cutout: true,
    icon: 'chair',
    related: ['oficina', 'climatizacion', 'construccion'],
    catalog: ['mobiliario', 'equipos'],
    formMode: 'cotizacion',
    cta: 'Solicitar cotización',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

/** Servicios destacados en la tira del hero y en el inicio */
export const featuredServices = ['oficina', 'limpieza', 'camaras', 'pdi', 'construccion']
