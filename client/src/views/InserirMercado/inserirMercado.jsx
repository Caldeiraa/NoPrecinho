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
    const [logo_mercado, setLogo_mercado] = useState('')
    const [descricao_mercado, setDescricao_mercado] = useState('')
    const [senha, setSenha] = useState('')

    async function CadastrarMercado(event) {
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
        try {
            const resposta = await fetch('/cadastroMercado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mercadoData)
            })
            if (!resposta.ok) {
                console.debug("Erro ao criar Mercado")
            } else {
                console.debug("usuario Mercado")
                alert('Inserido')
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
                            <input value={senha} onChange={e => setSenha(e.target.value)} name="" type="password" className="form-control rounded-4 border border-black p-2 mt-2" />
                        </div>

                        <div className="col-2">

                        </div>

                        <div className="col-md-5">
                            <label for="" className="form-label fs-4 mt-3">Razão social:</label>
                            <input value={razao_social} onChange={e => setRazao_social(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Telefone:</label>
                            <input value={telefone_mercado} onChange={e => setTelefone_mercado(e.target.value)} name="" type="text" className="form-control rounded-4 border border-black p-2 mt-2" />
                            <label for="" className="form-label fs-4 mt-3">Logo:</label>
                            <input value={logo_mercado} onChange={e => setLogo_mercado(e.target.value)} name="" type="file" className="form-control rounded-4 border border-black p-2 mt-2" />
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
                    <button type="submit" className="btn border border-black  rounded-4 mt-5 cadastrobtn" >Cadastrar</button>
                </form>
            </div>
        </div>


        </div>


    )
}
export default InserirMercado