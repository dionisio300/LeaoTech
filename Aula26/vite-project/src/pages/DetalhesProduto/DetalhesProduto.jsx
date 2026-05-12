import React from 'react'
import produtosObj from '../../dados/produtos'
import { useParams } from 'react-router-dom'

function DetalhesProduto() {
    let param = useParams()
    let id = param.id
    console.log(id)

  return (
    <>
        <main className='container mt-5'>
            <div className='row justify-content-center' style={{'min-height':'500px'}}>
                <div className='col-5 border' >
                    <div >
                        <img className='object-fit-contain' src={produtosObj[id].image} style={{width:'380px'}} />
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-3 border'>
                    <div className='mt-5'>
                        <h2>{produtosObj[id].title}</h2>
                    </div>
                    <div>
                        <p>
                            {produtosObj[id].description}
                        </p>
                    </div>
                    <div>
                        <p className='fw-bold'>Preço: {produtosObj[id].price}</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Comprar</button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DetalhesProduto