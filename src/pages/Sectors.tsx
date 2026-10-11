import { SectorCard } from '../components/cards'
import { WhatsAppIcon } from '../components/Icon'
import { CtaBanner } from '../components/layout'
import { Stagger } from '../components/motion'
import { PageHero, SectionHead } from '../components/ui'
import { sectors } from '../data/sectors'
import { quoteLink } from '../lib/whatsapp'
import { usePageMeta } from '../lib/seo'
import { CrossSell } from './Services'

export default function Sectors() {
  usePageMeta(
    'Sectores',
    'Soluciones para centros educativos, salud, oficinas, sector público, hoteles, restaurantes, condominios, constructoras y academias deportivas en República Dominicana.',
  )
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Sectores' }]}
        eyebrow="Sectores que atendemos"
        title="Soluciones para cada tipo de organización"
        lead="Atendemos desde una escuela o una clínica hasta una oficina, un hotel, un condominio o una constructora, con soluciones organizadas según lo que cada sector necesita."
        image="/images/sector-salud.webp"
      >
        <a className="btn btn--primary btn--pill" href={quoteLink()} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} /> Solicitar cotización
        </a>
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <SectionHead eyebrow="Tipos de cliente" title="¿En qué sector está tu organización?" />
          <Stagger className="sectors__grid sectors__grid--detailed" gap={0.06}>
            {sectors.map((s) => (
              <div key={s.id} id={s.id} className="anchor-target">
                <SectorCard s={s} detailed />
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <CrossSell />
      <CtaBanner title="Cuéntanos sobre tu organización" text="Te proponemos las soluciones que tu sector necesita, en una sola cotización." />
    </>
  )
}
