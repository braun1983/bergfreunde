import './Patrocinadores.css'
import hemo from '../../../assets/img/patrocinadores/hemo.jpeg'
import rotary from '../../../assets/img/patrocinadores/rotary.png'
import blackTucano from '../../../assets/img/patrocinadores/black.jpg'

const patrocinadores = [
    { nome: 'Hemo Laboratorio', logo: hemo },
    { nome: 'Rotary International', logo: rotary },
    { nome: 'Black Tucano Coffee Roasters', logo: blackTucano },
];

function Patrocinadores() {
    return (
        <section className='container_patrocinadores'>
            <p className='patrocinadores_label'>APOIO E PATROCINIO</p>
            <div className='patrocinadores_grid'>
                {patrocinadores.map(function(p, index) {
                    return <img key={index} src={p.logo} alt={p.nome} className='patrocinador_item' />;
                })}
            </div>
        </section>
    );
}

export default Patrocinadores