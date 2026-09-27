export type Product = {
  id: string
  name: string
  spec: string
  price: string
  image: string
}

export const products: Product[] = [
  { id: 'laptop', name: 'Laptop HP 15.6"', spec: 'Intel Core i5', price: 'RD$ 32,500', image: '/images/producto-laptop.webp' },
  { id: 'silla', name: 'Silla ejecutiva', spec: 'Ergonómica', price: 'RD$ 8,900', image: '/images/producto-silla.webp' },
  { id: 'escritorio', name: 'Escritorio ejecutivo', spec: 'Moderno', price: 'RD$ 14,800', image: '/images/producto-escritorio.webp' },
  { id: 'aire', name: 'Aire acondicionado', spec: '12,000 BTU · Inverter', price: 'RD$ 28,900', image: '/images/producto-aire.webp' },
  { id: 'archivador', name: 'Archivador metálico', spec: '4 gavetas', price: 'RD$ 12,500', image: '/images/producto-archivador.webp' },
]
