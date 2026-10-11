import { config } from '../config'

export const waLink = (text: string) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`

export const quoteLink = (item?: string) =>
  waLink(item ? `Hola BELLPOINT, quiero cotizar: ${item}` : 'Hola BELLPOINT, quiero solicitar una cotización.')
