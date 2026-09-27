export type Sector = {
  id: string
  title: string
  subtitle: string
  image: string
}

export const sectors: Sector[] = [
  { id: 'publico', title: 'Sector público', subtitle: 'Instituciones gubernamentales', image: '/images/sector-publico.webp' },
  { id: 'privado', title: 'Empresas privadas', subtitle: 'Oficinas y corporativos', image: '/images/sector-privado.webp' },
  { id: 'educacion', title: 'Centros educativos', subtitle: 'Colegios y universidades', image: '/images/sector-educacion.webp' },
  { id: 'salud', title: 'Salud', subtitle: 'Hospitales y clínicas', image: '/images/sector-salud.webp' },
  { id: 'hoteleria', title: 'Hotelería y turismo', subtitle: 'Hoteles y restaurantes', image: '/images/sector-hoteleria.webp' },
  { id: 'industria', title: 'Industria y más', subtitle: 'Diversos sectores', image: '/images/sector-industria.webp' },
]
