import React from 'react'
import { Link } from 'react-router-dom'

const CardLivro = ({livro}) => {
    console.log(livro)
    return (
        <>
            <div className="card mt-3 mb-3" style={{ 'width': '18rem' }} >
                <img style={{ 'height': '200px', 'width': '100%' }} src={livro.imagem} className="card-img-top object-fit-contain" alt="..." />
                <div className="card-body">
                    <h5 className="card-title title-text">{livro.titulo}</h5>
                    <p className="card-text">{livro.genero}</p>
                    <p>Quantidade: {livro.quantidade}</p>
                    <Link to={`/livro/${livro.id}`} className="btn btn-primary">Quero Este</Link>
                </div>
            </div>

        </>
    )
}

export default CardLivro