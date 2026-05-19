import './Integrantes.css'
import integrantesData from '../../../../data/integrantes.json'
import MsgWhatts from '../../../ui/MsgWhatts'

const integrantes = integrantesData

function Integrantes() {
    return (
        <section className='historia_integrantes'>
            <h2 className='historia_section_titulo'>Nossos Integrantes</h2>
        <MsgWhatts 
            textNotice="Fez parte do grupo e seu nome não está na lista?"
            textButton="Enviar seu nome para nós."
            />
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
                            const inMemoriam = integrante.homenagem === 'in memoriam'
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
                                            {inMemoriam
                                                ? <span className='integrante_memoriam_badge'>
                                                    <i className='ti ti-star-filled'></i>
                                                  </span>
                                                : ativo && <span className='integrante_ativo_badge'>Ativo</span>
                                            }
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