import { config } from '../config'

export const waLink = (text: string) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`

export const quoteLink = (item?: string) =>
  waLink(item ? `Hola, quiero cotizar: ${item}` : 'Hola, quiero solicitar una cotización.')
