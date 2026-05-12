import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import brasao from '../../../assets/img/brasao.svg';

function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    const [visivel, setVisivel] = useState(false)
    useEffect(()=> {
        function handleScroll(){
            setVisivel(window.scrollY>50)
        }
        window.addEventListener('scroll', handleScroll)
        return()=> window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`header ${visivel ? 'header--visivel': ''}`}>
            <div className='header_inner'>
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Abrir menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            
            <div className='container_logo'>
              <NavLink to='/' className='logo_link'>
                <div className='container_brasao'>
                    <img src={brasao} alt="Brasão Bergfreunde" />
                </div>
                <div className='container_titulo'>
                    <h1 className='titulo'>Bergfreunde</h1>
                </div>
               </NavLink>
            </div>

            
            <nav className={`container_navbar ${menuOpen ? 'open' : ''}`}>
                <ul className='navbar_links'>
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Início</NavLink></li>
                    <li><NavLink to="/historia" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>História</NavLink></li>
                    <li><NavLink to='/galeria' end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Galeria</NavLink></li>
                    <li><NavLink to='/contato' end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contato</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Navbar;