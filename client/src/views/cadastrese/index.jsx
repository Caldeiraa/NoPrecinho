import React from 'react'
import styles from './index.module.css'
import logo from '../../img/NP.png'

 function index() {
    async function Mercado(){
        window.location.href = "/cadastro/mercado"
      }
      async function Usuario(){
        window.location.href = "/cadastro/usuario"
      }
  return (
    <div class="conteudo">
      <div className={styles.box}>
          <div><img src={logo} alt="logo" className={styles.logo}/></div>
          <label for="" class="form-label"><h2>Selecione:</h2></label>
          <div className={styles.enviar}>
              <span className={styles.linha}></span>
          </div>
          
          <button className={styles.botaoCadastrese} onClick={Usuario}>Usuário</button>
          <button className={styles.botaoCadastrese} onClick={Mercado}>Mercado</button>
          
      </div>
    </div>
  )
}
export default index