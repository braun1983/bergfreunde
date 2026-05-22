import './styles/variables.css'
import './styles/global.css'


import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import CookieBanner from './components/ui/CookieBanner.jsx'

import HomePage from './pages/homepage/HomePage.jsx'
import Historia from './pages/historia/Historia.jsx'
import Galeria from './pages/galeria/Galeria.jsx'
import Contato from './pages/contato/Contato.jsx'

import Privacidade from './pages/privacidade/Privacidade.jsx'
import Nav from './components/layout/Navbar/Navbar'
import Footer from './components/layout/footer/Footer.jsx'
import Container from './components/layout/container/Container.jsx'


function App() {
  return (

    <Router>
      <ScrollToTop/>
      <div className='app_wrapper'>
        <Nav />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
          </Routes>
        </Container>
        <Footer />
      </div>
      <Analytics/>
      <SpeedInsights />
          <CookieBanner />
    </Router>
  )
}
export default App
