import { useState } from "react";
import './estilo.css'

function InserirUsuario() {
    const [nome_usuario, setNome_usuario] = useState('')
    const [cpf_usuario, setCpf_usuario] = useState('')
    const [cep_usuario, setCep_usuario] = useState('')
    const [estado_usuario, setEstado_usuario] = useState('')
    const [cidade_usuario, setCidade_usuario] = useState('')
    const [bairro_usuario, setBairro_usuario] = useState('')
    const [rua_usuario, setRua_usuario] = useState('')
    const [telefone_usuario, setTelefone_usuario] = useState('')
    const [email_usuario, setEmail_usuario] = useState('')
    const [nomeUser_usuario, setNomeUser_usuario] = useState('')
    const [senha_usuario, setSenha_usuario] = useState('')

    async function CadastrarUsuario(event) {
        event.preventDefault()
        const usuarioData = {
            nome_usuario,
            cpf_usuario,
            cep_usuario,
            estado_usuario,
            cidade_usuario,
            bairro_usuario,
            rua_usuario,
            telefone_usuario,
            email_usuario,
            nomeUser_usuario,
            senha_usuario
        }
        try {
            const resposta = await fetch('/cadastroUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioData)
            })
            if (!resposta.ok) {
                throw resposta
                console.debug("Erro ao criar usuario")
            } else {
                console.debug("usuario Inserido")
                alert('Inserido')
            }
        } catch (error) {
            console.debug(error)
        }
    }

    return (

    <div className="conteudo" >
        <div id="cadastro" className="container pt-5">
            <h3 className="mt-5 text-center">Cadastro de Usuário: </h3>
            <div className="mt-5">
                <form onSubmit={CadastrarUsuario}>
                    <div className="row">
                        <div className="col-md-5">
                            <label for="" className="form-label fs-4 mt-3">Nome Completo:</label>
                            <input value={nome_usuario} onChange={e => setNome_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">CPF:</label>
                            <input value={cpf_usuario} onChange={e => setCpf_usuario(e.target.value)} name="cpf_usuario" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Telefone:</label>
                            <input value={telefone_usuario} onChange={e => setTelefone_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">E-mail:</label>
                            <input value={email_usuario} onChange={e => setEmail_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Nome de usuário:</label>
                            <input value={nomeUser_usuario} onChange={e => setNomeUser_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Senha:</label>
                            <input value={senha_usuario} onChange={e => setSenha_usuario(e.target.value)} name="" type="password" className="form-control rounded-4 border border-black p-2 mt-2" />
                        </div>

                        <div className="col-2">

                        </div>

                        <div className="col-md-5">
                            <label for="" className="form-label fs-4 mt-3">CEP:</label>
                            <input value={cep_usuario} onChange={e => setCep_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Estado:</label>
                            <input value={estado_usuario} onChange={e => setEstado_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Cidade:</label>
                            <input value={cidade_usuario} onChange={e => setCidade_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Bairro:</label>
                            <input value={bairro_usuario} onChange={e => setBairro_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Rua:</label>
                            <input value={rua_usuario} onChange={e => setRua_usuario(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Confirmar senha:</label>
                            <input name="" type="password" className="form-control rounded-4 border border-black p-2 mt-2" />

                        </div>
                    </div>
                    <button type="submit" className="btn border border-black mt-4 rounded-4 mt-5 cadastrobtn" >Cadastrar</button>
                </form>
            </div>
        </div>

    </div>

    );
}
export default InserirUsuario