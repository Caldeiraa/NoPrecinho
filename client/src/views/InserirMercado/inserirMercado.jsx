import React, { useState } from "react";
import InputMask from 'react-input-mask';
import styles from './InserirMercado.module.css';

function InserirMercado() {
    const [nome_fantasia, setNome_fantasia] = useState('');
    const [razao_social, setRazao_social] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone_mercado, setTelefone_mercado] = useState('');
    const [cep_mercado, setCep_mercado] = useState('');
    const [estado_mercado, setEstado_mercado] = useState('');
    const [cidade_mercado, setCidade_mercado] = useState('');
    const [bairro_mercado, setBairro_mercado] = useState('');
    const [rua_mercado, setRua_mercado] = useState('');
    const [email_mercado, setEmail_mercado] = useState('');
    const [logo_mercado, setLogo_mercado] = useState(null);
    const [descricao_mercado, setDescricao_mercado] = useState('');
    const [senha_mercado, setSenha_mercado] = useState('');
    const [confirmar_senha, setConfirmar_senha] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

    async function handleCepChange(event) {
        const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        setCep_mercado(cep);

        if (cep.length === 8) {
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

                if (!resposta.ok) {
                    throw new Error('CEP não encontrado');
                }

                const data = await resposta.json();

                if (data.erro) {
                    throw new Error('CEP inválido');
                }

                setEstado_mercado(data.uf);
                setCidade_mercado(data.localidade);
                setBairro_mercado(data.bairro);
                setRua_mercado(data.logradouro);
            } catch (error) {
                console.debug("Erro ao buscar CEP:", error);
                setErroMensagem("Erro ao buscar CEP");
            }
        }
    }

    async function CadastrarMercado(event) {
        event.preventDefault();

        // Validar se todos os campos obrigatórios estão preenchidos
        if (!nome_fantasia || !razao_social || !cnpj || !telefone_mercado || !cep_mercado || !estado_mercado || !cidade_mercado || !bairro_mercado || !rua_mercado || !email_mercado || !descricao_mercado || !senha_mercado || !confirmar_senha) {
            setErroMensagem("Por favor, preencha todos os campos.");
            return;
        }

        // Validar se as senhas coincidem
        if (senha_mercado !== confirmar_senha) {
            setErroMensagem("As senhas não coincidem.");
            return;
        }

        // Remover caracteres não numéricos do CNPJ
        const cnpjLimpo = cnpj.replace(/\D/g, '');

        const formData = new FormData();
        formData.append("nome_fantasia", nome_fantasia);
        formData.append("razao_social", razao_social);
        formData.append("cnpj", cnpjLimpo); // Enviar o CNPJ limpo
        formData.append("telefone_mercado", telefone_mercado);
        formData.append("cep_mercado", cep_mercado);
        formData.append("estado_mercado", estado_mercado);
        formData.append("cidade_mercado", cidade_mercado);
        formData.append("bairro_mercado", bairro_mercado);
        formData.append("rua_mercado", rua_mercado);
        formData.append("email_mercado", email_mercado);
        formData.append("descricao_mercado", descricao_mercado);
        formData.append("senha_mercado", senha_mercado);

        if (logo_mercado) {
            formData.append("logo_mercado", logo_mercado);
        }

        try {
            const resposta = await fetch('/cadastroMercado', {
                method: 'POST',
                body: formData
            });

            if (!resposta.ok) {
                console.debug("Erro ao criar Mercado");
                setErroMensagem("Erro ao criar mercado");
            } else {
                alert("Mercado criado com sucesso");
                console.debug("Mercado criado com sucesso");
                window.location.href = "/loginM";
            }
        } catch (error) {
            console.debug("Erro na requisição:", error);
            setErroMensagem("Erro na requisição");
        }
    }

    return (
        <div className="conteudo">
            <div id="cadastro" className="container pt-5">
                <h3 className="mt-5 text-center pt-3">Cadastro de Mercado:</h3>
                <div className="">
                    <form className={styles.formMercado} onSubmit={CadastrarMercado}>
                        <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="nome_fantasia" className="form-label fs-4 mt-3">Nome fantasia:</label>
                                <input value={nome_fantasia} onChange={e => setNome_fantasia(e.target.value)} id="nome_fantasia" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="cnpj" className="form-label fs-4 mt-3">CNPJ:</label>
                                <InputMask mask="99.999.999/9999-99" value={cnpj} onChange={e => setCnpj(e.target.value)} id="cnpj" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="email_mercado" className="form-label fs-4 mt-3">E-mail:</label>
                                <input value={email_mercado} onChange={e => setEmail_mercado(e.target.value)} id="email_mercado" type="email" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="cep_mercado" className="form-label fs-4 mt-3">CEP:</label>
                                <InputMask mask="99999-999" value={cep_mercado} onChange={handleCepChange} id="cep_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="cidade_mercado" className="form-label fs-4 mt-3">Cidade:</label>
                                <input value={cidade_mercado} onChange={e => setCidade_mercado(e.target.value)} id="cidade_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="rua_mercado" className="form-label fs-4 mt-3">Rua:</label>
                                <input value={rua_mercado} onChange={e => setRua_mercado(e.target.value)} id="rua_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="senha_mercado" className="form-label fs-4 mt-3">Senha:</label>
                                <input value={senha_mercado} onChange={e => setSenha_mercado(e.target.value)} id="senha_mercado" type="password" className="form-control rounded-4 border border-black p-2 mt-2" required />
                            </div>

                            <div className="col-2"></div>

                            <div className="col-md-5">
                                <label htmlFor="razao_social" className="form-label fs-4 mt-3">Razão social:</label>
                                <input value={razao_social} onChange={e => setRazao_social(e.target.value)} id="razao_social" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="telefone_mercado" className="form-label fs-4 mt-3">Telefone:</label>
                                <input value={telefone_mercado} onChange={e => setTelefone_mercado(e.target.value)} id="telefone_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="logo_mercado" className="form-label fs-4 mt-3">Logo:</label>
                                <input onChange={e => setLogo_mercado(e.target.files[0])} id="logo_mercado" type="file" className="form-control rounded-4 border border-black p-2 mt-2" required/>
                                
                                <label htmlFor="estado_mercado" className="form-label fs-4 mt-3">Estado:</label>
                                <input value={estado_mercado} onChange={e => setEstado_mercado(e.target.value)} id="estado_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="bairro_mercado" className="form-label fs-4 mt-3">Bairro:</label>
                                <input value={bairro_mercado} onChange={e => setBairro_mercado(e.target.value)} id="bairro_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="descricao_mercado" className="form-label fs-4 mt-3">Descrição:</label>
                                <input value={descricao_mercado} onChange={e => setDescricao_mercado(e.target.value)} id="descricao_mercado" type="text" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                <label htmlFor="confirmar_senha" className="form-label fs-4 mt-3">Confirmar senha:</label>
                                <input value={confirmar_senha} onChange={e => setConfirmar_senha(e.target.value)} id="confirmar_senha" type="password" className="form-control rounded-4 border border-black p-2 mt-2" required />

                                {erroMensagem && <p className="text-danger mt-3">{erroMensagem}</p>}

                                <button type="submit" className="btn border border-black mt-4 rounded-4 mt-5 cadastrobtn">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InserirMercado;