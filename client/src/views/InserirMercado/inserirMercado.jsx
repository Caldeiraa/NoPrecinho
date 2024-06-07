import { useState } from "react";
import styles from './InserirMercado.module.css'

function InserirMercado() {
    const [nome_fantasia, setNome_fantasia] = useState('')
    const [razao_social, setRazao_social] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone_mercado, setTelefone_mercado] = useState('')
    const [cep_mercado, setCep_mercado] = useState('')
    const [estado_mercado, setEstado_mercado] = useState('')
    const [cidade_mercado, setCidade_mercado] = useState('')
    const [bairro_mercado, setBairro_mercado] = useState('')
    const [rua_mercado, setRua_mercado] = useState('')
    const [email_mercado, setEmail_mercado] = useState('')
    const [logo_mercado, setLogo_mercado] = useState(null)
    const [descricao_mercado, setDescricao_mercado] = useState('')
    const [senha_mercado, setSenha_mercado] = useState('')

    async function CadastrarMercado(event) {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append("nome_fantasia",nome_fantasia)
        formData.append("razao_social",razao_social)
        formData.append("cnpj",cnpj)
        formData.append("telefone_mercado",telefone_mercado)
        formData.append("cep_mercado",cep_mercado)
        formData.append("estado_mercado",estado_mercado)
        formData.append("cidade_mercado",cidade_mercado)
        formData.append("bairro_mercado",bairro_mercado)
        formData.append("rua_mercado",rua_mercado)
        formData.append("email_mercado",email_mercado)
        formData.append("descricao_mercado",descricao_mercado)
        formData.append("senha_mercado",senha_mercado)

        if(logo_mercado){
           formData.append("logo_mercado",logo_mercado) 
        }

        try {
            const resposta = await fetch('/cadastroMercado', {
                method: 'POST',
                body: formData
                
            })
            if (!resposta.ok) {
                alert("Erro ao realizar cadastro")
            } else {
                alert("mercado inserido")
                window.location.href  = "/login"
                
            }
        } catch (error) {
            console.debug(error)
        }
    }

    return (

        <div class="conteudo" >
            <div id="cadastro" className="container pt-5">
            <h3 className="mt-5 text-center pt-3">Cadastro de Usuário:</h3>
            <div className="">
                <form className={styles.formMercado} onSubmit={CadastrarMercado}>
                    <div className="row">
                        <div className="col-md-5 ">
                            <label for="" className="form-label fs-4 mt-3">Nome fantasia:</label>
                            <input value={nome_fantasia} onChange={e => setNome_fantasia(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">CNPJ:</label>
                            <input value={cnpj} onChange={e => setCnpj(e.target.value)} name="cpf_usuario" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">E-mail:</label>
                            <input value={email_mercado} onChange={e => setEmail_mercado(e.target.value)} name="" type="email" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">CEP:</label>
                            <input value={cep_mercado} onChange={e => setCep_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Cidade:</label>
                            <input value={cidade_mercado} onChange={e => setCidade_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Rua:</label>
                            <input value={rua_mercado} onChange={e => setRua_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Senha:</label>
                            <input value={senha_mercado} onChange={e => setSenha_mercado(e.target.value)} name="" type="password" className="form-control rounded-4 border border-black p-2 mt-2" />
                        </div>

                        <div className="col-2">

                        </div>

                        <div className="col-md-5">
                            <label for="" className="form-label fs-4 mt-3">Razão social:</label>
                            <input value={razao_social} onChange={e => setRazao_social(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Telefone:</label>
                            <input value={telefone_mercado} onChange={e => setTelefone_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Logo:</label>
                            <input onChange={e => setLogo_mercado(e.target.files[0])} name="logo_mercado" type="file" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Estado:</label>
                            <input value={estado_mercado} onChange={e => setEstado_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Bairro:</label>
                            <input value={bairro_mercado} onChange={e => setBairro_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Descrição:</label>
                            <input value={descricao_mercado} onChange={e => setDescricao_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Confirmar senha:</label>
                            <input name="" type="password" className="form-control rounded-4 border border-black p-2 mt-2" />

                        </div>
                    </div>
                    <button type="submit" className="btn border border-black  rounded-4 mt-5 cadastrobtn">Cadastrar</button>
                </form>
            </div>
        </div>


        </div>


    )
}
export default InserirMercado