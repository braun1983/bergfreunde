import { useState } from 'react'
import './Historia.css'
import { timeline } from '../../data/timeline'

import marcosData from '../../data/marcos.json'
import idealizadoresData from '../../data/idealizadores.json'
import integrantesData from '../../data/integrantes.json'

const marcos = marcosData
const fundadores = idealizadoresData
const integrantes = integrantesData

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
                    <div className='fotos_timeline'>
                        {timeline.map((grupo) => (
                            <div key={grupo.chave} className='fotos_timeline__item'>
                                <CarrosselTimeline
                                    fotos={grupo.fotos}
                                    titulo={grupo.titulo}
                                    ano={grupo.ano}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className='historia_fundadores'>
                <h2 className='historia_section_titulo'>Idealizadores</h2>
                <div className='fundadores_grid'>
                    {fundadores.map((f, index) => (
                        <div key={index} className='fundador_card'>
                            <img
                                src={`https://placehold.co/200x200/c8a96e/fff?text=${f.nome.split(' ')[0]}`}
                                alt={f.nome}
                                className='fundador_foto'
                            />
                            <h4 className='fundador_nome'>{f.nome}</h4>
                            <p className='fundador_papel'>{f.papel}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='historia_integrantes'>
                <h2 className='historia_section_titulo'>Nossos Integrantes</h2>
                <div className='integrantes_cta'>
                    <p className='integrantes_cta_texto'>
                        Fez parte do Bergfreunde e não está na lista?
                    </p>
                    <a
                        href='https://wa.me/5527981226714?text=Ol%C3%A1!%20Gostaria%20de%20ser%20adicionado%20%C3%A0%20lista%20de%20integrantes%20do%20Bergfreunde.'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='integrantes_cta_btn'    >
                        <i className='ti ti-brand-whatsapp'></i>
                        Envie seu nome para nós
                    </a>
                </div>
                <div className='integrantes_tabela_wrapper'>
                    <table className='integrantes_tabela'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Passagens</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {integrantes.map((integrante, index) => {
                                const anoAtual = new Date().getFullYear()
                                const ativo = integrante.passagens.some((p) => p.saida === null)
                                const totalAnos = integrante.passagens.reduce((acc, p) => {
                                    return acc + ((p.saida ?? anoAtual) - p.entrada)
                                }, 0)

                                return (
                                    <tr key={index} className={ativo ? 'integrante--ativo' : ''}>
                                        <td>{integrante.nome}</td>
                                        <td>
                                            <div className='integrante_passagens'>
                                                {integrante.passagens.map((p, i) => (
                                                    <span key={i} className={`integrante_passagem ${p.saida === null ? 'integrante_passagem--ativa' : ''}`}>
                                                        {p.entrada} – {p.saida ?? 'atual'}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='integrante_total'>
                                                <span>{totalAnos} {totalAnos === 1 ? 'ano' : 'anos'}</span>
                                                {ativo && <span className='integrante_ativo_badge'>Ativo</span>}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default Historia