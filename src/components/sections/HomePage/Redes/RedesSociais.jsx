import './RedesSociais.css'

function RedesSociais() {

  function abrirWhatsapp() {
    window.open('https://wa.me/5527997899301', '_blank');
  }

  return (
    <section className='container_redes'>
      <div className='redes_social'>
        <p className='redes_label'>SIGA-NOS</p>
        <div className='redes_icons'>
          <a href='https://instagram.com/gfcampinho' target='_blank' rel='noopener noreferrer' title='Instagram'>
            <i className='ti ti-brand-instagram'></i>
          </a>
          <a href='https://tiktok.com/@gfcampinho' target='_blank' rel='noopener noreferrer' title='TikTok'>
            <i className='ti ti-brand-tiktok'></i>
          </a>
          <a href='https://facebook.com/gfcampinho' target='_blank' rel='noopener noreferrer' title='Facebook'>
            <i className='ti ti-brand-facebook'></i>
          </a>
           <a
        href='https://www.youtube.com/@grupofolcloricobergfreunde2954'
        target='_blank'
        rel='noopener noreferrer'
        title='YouTube'
      >
        <i className='ti ti-brand-youtube'></i>
      </a>
        </div>
      </div>

      <div className='redes_divider'></div>

      <div className='redes_whatsapp'>
        <p className='redes_label'>FALE CONOSCO</p>
        <button onClick={abrirWhatsapp} className='whatsapp_btn'>
          <i className='ti ti-brand-whatsapp'></i>
          Chamar no WhatsApp
        </button>
      </div>
     
    </section>
  )
}

export default RedesSociais