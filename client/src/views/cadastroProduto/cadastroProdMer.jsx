import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'
import estilo from './estiloCadProd.css'

function CadastroProdMer() {
    const [nome_prod_mercado, setNome_prod_mercado] = useState('')
    const [marca_mercado, setMarca_mercado] = useState('')
    const [descricao_prod, setDescricao_prod] = useState('')
    const [peso_mercado, setPeso_produto] = useState('')
    const [preco_mercado, setPreco_mercado] = useState('')
    const [foto_produto, setFoto_produto] = useState(null)
    const[id_subCategoria, setId_subCategoria] = useState('')

    const { id_categoria } = useParams()
    // const id_mercado = 
    const [subCategorias, setSubCategorias] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            window.location.href = "/login"
            alert("Efetue login")

        } 

        console.log(id_categoria)
        carregarSubCategorias()
    }, [])

    async function cadastrarProdutosMER(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const decodedToken = jwtDecode(token)

        let mercado_id = decodedToken.mercado_id
        alert(mercado_id)
        const formData = new FormData()
        formData.append("mercado_id", mercado_id)
        formData.append("nome_prod_mercado", nome_prod_mercado)
        formData.append("marca_mercado", marca_mercado)
        formData.append("descricao_prod", descricao_prod)
        formData.append("peso_mercado", peso_mercado)
        formData.append("preco_mercado", preco_mercado)
        formData.append("id_subCategoria", id_subCategoria)

        if (foto_produto) {
            formData.append("foto_produto", foto_produto)
        }

        try {
            const resposta = await fetch('/cadastroPMer', {
                method: 'POST',
                body: formData
            })
            if (!resposta.ok) {
                throw resposta
                console.debug("Erro  ao cadastrar produto")
            } else {
                console.debug("Produto cadastrado")
                alert("Cadastrado")
            }
        } catch (error) {
            console.debug(error)
        }
    }

    async function carregarSubCategorias() {
        try {
            //Fazer uma chamada da API
            const resposta = await fetch('/mostrarSub/' + id_categoria)

            if (!resposta.ok) {
                //Exibindo erro API
                console.debug("HTTP erro: " + resposta.status)
            } else {
                //Exibindo sucesso API
                let dados = await resposta.json()
                setSubCategorias(dados)
            }
        } catch (error) {
            console.error("Erro ao buscar categorias" + error)
        }
    }


    return (
        <div class="conteudo">
            <div id='cadastro' className='container'>
                <div class="row">
                    <div class="col-md">
                        <div class="box-prod">
                            <a class="box-prod" href=""><input onChange={e => setFoto_produto(e.target.files[0])} type="file" name="foto_produto" /></a>
                        </div>
                    </div>

                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-3">Nome Completo:</label>
                        <input value={nome_prod_mercado} onChange={e => setNome_prod_mercado(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                        <label for="" class="form-label fs-4 mt-3">Tipo:</label>
                        <input value={descricao_prod} onChange={e => setDescricao_prod(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                        <label for="" class="form-label fs-4 mt-3">Preço:</label>
                        <input value={preco_mercado} onChange={e => setPreco_mercado(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                    </div>
                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-3">Marca:</label>
                        <input value={marca_mercado} onChange={e => setMarca_mercado(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                        <label for="" class="form-label fs-4 mt-3">Peso(Kg):</label>
                        <input value={peso_mercado} onChange={e => setPeso_produto(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                        <label for="" class="form-label fs-4 mt-3">Categoria:</label>
                        <select class="form-select form-select-md rounded-4 border border-black mb-5" value={id_subCategoria} onChange={e => setId_subCategoria(e.target.value)} aria-label="Medium select example">
                            <option selected>Selecione uma categoria:</option>
                            {subCategorias.map(subCategorias => (
                                <option 
                                    value={subCategorias.id_sub_categoria}>
                                    {subCategorias.nome_sub_categoria}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" onClick={cadastrarProdutosMER} class="btnProd btn border border-black rounded-4 fs-4 float-end">Cadastrar</button>
            </div>
        </div>
    )
}
export default CadastroProdMer