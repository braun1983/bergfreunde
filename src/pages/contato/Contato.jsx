import { useState } from 'react'
import './Contato.css'

const redes = [
  {
    nome: 'Instagram',
    usuario: '@gfcampinho',
    link: 'https://instagram.com/gfcampinho',
    icone: 'ti-brand-instagram',
  },
  {
    nome: 'TikTok',
    usuario: '@gfcampinho',
    link: 'https://tiktok.com/@gfcampinho',
    icone: 'ti-brand-tiktok',
  },
  {
    nome: 'Facebook',
    usuario: 'gfcampinho',
    link: 'https://facebook.com/gfcampinho',
    icone: 'ti-brand-facebook',
  },
  {
    nome: 'YouTube',
    usuario: '@grupofolcloricobergfreunde2954',
    link: 'https://www.youtube.com/@grupofolcloricobergfreunde2954',
    icone: 'ti-brand-youtube',
  },
]

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    mensagem: '',
  })

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleWhatsapp(e) {
    e.preventDefault()

    const texto = encodeURIComponent(
      `Olá! Me chamo ${form.nome} e gostaria de entrar em contato com o Bergfreunde.\n\n${form.mensagem}`
    )

    window.open(
      `https://wa.me/5527997899301?text=${texto}`,
      '_blank'
    )
  }

  return (
    <main className='contato_page'>

      <section className='contato_hero'>
        <h1 className='contato_titulo'>Contato</h1>

        <p className='contato_subtitulo'>
          Entre em contato com o Bergfreunde
        </p>
      </section>

      <div className='contato_wrapper'>

        <div className='contato_lado_esquerdo'>

          <div className='contato_info_bloco'>
            <h2 className='contato_bloco_titulo'>
              Redes Sociais
            </h2>

            <div className='redes_lista'>
              {redes.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rede_item'
                >
                  <i
                    className={`ti ${rede.icone} rede_item__icone`}
                  ></i>

                  <div>
                    <p className='rede_item__nome'>
                      {rede.nome}
                    </p>

                    <p className='rede_item__usuario'>
                      {rede.usuario}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className='contato_info_bloco'>
            <h2 className='contato_bloco_titulo'>
              Email
            </h2>

            <a
              href='mailto:gfbergfreunde@gmail.com'
              className='contato_email'
            >
              <i className='ti ti-mail'></i>

              gfbergfreunde@gmail.com
            </a>
          </div>

          <div className='contato_info_bloco'>
            <h2 className='contato_bloco_titulo'>
              WhatsApp
            </h2>

            <a
              href='https://wa.me/5527988229533'
              target='_blank'
              rel='noopener noreferrer'
              className='contato_whatsapp'
            >
              <i className='ti ti-brand-whatsapp'></i>

              (27) 99789-9301 (Jakson Tesch - Coordenação)
            </a>
          </div>

        </div>

        <div className='contato_lado_direito'>
          <h2 className='contato_bloco_titulo'>
            Envie uma Mensagem
          </h2>

          <form
            className='contato_form'
            onSubmit={handleWhatsapp}
          >
            <div className='form_grupo'>
              <label className='form_label'>
                Nome
              </label>

              <input
                className='form_input'
                type='text'
                name='nome'
                value={form.nome}
                onChange={handleChange}
                placeholder='Seu nome'
                required
              />
            </div>

            <div className='form_grupo'>
              <label className='form_label'>
                Mensagem
              </label>

              <textarea
                className='form_textarea'
                name='mensagem'
                value={form.mensagem}
                onChange={handleChange}
                placeholder='Escreva sua mensagem...'
                rows={6}
                required
              />
            </div>

            <button
              type='submit'
              className='form_btn form_btn--whatsapp'
            >
              <i className='ti ti-brand-whatsapp'></i>

              Enviar via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}