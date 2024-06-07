import React from 'react'
import np from '../../img/NP.png'
import mc from '../../img/mercearia.png'
import cn from '../../img/carne.png'
import bd from '../../img/bebidas.png'
import lp from '../../img/limpeza.png'
import pc from '../../img/pereciveis.png'
import pd from '../../img/padaria.png'
import ht from '../../img/hortifruit.png'
import hg from '../../img/higiêne.png'
import estilo from './estiloCate.css'

function categorias() {
  return (
    <div class="conteudo">
        <div class="container-fluid p-0 text-center d-flex flex-column">
        <h1 class="text-center textCate">Olá, o que você quer anunciar?</h1>  
            <div class="d-flex justify-content-evenly align-items-center categorias    ">
                
                <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                    <div class="box-c" id="1">
                        <a href="/cadastro/produto/mercado/1">
                        <img  class="logoCate" src={mc} alt=""/>
                            <h3>Mercearia</h3>
                        </a>
                        
                    </div>

                    <div class="box-c" id="2">
                    
                        <a href="/cadastro/produto/mercado/2">
                            <img class= "logoCate" src={pc} alt=""/>
                            <h3>Pereciveis</h3> 
                        </a>
                    </div>
                </div>

                <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                    <div class="box-c" id="3">
                        <a href="/cadastro/produto/mercado/3">
                            <img class= "logoCate" src={cn} alt=""/>
                            <h3>Carne</h3> 
                        </a>
                    </div>

                    <div class="box-c" id="4">
                        <a href="/cadastro/produto/mercado/4">
                            <img class= "logoCate" src={pd} alt=""/>
                            <h3>Padaria</h3> 
                        </a>
                    </div>
                </div>

                <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                    <div class="box-c" id="5">
                        <a href="/cadastro/produto/mercado/5">
                            <img class= "logoCate" src={bd} alt=""/>
                            <h3>Bebidas</h3> 
                        </a>
                    </div>

                    <div class="box-c" id="6">
                        <a href="/cadastro/produto/mercado/6">
                            <img class= "logoCate" src={ht} alt=""/>
                            <h3>Hortifruit</h3> 
                        </a>
                    </div>
                </div>

                <div class="col-box d-flex flex-column align-items-center justify-content-evenly">
                    <div class="box-c" id="7">
                        <a href="/cadastro/produto/mercado/7">
                            <img class= "logoCate" src={lp} alt=""/>
                            <h3>Limpeza</h3> 
                        </a>
                    </div>
                    
                    <div class="box-c" id="8">
                        <a href="/cadastro/produto/mercado/8">
                            <img class= "logoCate" src={hg} alt=""/>
                            <h3>Higiene</h3> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default categorias