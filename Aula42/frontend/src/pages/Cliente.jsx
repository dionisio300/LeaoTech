import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Catalogo from '../components/Catalogo'

const Cliente = () => {
  const navigate = useNavigate()
  function fazerLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('nome')
    localStorage.removeItem('tipo')

    navigate('/login')

  }

  return (
    <>
      <Navbar/>
      <div className='container mt-5'>
        <Catalogo/>
      </div>
    </>
    
  )
}

export default Cliente