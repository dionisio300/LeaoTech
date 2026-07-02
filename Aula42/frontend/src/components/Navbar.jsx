import React from 'react'


const Navbar = () => {
    const nome = localStorage.getItem('nome')
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">Olá {nome}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav me-5">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Catálogo</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Meus Empréstimos</a>
                    </li>
                
                </ul>
                </div>
            </div>
            </nav>
    
    </>
  )
}

export default Navbar