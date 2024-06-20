const CadastroProdMercado = require("../models/CadastroProdMercado")

class CadastroPMercadoController{
    create(req, res){
        let nome_prod = req.body.nome_prod
        let marca_mercado = req.body.marca_mercado
        let peso_mercado = req.body.peso_mercado
        let preco_mercado = req.body.preco_mercado
        let foto_produto = req.files.foto_produto.name
        let descricao_prod = req.body.descricao_prod
        let mercado_id = req.body.mercado_id
        let id_subCategoria = req.body.id_subCategoria

        foto_produto = foto_produto.split(".")
        let extensao = foto_produto[foto_produto.length-1]

        if(extensao === "jpg" || extensao === "png" || extensao === "JPEG"){
            foto_produto = new Date().getTime()+"."+extensao
            let arquivo = req.files.foto_produto
        
            CadastroProdMercado.inserir(nome_prod,marca_mercado,peso_mercado,preco_mercado,foto_produto,descricao_prod,mercado_id,id_subCategoria,arquivo).then(resposta=>{
                res.status(resposta[0]).json(resposta[1])
            }).catch(
                resposta =>{
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
            )
        }else{
            res.status(415).json({alert:"Arquivo nao suportado"})
        }
    }

    index(req,res){
        CadastroProdMercado.mostrarTodos().then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    indexMercado(req,res){
        let {id_mercado} = req.params
        CadastroProdMercado.mostrarProdMercado(id_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    indexSubCategoria(req,res){
        let categoria_id = req.params.categoria_id
        
        CadastroProdMercado.mostrarSubCategoria(categoria_id).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    async comparar(req, res) {
        let { produtos } = req.body;
    
        if (!Array.isArray(produtos) || produtos.length === 0) {
            return res.status(400).json({ error: "O formato da requisição é inválido ou vazio." });
        }
    
        const respostas = [];
    
        try {
            for (let produto of produtos) {
                const { nome_produto, marca_produto } = produto;
    
                if (!nome_produto || !marca_produto) {
                    respostas.push({ status: 400, data: "Nome e marca do produto são obrigatórios." });
                    continue;
                }
    
                try {
                    const resposta = await CadastroProdMercado.comparacao(nome_produto, marca_produto);
                    respostas.push({ comparacao: resposta[1] });
                } catch (erro) {
                    respostas.push({ status: erro[0], data: "Erro: " + erro[1].errno });
                }
            }
    
            res.status(200).json(respostas);
        } catch (error) {
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
    
    
    

    update(req,res){
       
        let  id_produto = parseInt(req.params.id_produto) 
        let {preco_novo} = req.body

        CadastroProdMercado.atualizar(id_produto,preco_novo).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }

    destroy(req,res){
       
        let  id_produto = parseInt(req.params.id_produto) 
        
        CadastroProdMercado.deletar(id_produto).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }
}

module.exports = new CadastroPMercadoController()
