import { useState } from "react";

function InserirMercado(){
    const [nome_fantasia, setNome_fantasia] = useState('')
    const [razao_social, setRazao_social] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone_mercado, setTelefone_mercado] = useState('')
    const [cep_mercado, setCep_mercado]= useState('')
    const [estado_mercado, setEstado_mercado] = useState('')
    const [cidade_mercado, setCidade_mercado] = useState('')
    const [bairro_mercado, setBairro_mercado]= useState('')
    const [rua_mercado, setRua_mercado]= useState('')
    const [email_mercado,setEmail_mercado]= useState('')
    const [logo_mercado,setLogo_mercado]= useState('')
    const [descricao_mercado,setDescricao_mercado]= useState('')
    const [senha,setSenha]= useState('')

    async function CadastrarMercado(event){
        event.preventDefault()
        const mercadoData = {
            nome_fantasia,
            razao_social,
            cnpj,
            telefone_mercado,
            cep_mercado,
            estado_mercado,
            cidade_mercado,
            bairro_mercado,
            rua_mercado,
            email_mercado,
            logo_mercado,
            descricao_mercado,
            senha
        }
        try{
            const resposta = await fetch('/cadastroMercado',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(mercadoData)
            })
            if(!resposta.ok){
                console.debug("Erro ao criar Mercado")
            }else{
                console.debug("usuario Mercado")
                alert('Inserido')
            }
        }catch(error){
            console.debug(error)
        }
    }

    return(

        <div className="container">
            <h1>Adicionar Mercado</h1>
            <form onSubmit={CadastrarMercado}>
                <label>Nome Fantasia:</label>
                <input type="text" id="" value={nome_fantasia} onChange={e => setNome_fantasia(e.target.value)} />
                <label>Razão Social:</label>
                <input type="text" id="" value={razao_social} onChange={e => setRazao_social(e.target.value)} />
                <label>CNPJ:</label>
                <input type="text" id="" value={cnpj} onChange={e => setCnpj(e.target.value)} />
                <label>Telefone:</label>
                <input type="text" id="" value={telefone_mercado} onChange={e => setTelefone_mercado(e.target.value)} />
                <label>CEP:</label>
                <input type="text" id="" value={cep_mercado} onChange={e => setCep_mercado(e.target.value)} />
                <label>Estado:</label>
                <input type="text" id="" value={estado_mercado} onChange={e => setEstado_mercado(e.target.value)} />
                <label>Cidade:</label>
                <input type="text" id="" value={cidade_mercado} onChange={e => setCidade_mercado(e.target.value)} />
                <label>Bairro:</label>
                <input type="text" id="" value={bairro_mercado} onChange={e => setBairro_mercado(e.target.value)} />
                <label>Rua:</label>
                <input type="text" id="" value={rua_mercado} onChange={e => setRua_mercado(e.target.value)} />
                <label>E-mail:</label>
                <input type="text" id="" value={email_mercado} onChange={e => setEmail_mercado(e.target.value)} />
                <label>Logo:</label>
                <input type="text" id="" value={logo_mercado} onChange={e => setLogo_mercado(e.target.value)} />
                <label>Descrição:</label>
                <input type="text" id="" value={descricao_mercado} onChange={e => setDescricao_mercado(e.target.value)} />
                <label>Senha:</label>
                <input type="text" id="" value={senha} onChange={e => setSenha(e.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}
export default InserirMercado