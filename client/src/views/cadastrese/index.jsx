import React from 'react'

 function index() {
  return (
    <div class="conteudo">
    <div class="container-fluid p-0 text-center cabecalho">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
            <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
            <img class="logo" src="img/NP.png" alt=""/>
        </nav>
        
    </div>

    <div class="box">
        <div><img src="img/NP.png" alt="logo" id="logo"/></div><br/><br/>
        <label for="" class="form-label"><h2 class="info">Selecione:</h2></label>
        <div class="enviar">
            <span class="linha"></span>
        </div>
        
        <a class="botaoCadastrese btn border border-black mt-4 rounded-5 " href="usuario2.html">Usuário</a>
        <a class="botaoCadastrese btn border border-black mt-5 rounded-5" href="mercado2.html ">Mercado</a>
    </div>
</div>
  )
}
export default index