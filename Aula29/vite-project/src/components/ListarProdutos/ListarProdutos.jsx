import { useState,useEffect } from 'react'

import './ListarProdutos.css'
import CardProduto from '../CardProduto/CardProduto'


const ListarProdutos = () => {

    let [produtos, setProdutos] = useState([])
 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then((dados)=>{
            console.log('Dados vindo do fetch',dados)
            setProdutos(dados)
        })
    },[])
    
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {produtos.map((produto) => (
                        <div key={produto.id} className='col-4'>
                            <CardProduto produto={produto}/>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ListarProdutos