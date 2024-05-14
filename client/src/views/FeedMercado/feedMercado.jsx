import React from 'react'
import logo from '../../img/NP.png'
import styles from './FeedMercado.module.css'

function feedMercado() {
  return (
    <div class="conteudo">
        

        <div className={styles} class="feedLogo">
            <img src={logo} alt="" srcset=""/>
        </div>

        <div class="feed">
            <h2>Produtos:</h2>
        </div>

        <div class="prod-container">
                <div class="prod-item">1</div>
                <div class="prod-item">2</div>
                <div class="prod-item">3</div>  
                <div class="prod-item">4</div>
                <div class="prod-item">5</div>
                <div class="prod-item">6</div>  
                <div class="prod-item">7</div>
                <div class="prod-item">8</div>
                <div class="prod-item">9</div>  
        </div>
    </div>
  )
}

export default feedMercado