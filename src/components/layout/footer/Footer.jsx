import './Footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <footer>

            <div className='container_name'>
                <p className='name'>
                    ©2026 Bergfreunde Volkstanzgruppe -
                    Grupo de Danças Folclóricas Gêrmanicas -
                    Domingos Martins-ES</p>

                <p className='text'> <span>Immer Lustig</span></p>

            </div>
            <div className='footer_inner'>
                <div className='container_content'>
                    <div className='explore'>
                        <h4 className='caption'>Explore</h4>
                        <ul className='navbar_footer'>
                            <li><NavLink to="/" end >Início</NavLink></li>
                            <li><NavLink to="/historia" end >História</NavLink></li>
                            <li><NavLink to='/galeria' end >Galeria</NavLink></li>
                            <li><NavLink to='/contato' end >Contato</NavLink></li>
                        </ul>
                    </div>

                    <div className='contact'>
                        <h4 className='caption'>Contato</h4>
                        <div className='address'>
                            <address>
                                <p>Avenida Presidente Vargas, Domingos Martins-ES</p>
                                <p>Caixa Postal - XXX</p>
                            </address>
                            <p className='text'>Email: bergfreunde@gmail.com</p>
                            <p className='text'>Telefone: (27) XXXXX-XXXXX </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer