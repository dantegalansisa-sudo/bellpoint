// Sectores y tipos de clientes. Fuente: Documento Maestro §6.2 y §8.1 (venta cruzada).

export type Sector = {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  placeholder?: string
  /** slugs de servicios que suele necesitar este sector */
  needs: string[]
}

export const sectors: Sector[] = [
  {
    id: 'educacion',
    title: 'Centros educativos',
    subtitle: 'Escuelas, colegios y universidades',
    description: 'Pantallas interactivas, mobiliario escolar, material didáctico, suministros y mantenimiento para centros públicos y privados.',
    image: '/images/sector-educacion.webp',
    needs: ['pdi', 'mobiliario', 'oficina', 'limpieza', 'impresoras'],
  },
  {
    id: 'salud',
    title: 'Salud',
    subtitle: 'Clínicas, hospitales y laboratorios',
    description: 'Higiene institucional, impresoras, suministros, cámaras, redes y climatización para áreas que no pueden detenerse.',
    image: '/images/sector-salud.webp',
    needs: ['limpieza', 'impresoras', 'camaras', 'redes', 'climatizacion'],
  },
  {
    id: 'empresas',
    title: 'Oficinas y empresas',
    subtitle: 'Oficinas privadas y corporativos',
    description: 'Suministros, mobiliario, impresión, conectividad y mantenimiento con una sola factura.',
    image: '/images/sector-privado.webp',
    needs: ['oficina', 'mobiliario', 'impresoras', 'redes', 'software'],
  },
  {
    id: 'publico',
    title: 'Sector público',
    subtitle: 'Instituciones y dependencias públicas',
    description: 'Proveedor del Estado (RPE) con comprobantes fiscales gubernamentales B15 para compras institucionales.',
    image: '/images/sector-publico.webp',
    needs: ['oficina', 'limpieza', 'mobiliario', 'construccion', 'pdi'],
  },
  {
    id: 'hoteleria',
    title: 'Hoteles y turismo',
    subtitle: 'Hoteles y establecimientos turísticos',
    description: 'Limpieza institucional, climatización, cámaras, redes Wi-Fi y remozamientos.',
    image: '/images/sector-hoteleria.webp',
    needs: ['limpieza', 'climatizacion', 'camaras', 'redes', 'construccion'],
  },
  {
    id: 'restaurantes',
    title: 'Restaurantes y entretenimiento',
    subtitle: 'Restaurantes, cafeterías, bares y discotecas',
    description: 'Higiene, climatización, extractores, cámaras y adecuaciones de local.',
    placeholder: 'sector-restaurantes.webp',
    needs: ['limpieza', 'climatizacion', 'camaras', 'construccion'],
  },
  {
    id: 'condominios',
    title: 'Condominios',
    subtitle: 'Administraciones residenciales',
    description: 'Cámaras de seguridad, mantenimiento de áreas comunes, limpieza y energía de respaldo.',
    placeholder: 'sector-condominios.webp',
    needs: ['camaras', 'construccion', 'limpieza', 'energia'],
  },
  {
    id: 'constructoras',
    title: 'Constructoras',
    subtitle: 'Empresas de construcción y proyectos',
    description: 'Trabajos de terminación, electricidad, herrería, cámaras de obra, redes y limpieza.',
    image: '/images/servicio-construccion.webp',
    needs: ['construccion', 'camaras', 'redes', 'limpieza'],
  },
  {
    id: 'academias',
    title: 'Academias deportivas',
    subtitle: 'Academias deportivas y de béisbol',
    description: 'Mobiliario, suministros, limpieza, cámaras y mantenimiento de instalaciones.',
    placeholder: 'sector-academias.webp',
    needs: ['mobiliario', 'limpieza', 'camaras', 'construccion'],
  },
]

/** Ejemplos de venta cruzada (Documento Maestro §8.1) */
export const crossSell = [
  {
    who: 'Una escuela',
    starts: 'llega por la reparación de sus PDI',
    then: ['impresoras', 'oficina', 'limpieza', 'mobiliario', 'camaras'],
  },
  {
    who: 'Una clínica',
    starts: 'necesita suministros e impresoras',
    then: ['limpieza', 'camaras', 'redes', 'climatizacion', 'construccion'],
  },
  {
    who: 'Una constructora',
    starts: 'busca terminaciones y electricidad',
    then: ['camaras', 'redes', 'limpieza', 'energia'],
  },
]
