import './Apresentacoes.css'

import agenda from '../../../data/agenda.json';
import { useState } from 'react';
import CardApresentacao from './CardApresentacao.jsx';


function Apresentacoes() {
    const [proximaAgenda] = useState(() => {
        const exibirTotal = 3;
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const comData = agenda.map((item) => {
            const [dia, mes, ano] = item.data.split("/");
            return { ...item, dataObj: new Date(`${ano}-${mes}-${dia}`) };
        });

        const ordenados = comData.sort((a, b) => a.dataObj - b.dataObj);
        const futuros = ordenados.filter((item) => item.dataObj >= hoje);
        const passados = ordenados.filter((item) => item.dataObj < hoje);

        if (futuros.length >= exibirTotal) return futuros.slice(0, exibirTotal);

        const faltantes = exibirTotal - futuros.length;
        return [...passados.slice(-faltantes), ...futuros];
    });

    if (proximaAgenda.length === 0) {
        return <p>Nenhuma apresentação encontrada</p>;
    }

    return (
        <section className='container_apresentacao' id="apresentacoes">
            <h3 className='apresentacao_title'>Próximas Apresentações</h3>
            <p className='apresentacao_chamada'>Junte-se a nós!</p>
            <div className='container_exibicaoCard'>
                {proximaAgenda.map((agenda, index) => (
                    <CardApresentacao
                        key={index}
                        evento={agenda.evento}
                        data={agenda.data}
                        info={agenda.info}
                        horario={agenda.horario}
                        local={agenda.local}
                    />
                ))}
            </div>
        </section>
    );
}

export default Apresentacoes