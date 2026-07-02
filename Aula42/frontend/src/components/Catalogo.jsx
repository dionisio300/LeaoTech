import React, { useEffect, useState } from 'react'
import CardLivro from './CardLivro'

const Catalogo = () => {
    const [catalogo, setCatalogo] = useState([])

    async function carregarCatalogo() {
        try {
            const token = localStorage.getItem('token')

            const resposta = await fetch(
                'http://localhost:3000/listarlivros',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            const dados = await resposta.json()

            console.log(dados)

            if (!resposta.ok) {
                console.log(dados)
                return
            }

            setCatalogo(dados)

        } catch (erro) {
            console.log('Erro ao carregar catálogo:', erro)
        }
    }

    useEffect(() => {
        carregarCatalogo()
    }, [])

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Pesquisar livro"
                            aria-label="Pesquisar livro"
                        />

                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>

            <div className="row justify-content-center">
                {catalogo.map((livro) => (
                    <div key={livro.id} className="col-3 ms-3">
                        <CardLivro className="" livro={livro} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Catalogo