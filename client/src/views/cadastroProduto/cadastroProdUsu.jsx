import {useState} from 'react'

function CadastroProdUsu() {
    const[nome_produto, setNome_produto] = useState('')
    const[marca_produto, setMarca_produto] = useState('')
    const[preco_produto, setPreco_produto] = useState('')
    const[peso_produto, setPeso_produto] = useState('')
    const[foto_produto, setFoto_produto] = useState('')
    const[descricao_produto, setDescricao_produto] = useState('')

    async function cadastrarProdutosUsU(event){
        event.preventDefault()
        const produtoData = {
            nome_produto,
            marca_produto,
            peso_produto,
            preco_produto,
            foto_produto,
            descricao_produto
        }
        try {
            const resposta = await fetch('/cadastroPMer',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(produtoData)
            })
            if(!resposta.ok){
                throw resposta
                console.debug("Erro  ao cadastrar produto")
            }else{
                console.debug("Produto cadastrado")
                alert("Cadastrado")
            }
        } catch (error) {
            console.debug(error)
        }
    }

    return (
        <div class="conteudo">
            <div id='cadastro' className="container">
                <form>
                    <div class="row">
                        <div class="col-md">
                            <div class="box-prod">
                                <a class="box-prod" href=""><input value={foto_produto} onchange={e => setFoto_produto(e.target.value)} type="file" /></a>
                            </div>
                        </div>
                        <div class="col-md">
                            <label for="" class="form-label fs-4 mt-3">Nome Completo:</label>
                            <input value={nome_produto} onChange={e => setNome_produto(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                            <label for="" class="form-label fs-4 mt-3">Tipo:</label>
                            <input name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                            <label for="" class="form-label fs-4 mt-3">Preço:</label>
                            <input value={preco_produto} onChange={e => setPreco_produto(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                        </div>
                        <div class="col-md">
                            <label for="" class="form-label fs-4 mt-3">Marca:</label>
                            <input value={marca_produto} onChange={e => setMarca_produto(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                            <label for="" class="form-label fs-4 mt-3">Peso(Kg):</label>
                            <input value={peso_produto} onChange={e => setPeso_produto(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                            <label for="" class="form-label fs-4 mt-3">Descrição:</label>
                            <textarea value={descricao_produto} onchange={e => setDescricao_produto(e.target.value)} class="form-control border mb-5 border-black rounded-4" aria-label="With textarea" rows="5" cols="50" placeholder="Insira informações como localização e detalhes do produto"></textarea>

                        </div>
                    </div>
                    <button type="submit" onClick={cadastrarProdutosUsU} class="btn border border-black rounded-4 fs-4 float-end">Cadastrar</button>
                </form>
            </div>
            
        </div>
    )
}

export default CadastroProdUsu
