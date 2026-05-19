import Hero from '../../components/sections/HomePage/Hero/Hero.jsx'
import Sobre from '../../components/sections/HomePage/Sobre/Sobre.jsx'
import Apresentacoes from '../../components/sections/HomePage/Apresentacoes/Apresentacoes.jsx'
import Patrocinadores from '../../components/sections/HomePage/Patrocinadores/Patrocinadores.jsx'
import RedesSociais from '../../components/sections/HomePage/Redes/RedesSociais.jsx'
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