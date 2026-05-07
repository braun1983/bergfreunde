import './Apresentacoes.css'

function CardApresentacao({evento, data, horario, local}){
    return(
        <div className="container_cardApresentacao">
            <p className='card_data'> {data}</p>
            <h4 className='card_evento'>{evento}</h4>
            <p className='card_horario'> {horario}</p>
            <p className='card_local'>{local}</p>
        </div>
    )
}

export default CardApresentacao

