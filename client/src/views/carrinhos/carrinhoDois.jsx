import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import './estilo.css';

function CarrinhoDois() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [comparacaoResultados, setComparacaoResultados] = useState(null);
  const [erroComparacao, setErroComparacao] = useState(null);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      const carrinhoComQuantidade = carrinhoSalvo.map(produto => ({
        ...produto,
        quantidade: produto.quantidade || 1
      }));
      setProdutosCarrinho(carrinhoComQuantidade);
    }

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
  }, []);

  const compararPrecos = async () => {
    setErroComparacao(null);
    setComparacaoResultados(null);
    try {
      if (produtosCarrinho.length === 0) {
        throw new Error("Nenhum produto para comparar.");
      }

      // Preparar dados apenas com nome_prod e marca_prod
      const dadosParaComparar = produtosCarrinho.map(({ nome_produto, marca_produto }) => ({
        nome_produto,
        marca_produto
      }));

      console.log("Enviando dados para comparação:", JSON.stringify({ produtos: dadosParaComparar }));
      
      const response = await fetch('http://localhost:5000/comparacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produtos: dadosParaComparar })
        
      });
      if (!response.ok) {
        throw new Error(`Erro de rede: ${response.status}`);
      }
      const data = await response.json();
      console.log("Dados recebidos da comparação:", data);
      setComparacaoResultados(data);
    } catch (error) {
      console.error("Erro ao comparar preços:", error.message);
      setErroComparacao("Erro ao comparar preços. Por favor, tente novamente mais tarde.");
      
    }
  };

  const alterarQuantidade = (idProduto, quantidade) => {
    const novosProdutos = produtosCarrinho.map(produto => {
      if (produto.id_produto_mercado === idProduto) {
        const novaQuantidade = produto.quantidade + quantidade;
        if (novaQuantidade <= 0) {
          return null; // Marca o produto para remoção
        }
        return { ...produto, quantidade: novaQuantidade };
      }
      return produto;
    }).filter(produto => produto !== null);
    setProdutosCarrinho(novosProdutos);
    localStorage.setItem('carrinho', JSON.stringify(novosProdutos));
  };

  const calcularTotalCarrinho = () => {
    return produtosCarrinho.reduce((total, produto) => {
      return total + (produto.preco_produto * produto.quantidade);
    }, 0).toFixed(2);
  };

  const carregarMensagem1 = () => {
    return (
      <div className="conteudo">
        <div className="icone">
          <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
        <h2>Monte seu carrinho de compras!</h2>
        <h5 className='text-center'>Adicione produtos e veja os melhores preços.</h5>
      </div>
    )
  }

  const carregarMensagem2 = () => {
    return (
      <div className="d-flex flex-column justify-content-evenly">
        <div className="minibox d-flex flex-column align-items-center text-center">
          <div className="tituloCarrinho">
            <h1>Resumo da compra</h1>
          </div>
          <div className="align-self-center mt-5">
            <h4>Aqui, você encontrará os valores da sua compra assim que adicionar produtos.</h4>
          </div>
        </div>

        <div className="minibox d-flex flex-column alinhando-items-center text-center">
          <div className="tituloCarrinho">
            <h1>Fazer comparação</h1>
          </div>
          <div className="align-self-center mt-5">
            <h4>Aqui, você fará a comparação dos preços com outros mercados.</h4>
          </div>
          <div className="align-self-center mt-5">
            <button className="btn btn-primary" onClick={compararPrecos}>Comparar preços</button>
            {erroComparacao && <p className="text-danger mt-3">{erroComparacao}</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="conteudo">
      <div className="box2 d-flex align-items-center justify-content-center flex-column">
        <div className="texto">
          {produtosCarrinho.length > 0 ? (
              <ul className="list-group">
                {produtosCarrinho.map(produto => (
                  <li key={produto.id_produto_mercado} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className='carrinho-img'>
                        <img className="FOTOCARRINHO" src={`http://localhost:5000/img/${produto.foto_produto}`} />
                      </div>
                      <span className="carrinho-title">{produto.nome_produto}</span>
                      <span className="carrinho-subtitle">{produto.marca_produto}</span>
                      <span className=''>{produto.nome_mercado}</span>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-danger me-2" onClick={() => alterarQuantidade(produto.id_produto_mercado, -1)}>-</button>
                        <span className="me-2">{produto.quantidade}</span>
                        <button className="btn btn-sm btn-outline-success" onClick={() => alterarQuantidade(produto.id_produto_mercado, 1)}>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
          ) : carregarMensagem1()}
        </div>
      </div>

      {comparacaoResultados && (
        <div className="minibox d-flex align-items-center justify-content-center flex-column mt-5">
          <div className="tituloCarrinho">
            <h1>Resultados da Comparação</h1>
          </div>
          <div className="container mt-3">
            {comparacaoResultados.map((resultado, index) => (
              <div key={index} className="comparacao-resultado">
                <h4>{produtosCarrinho[index].nome_produto} - {produtosCarrinho[index].marca_produto}</h4>
                <ul className="list-group mt-3">
                  {resultado.comparacao.map(item => (
                    <li key={item.id_produto_mercado} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <span>{item.nome_produto} - {item.marca_produto}</span>
                        <span className="ms-3">R$ {item.preco_produto}</span>
                      </div>
                      <span className="badge bg-primary rounded-pill">Mercado ID: {item.mercado_id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {produtosCarrinho.length > 0 ? (
        <div className="d-flex flex-column justify-content-evenly">
          <div className="minibox d-flex flex-column align-items-center text-center">
            <div className="tituloCarrinho">
              <h1>Resumo da compra</h1>
            </div>
            <div className="align-self-center mt-5">
              <h4>Total: R$ {calcularTotalCarrinho()}</h4>
            </div>
          </div>

          <div className="minibox d-flex flex-column align-items-center text-center">
            <div className="tituloCarrinho">
              <h1>Fazer comparação</h1>
            </div>
            <div className="align-self-center mt-5">
              <h4>Aqui, você fará a comparação dos preços com outros mercados.</h4>
            </div>
            <div className="align-self-center mt-5">
              <button className="btn btn-primary" onClick={compararPrecos}>Comparar preços</button>
              {erroComparacao && <p className="text-danger mt-3">{erroComparacao}</p>}
            </div>
          </div>
        </div>
      ) : carregarMensagem2()}
    </div>
  );
}

export default CarrinhoDois;