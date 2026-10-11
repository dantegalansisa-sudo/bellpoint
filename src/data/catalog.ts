import type { IconName } from '../components/Icon'

// Catálogo organizado por áreas. Fuente: catálogos oficiales de oficina y limpieza + dossier corporativo.
// Las imágenes salen de los catálogos (public/images/catalogo). No se publican precios: todo se cotiza.

export type CatalogItem = {
  name: string
  examples: string
  image?: string
  placeholder?: string
  /** foto ambiental (cover) en lugar de producto recortado */
  photo?: boolean
}

export type CatalogArea = {
  id: string
  title: string
  short: string
  intro: string
  icon: IconName
  cover: string
  service?: string
  items: CatalogItem[]
}

const c = (file: string) => `/images/catalogo/${file}.webp`

export const catalog: CatalogArea[] = [
  {
    id: 'impresion',
    title: 'Impresión y consumibles',
    short: 'Impresión',
    intro: 'Impresoras Canon, Epson y HP, con tintas y tóners para los modelos más usados.',
    icon: 'printer',
    cover: c('impresion-multifuncional'),
    service: 'impresoras',
    items: [
      { name: 'Impresoras multifuncionales', examples: 'Canon imageCLASS y equipos de alto volumen', image: c('impresion-multifuncional') },
      { name: 'Impresoras de tanque de tinta', examples: 'Epson EcoTank y HP Smart Tank', image: c('impresion-tanque') },
      { name: 'Impresoras láser', examples: 'HP LaserJet y multifuncionales láser', image: c('impresion-laser') },
      { name: 'Tintas originales', examples: 'Epson 544 / 664, HP 662 / 95, Canon GI', image: c('impresion-tintas') },
      { name: 'Tóners', examples: 'HP 85A, 78A, 17A, 105A, Canon 057 y compatibles', image: c('impresion-toner') },
      { name: 'Cintas para matriciales', examples: 'Cintas para impresoras de impacto y calculadoras', image: c('impresion-cintas') },
    ],
  },
  {
    id: 'oficina',
    title: 'Papelería y oficina',
    short: 'Oficina',
    intro: 'Lo que tu equipo usa todos los días, consolidado en un solo pedido.',
    icon: 'briefcase',
    cover: c('oficina-resmas'),
    service: 'oficina',
    items: [
      { name: 'Papel y resmas', examples: 'Papel bond carta y oficio de alto blancor', image: c('oficina-resmas') },
      { name: 'Archivo y organización', examples: 'Carpetas de palanca, manila y 3 aros', image: c('oficina-carpetas') },
      { name: 'Folders colgantes', examples: 'Folders y cajas de archivo', image: c('oficina-folders') },
      { name: 'Artículos de escritorio', examples: 'Grapadoras, clips, tijeras, cinta adhesiva', image: c('oficina-grapadora') },
      { name: 'Perforadoras', examples: 'De 2 y 3 hoyos, alto impacto', image: c('oficina-perforadora') },
      { name: 'Escritura y marcadores', examples: 'Bolígrafos, resaltadores, marcadores de pizarra', image: c('oficina-marcadores') },
      { name: 'Notas adhesivas', examples: 'Post-it y banderitas', image: c('oficina-notas') },
      { name: 'Calculadoras', examples: 'De escritorio y con impresora', image: c('oficina-calculadora') },
    ],
  },
  {
    id: 'limpieza',
    title: 'Limpieza e higiene institucional',
    short: 'Limpieza',
    intro: 'Químicos, dispensadores, equipos y máquinas para mantener cada espacio impecable.',
    icon: 'drop',
    cover: c('limpieza-cubos'),
    service: 'limpieza',
    items: [
      { name: 'Dispensadores', examples: 'Papel jumbo, papel toalla, jabón y servilletas', image: c('limpieza-dispensadores') },
      { name: 'Zafacones y contenedores', examples: 'De 5 L a 1,100 L, con pedal y ruedas', image: c('limpieza-zafacones') },
      { name: 'Desinfectantes', examples: 'Desinfectantes, cloro, alcohol y gel antibacterial', image: c('limpieza-desinfectantes') },
      { name: 'Jabones y detergentes', examples: 'Jabón líquido, lavaplatos y detergentes', image: c('limpieza-jabones') },
      { name: 'Mantenimiento de pisos', examples: 'Cristalizado, ceras y limpiadores especiales', image: c('limpieza-quimicos-pisos') },
      { name: 'Ambientadores e insecticidas', examples: 'Ambientadores, pastillas de inodoro e insecticidas', image: c('limpieza-ambientadores') },
      { name: 'Bayetas, fibras y esponjas', examples: 'Microfibra, esponjas y estropajos', image: c('limpieza-bayetas') },
      { name: 'Mopas y swappers', examples: 'Mopas de microfibra, swappers y palos', image: c('limpieza-mopas') },
      { name: 'Cubos y carros de limpieza', examples: 'Cubos exprimidores y carros de servicio', image: c('limpieza-cubos') },
      { name: 'Escobas y recogedores', examples: 'Escobas, cepillos, rastrillos y recogedores', image: c('limpieza-escobas') },
      { name: 'Limpiavidrios y escurridores', examples: 'Lavavidrios, raspadores y escurridores de piso', image: c('limpieza-limpiavidrios') },
      { name: 'Guantes y protección', examples: 'Guantes de látex, nitrilo y fajas', image: c('limpieza-guantes') },
      { name: 'Señalización', examples: 'Avisos de piso mojado', image: c('limpieza-senalizacion') },
      { name: 'Máquinas de limpieza', examples: 'Aspiradoras y cristalizadoras de piso', image: c('limpieza-maquinas') },
      { name: 'Secadores de manos', examples: 'Secadores eléctricos para baños', image: c('limpieza-secadores') },
      { name: 'Felpas y discos', examples: 'Felpas y discos diamantados para pulido', image: c('limpieza-felpas') },
    ],
  },
  {
    id: 'mobiliario',
    title: 'Mobiliario',
    short: 'Mobiliario',
    intro: 'Mobiliario de oficina, escolar y de comedor, resistente y ergonómico.',
    icon: 'chair',
    cover: '/images/producto-silla.webp',
    service: 'mobiliario',
    items: [
      { name: 'Sillas ejecutivas y de oficina', examples: 'Ergonómicas, de malla y en piel', image: '/images/producto-silla.webp' },
      { name: 'Escritorios', examples: 'Gerenciales, operativos y credenzas', image: '/images/producto-escritorio.webp' },
      { name: 'Archivadores metálicos', examples: 'De 2 y 4 gavetas', image: '/images/producto-archivador.webp' },
      { name: 'Armarios', examples: 'Armarios metálicos de almacenamiento', image: c('mobiliario-armario') },
      { name: 'Mobiliario escolar', examples: 'Pupitres, mesas regulables y sillas de polipropileno', image: '/images/edu-mobiliario-escolar.webp', photo: true },
      { name: 'Comedores institucionales', examples: 'Mesas de acero inoxidable y sillas apilables', placeholder: 'catalogo/mobiliario-comedor.webp' },
    ],
  },
  {
    id: 'equipos',
    title: 'Tecnología, climatización y electrodomésticos',
    short: 'Equipos',
    intro: 'Cómputo, climatización y equipos para áreas comunes y cocinas.',
    icon: 'snowflake',
    cover: '/images/producto-aire.webp',
    service: 'climatizacion',
    items: [
      { name: 'Computadoras y laptops', examples: 'Dell OptiPlex, Dell Precision y laptops institucionales', image: '/images/producto-laptop.webp' },
      { name: 'Aires acondicionados', examples: 'Split inverter con instalación', image: '/images/producto-aire.webp' },
      { name: 'Abanicos', examples: 'De pared, de pie y de techo', image: c('equipos-abanico') },
      { name: 'Extractores', examples: 'Extractores de aire industriales', image: c('equipos-extractor') },
      { name: 'Dispensadores de agua', examples: 'Fría y caliente', image: c('equipos-dispensador-agua') },
      { name: 'Microondas y cocina', examples: 'Microondas, neveras y cafeteras', image: c('equipos-microondas') },
      { name: 'Kits de cámaras', examples: 'Cámaras y grabadores para videovigilancia', image: c('seguridad-camaras') },
    ],
  },
  {
    id: 'educacion',
    title: 'Educación',
    short: 'Educación',
    intro: 'Tecnología, material didáctico y arte escolar para cada etapa del aprendizaje.',
    icon: 'school',
    cover: '/images/edu-material-didactico.webp',
    items: [
      { name: 'Pantallas interactivas', examples: 'PDI 4K multitáctil para aulas', image: '/images/edu-pdi-aula.webp', photo: true },
      { name: 'Material didáctico', examples: 'Línea Montessori, ábacos, regletas y alfabetos móviles', image: '/images/edu-material-didactico.webp', photo: true },
      { name: 'Áreas de juego seguro', examples: 'Alfombras de goma EVA y bloques de espuma', placeholder: 'catalogo/educacion-juego-seguro.webp' },
      { name: 'Arte escolar', examples: 'Temperas, pinceles, lienzos y caballetes', placeholder: 'catalogo/educacion-arte.webp' },
      { name: 'Dibujo y manualidades', examples: 'Crayones, plastilinas, tijeras de seguridad', placeholder: 'catalogo/educacion-manualidades.webp' },
    ],
  },
  {
    id: 'cafeteria',
    title: 'Cafetería y consumibles',
    short: 'Cafetería',
    intro: 'Insumos para la cocina y el área de café de tu oficina.',
    icon: 'coffee',
    cover: c('cafeteria-cafe'),
    service: 'oficina',
    items: [
      { name: 'Café', examples: 'Café molido nacional', image: c('cafeteria-cafe') },
      { name: 'Cremora y endulzantes', examples: 'Cremora, azúcar y crema batida', image: c('cafeteria-cremora') },
      { name: 'Té y bebidas', examples: 'Té helado y bebidas en polvo', image: c('cafeteria-te') },
    ],
  },
]

export const getArea = (id: string) => catalog.find((a) => a.id === id)
