import { useState } from "react";

function InserirUsuario(){
    const [nome_usuario, setNome_usuario] = useState('')
    const [cpf_usuario, setCpf_usuario] = useState('')
    const [cep_usuario, setCep_usuario] = useState('')
    const [estado_usuario, setEstado_usuario] = useState('')
    const [cidade_usuario, setCidade_usuario]= useState('')
    const [bairro_usuario, setBairro_usuario] = useState('')
    const [rua_usuario, setRua_usuario] = useState('')
    const [telefone_usuario, setTelefone_usuario]= useState('')
    const [email_usuario, setEmail_usuario]= useState('')
    const [nomeUser_usuario,setNomeUser_usuario]= useState('')
    const [senha_usuario,setSenha_usuario]= useState('')

    async function CadastrarUsuario(event){
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
        try{
            const resposta = await fetch('/cadastroUsuario',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(usuarioData)
            })
            if(!resposta.ok){
                throw resposta
                console.debug("Erro ao criar usuario")
            }else{
                console.debug("usuario Inserido")
                alert('Inserido')
            }
        }catch(error){
            console.debug(error)
        }
    }

    return(

        <div className="container">
            <h1>Adicionar Usuários</h1>
            <form onSubmit={CadastrarUsuario}>
                <label>Nome:</label>
                <input type="text" id="" value={nome_usuario} onChange={e => setNome_usuario(e.target.value)} />
                <label>CPF:</label>
                <input type="text" id="" value={cpf_usuario} onChange={e => setCpf_usuario(e.target.value)} />
                <label>CEP:</label>
                <input type="text" id="" value={cep_usuario} onChange={e => setCep_usuario(e.target.value)} />
                <label>Estado:</label>
                <input type="text" id="" value={estado_usuario} onChange={e => setEstado_usuario(e.target.value)} />
                <label>Cidade:</label>
                <input type="text" id="" value={cidade_usuario} onChange={e => setCidade_usuario(e.target.value)} />
                <label>Bairro:</label>
                <input type="text" id="" value={bairro_usuario} onChange={e => setBairro_usuario(e.target.value)} />
                <label>Rua:</label>
                <input type="text" id="" value={rua_usuario} onChange={e => setRua_usuario(e.target.value)} />
                <label>Telefone:</label>
                <input type="text" id="" value={telefone_usuario} onChange={e => setTelefone_usuario(e.target.value)} />
                <label>E-mail:</label>
                <input type="text" id="" value={email_usuario} onChange={e => setEmail_usuario(e.target.value)} />
                <label>Nome User:</label>
                <input type="text" id="" value={nomeUser_usuario} onChange={e => setNomeUser_usuario(e.target.value)} />
                <label>Senha:</label>
                <input type="password" id="" value={senha_usuario} onChange={e => setSenha_usuario(e.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}
export default InserirUsuario