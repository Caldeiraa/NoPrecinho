import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Produtos() {
  const { id_produto_mercado } = useParams(); // Pega o id_prod dos parâmetros da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    carregarProduto();
  }, []);

  async function carregarProduto() {
    try {
      const resposta = await fetch(`/produto/${id_produto_mercado}`);

      if (!resposta.ok) {
        throw new Error("Erro na requisição: " + resposta.status);
      } else {
        const dados = await resposta.json();
        setProduto(dados);
      }
    } catch (error) {
      console.error("Erro ao mostrar os produtos", error);
    }
  }

  if (!produto) {
    return <div>Carregando...</div>; // Exibe um carregando enquanto o produto está sendo buscado
  }

  return (
    <div className="conteudo">
      <div className="container">
        <div className="produto" key={produto.id_produto_mercado}>
          <img src={`http://localhost:5000/img/${produto.foto_produto}`} alt={produto.nome_produto} />
          <span>{produto.nome_produto}</span>
          <span>{produto.marca_produto}</span>
          <span>R$ {produto.preco_produto}</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
