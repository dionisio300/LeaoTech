import React from 'react'
import ListarUsuaios from '../../components/ListarUsuarios/ListarUsuaios'
import usuariosObj from '../../dados/usuarios'

const Usuarios = () => {
  return (
    <>
        
        <div>
          <div className='container mt-5'>
            <h1>Página de Usuários</h1>
            <div className='row mt-3 justify-content-center'>
              <div className='col-8'>
                <ListarUsuaios usuarios={usuariosObj}/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Usuarios