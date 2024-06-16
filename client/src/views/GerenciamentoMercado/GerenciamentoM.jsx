import {useEffect, useState} from 'react'

function GerenciamentoM() {
    const[produtosC, setProdutosC] = ([])

    useEffect(()=>{
        document.title = "Gerenciamento de Mercados"

        async function Gerenciar(){
            try {
                const resposta = await fetch('/feed/:id_mercado')

                if(!resposta.ok){
                    console.debug("HTTP erro: "+resposta.status)
                }else{
                    let dados = await resposta.json()
                    setProdutosC(dados)
                }
            } catch (error) {
                console.error("Erro ao buscar produtos"+error)                
            }
        }

        GerenciamentoM()
    },[])
  return (
    <div>GerenciamentoM</div>
  )
}

export default GerenciamentoM