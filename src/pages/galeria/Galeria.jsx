import { useState } from 'react'
import { albums } from '../../data/galeria'
import './Galeria.css'

function Carrossel({ fotos }) {
  const [atual, setAtual] = useState(0)

  if (!fotos.length) return null

  const anterior = () => setAtual((i) => (i === 0 ? fotos.length - 1 : i - 1))
  const proximo = () => setAtual((i) => (i === fotos.length - 1 ? 0 : i + 1))

  return (
    <div className='carrossel'>
      <div className='carrossel__janela'>
        <img src={fotos[atual]} alt={`Foto ${atual + 1}`} className='carrossel__foto' />

        {fotos.length > 1 && (
          <>
            <button className='carrossel__btn carrossel__btn--anterior' onClick={anterior} aria-label='Foto anterior'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M15 18l-6-6 6-6' />
              </svg>
            </button>
            <button className='carrossel__btn carrossel__btn--proximo' onClick={proximo} aria-label='Próxima foto'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M9 18l6-6-6-6' />
              </svg>
            </button>
          </>
        )}

        <div className='carrossel__contador'>{atual + 1} / {fotos.length}</div>
      </div>

      {fotos.length > 1 && (
        <div className='carrossel__dots'>
          {fotos.map((_, i) => (
            <button
              key={i}
              className={`carrossel__dot ${i === atual ? 'carrossel__dot--ativo' : ''}`}
              onClick={() => setAtual(i)}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Album({ titulo, fotos, capa }) {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <div className='album'>
        <div className='album__capa' onClick={() => setAberto(true)}>
          <img src={capa} alt={titulo} className='album__capa_img' />

          <div className='album__capa_overlay'>
            <h3 className='album__titulo'>{titulo}</h3>

            <p className='album__info'>
              {fotos.length} {fotos.length === 1 ? 'foto' : 'fotos'}
            </p>

            <span className='album__btn'>Ver álbum</span>
          </div>
        </div>
      </div>

      {aberto && (
        <div className='modal' onClick={() => setAberto(false)}>
          <div
            className='modal__conteudo'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='modal__fechar'
              onClick={() => setAberto(false)}
            >
              ✕
            </button>

            <Carrossel fotos={fotos} />
          </div>
        </div>
      )}
    </>
  )
}

export default function Galeria() {
  return (
    <main className='galeria_page'>
      <section className='galeria_hero'>
        
        <h1 className='galeria_titulo'>Galeria</h1>
        <p className='galeria_subtitulo'>Momentos e memórias do Bergfreunde</p>
      </section>

      {albums.length === 0 ? (
        <div className='galeria_vazia'>
          <p>Nenhuma foto encontrada.</p>
          <p>Adicione imagens em <code>src/assets/fotos/</code></p>
        </div>
      ) : (
        <section className='galeria_albums'>
          {albums.map((album) => (
            <Album
              key={album.slug}
              titulo={album.titulo}
              fotos={album.fotos}
              capa={album.fotos[0]}
            />
          ))}
        </section>
      )}
    </main>
  )
}