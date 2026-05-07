import Hero from '../../components/sections/Hero/Hero.jsx'
import Sobre from '../../components/sections/Sobre/Sobre.jsx'
import Apresentacoes from '../../components/sections/Apresentacoes/Apresentacoes.jsx'
import Patrocinadores from '../../components/sections/Patrocinadores/Patrocinadores.jsx'
import RedesSociais from '../../components/sections/Redes/RedesSociais.jsx'
function HomePage(){
    return(
        <>
        <Hero/>
        
        <Sobre/>
         <RedesSociais/>
        <Apresentacoes/>
       
        <Patrocinadores/>
        </>
    )
}

export default HomePage