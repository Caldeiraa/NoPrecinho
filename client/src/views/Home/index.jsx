import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './estilo.css';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [logos, setLogos] = useState([]);

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

    // Fetch products
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
        setProdutos(dados);
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
    carregarLogos();
  }, []);

  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider-wrapper .image-list");
      const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
      const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });

      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      }

      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
      });
    }

    initSlider();

    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);

    return () => {
      window.removeEventListener("resize", initSlider);
      window.removeEventListener("load", initSlider);
    }
  }, [logos]);

  const Mercado = (event) => {
    const id_mercado = event.target.getAttribute('data-id-mercado');
    window.location.href = `/feed/${id_mercado}`;
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

  // Agrupar produtos por mercado
  const produtosPorMercado = produtos.reduce((acc, produto) => {
    const { nome_mercado } = produto;
    if (!acc[nome_mercado]) {
      acc[nome_mercado] = [];
    }
    acc[nome_mercado].push(produto);
    return acc;
  }, {});

  return (
    <div className="conteudo">
      <div className="container parceiros mt-5">
        <h3>Parceiros</h3>
        <div className="slider-wrapper">
          <ul className="image-list">
            {logos.map(mercado => (
              <div key={mercado.id_mercado}>
                <li>
                  <img 
                    className='image-item' 
                    src={`http://localhost:5000/img/${mercado.logo_mercado}`} 
                    alt="" 
                    data-id-mercado={mercado.id_mercado}
                    onClick={Mercado} 
                  />
                </li>
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
      <div className="container">
        {Object.entries(produtosPorMercado).map(([nome_mercado, produtos]) => (
          <div key={nome_mercado}>
            <h4>{nome_mercado}</h4>
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
                      <p className="card-text"><strong>Vigência:</strong> {produto.validade}</p>
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
        ))}
      </div>
    </div>
  );
}

export default Home;
