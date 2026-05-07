import { useState } from 'react'
import './Historia.css'
import { timeline } from '../../data/timeline'

const marcos = [
    {
        ano: '1984',
        titulo: 'A Fundação',
        texto: 'Em 25 de fevereiro de 1984, um grupo de moradores da comunidade de Campinho, movidos pelo desejo de preservar as tradições dos imigrantes germânicos, fundaram o Bergfreunde — que em alemão significa "Amigos da Montanha". Os fundadores Karl Heinrich Braun, Ingrid Müller e Ernst Hoffmann reuniram famílias da região para dar vida ao grupo.',
        imagem: 'https://placehold.co/600x400/c8a96e/fff?text=Funda%C3%A7%C3%A3o+1984',
    },
    {
        ano: '1989',
        titulo: 'Primeiras Apresentações',
        texto: 'Cinco anos após sua fundação, o Bergfreunde realizou suas primeiras apresentações públicas no Sommerfest de Domingos Martins, encantando o público com danças típicas como a Schuhplattler e a Walzer. O grupo contava então com 18 dançarinos e uma pequena banda de músicos locais.',
        imagem: 'https://placehold.co/600x400/2c3e50/fff?text=Primeiras+Apresenta%C3%A7%C3%B5es',
    },
    {
        ano: '1997',
        titulo: 'Crescimento e Reconhecimento',
        texto: 'Na década de 1990 o grupo expandiu seu repertório e passou a representar o município de Domingos Martins em festivais estaduais. Em 1997 recebeu o título de Patrimônio Cultural Imaterial do município, consolidando sua importância para a preservação da herança germânica no Espírito Santo.',
        imagem: 'https://placehold.co/600x400/8b4513/fff?text=Reconhecimento+1997',
    },
    {
        ano: '2009',
        titulo: 'Sede Própria',
        texto: 'Com o apoio da comunidade e de parceiros como o Rotary International, o Bergfreunde inaugurou sua sede própria em Campinho. O espaço passou a abrigar ensaios semanais, o acervo de trajes típicos e um salão para eventos culturais abertos à comunidade.',
        imagem: 'https://placehold.co/600x400/3d5a3e/fff?text=Sede+Pr%C3%B3pria+2009',
    },
    {
        ano: '2024',
        titulo: 'Quatro Décadas de Tradição',
        texto: 'Com 40 anos de história, o Bergfreunde segue firme em sua missão. Hoje o grupo conta com mais de 40 integrantes entre dançarinos, músicos e voluntários, mantendo viva a chama das tradições germânicas para as novas gerações de Campinho e de toda a região serrana do Espírito Santo.',
        imagem: 'https://placehold.co/600x400/c8a96e/fff?text=40+Anos+2024',
    },
]

const fundadores = [
    { nome: 'Joel Guilherme Velten', papel: 'Idealizador' },
    { nome: 'Hilda Braun', papel: 'Apoiador' },
    { nome: 'Moacir Vargas', papel: 'Apoiador' },
    { nome: 'outros Nomes', papel: 'Apoiador' },
]

const integrantes = [
  { nome: 'Karl Heinrich Braun', entrada: 1984, saida: null },
  { nome: 'Ingrid Müller', entrada: 1984, saida: 1998 },
  { nome: 'Ernst Hoffmann', entrada: 1984, saida: 2005 },
  { nome: 'Helga Schmidt', entrada: 1985, saida: null },
  { nome: 'Friedrich Weber', entrada: 1990, saida: 2010 },
  { nome: 'Anneliese Koch', entrada: 1992, saida: null },
]
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
                        Nascido na comunidade de Campinho, distrito de Domingos Martins, o
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
                <div className='integrantes_tabela_wrapper'>
                    <table className='integrantes_tabela'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Entrada</th>
                                <th>Saída</th>
                                <th>Tempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {integrantes.map((i, index) => {
                                const anoFim = i.saida ?? new Date().getFullYear()
                                const tempo = anoFim - i.entrada
                                return (
                                    <tr key={index} className={i.saida ? '' : 'integrante--ativo'}>
                                        <td>{i.nome}</td>
                                        <td>{i.entrada}</td>
                                        <td>{i.saida ?? <span className='integrante_ativo_badge'>Ativo</span>}</td>
                                        <td>{tempo} {tempo === 1 ? 'ano' : 'anos'}</td>
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