import { useState } from "react";
// import Css from './estilo.css'
import logo from '../../img/NP.png'
import style from './estiloU.css'
function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);

    async function Logar(event) {
        event.preventDefault();
        try {
            const resposta = await fetch("/loginU", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (!resposta.ok) {
                const errorMessage = await resposta.text();
                setError(`Erro: ${resposta.status} - ${errorMessage}`);
                return;
            }

            const dados = await resposta.json();
            if (!dados.token) {
                setError("Erro ao tentar fazer login. Tente novamente mais tarde.");
                return;
            }

            localStorage.setItem('token', dados.token);
            console.debug(dados);
            alert("Logado com sucesso!"); 
            window.location.href = "/";
        } catch (error) {
            console.error("Erro ao fazer login", error);
            setError("Erro ao tentar fazer login. Por favor, tente novamente mais tarde.");
        }
    }

    async function RecuperacaoSenha() {
        window.location.href = "/recuperacao";
    }

    async function Cadastrese() {
        window.location.href = "/cadastro/usuario";
    }
    return (
        <div class="conteudo">
            <form>
                <div class="boxU d-flex flex-column align-itens-center">
                    <img class="logoLoginU" src={logo} alt="" />
                    <label for=""><h2 class="form-label">E-mail:</h2></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" class="form-control  rounded-4 border border-black" />
                    <label for=""><h2 class="form-label">Senha:</h2></label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" class="form-control  rounded-4 border border-black" />
                    <p></p>
                    <a class="form-label ms-3" onClick={RecuperacaoSenha}>Esqueci a Senha</a>
                    <button type="submit" class="btn border border-black mt-5 rounded-4 btnLogarU align-self-center" onClick={Logar} >Entrar</button>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    <span class="linhaU"></span>
                    <h5>Não tem uma conta?<a class="form-label" onClick={Cadastrese}>Cadastre-se</a></h5>
                </div>
            </form>

        </div>
    );
}
export default Login
