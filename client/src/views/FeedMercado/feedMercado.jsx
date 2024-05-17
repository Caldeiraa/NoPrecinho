import {useEffect, useState} from 'react'
import logo from '../../img/NP.png'
import styles from './FeedMercado.module.css'

function FeedMercado() {
  const[produto_mercado, setProdutoMercado] = useState([])
  useEffect(()=>{
    document.title = "Feed Mercado"
    carregarProdutos()
  },[])


  async function carregarProdutos(){
    try {
      const resposta = await fetch('/cadastroPM' )
      
      if(!resposta){
        throw new Error("Erro na requisição:"+resposta.status)
      }else{
        const dados = await resposta.json()
        setProdutoMercado(dados)
      }
    } catch (error) {
      console.error("Erro ao mostrar os produtos", error)
    }
  }


  return (
    <div class="conteudo">
      <div className={styles.prod_container}>
        <div className={styles.prod_item}>
          {produto_mercado.map(produto_mercado=>(
            <div key={produto_mercado.id_produto_mercado}>
                <span>{produto_mercado.id_produto_mercado}</span>
                <span>{produto_mercado.nome_produto}</span>
                <span>{produto_mercado.marca_produto}</span>
            </div>
          ))}
        </div>
        <div className="prod-item">
          {produto_mercado.map(produto_mercado=>(
            <div key={produto_mercado.id_produto_mercado}>
                <span>{produto_mercado.id_produto_mercado}</span>
                <span>{produto_mercado.nome_produto}</span>
                <span>{produto_mercado.marca_produto}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedMercado