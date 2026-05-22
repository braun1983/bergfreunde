import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css' 
import { NavLink } from 'react-router-dom'

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aceito = localStorage.getItem('cookies_aceitos')
    if (!aceito) setVisivel(true)
  }, [])

  function aceitar() {
    localStorage.setItem('cookies_aceitos', 'true')
    setVisivel(false)
  }

  function recusar() {
    localStorage.setItem('cookies_aceitos', 'false')
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div className={styles.cookie_banner}>
      <div className={styles.cookie_banner__conteudo}>
        <p className={styles.cookie_banner__texto}>
          Este site utiliza cookies para análise de navegação e melhoria da experiência.
          Ao continuar navegando, você concorda com nossa{' '}
          <NavLink to='/privacidade' className={styles.cookie_banner__link}>
            Política de Privacidade
          </NavLink>.
        </p>
        <div className={styles.cookie_banner__acoes}>
       
          <button 
            onClick={recusar} 
            className={`${styles.cookie_banner__btn} ${styles['cookie_banner__btn--recusar']}`}
          >
            Recusar
          </button>
          <button 
            onClick={aceitar} 
            className={`${styles.cookie_banner__btn} ${styles['cookie_banner__btn--aceitar']}`}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}