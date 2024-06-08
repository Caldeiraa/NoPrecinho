import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import estilo from './estiloCadProd.css'

function CadastroProdMer() {
    const[nome_produto, setNome_produto] = useState('')
    const[marca_produto, setMarca_produto] = useState('')
    const[tipo_produto, setTipo_produto] = useState('')
    const[peso_produto, setPeso_produto] = useState('')
    const[preco_produto, setPreco_produto] = useState('')
    const[foto_produto, setFoto_produto] = useState(null)
    

    const {id_categoria} = useParams()

    const[subCategorias, setSubCategorias] = useState([])

    useEffect(()=>{
        console.log(id_categoria)
        carregarSubCategorias()
    },[])

    async function cadastrarProdutosMER(event){
        event.preventDefault()
        const formData = new FormData()
        formData.append("nome_produto",nome_produto)
        formData.append("marca_produto",marca_produto)
        formData.append("tipo_produto",tipo_produto)
        formData.append("peso_produto",peso_produto)
        formData.append("preco_produto",preco_produto)
        
        if(foto_produto){
            formData.append("foto_produto",foto_produto)
        }

        try {
            const resposta = await fetch('/cadastroPMer',{
                method:'POST',
                body: formData
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

    async function carregarSubCategorias(){
        try {
          //Fazer uma chamada da API
          const resposta = await fetch('/mostrarSub/'+id_categoria)
  
          if(!resposta.ok){
            //Exibindo erro API
            console.debug("HTTP erro: "+resposta.status)
          }else{
            //Exibindo sucesso API
            let dados = await resposta.json()
            setSubCategorias(dados)
          }
        } catch (error) {
          console.error("Erro ao buscar categorias"+error)
        }
      }


    return (
        <div class="conteudo">
            <div id='cadastro' className='container'>
                <div class="row">
                    <div class="col-md">
                        <div class="box-prod">
                        <a class="box-prod" href=""><input value={foto_produto} onchange={e => setFoto_produto(e.target.value)} type="file" name="foto_produto" /></a>
                        </div>
                    </div>

                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-3">Nome Completo:</label>
                        <input value={nome_produto} onChange={e => setNome_produto(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                        <label for="" class="form-label fs-4 mt-3">Tipo:</label>
                        <input value={tipo_produto} onChange={e => setTipo_produto(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" /> 
                        <label for="" class="form-label fs-4 mt-3">Preço:</label>
                        <input value={preco_produto} onChange={e => setPreco_produto(e.target.value)} name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                    </div>
                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-3">Marca:</label>
                        <input value={marca_produto} onChange={e => setMarca_produto(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                        <label for="" class="form-label fs-4 mt-3">Peso(Kg):</label>
                        <input value={peso_produto} onChange={e => setPeso_produto(e.target.value)} name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                        <label for="" class="form-label fs-4 mt-3">Categoria:</label>
                        <select class="form-select form-select-md rounded-4 border border-black mb-5" aria-label="Medium select example">
                            <option selected>Selecione uma categoria:</option>
                            {subCategorias.map(subCategorias=>(
                            <option key={subCategorias.id_sub_categoria}
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