import React from 'react'

function Index() {
  return (
    <div class="conteudo">
        <div class="container-fluid p-0 text-center cabecalho">
            <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
                <img class="logo" src="img/NP.png" alt=""/>
            </nav>
            
        </div>
    
        <div class="box">
            <div><img src="img/NP.png" alt="logo" id="logo"/></div>
            <h3 class="mt-2 text-center">Recuperação de senha </h3>
            <label for=""><h2 class="form-label mb-1">Email:</h2></label>
            <input type="email" class="form-control rounded-4 border border-black p-2 mt-2" placeholder="Digite um e-mail já cadastrado"/>
            <br/><button type="submit" class="btn border border-black mt-4 rounded-4 text-center">Enviar</button><br/>
        </div> 
    </div>
  );
}

export default Index