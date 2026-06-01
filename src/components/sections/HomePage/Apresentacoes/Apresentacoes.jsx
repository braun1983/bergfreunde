import styles from './Apresentacoes.module.css';
import agenda from '../../../../data/agenda.json';
import { useState } from 'react';
import CardApresentacao from './CardApresentacao.jsx';

function Apresentacoes() {
    const [proximaAgenda] = useState(() => {
        const exibirTotal = 3;
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const comData = agenda.map((item) => {
            const [dia, mes, ano] = item.data.split("/");
            const dataObj = new Date(`${ano}-${mes}-${dia}`);
            return { ...item, dataObj, passado: dataObj < hoje };
        });

        const ordenados = comData.sort((a, b) => a.dataObj - b.dataObj);
        const futuros = ordenados.filter((item) => !item.passado);
        const passados = ordenados.filter((item) => item.passado);

        if (futuros.length >= exibirTotal) return futuros.slice(0, exibirTotal);

        const faltantes = exibirTotal - futuros.length;
        return [...passados.slice(-faltantes), ...futuros];
    });

    if (proximaAgenda.length === 0) {
        return <p>Nenhuma apresentação encontrada</p>;
    }

    return (
        <section className={styles.container_apresentacao} id="apresentacoes">
            <h3 className={styles.apresentacao_title}>Próximas Apresentações</h3>
            <p className={styles.apresentacao_chamada}>Junte-se a nós!</p>
            <div className={styles.container_exibicaoCard}>
                {proximaAgenda.map((item, index) => (
                    <CardApresentacao
                        key={index}
                        evento={item.evento}
                        data={item.data}
                        info={item.info}
                        horario={item.horario}
                        local={item.local}
                        passado={item.passado}
                    />
                ))}
            </div>
        </section>
    );
}

export default Apresentacoes;