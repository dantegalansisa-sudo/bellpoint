import { MotionConfig } from 'framer-motion'
import { Contact, CtaBanner, Footer, Testimonials, WhatsAppFloat } from './components/Contact'
import { Navbar, TopBar } from './components/Header'
import { Hero } from './components/Hero'
import { About, Process, Products, Sectors, Services, WhyUs } from './components/Sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Products />
        <About />
        <Process />
        <Sectors />
        <Testimonials />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}
