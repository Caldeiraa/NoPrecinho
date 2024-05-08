import React from 'react';
import './estilo.css';
import './js/barraParceiros'
import carrefour from './img/Carrefour-Logo.png'
import extrabom from './img/extrabom-2x.webp'
import perin from './img/header-logo.png'
import assai from './img/Logo_assai.png'
import bh from './img/logo-bh-white.png'
import np from './img/NP.png'


function Home() {
  return (
    <div class="conteudo">
      <div class="cabecalho">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid d-flex justify-content-around">
            <a className="navbar-brand me-auto" href="#">NoPrecinho</a>
            <img className="logo me-auto" src={np} alt="NoPrecinho Logo" />
            <div className="offcanvas offcanvas-end oi" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: 'white' }}>jose</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 ms-5 justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Serviços</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Portfólios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2 mr-5" href="#">Contato</a>
                  </li>
                  <li className="ms-5">
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn " type="submit">Search</button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="login-button">Login</a>
            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      <div className="container parceiros">
        <h3>Parceiros</h3>
        <div className="slider-wrapper">
          <ul className="image-list">
            <li><img className="image-item" src={carrefour} alt="Carrefour Logo" /></li>
            <li><img className="image-item tt" src={extrabom} alt="Extrabom Logo" /></li>
            <li><img className="image-item" src={perin} alt="Header Logo" /></li>
            <li><img className="image-item" src={bh} alt="BH Logo" /></li>
            <li><img className="image-item" src={assai} alt="Assai Logo" /></li>
            <li><img className="image-item" src={carrefour} alt="Carrefour Logo" /></li>
            <li><img className="image-item tt" src={extrabom} alt="Extrabom Logo" /></li>
            <li><img className="image-item" src={perin} alt="Header Logo" /></li>
            <li><img className="image-item" src={bh} alt="BH Logo" /></li>
            <li><img className="image-item" src={assai} alt="Assai Logo" /></li>
          </ul>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
        <h3>Promoções</h3>
      </div>
    </div>
  );
}

export default Home;
