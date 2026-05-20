import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import DetalhesProduto from '../pages/DetalhesProduto/DetalhesProduto'
import Usuarios from '../pages/Usuarios/Usuarios'
import Cadastro from '../pages/Cadastro/Cadastro'

const AppRoutes = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/produto/:id' element={<DetalhesProduto />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>

        </>
    )
}

export default AppRoutes