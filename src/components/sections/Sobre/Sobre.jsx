import casal from '../../../assets/img/img_hero_temp.jpg'
import './Sobre.css'
function Sobre() {

    
    return (
        <section className='container_about' id="sobre">
            <div className='container_text'>
                <h3 className='title'>Sobre</h3>

                <p className='about_text'>Fundado nas montanhas de Domingos Martins,
                    o Bergfreunde é mais que um grupo de dança;
                    é o guardião de um legado que atravessou oceanos.
                    Através da música tradicional, trajes meticulosamente
                    recriados e a alegria contagiante da cultura alemã,
                    mantemos viva a chama dos nossos antepassados.</p>
                <p className='about_text'>Cada coreografia conta uma história de colheita,
                    amor e comunidade, trazendo o espírito dos vilarejos europeus
                    para os palcos brasileiros com autenticidade e maestria.</p>

                <div>
                    <p className='destaque'> <span> 40+</span> Anos de história</p>

                </div>
            </div>
            <div>
                <img className='img_casal' src={casal} alt="Casal dançando!" />

            </div>
        </section>
    )
}

export default Sobre