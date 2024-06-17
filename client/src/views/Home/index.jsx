import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importe diretamente a função jwtDecode

import './estilo.css';
import './js/barraParceiros';
import carrefour from './img/Carrefour-Logo.png';
import extrabom from './img/extrabom-2x.webp';
import perin from './img/header-logo.png';
import assai from './img/Logo_assai.png';
import bh from './img/logo-bh-white.png';
import np from './img/NP.png';

function Home() {
  useEffect(() => {
    document.title = "Home";
    const token = localStorage.getItem("token");
    console.debug(token)

    if (!token) {
      alert("Efetue login");
      window.location.href = "/login";
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const mercado_id = decodedToken.mercado_id;
        const usuario_id  = decodedToken.usuario_id;
        console.log("Mercado ID:", mercado_id);
        console.log("Usuario ID:", usuario_id);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        alert("Erro ao decodificar token");
        window.location.href = "/login";
      }
    }
  }, []);

  function Mercado() {
    window.location.href = "/feedM";
  }

  return (
    <div className="conteudo">  
      <div className="container parceiros">
        <h3>Parceiros</h3>
        <div className="slider-wrapper">
          <ul className="image-list">
            <li><img className="image-item" src={carrefour} onClick={Mercado} alt="Carrefour Logo" /></li>
            <li><img className="image-item" src={extrabom} alt="Extrabom Logo" /></li>
            <li><img className="image-item" src={perin} alt="Header Logo" /></li>
            <li><img className="image-item" src={bh} alt="BH Logo" /></li>
            <li><img className="image-item" src={assai} alt="Assai Logo" /></li>
            <li><img className="image-item" src={carrefour} alt="Carrefour Logo" /></li>
            <li><img className="image-item" src={extrabom} alt="Extrabom Logo" /></li>
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
