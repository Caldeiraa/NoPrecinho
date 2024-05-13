import { useState } from "react";
// import Css from './estilo.css'
import logo from '../../img/NP.png'
function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function Logar(event){
        event.preventDefault()
        const loginData = {
            email,
            senha
        }
        try{
            const resposta = await fetch('/login',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(loginData)
            })
            if(!resposta.ok){
                console.debug("usuario ou senha incorreto")
            }else{
                console.debug("logado")
                alert('logado')
            }
        }catch(error){
            console.debug(error)
        }
    }
    return(
        <div class="conteudo">
            <div class="container-fluid p-0 text-center cabecalho">
                <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                    <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
                    <img class="logo" src={logo} alt=""/>
                </nav>
                
            </div>
        
            <form onSubmit={Logar}>
                <div class="box justify-content-center">
                    <div><img class="logo" src={logo} alt=""/></div>
                    <label for=""><h2 class="form-label">E-mail:</h2></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" class="form-control  rounded-4 border border-black"/>
                    <label for=""><h2 class="form-label">Senha:</h2></label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="text" class="form-control  rounded-4 border border-black"/>
                    <p></p>
                    <a href="recuperacao.html" class="form-label ms-3">Esqueci a Senha</a>
                    <div class="enviar" >
                        <button type="submit" class="btn border border-black mt-5 rounded-4" >Entrar</button>
                        <span class="linha"></span>
                    </div>
                    <h5>Não tem uma conta?<a href="cadastrese.html">Cadastre-se</a></h5>
                </div>
            </form>
            
        </div>
    );
    }
    export default Login
