import React, { useEffect, useState } from 'react';
import './estilo.css'; // Importe o arquivo de estilos onde você definiu as classes CSS

function CarrinhoDois() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      setProdutosCarrinho(carrinhoSalvo);
    }
  }, []);

  // Função para remover um item do carrinho
  const removerItemCarrinho = (idProduto) => {
    const novosProdutos = produtosCarrinho.filter(produto => produto.id_produto_mercado !== idProduto);
    setProdutosCarrinho(novosProdutos);
    localStorage.setItem('carrinho', JSON.stringify(novosProdutos));
  };

  const carregarCarrinho = () => {
    return (<div className="conteudo">
      <div className="icone">
        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </div>
      <h2>Monte seu carrinho de compras!</h2>
      <h5 className='text-center'>Adicione produtos e veja os melhores preços.</h5>
    </div>)

  }



  return (
    <div className="conteudo">
      <div className="container-fluid d-flex justify-content-evenly" id="conteudo">
        <div className="box2 d-flex align-items-center justify-content-center flex-column">
          <div className="texto">
            {produtosCarrinho.length > 0 ? (
              <div className="container mt-5">
                <ul className="list-group">
                  {produtosCarrinho.map(produto => (
                    <li key={produto.id_produto_mercado} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img className="carrinho-img" src={`http://localhost:5000/img/${produto.foto_produto}`} alt={produto.nome_produto} />
                          <span className="carrinho-title">{produto.nome_produto}</span>
                        </div>
                        <div>
                          <span className="carrinho-subtitle">{produto.marca_produto}</span>
                          <p className="carrinho-price">Preço: R$ {produto.preco_produto}</p>
                          <button className="btn btn-danger btn-remover" onClick={() => removerItemCarrinho(produto.id_produto_mercado)}>Remover do Carrinho</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : carregarCarrinho()}

          </div>
        </div>

        <div className="d-flex flex-column justify-content-evenly">
          <div className="minibox d-flex flex-column align-items-center text-center">
            <div className="tituloCarrinho">
              <h1>Resumo da compra</h1>
            </div>
            <div className="align-self-center mt-5">
              <h4>Aqui, você encontrará os valores da sua compra assim que adicionar produtos.</h4>
            </div>
          </div>

          <div className="minibox d-flex flex-column align-items-center text-center">
            <div className="tituloCarrinho">
              <h1>Fazer comparação</h1>
            </div>
            <div className="align-self-center mt-5">
              <h4>Aqui, você fará a comparação dos preços com outros mercados.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrinhoDois;
