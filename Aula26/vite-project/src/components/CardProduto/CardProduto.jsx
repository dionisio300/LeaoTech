import React from 'react'

const CardProduto = ({produto}) => {
    return (
        <>
            <div className="card mt-3 mb-3" style={{ 'width': '18rem' }} >
                <img style={{ 'height': '200px', 'width': '100%' }} src={produto.image} className="card-img-top object-fit-contain" alt="..." />
                <div className="card-body">
                    <h5 className="card-title title-text">{produto.title}</h5>
                    <p className="card-text">{produto.description}</p>
                    <p>Preço: {produto.price}</p>
                    <a href="#" className="btn btn-primary">Quero Este</a>
                </div>
            </div>

        </>
    )
}

export default CardProduto