import {useEffect, useState} from 'react'

function GerenciamentoM() {
    const[produtosC, setProdutosC] = useState([])

    useEffect(()=>{
        document.title = "Lista de usuários"
        
        async function carregarProdutosC(){
            try {
                const resposta = await fetch('/produtos')

                if(!resposta.ok){
                    //Exibindo erro API
                    console.debug("HTTP erro: "+resposta.status)
                  }else{
                    //Exibindo sucesso API
                    let dados = await resposta.json()
                    setProdutosC(dados)
                  }
            } catch (error) {
                console.error("Erro ao buscar produtos"+error)
            }
        }
        carregarProdutosC()
    },[])

    
  return (
    <div className='container'>
      <h1>Todos os produtos</h1>
      <table>
        <tr>
          <th>nome</th>
        </tr>
        <tbody>
        {produtosC.map(produto_mercado=>(
          <tr key={produto_mercado.id_produto_mercado}>
            <td>{produto_mercado.id_produto_mercado}</td>
            <td>{produto_mercado.nome_produto}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default GerenciamentoM