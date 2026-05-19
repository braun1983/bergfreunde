import { useState } from 'react'
import './Historia.css'
import { timeline } from '../../data/timeline'

import MsgWhatts from '../../components/ui/MsgWhatts.jsx'
import marcosData from '../../data/marcos.json'

import Fundadores from '../../components/sections/Historia/Fundadores/Fundadores.jsx'
import Integrantes from '../../components/sections/Historia/integrantes/Integrantes.jsx'

const marcos = marcosData



function CarrosselTimeline({ fotos, titulo, ano }) {
    const [atual, setAtual] = useState(0)

    if (!fotos.length) return null

    const anterior = () => setAtual((i) => (i === 0 ? fotos.length - 1 : i - 1))
    const proximo = () => setAtual((i) => (i === fotos.length - 1 ? 0 : i + 1))

    return (
        <div className='tl_carrossel'>
            <div className='tl_carrossel__janela'>
                <img
                    src={fotos[atual]}
                    alt={`${titulo} ${ano} - foto ${atual + 1}`}
                    className='tl_carrossel__foto'
                />

                {fotos.length > 1 && (
                    <>
                        <button className='tl_carrossel__btn tl_carrossel__btn--anterior' onClick={anterior} aria-label='Foto anterior'>
                            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M15 18l-6-6 6-6' />
                            </svg>
                        </button>
                        <button className='tl_carrossel__btn tl_carrossel__btn--proximo' onClick={proximo} aria-label='Próxima foto'>
                            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M9 18l6-6-6-6' />
                            </svg>
                        </button>
                    </>
                )}

                <div className='tl_carrossel__legenda'>
                    <span className='tl_carrossel__legenda_texto'>{titulo} · {ano}</span>
                    {fotos.length > 1 && (
                        <span className='tl_carrossel__contador'>{atual + 1}/{fotos.length}</span>
                    )}
                </div>
            </div>

            {fotos.length > 1 && (
                <div className='tl_carrossel__dots'>
                    {fotos.map((_, i) => (
                        <button
                            key={i}
                            className={`tl_carrossel__dot ${i === atual ? 'tl_carrossel__dot--ativo' : ''}`}
                            onClick={() => setAtual(i)}
                            aria-label={`Ir para foto ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

function Historia() {
    return (
        <main className='historia_page'>

            <section className='historia_hero'>
                <div className='historia_hero_content'>
                    <p className='historia_eyebrow'>Desde 1984</p>
                    <h1 className='historia_titulo'>Nossa História</h1>
                    <p className='historia_subtitulo'>
                        Quatro décadas preservando a cultura e as tradições dos imigrantes germânicos
                        no coração da Serra do Espírito Santo.
                    </p>
                </div>
            </section>

            <section className='historia_intro'>
                <div className='historia_intro_inner'>
                    <p>
                        Nascido na comunidade de Campinho, e Domingos Martins, o
                        <strong> Bergfreunde — Grupo de Danças Folclóricas Germânicas</strong> é hoje
                        um dos maiores guardiões da herança cultural dos imigrantes alemães que
                        colonizaram a região serrana do Espírito Santo no século XIX. Ao longo de
                        quatro décadas, o grupo formou centenas de dançarinos e levou a cultura
                        germânica a palcos de todo o Brasil.
                    </p>
                    <MsgWhatts
                        textNotice="Estamos em um processo de registro da nossa história.
                                    Se desejar contribuir com fotos, informações ou datas, entre em contato."
                        textButton="Envie uma mensagem para nós"
                    />
                    
                </div>
            </section>

            <section className='historia_timeline'>
                <h2 className='historia_section_titulo'>Trajetória</h2>
                <div className='timeline'>
                    {marcos.map((marco, index) => (
                        <div key={index} className={`timeline_item ${index % 2 === 0 ? 'timeline_item--esquerda' : 'timeline_item--direita'}`}>
                            <div className='timeline_ano'>{marco.ano}</div>
                            <div className='timeline_conteudo'>
                                <img src={marco.imagem} alt={marco.titulo} className='timeline_img' />
                                <h3 className='timeline_titulo'>{marco.titulo}</h3>
                                <p className='timeline_texto'>{marco.texto}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {timeline.length > 0 && (
                <section className='historia_fotos'>
                    <h2 className='historia_section_titulo'>Memórias em Fotos</h2>
                    <div className='fotos_timeline_wrapper'>
                        <div className='fotos_timeline'>
                            {timeline.map((grupo) => (
                                <div key={grupo.chave} className='fotos_timeline__item'>
                                    <div className='fotos_timeline__foto_wrapper'>
                                        <CarrosselTimeline
                                            fotos={grupo.fotos}
                                            titulo=""
                                            ano=""
                                        />
                                    </div>
                                    <div className='fotos_timeline__ponto'></div>
                                    <div className='fotos_timeline__ano_wrapper'>
                                        <p className='fotos_timeline__ano'>{grupo.ano}</p>
                                        <p className='fotos_timeline__titulo'>{grupo.titulo}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Fundadores />
            <Integrantes />
        </main>
    )
}

export default Historia