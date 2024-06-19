import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

import './estilo.css';
import './js/barraParceiros';
import carrefour from './img/Carrefour-Logo.png';
import extrabom from './img/extrabom-2x.webp';
import perin from './img/header-logo.png';
import assai from './img/Logo_assai.png';
import bh from './img/logo-bh-white.png';
import np from './img/NP.png';

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    document.title = "Home";
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Efetue login");
      window.location.href = "/login";
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const mercado_id = decodedToken.mercado_id;
        const usuario_id = decodedToken.usuario_id;
        console.log("Mercado ID:", mercado_id);
        console.log("Usuario ID:", usuario_id);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        alert("Erro ao decodificar token");
        window.location.href = "/login";
      }
    }

    // Buscar produtos cadastrados no sistema
    const carregarProdutos = async () => {
      try {
        const resposta = await fetch("/cadastroPM", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!resposta.ok) {
          throw new Error(`Erro ao carregar produtos: ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        setProdutos(dados); // Atualiza o estado com os produtos recebidos do backend
      } catch (error) {
        console.error("Erro na requisição de carregar produtos:", error.message);
        alert("Erro na requisição de carregar produtos");
      }
    };

    carregarProdutos();
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

      {/* Exibição dos produtos cadastrados */}
      <div className="container">
        <div className="row">
          {produtos.map(produto => (
            <div key={produto.id_produto_mercado} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{produto.nome_produto}</h5>
                  <p className="card-text"><strong>Marca:</strong> {produto.marca_produto}</p>
                  <p className="card-text"><strong>Preço:</strong> R$ {produto.preco_produto}</p>
                  <p className="card-text"><strong>Status:</strong> {produto.status}</p>
                  <p className="card-text"><strong>Descrição:</strong> {produto.descricao}</p>
                  <p className="card-text"><strong>Mercado:</strong> {produto.nome_mercado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
