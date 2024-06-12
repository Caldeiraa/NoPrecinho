import { useState } from "react";
// import Css from './estilo.css'
import logo from '../../img/NP.png'
import style from './estiloU.css'
function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function Logar(event) {
        event.preventDefault()
        try {
            const resposta = await fetch("/loginU", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            })
            if (!resposta.ok) {
                alert("Usuário ou senha inválidos")
                throw new Error("Erro na requisição:" + resposta.status)
            }
            
            const dados = await resposta.json()
            localStorage.setItem('token', dados.token)
            console.debug(dados)
            alert("logado")
            window.location.href = "/"
            

            
        } catch (error) {
            console.error("Error ao fazer login", error)
        }
    }
    async function RecuperacaoSenha() {
        window.location.href = "/recuperacao"
    }
    async function Cadastrese() {
        window.location.href = "/cadastro/usuario"
    }
    return (
        <div class="conteudo">
            <form>
                <div class="boxU d-flex flex-column align-itens-center">
                    <img class="logoLoginU" src={logo} alt="" />
                    <label for=""><h2 class="form-label">E-mail:</h2></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" class="form-control  rounded-4 border border-black" />
                    <label for=""><h2 class="form-label">Senha:</h2></label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="text" class="form-control  rounded-4 border border-black" />
                    <p></p>
                    <a class="form-label ms-3" onClick={RecuperacaoSenha}>Esqueci a Senha</a>
                        <button type="submit" class="btn border border-black mt-5 rounded-4 btnLogarU align-self-center" onClick={Logar} >Entrar</button>
                    <span class="linhaU"></span>
                    <h5>Não tem uma conta?<a class="form-label" onClick={Cadastrese}>Cadastre-se</a></h5>
                </div>
            </form>

        </div>
    );
}
export default Login
