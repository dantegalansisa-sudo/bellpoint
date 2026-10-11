import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Contact, { NotFound } from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Sectors from './pages/Sectors'
import { ServiceDetail, ServicesIndex } from './pages/Services'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nosotros" element={<About />} />
            <Route path="servicios" element={<ServicesIndex />} />
            <Route path="servicios/:slug" element={<ServiceDetail />} />
            <Route path="catalogo" element={<Catalog />} />
            <Route path="sectores" element={<Sectors />} />
            <Route path="educacion" element={<Education />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
