import brasao from '../../../assets/img/brasao.svg'
import './Hero.css'

 function Hero() {
  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="hero" id="topo">
      <div className="hero__stripes">
        <span /><span /><span />
      </div>

      <img src={brasao} alt="Brasão do Bergfreunde" className="hero__brasao" />

      <p className="hero__eyebrow">Grupo de Danças Folclóricas Germânicas</p>

      <h1 className="hero__title">Bergfreunde</h1>

      <p className="hero__subtitle">Amigos da Montanha · Domingos Martins, ES</p>
      <p className="hero__subtitle"> Fundando em 25 de fevereiro de 1984. </p>
      <div className="hero__divider">
        <span className="hero__divider-icon">❧</span>
      </div>

      <p className="hero__location">
        Preservando a cultura e as tradições dos imigrantes germânicos<br />
        no coração do Espírito Santo.
      </p>


      <div className="hero__cta">
        <button onClick={()=> scrollTo('sobre')} className="btn btn--primary">Conheça o Grupo</button>
        <button onClick={()=> scrollTo('apresentacoes')}className="btn btn--outline">Próximas Apresentações</button>
      </div>

      <div className="hero__scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero