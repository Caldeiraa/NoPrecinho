import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import style from './style.css';

function GerenciamentoM() {
  const [produtosC, setProdutosC] = useState([]);
  const navigate = useNavigate(); // Usa useNavigate

  useEffect(() => {
    document.title = "Lista de produtos do mercado";
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Efetue login");
      navigate("/login"); // Substitui window.location.href
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const mercado_id = decodedToken.mercado_id;
        
        console.log("Mercado ID:", mercado_id);
        carregarProdutosC(mercado_id);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        alert("Erro ao decodificar token");
        navigate("/login"); // Substitui window.location.href
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
  }, [navigate]);

  return (
    <div className='container'>
      <h1>Produtos do Mercado</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Foto do Produto</th>
            <th>Nome do Produto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtosC.map(produto_mercado => (
            <tr key={produto_mercado.id_produto_mercado}>
              <td>
                <img
                  src={produto_mercado.foto_produto}
                  alt={produto_mercado.nome_produto}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/100'; // Placeholder image if there's an error
                  }}
                />
              </td>
              <td>{produto_mercado.nome_produto}</td>
              <td>
                <button onClick={() => navigate(`/produto/${produto_mercado.id_produto_mercado}/editar`)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GerenciamentoM;
