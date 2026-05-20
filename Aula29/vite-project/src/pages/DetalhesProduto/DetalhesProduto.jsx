import React from 'react'
import produtosObj from '../../dados/produtos'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function DetalhesProduto() {
    let param = useParams()
    let id = param.id

    let [contadorCarrinho, setcontadorCarrinho] = useState(10)

    // let contadorCarrinho = 10

    function decremento(){
        if (!(contadorCarrinho <= 0)){
            
        }
    }

    function incremento(){
        setcontadorCarrinho(contadorCarrinho + 1)
        console.log(contadorCarrinho)
    }

  return (
    <>
        <main className='container mt-5'>
            <div className='row justify-content-center' style={{'minHeight':'500px'}}>
                <div className=' col-12 col-md-5 border' >
                    <div >
                        <img className='object-fit-contain' src={produtosObj[id-1].image} style={{width:'380px'}} />
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-12 col-md-3 border'>
                    <div className='mt-5'>
                        <h2>{produtosObj[id-1].title}</h2>
                    </div>
                    <div>
                        <p>
                            {produtosObj[id-1].description}
                        </p>
                    </div>
                    <div>
                        <p className='fw-bold'>Preço: {produtosObj[id-1].price}</p>
                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-primary'>Comprar</button>

                        <div className='ms-5'>
                            <button onClick={decremento}>-</button>
                            <input style={{width:'30px'}} type="text" value={contadorCarrinho} disabled/>
                            <button onClick={incremento}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DetalhesProduto