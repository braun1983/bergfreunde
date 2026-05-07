import './Apresentacoes.css'

function CardApresentacao({ evento, data, horario, info, local }) {
    return (
        <div className="container_cardApresentacao">
            <div className="card_data_wrapper">
                <p className='card_data'>{data}</p>
                <i className="ti ti-calendar card_icon_data"></i>
            </div>
            <h4 className='card_evento'>{evento}</h4>
            <div className="card_horario_wrapper">
                <i className="ti ti-clock card_icon_horario"></i>
                <p className='card_horario'>{horario} horas</p>
            </div>
            <p className='card_info'>{info}</p>
            <div className="card_local_wrapper">
                <i className="ti ti-map-pin card_icon_local"></i>
                <p className='card_local'>{local}</p>
            </div>
        </div>
    )
}

export default CardApresentacao