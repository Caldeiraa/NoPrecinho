import React from 'react'
import style from './estilo.css'

export default function carrinhoDois() {
  return (
    <div class="conteudo">
        <div class="container-fluid d-flex justify-content-evenly" id='conteudo'>
           <div className="box2 d-flex align-itens-center justify-content-center flex-column">
                <div class="icone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                </div>
                <div class="texto">
                    <h2>Monte seu carrinho de compras!</h2>
                    <h5>Adicione produtos e veja os melhores preços.</h5>  
                </div>
                
                <button type='submit' class="btnCarrinho">Conferir produtos</button>
           </div>

            <div class="d-flex flex-column justify-content-evenly">
                <div class="minibox d-flex flex-column align-itens-center text-center">
                    <div class="tituloCarrinho">
                    <h1>Resumo da compra</h1> 
                    </div>
                    <div class="align-self-center mt-5">
                        <h4>Aqui, você encontrará os valores da sua compra assim que adicionar produtos.</h4>
                    </div>
                </div>

                <div class="minibox d-flex flex-column align-itens-center text-center">
                    <div class="tituloCarrinho">
                    <h1>Fazer comparação</h1> 
                    </div>
                    <div class="align-self-center mt-5">
                        <h4>Aqui, você fará a comparação dos preços com outros mercados.</h4>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}








/* <div class="row">
                <div class="col-md-6">
                    <div class="box2">
                        
                        <div class="conteudo2">
                            <h2><p>Monte seu carrinho de compras!</p></h2>
                            <h4>Adicione produtos e veja os melhores preços.</h4>
                        </div>
                        <div class="carrinho">
                            <button type="submit" class="btn border border-black mt-5 rounded-4" >Adicione mais produtos</button>
                        </div>
                    </div>
                </div>
            </div>*/