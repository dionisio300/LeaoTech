import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import CadastroProdutos from './pages/CadastroProdutos/CadastroProdutos'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastroProdutos' element={<CadastroProdutos/>}/>
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App