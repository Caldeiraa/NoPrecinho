import { useState } from "react";
import logo from '../../img/NP.png';
import style from './estilo.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar(event) {
        event.preventDefault();
        try {
            const resposta = await fetch("/loginM", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });
            
            if (!resposta.ok) {
                alert("Usuário ou senha inválidos");
                throw new Error("Erro na requisição: " + resposta.status);
            }

            const dados = await resposta.json();
            localStorage.setItem('token', dados.token);
            localStorage.setItem('mercado_id', dados.mercado_id);
            console.debug(dados);
            alert("Logado com sucesso!");
            window.location.href = "/gerenciamentoM";
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    }

    function recuperacaoSenha() {
        window.location.href = "/recuperacao";
    }

    function cadastrese() {
        window.location.href = "/cadastro/mercado";
    }

    return (
        <div className="conteudo">
            <form onSubmit={logar}>
                <div className="box d-flex flex-column align-itens-center">
                    <img className="logoLogin" src={logo} alt="Logo" />
                    <label><h2 className="form-label">E-mail:</h2></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control rounded-4 border border-black" />
                    <label><h2 className="form-label">Senha:</h2></label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" className="form-control rounded-4 border border-black" />
                    <p></p>
                    <a className="form-label ms-3" onClick={recuperacaoSenha}>Esqueci a Senha</a>
                    <button type="submit" className="btn border border-black mt-5 rounded-4 btnLogar align-self-center">Entrar</button>
                    <span className="linha"></span>
                    <h5>Não tem uma conta?<a className="form-label" onClick={cadastrese}>Cadastre-se</a></h5>
                </div>
            </form>
        </div>
    );
}

export default Login;
