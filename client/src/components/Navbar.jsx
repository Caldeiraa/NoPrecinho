import React from 'react'
import estilo from './Navbar.css'


function Navbar() {
    async function Login(){
        window.location.href = "/login"
    }
    async function Home(){
        window.location.href = "/"
    }
    async function Carrinho(){
        window.location.href = "/carrinho/comparacao"
    }
    async function Cadastrar(){
        window.location.href = "/cadastrese"
    }
    return (
        <div class="cabecalho">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid d-flex justify-content-around">
                    <a className="navbar-brand me-auto" href="#" onClick={Home} >NoPrecinho</a>
                    <div className="offcanvas offcanvas-end teste" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NoPrecinho</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" aria-current="page" href="#" onClick={Home}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#" onClick={Cadastrar} >Cadastre-se</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="/categoria" onClick={Cadastrar} >Cadastrar Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#"onClick={Carrinho}>Carrinho</a>
                                </li>
                                <li className="ms-2">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" id='barraPesq' type="search" placeholder="Buscar produtos, marcas e muito mais." aria-label="Search" />
                                        <button type='submit' className='btnPesq'><i class="bi bi-search text-light"></i></button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="login-button" onClick={Login} >Login</a>
                    <button  className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar