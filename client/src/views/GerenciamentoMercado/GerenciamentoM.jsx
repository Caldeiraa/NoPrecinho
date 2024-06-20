import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; 

function GerenciamentoM() {
  const [produtosC, setProdutosC] = useState([]);

  useEffect(() => {
    document.title = "Lista de produtos do mercado";
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Efetue login");
      window.location.href = "/login";
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const mercado_id = decodedToken.mercado_id;
        
        console.log("Mercado ID:", mercado_id);
        carregarProdutosC(mercado_id);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        alert("Erro ao decodificar token");
        window.location.href = "/login";
      }
    }

    async function carregarProdutosC(mercado_id) {
      try {
        const resposta = await fetch(`/produtos/${mercado_id}`);

        if (!resposta.ok) {
          console.debug("HTTP erro: " + resposta.status);
        } else {
          let dados = await resposta.json();
          setProdutosC(dados);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos: " + error);
      }
    }
  }, []);

  return (
    <div className='container'>
      <h1>Produtos do Mercado</h1>
      <table>
        <thead>
          <tr>
            <th>ID do Produto</th>
            <th>Nome do Produto</th>
          </tr>
        </thead>
        <tbody>
          {produtosC.map(produto_mercado => (
            <tr key={produto_mercado.id_produto_mercado}>
              <td>{produto_mercado.id_produto_mercado}</td>
              <td>{produto_mercado.nome_produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GerenciamentoM;
