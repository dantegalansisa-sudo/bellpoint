# Belpoint SRL — Web demo

Landing one-page para **Belpoint SRL** ("Soluciones para tu empresa"): suministros de oficina, limpieza, mobiliario, tecnología, cámaras/redes, pantallas interactivas y construcción para empresas e instituciones en República Dominicana. Todas las conversiones van a **WhatsApp** (sin backend).

> Nota de marca: el mockup, el logo y todas las fotos dicen **BELPOINT / Belpoint** (una sola L). En la web se usa "Belpoint"; sólo el `<title>` SEO dice "Bellpoint" porque así se pidió. Confirmar con el cliente cuál es la ortografía correcta.

## Stack
- React 18 + TypeScript + Vite 5
- Framer Motion (animaciones)
- Vanilla CSS (`src/styles/tokens.css` + `src/styles/global.css`). **Sin Tailwind.**
- Fuentes: Plus Jakarta Sans (display) + Figtree (texto) desde Google Fonts.

## Comandos
- `npm run dev` — servidor local (launch config: puerto 5180)
- `npm run build` — `tsc --noEmit` + build de Vite a `dist/`

## Estructura
```
src/
  config.ts            ← datos del negocio (PLACEHOLDERS: WhatsApp, teléfono, email, dirección, redes, horario)
  data/                ← services.ts, products.ts, sectors.ts, content.ts (nav, stats, why-us, proceso, testimonios, FAQ)
  lib/whatsapp.ts      ← waLink(text) / quoteLink(item) → "Hola, quiero cotizar: [PRODUCTO]"
  components/
    Header.tsx         ← TopBar + Navbar (dropdowns, menú móvil)
    Hero.tsx           ← hero con parallax + tiras diagonales de servicios + stats (AnimatedCounter)
    Sections.tsx       ← Servicios, ¿Por qué elegirnos?, Productos (carrusel), Nosotros, Proceso, Sectores
    Contact.tsx        ← Testimonios (carrusel), FAQ + formulario de cotización, CTA final, Footer, WhatsApp flotante
    motion.tsx         ← Reveal, TextReveal, Stagger, Magnetic, AnimatedCounter
    ui.tsx             ← SectionHead, useCarousel, ArrowButton, ImagePlaceholder
    Icon.tsx, Logo.tsx ← iconos SVG inline y logo recreado en SVG
public/images/         ← imágenes WebP optimizadas
public/favicon.svg     ← favicon (marca "O" del logo)
design/                ← referencias del mockup (heros.png, web completa.png) + originales/ (PNG fuente). No se publican.
screenshots/           ← capturas full-page desktop (1440) y móvil (390)
```

## Tokens (src/styles/tokens.css)
| Token | Valor | Uso |
|---|---|---|
| `--navy-900` | `#051b31` | titulares |
| `--navy-700` | `#0f2e4e` | top bar, sectores, CTA |
| `--navy-600` | `#1a3b5b` | panel "¿Por qué elegir?" |
| `--blue-600` | `#0760cf` | acento azul del H1 |
| `--logo-blue` | `#1b4aa8` | logo |
| `--orange-500` | `#fd6505` | CTAs, eyebrows, iconos de acento |
| `--bg` | `#fafbfd` | fondo general (nunca #fff puro en fondos de página) |
| `--text` | `#5d6a86` | texto de cuerpo |

Layout: secciones `padding: 120px 0` (`--section-py`), contenedor `max-width: 1320px`, `padding: 0 64px` (baja a 40/20px en tablet/móvil).

## Reglas
- Copy en español, tono B2B (empresas, instituciones, cotizaciones). Textos tomados del mockup.
- Todo CTA abre WhatsApp con texto prellenado (producto / servicio / sector / formulario).
- Datos del negocio sólo en `src/config.ts`; catálogos sólo en `src/data/`.
- Sin cursor personalizado. Botón flotante de WhatsApp siempre visible.
- Animaciones: text reveal en titulares, parallax en hero, CTAs magnéticos, grids escalonados, hover-lift en cards. Todo respeta `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` + media query CSS).
- Imágenes: WebP en `public/images/`, `aspect-ratio` fijo, `object-fit` (nunca estiradas).

## Mapeo de imágenes
| Archivo fuente | Destino | Sección |
|---|---|---|
| foto principal del heros | `hero.webp` | Hero (foto principal, parallax) |
| suministro de oficina | `servicio-oficina.webp` | Servicios + tira del hero |
| producto de higiene | `servicio-limpieza.webp` | Servicios + tira del hero |
| intalacion de camara | `servicio-camaras.webp` | Servicios + tira del hero |
| venta y reparacion de pantalla | `servicio-pantallas.webp` | Servicios + tira del hero |
| construccion etc | `servicio-construccion.webp` | Servicios ("Construcción, banilería y gyprock") + tira del hero |
| escritorio / silla eje / archivador metalico / laptop / aire | `producto-*.webp` | Productos destacados |
| image (98) | `sector-publico.webp` | Sectores → "Sector público" |
| sector privado | `sector-privado.webp` | Sectores → "Empresas privadas" |
| centro educativo / salud / hoteleria y turismo / industria y mas | `sector-*.webp` | Sectores |
| porque elegir bellpoint | `porque-elegirnos.webp` | ¿Por qué elegirnos? |
| tu aliado | `nosotros.webp` | Nosotros |
| listo para llevar tu empresa etc | `cta-fondo.webp` | CTA final |

## Imágenes pendientes
- **Fotos de testimonios** (`testimonio-carlos-mendez.webp`, `testimonio-ana-rodriguez.webp`, …, 1:1). Ahora se muestran avatares con iniciales.
- **`sector-publico.webp` en mayor resolución**: la fuente `image (98)` sólo mide 236×157 px; se ve suave en pantallas retina. Idealmente una foto de edificio gubernamental ≥ 800 px de ancho.
- **`producto-escritorio.webp` recortado sobre blanco**: la foto actual tiene fondo gris de estudio y rompe la uniformidad del carrusel.
- **Logo oficial** (SVG/PNG). El actual es una recreación en SVG a partir del mockup.
- **Imagen OG dedicada** 1200×630 (`og-image.jpg`); por ahora `og:image` usa `hero.webp`.
- Mapa del footer: iframe de Google Maps con la dirección placeholder; actualizar con la dirección real.

## Datos placeholder por reemplazar (src/config.ts)
WhatsApp `18090000000`, teléfono `(809) 000-0000`, email `info@belpoint.com`, dirección, horario, URLs de redes sociales. Precios de productos en `src/data/products.ts` son los del mockup.
