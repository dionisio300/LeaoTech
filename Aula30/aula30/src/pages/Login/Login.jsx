import React from 'react'
import './Login.css'
const Login = () => {

  return (
    <>
    <div className='container'>
        <div id='area-login' className='row justify-content-center align-items-center'>
            <div  className='col-5'>
                <div className='area-login border border-2 rounded p-3'>
                    <div className='icone-login text-center'>
                        <i style={{fontSize:'130px'}} class="bi bi-person-circle "></i>
                    </div>
                    <div className='form-login'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="">Login: </label>
                            <input type="text" />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="">Senha: </label>
                            <input type="password" />
                        </div>
                        <div className='mt-2'>
                            <button className='btn btn-success'>Entrar</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login