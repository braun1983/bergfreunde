 import './Integrantes.css'

import integrantesData from '../../../../data/integrantes.json'
const integrantes = integrantesData

 function Integrantes(){
    return (
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
   
)
 }
 export default Integrantes