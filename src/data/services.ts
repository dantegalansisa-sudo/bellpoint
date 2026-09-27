import type { IconName } from '../components/Icon'

export type Service = {
  id: string
  title: string
  short: string
  description: string
  image: string
  icon: IconName
}

export const services: Service[] = [
  {
    id: 'oficina',
    title: 'Suministros de oficina',
    short: 'Suministros\nde oficina',
    description: 'Todo lo esencial para el día a día de tu empresa, desde un clip hasta soluciones corporativas.',
    image: '/images/servicio-oficina.webp',
    icon: 'briefcase',
  },
  {
    id: 'limpieza',
    title: 'Productos de limpieza',
    short: 'Productos\nde limpieza',
    description: 'Soluciones de limpieza para hogares, oficinas, hospitales, restaurantes, hoteles y más.',
    image: '/images/servicio-limpieza.webp',
    icon: 'drop',
  },
  {
    id: 'camaras',
    title: 'Instalación de cámaras y redes de internet',
    short: 'Instalación de cámaras\ny redes de internet',
    description: 'Sistemas de seguridad, cableado y expansión de redes para tu empresa o institución.',
    image: '/images/servicio-camaras.webp',
    icon: 'wifi',
  },
  {
    id: 'pantallas',
    title: 'Venta y reparación de pantallas interactivas',
    short: 'Venta y reparación\nde pantallas interactivas',
    description: 'Soluciones tecnológicas para centros educativos y empresas.',
    image: '/images/servicio-pantallas.webp',
    icon: 'monitor',
  },
  {
    id: 'construccion',
    title: 'Construcción, banilería y gyprock',
    short: 'Construcción,\nbanilería y gyprock',
    description: 'Remodelaciones, adecuaciones y soluciones en obra civil.',
    image: '/images/servicio-construccion.webp',
    icon: 'tools',
  },
]
