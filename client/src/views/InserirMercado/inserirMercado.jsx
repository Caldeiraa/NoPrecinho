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

        <div class="conteudo" >
                <div class="container-fluid p-0 text-center cabecalho">
                    <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                        <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
                        <img class="logo" src="img/NP.png" alt=""/>
                    </nav>
                    
                </div>
            
                <h3 class="mt-5 text-center">Cadastro de mercado</h3>
            
                <div class="container mt-5"/>
                    <form onSubmit={CadastrarMercado}/>
                        <div class="row"/>
                            <div class="col-md"/>
                                <label for="" class="form-label fs-4 mt-4">Nome Fantasia:</label>
                                <input value={nome_fantasia} onChange={e => setNome_fantasia(e.target.value)} type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                                <label for="" class="form-label fs-4 mt-4">CNPJ:</label>
                                <input type="text" id="" value={cnpj} onChange={e => setCnpj(e.target.value)} type= "" class="form-control rounded-4 border border-black p-2 mt-2"/>
                                <label for="" class="form-label fs-4 mt-4">CEP:</label>
                                <input value={cep_mercado} onChange={e => setCep_mercado(e.target.value)} type="" class="form-control rounded-4 border border-black p-2 mt-2" placeholder="*****-***"/>
                                <label for="" class="form-label fs-4 mt-4">E-mail:</label>
                                <input value={email_mercado} onChange={e => setEmail_mercado(e.target.value)} type="text" class="form-control rounded-4 border border-black p-2 mt-2" placeholder="exemplo@gmail.com" />
                                <label for="" class="form-label fs-4 mt-4">Senha:</label>
                                <input value={senha} onChange={e => setSenha(e.target.value)}  type="password" class="form-control rounded-4 border border-black p-2 mt-2" />
                            <div/>
            
                            <div class="col-2">
            
                            </div>
            
                            <div class="col-md"/>
                                <label for="" class="form-label fs-4 mt-4">Razão Social:</label>
                                <input value={razao_social} onChange={e => setRazao_social(e.target.value)} type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                                <label for="" class="form-label fs-4 mt-4">Telefone:</label>
                                <input value={telefone_mercado} onChange={e => setTelefone_mercado(e.target.value)} type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                                <label for="" class="form-label fs-4 mt-4">Cidade:</label>
                                <input value={cidade_mercado} onChange={e => setCidade_mercado(e.target.value)} type="email" class="form-control rounded-4 border border-black p-2 mt-2"/>
                                <label for="" class="form-label fs-4 mt-4">Logo:</label>
                                <input value={logo_mercado} onChange={e => setLogo_mercado(e.target.value)} class="form-control rounded-4 border border-black p-2 mt-2" type="file" id="formFile"/>
                                <label for="" class="form-label fs-4 mt-4">Confirmar Senha:</label>
                                <input type="password" class="form-control rounded-4 border border-black p-2 mt-2"/>
                            <div/>
                        <div/>
                        <button type="submit" class="btn border border-black mt-5 rounded-4"/>Cadastrar-se<button/>
                    <form/>
                    
                <div/>
                
            </div>

        
    )
}
export default InserirMercado