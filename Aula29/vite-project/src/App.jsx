import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Usuarios from './pages/Usuarios/Usuarios'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// npm install react-router-dom

import DetalhesProduto from './pages/DetalhesProduto/DetalhesProduto'
import Cadastro from './pages/Cadastro/Cadastro'
import AppRoutes from './routes/AppRoutes'

import { useContext } from 'react'
import { LayoutContext } from './service/LayoutContext'

function App() {

  let {mostrarHeader} = useContext(LayoutContext)

  return (
    <>
    {mostrarHeader && <Header />}
        <AppRoutes/>
      <Footer />
    </>
  )
}

export default App