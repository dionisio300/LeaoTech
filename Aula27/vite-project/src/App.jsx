import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Usuarios from './pages/Usuarios/Usuarios'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetalhesProduto from './pages/DetalhesProduto/DetalhesProduto'

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/produto/:id' element = {<DetalhesProduto/>}/>
            <Route path='/usuarios' element={<Usuarios/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App