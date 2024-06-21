import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './FeedMercado.module.css';

function FeedMercado() {
  const { id_mercado } = useParams();
  const [produtoMercado, setProdutoMercado] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    document.title = "Feed Mercado";
    carregarProdutos();
  }, []);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo);
    }
  }, []);

  async function carregarProdutos() {
    try {
      const resposta = await fetch(`/feed/${id_mercado}`);

      if (!resposta.ok) {
        throw new Error("Erro na requisição: " + resposta.status);
      } else {
        const dados = await resposta.json();
        setProdutoMercado(dados);
      }
    } catch (error) {
      console.error("Erro ao mostrar os produtos", error);
    }
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
      <div className="container">
        <div className={styles.prod_container}>
        {produtoMercado.map(produto => (
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

export default FeedMercado;
