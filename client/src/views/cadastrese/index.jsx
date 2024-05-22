import React from 'react'

 function index() {
    async function Mercado(){
        window.location.href = "/cadastro/mercado"
      }
      async function Usuario(){
        window.location.href = "/cadastro/usuario"
      }
  return (
    <div class="conteudo">
        <div class="cabecalho">
            
        </div>

    <div class="box">
        <div><img src="img/NP.png" alt="logo" id="logo"/></div><br/><br/>
        <label for="" class="form-label"><h2 class="info">Selecione:</h2></label>
        <div class="enviar">
            <span class="linha"></span>
        </div>
        
        <a class="botaoCadastrese btn border border-black mt-4 rounded-5 "  onClick={Usuario}>Usuário</a>
        <a class="botaoCadastrese btn border border-black mt-5 rounded-5"  onClick={Mercado}>Mercado</a>
    </div>
</div>
  )
}
export default index