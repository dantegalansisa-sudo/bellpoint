import type { IconName } from '../components/Icon'

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos', dropdown: true },
  { label: 'Servicios', href: '#servicios', dropdown: true },
  { label: 'Sectores', href: '#sectores', dropdown: true },
  { label: 'Contacto', href: '#contacto' },
]

export const heroHighlights: { icon: IconName; label: string }[] = [
  { icon: 'award', label: 'Productos\nde calidad' },
  { icon: 'truck', label: 'Entrega a\ntodo el país' },
  { icon: 'building', label: 'Atención al\nsector público\ny privado' },
  { icon: 'headset', label: 'Asesoría\npersonalizada' },
]

export const heroStats: { icon: IconName; value?: number; prefix?: string; title?: string; label: string }[] = [
  { icon: 'cart', value: 5000, prefix: '+', label: 'productos disponibles' },
  { icon: 'users', title: 'Empresas', label: 'e instituciones' },
  { icon: 'gear', title: 'Soluciones', label: 'personalizadas' },
  { icon: 'truck', title: 'Cobertura', label: 'en todo el país' },
]

export const whyUs: { icon: IconName; title: string; text: string }[] = [
  { icon: 'catalog', title: 'Amplio catálogo', text: 'de productos' },
  { icon: 'tools', title: 'Servicios especializados', text: 'en un solo lugar' },
  { icon: 'building', title: 'Atención al sector', text: 'público y privado' },
  { icon: 'truck', title: 'Entrega rápida', text: 'en todo el país' },
  { icon: 'handshake', title: 'Asesoría', text: 'personalizada' },
  { icon: 'shield', title: 'Garantía', text: 'en nuestros productos y servicios' },
]

export const aboutValues: { icon: IconName; label: string }[] = [
  { icon: 'award', label: 'Compromiso\ncon la calidad' },
  { icon: 'handshake', label: 'Orientados\na soluciones' },
  { icon: 'gear', label: 'Crecemos\ncontigo' },
]

export const processSteps: { icon: IconName; title: string; text: string }[] = [
  { icon: 'file', title: 'Solicita tu cotización', text: 'Cuéntanos lo que necesitas.' },
  { icon: 'headset', title: 'Recibe asesoría', text: 'Te orientamos con la mejor solución.' },
  { icon: 'truck', title: 'Confirmación y entrega', text: 'Procesamos tu pedido o servicio.' },
  { icon: 'support', title: 'Soporte continuo', text: 'Estamos contigo antes y después.' },
]

export const testimonials = [
  {
    quote: 'Excelente servicio y atención. Siempre encuentro todo lo que necesito para mi oficina y con entrega rápida.',
    name: 'Carlos Méndez',
    role: 'Gerente Administrativo',
  },
  {
    quote: 'Nos han apoyado en la instalación de cámaras y la expansión de nuestra red. Un equipo muy profesional y confiable.',
    name: 'Ana Rodríguez',
    role: 'Directora, Centro Educativo',
  },
  {
    quote: 'Equipamos nuestra nueva sucursal con mobiliario, climatización y tecnología. Cumplieron cada plazo acordado.',
    name: 'Luis Peña',
    role: 'Encargado de Compras, Sector Salud',
  },
  {
    quote: 'La cotización llegó el mismo día y el proceso de compra institucional fue claro de principio a fin.',
    name: 'María Santos',
    role: 'Analista de Compras, Institución Pública',
  },
]

export const faqs = [
  {
    q: '¿Trabajan con el sector público?',
    a: 'Sí. Atendemos instituciones gubernamentales y participamos en procesos de compras públicas con toda la documentación requerida.',
  },
  {
    q: '¿Hacen entregas en todo el país?',
    a: 'Sí. Contamos con flota propia y aliados logísticos para entregar en todo el territorio nacional.',
  },
  {
    q: '¿Cuánto tarda una cotización?',
    a: 'Normalmente respondemos el mismo día hábil. Para proyectos de instalación o construcción coordinamos una visita técnica.',
  },
  {
    q: '¿Ofrecen crédito a empresas?',
    a: 'Evaluamos condiciones de crédito para empresas e instituciones con historial de compras. Escríbenos y te orientamos.',
  },
  {
    q: '¿Los productos y servicios tienen garantía?',
    a: 'Nuestros productos cuentan con garantía del fabricante y nuestros servicios de instalación incluyen garantía de mano de obra.',
  },
]
