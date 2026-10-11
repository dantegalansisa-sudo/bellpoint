# BELLPOINT, SRL — Website

Sitio multipágina de **BELLPOINT, SRL** ("Soluciones para tu empresa"): proveedor integral de suministros, servicio técnico, tecnología, mantenimiento e infraestructura para empresas e instituciones en República Dominicana. Todas las conversiones van a **WhatsApp** (sin backend).

## Fuentes de contenido (carpeta `datos/`, fuera de git)
- `BELLPOINT_Documento_Maestro_Contenido_Website` (oct. 2026) — **fuente principal**. Su §19 lo declara versión vigente: cuando difiere del dossier, manda este.
- `Dossier Corporativo BELLPOINT 2026-2027.pdf` — historia, divisiones, proceso, ventajas, cobertura, carta del director.
- `Catalogo de productos de oficina…pdf` y `CATALOGO DE LIMPIEZA…pdf` — de aquí salen las imágenes de `public/images/catalogo/`.

`datos/` está en `.gitignore` porque contiene el RNC y datos que el documento maestro pide **no publicar** hasta confirmar.

## Reglas de contenido (Documento Maestro §14–15, §18)
- Marca: **BELLPOINT** (doble L). Razón social: BELLPOINT, SRL.
- No publicar: RNC, correo corporativo, usuarios de redes, horario (en `config.ts` son `null`/vacíos y la UI no los muestra).
- No inventar testimonios, precios ni cifras. No nombrar clientes sin autorización (por eso la cobertura se muestra por regiones).
- No presentar a BELLPOINT como empresa solo educativa ni como simple tienda: proveedor integral, productos + servicios.
- Tono profesional y cercano; textos cortos, bloques visuales, CTAs visibles. Móvil primero.

## Stack
React 18 + TypeScript + Vite 5 · react-router-dom 6 · Framer Motion · Vanilla CSS (sin Tailwind) · Plus Jakarta Sans + Figtree.
`vercel.json` reescribe todas las rutas a `index.html` (SPA).

## Comandos
- `npm run dev` — servidor local (launch config: puerto 5180)
- `npm run build` — `tsc --noEmit` + build de Vite

## Rutas
| Ruta | Página | Contenido |
|---|---|---|
| `/` | `pages/Home.tsx` | Hero, servicios destacados, por qué elegirnos, banda PDI, catálogo por áreas, nosotros, proceso, sectores, FAQ + formulario, CTA |
| `/nosotros` | `pages/About.tsx` | Quiénes somos, propuesta de valor, historia, mensaje del Director Ejecutivo, misión/visión/valores, respaldo RPE/B15/B01, cobertura |
| `/servicios` | `pages/Services.tsx` | 11 servicios en 4 áreas + venta cruzada |
| `/servicios/:slug` | `pages/Services.tsx` | Detalle: qué incluye, proceso (PDI), productos relacionados, servicios relacionados, formulario con modo según servicio |
| `/catalogo` | `pages/Catalog.tsx` | 7 áreas con barra de chips fija; cada producto → WhatsApp "Hola BELLPOINT, quiero cotizar: …" |
| `/sectores` | `pages/Sectors.tsx` | 9 sectores con servicios que suelen necesitar |
| `/educacion` | `pages/Education.tsx` | Vertical educativa (divisiones del dossier) |
| `/contacto` | `pages/Contact.tsx` | Tarjetas de contacto, mapa, formulario con 3 modos, FAQ |

## Estructura
```
src/
  config.ts              ← datos del negocio (teléfonos, WhatsApp, dirección, director; pendientes en null)
  data/
    services.ts          ← 11 servicios + grupos (slug, includes, related, catalog, formMode, cta)
    catalog.ts           ← áreas del catálogo y sus categorías (sin precios)
    sectors.ts           ← sectores + ejemplos de venta cruzada
    company.ts           ← nav, nosotros, historia, misión, visión, valores, ventajas, proceso, cobertura, FAQ, stats
  lib/whatsapp.ts        ← waLink / quoteLink
  lib/seo.ts             ← usePageMeta(title, description) por página
  components/
    layout.tsx           ← TopBar, Navbar (mega menú), CtaBanner, Footer, WhatsAppFloat, Layout + ScrollManager
    Hero.tsx             ← hero del inicio (parallax + tiras de servicios + stats)
    cards.tsx            ← ServiceCard, SectorCard, AreaCard, ProductCard
    forms.tsx            ← QuoteForm (cotización / servicio técnico / visita) y Faq
    ui.tsx               ← SectionHead, PageHero, Media (imagen o placeholder), carrusel
    motion.tsx, Icon.tsx, Logo.tsx
  styles/ tokens.css · global.css · pages.css
```

## Tokens (src/styles/tokens.css)
`--navy-900 #051b31` titulares · `--navy-700 #0f2e4e` bloques oscuros · `--blue-600 #0760cf` acento · `--orange-500 #fd6505` CTAs · `--bg #fafbfd` fondo · `--text #5d6a86` cuerpo.
Secciones `120px 0`, contenedor `1320px`, padding `0 64px` (40/20px en tablet/móvil).

## Imágenes
- `public/images/` — fotos del mockup (hero, servicios, sectores, nosotros, CTA) y del dossier (`direccion-jhonas-bello`, `edu-*`).
- `public/images/catalogo/` — 39 productos recortados de los catálogos oficiales (fondo blanco, 600×600).

## Imágenes pendientes
- **Fotos reales** de trabajos, PDI reparadas, instalaciones y personal (Documento Maestro §16).
- `servicio-software.webp`, `servicio-energia.webp`, `servicio-redes.webp` (servicios).
- `sector-restaurantes.webp`, `sector-condominios.webp`, `sector-academias.webp` (sectores).
- `edu-arte-escolar.webp`, `catalogo/educacion-arte.webp`, `catalogo/educacion-manualidades.webp`, `catalogo/educacion-juego-seguro.webp`, `catalogo/mobiliario-comedor.webp`.
- `sector-publico.webp` en mayor resolución (fuente de 236 px).
- **Logo oficial** en vector. El logo actual es la recreación del mockup; el catálogo muestra otro logo (una "B" con check rojo).
- Las fotos del hero, "¿Por qué elegir?" y "Nosotros" muestran el rótulo "BELPOINT" (una L): reemplazar por fotos reales.
- Imagen OG 1200×630.

## Pendientes de confirmar con BELLPOINT (antes de publicar)
- WhatsApp principal confirmado: (809) 869-1198.
- Dirección pública: el documento maestro dice Rafael Augusto Sánchez #28, Evaristo Morales (D.N.); el dossier dice Santo Domingo Este y el catálogo "C/ Hípica #10" / "Av. Lope de Vega #12". Se usa la del documento maestro.
- RNC, correo corporativo (el dossier menciona grupobellpoint@gmail.com), redes sociales, horario, dominio.
- Testimonios autorizados (la sección se eliminó hasta tenerlos).
- Política de privacidad y términos.

## Segunda etapa (Documento Maestro §10–11)
Portal de clientes, seguimiento de equipos por código/QR, órdenes de servicio, CRM. La arquitectura por datos (`src/data/`) permite crecer el catálogo y añadir rutas sin rehacer el sitio.
