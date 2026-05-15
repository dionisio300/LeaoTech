import React from 'react'
import './ListarUsuarios.css'


const ListarUsuaios = ({ usuarios }) => {
    console.log(usuarios)
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Foto</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Cidade</th>
                    </tr>
                </thead>
                <tbody>

                    {usuarios.map((usuario) => (
                        <tr>
                            <td>
                                <img className='img-usuario' src={usuario.foto} alt="" />
                            </td>
                            <td>
                                {usuario.nome}
                            </td>
                            <td>
                                {usuario.email}
                            </td>
                            <td>
                                {usuario.telefone}
                            </td>
                            <td>
                                {usuario.cidade}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListarUsuaios