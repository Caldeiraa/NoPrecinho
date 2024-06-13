import { useEffect, useState } from 'react';
import logo from '../../img/NP.png';
import styles from './FeedMercado.module.css';

function FeedMercado() {
  const [produto_mercado, setProdutoMercado] = useState([]);

  useEffect(() => {
    document.title = "Feed Mercado";
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const resposta = await fetch('/cadastroPM');

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

  return (
    <div className="conteudo">
      <div className={styles.prod_container}>
        {produto_mercado.map(produto => (
          <div className={styles.prod_item} key={produto.id_produto_mercado}>
            <img src={`http://localhost:5000/img/${produto.foto_produto}`} alt={produto.nome_produto} />
            <span>{produto.nome_produto}</span>
            <span>{produto.marca_produto}</span>
            <span>R$ {produto.preco_produto}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedMercado;
