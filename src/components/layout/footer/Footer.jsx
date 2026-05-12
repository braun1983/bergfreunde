import './Footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <footer>

            <div className='container_name'>
                <p className='name'>
                    ©2026 Grupo Folclórico Bergfreunde de Campinho - Volkstanzgruppe -
                    
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
                                <p> Associação Cultural e Recreativa Campinho - ACRC</p>
                                <p>Avenida Presidente Vargas, Domingos Martins-ES</p>
                                <p>Caixa Postal nº 9</p>
                            </address>
                            <p className='text'>Email: gfbergfreunde@gmail.com</p>
                            <p className='text'>Telefone: (27) 99789-9301 -Jakson Tesch(Coordenação) </p>
                        Avenida Presidente Vargas S/N Caixa Postal 9
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_dev'>
                <p className='dev_name'>Desenvolvido por <span>Raphael Brun</span></p>

<a                href='https://github.com/braun1983'
                target='_blank'
                rel='noopener noreferrer'
                className='dev_github'
                title='GitHub - braun1983'
  >
                <i className='ti ti-brand-github'></i>
            </a>
        </div>
        </footer >
    )
}

export default Footer