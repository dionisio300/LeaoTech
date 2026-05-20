import React, { useState } from 'react'
import './Login.css'
import usuarios from '../../data/dados'
import {useNavigate } from 'react-router-dom'

const Login = () => {

    let [login, setLogin] = useState('')
    let [senha, setSenha] = useState('')
    let [mensagem, setMensagem] = useState('')
    let id = ''

    const navigate = useNavigate()

    function verificarLogin() {

        usuarios.forEach((usuario) => {
            if (usuario.login == login && usuario.senha == senha) {
                id = usuario.id
                if (id != '') {
                    setMensagem('Usuario Encontrado')
                } else {
                    setMensagem('Usuario Não Encontrado')
                }
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
                navigate('/cadastroProdutos')
            }
        })
    }

    return (
        <>
            <div className='container'>
                <div id='area-login' className='row justify-content-center align-items-center'>
                    <div className='col-5'>
                        <div className='area-login border border-2 rounded p-3'>
                            <div className='icone-login text-center'>
                                <i style={{ fontSize: '130px' }} className="bi bi-person-circle "></i>
                            </div>
                            <div className='form-login'>
                                <div className='d-flex flex-column'>
                                    <label htmlFor="">Login: </label>
                                    <input id='login' type="text" onChange={(e) => setLogin(e.target.value)} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor="">Senha: </label>
                                    <input id='senha' onChange={(e) => setSenha(e.target.value)} type="password" />
                                </div>
                                <div className='mt-2'>
                                    <button onClick={verificarLogin} className='btn btn-success'>Entrar</button>
                                </div>
                            </div>
                            <div className='mensagem'>
                                {mensagem}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login