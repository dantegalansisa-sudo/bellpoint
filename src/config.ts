// Datos del negocio. Fuente: datos/BELLPOINT_Documento_Maestro_Contenido_Website (octubre 2026).
// Lo que el documento marca como "pendiente de confirmar" queda en null y NO se muestra en la web.

type Social = { name: 'facebook' | 'instagram' | 'linkedin' | 'youtube'; url: string }

export const config = {
  name: 'BELLPOINT, SRL',
  brand: 'BELLPOINT',
  tagline: 'Soluciones integrales para empresas e instituciones',
  // Número principal del botón de WhatsApp (el documento pide definirlo en desarrollo).
  whatsapp: '18092819109',
  phones: [
    { label: '(809) 281-9109', href: 'tel:+18092819109' },
    { label: '(809) 869-1198', href: 'tel:+18098691198' },
  ],
  address: 'Rafael Augusto Sánchez #28, Evaristo Morales',
  city: 'Distrito Nacional, República Dominicana',
  mapsQuery: 'Rafael Augusto Sánchez 28, Evaristo Morales, Santo Domingo, República Dominicana',
  // Pendientes de confirmar por BELLPOINT antes de publicar:
  email: null as string | null,
  hours: null as string | null,
  socials: [] as Social[],
  director: { name: 'Ing. Jhonas Bello', role: 'Director Ejecutivo' },
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapsQuery)}`
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(config.mapsQuery)}&z=15&output=embed`
