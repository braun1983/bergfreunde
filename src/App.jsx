import './styles/variables.css'
import './styles/global.css'


import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage.jsx'
import Historia from './pages/historia/Historia.jsx'
import Galeria from './pages/galeria/Galeria.jsx'
import Contato from './pages/contato/Contato.jsx'

import Nav from './components/layout/Navbar/Navbar'
import Footer from './components/layout/footer/Footer.jsx'
import Container from './components/layout/container/Container.jsx'
function App() {


  return (
    <>
      <Router>
        <div className='app_wrapper'>
          <Nav />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
