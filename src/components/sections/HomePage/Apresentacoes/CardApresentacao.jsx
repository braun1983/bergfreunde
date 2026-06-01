import styles from './CardApresentacao.module.css';

function CardApresentacao({ evento, data, horario, info, local, passado }) {
    return (
        <div className={`${styles.container_cardApresentacao} ${passado ? styles.passado : ''}`}>
            <div className={styles.card_data_wrapper}>
                <p className={styles.card_data}>{data}</p>
                <i className={`ti ti-calendar ${styles.card_icon_data}`}></i>
            </div>
            <h4 className={styles.card_evento}>{evento}</h4>
            <div className={styles.card_horario_wrapper}>
                <i className={`ti ti-clock ${styles.card_icon_horario}`}></i>
                <p className={styles.card_horario}>{horario} horas</p>
            </div>
            <p className={styles.card_info}>{info}</p>
            <div className={styles.card_local_wrapper}>
                <i className={`ti ti-map-pin ${styles.card_icon_local}`}></i>
                <p className={styles.card_local}>{local}</p>
            </div>
        </div>
    );
}

export default CardApresentacao;