import './Patrocinadores.css'
import hemo from '../../../assets/img/patrocinadores/hemo.png'
import rotary from '../../../assets/img/patrocinadores/rotary.png'
import blackTucano from '../../../assets/img/patrocinadores/blacktucanocoffe.png'
import tata from '../../../assets/img/patrocinadores/tata.png'
import tiaTerezinhaSitio from '../../../assets/img/patrocinadores/tiaterezinhasitio.jpeg'
import tiaTerezinhaPapelaria from '../../../assets/img/patrocinadores/tiaterezinhapapelaria.jpeg'

const patrocinadores = [
    { nome: 'Hemo Laboratorio', logo: hemo },
    { nome: 'Rotary International', logo: rotary },
    { nome: 'Black Tucano Coffee Roasters', logo: blackTucano },
    { nome: 'Sítio Tia Teresinha', logo: tiaTerezinhaSitio },
    { nome: 'Laticínios Tatá', logo: tata },
    { nome: 'Papelaria Tia Teresinha', logo: tiaTerezinhaPapelaria },
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