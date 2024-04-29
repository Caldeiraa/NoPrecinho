import React from 'react'
import np from './img/NP.png'
// import mc from './img/mercearia.png'
// import cn from './img/carne.png'
// import bd from './img/bebidas.png'
// import lp from './img/limpeza.png'
// import np from './img/NP.png'
// import np from './img/NP.png'
// import np from './img/NP.png'
// import np from './img/NP.png'

function index() {
  return (
    <div class="conteudo">
    <div class="container-fluid p-0 text-center d-flex flex-column">
        <div class="container-fluid p-0 text-center cabecalho">
            <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
                <img class="logo" src={np} alt=""/>
            </nav>
            
        </div>
        <h1 class="text-center mt-2">Olá, o que você quer anunciar?</h1>

        <div class="container-fluid d-flex justify-content-evenly align-items-center">
            <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                <div class="box-c" id="1">
                    <a href="">
                       <img  class="ms-4" src="img/mercearia.png" alt=""/>
                        <h3>Mercearia</h3> 
                    </a>
                </div>

                <div class="box-c" id="2">
                    <a href="">
                        <img src="img/pereciveis.png" alt=""/>
                         <h3>Pereciveis</h3> 
                     </a>
                </div>
            </div>

            <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                <div class="box-c" id="3    ">
                    <a href="">
                        <img src="img/carne.png" alt=""/>
                         <h3>Carne</h3> 
                     </a>
                </div>

                <div class="box-c" id="4">
                    <a href="">
                        <img src="img/padaria.png" alt=""/>
                         <h3>Padaria</h3> 
                     </a>
                </div>
            </div>

            <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                <div class="box-c" id="5">
                    <a href="">
                        <img src="img/bebidas.png" alt=""/>
                         <h3>Bebidas</h3> 
                     </a>
                </div>

                <div class="box-c" id="6">
                    <a href="">
                        <img src="img/hortifruit.png" alt=""/>
                         <h3>Hortifruit</h3> 
                     </a>
                </div>
            </div>

            <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                <div class="box-c" id="7">
                    <a href="">
                        <img src="img/limpeza.png" alt=""/>
                         <h3>Limpeza</h3> 
                     </a>
                </div>
                
                <div class="box-c" id="8">
                    <a href="">
                        <img src="img/higiêne.png" alt=""/>
                         <h3>Higiene</h3> 
                     </a>
                </div>
            </div>
        </div>
   </div>
</div>
  )
}

export default index