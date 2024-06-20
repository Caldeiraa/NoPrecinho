import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarProduto() {
  const { id_prod } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const resposta = await fetch(`/produto/${id_prod}`);
        if (!resposta.ok) {
          throw new Error("Erro na requisição: " + resposta.status);
        }
        const dados = await resposta.json();
        setProduto(dados[0]); // Assume que os dados são um array e pegamos o primeiro item
      } catch (error) {
        console.error("Erro ao buscar o produto", error);
      }
    }

    fetchProduto();
  }, [id_prod]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch(`/produto/${id_prod}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });
      if (!resposta.ok) {
        throw new Error("Erro na atualização: " + resposta.status);
      }
      alert("Produto atualizado com sucesso!");
      navigate("/gerenciamentoM");
    } catch (error) {
      console.error("Erro ao atualizar o produto", error);
    }
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome_produto" value={produto.nome_produto} onChange={handleInputChange} />
        </label>
        <label>
          Marca:
          <input type="text" name="marca_produto" value={produto.marca_produto} onChange={handleInputChange} />
        </label>
        <label>
          Preço:
          <input type="number" name="preco_produto" value={produto.preco_produto} onChange={handleInputChange} />
        </label>
        <label>
          Foto:
          <input type="text" name="foto_produto" value={produto.foto_produto} onChange={handleInputChange} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditarProduto;
