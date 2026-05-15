import {useState} from 'react'
import QuemSomos from '../../components/ConteudoSobre/QuemSomos'
import Historia from '../../components/ConteudoSobre/Historia'
import Missao from '../../components/ConteudoSobre/Missao'

const Sobre = () => {
  let [abaAtual,setAbaAtual] = useState('quemSomos')

  return (
    <>
    <div className='container' style={{minHeight:"100vh"}} >
      <div className='d-flex'>
        <div>
          <button onClick={() => setAbaAtual('quemSomos')} className='me-1 btn btn-info'>Quem somos</button>
        </div>
        <div>
          <button onClick={() => setAbaAtual('nossaHistoria')} className='me-1 btn btn-info'>Nossa História</button>
        </div>
        <div>
          <button onClick={() => setAbaAtual('nossaMissao')} className='me-1 btn btn-info'>Nossa Missão</button>
        </div>
      </div>
        
        {abaAtual == 'quemSomos' && <QuemSomos/>}
        {abaAtual == 'nossaHistoria' && <Historia/>}
        {abaAtual == 'nossaMissao' && <Missao/>}
      
    </div>
    </>
  )
}

export default Sobre