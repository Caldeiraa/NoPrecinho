import React from 'react'
import estiloTU from './tipoUsuario.css'
import logo from '../../img/NP.png'

 function tipoUsuario() {
    async function Mercado(){
        window.location.href = "/loginM"
      }
      async function Usuario(){
        window.location.href = "/loginU"
      }
  return (
    <div class="conteudo">
      <div class="box d-flex flex-column align-itens-center">
          <img src={logo} alt="logo" className="logoTU"/>
          <label for="" class="form-label"><h2>Deseja Logar como:</h2></label>
          <div className="enviarTU">
              <span className="linhaTU"></span>
          </div>
          
          <button className="botaoCadastreseTU" onClick={Usuario}>Usuário</button>
          <button className="botaoCadastreseTU" onClick={Mercado}>Mercado</button>
          
      </div>
    </div>
  )
}
export default tipoUsuario