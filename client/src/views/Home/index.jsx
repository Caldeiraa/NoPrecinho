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
  const [carrinho, setCarrinho] = useState([]);
  const[logos, setLogos] = useState([])

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

    async function carregarLogos() {
      try {
        const resposta = await fetch(`/cadastroM`);

        if (!resposta.ok) {
          console.debug("HTTP erro: " + resposta.status);
        } else {
          let dados = await resposta.json();
          setLogos(dados);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos: " + error);
      }
    }
    carregarLogos()
  }, []);

  function Mercado() {
    window.location.href = ('/feedM');
  }

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find(item => item.id_produto_mercado === produto.id_produto_mercado);

    if (produtoExistente) {
      const novoCarrinho = carrinho.map(item =>
        item.id_produto_mercado === produto.id_produto_mercado
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    } else {
      const novoCarrinho = [...carrinho, { ...produto, quantidade: 1 }];
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }
  };

  return (
    <div className="conteudo">
      <div className="container parceiros mt-5">
        <h3>Parceiros</h3>
        <div className="slider-wrapper">
          <ul className="image-list">
            {logos.map(mercado =>(
              <div key={mercado.id_mercado}>
                <li><img className='image-item' src={`http://localhost:5000/img/${mercado.logo_mercado}`} alt="" /></li>
              </div>
            ))}
          </ul>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
        <h3 className='mt-4'>Produtos</h3>
      </div>

      {/* Exibição dos produtos cadastrados */}
      <div className="container">
        <div className="row">
          {produtos.map(produto => (
            <div key={produto.id_produto_mercado} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{produto.nome_produto}</h5>
                  <img className='card-img' src={`http://localhost:5000/img/${produto.foto_produto}`} alt="" />
                  <p className="card-text"><strong>Marca:</strong> {produto.marca_produto}</p>
                  <p className="card-text"><strong>Preço:</strong> R$ {produto.preco_produto}</p>
                  <p className="card-text"><strong>Mercado:</strong> {produto.nome_mercado}</p>
                  <button onClick={() => adicionarAoCarrinho(produto)}>
                    {carrinho.find(item => item.id_produto_mercado === produto.id_produto_mercado)
                    ? 'Produto no carrinho'
                    : 'Adicionar ao carrinho'}
                  </button>
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
