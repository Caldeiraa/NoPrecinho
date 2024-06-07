const CadastroProdMercado = require("../models/CadastroProdMercado")

class CadastroPMercadoController{
    create(req, res){
        let nome_prod_mercado = req.body.nome_prod_mercado
        let marca_mercado = req.body.marca_mercado
        let peso_mercado = req.body.peso_mercado
        let preco_mercado = req.body.preco_mercado
        let foto_prod_mercado = req.files.foto_produto.name
        let descricao_prod = req.body.descricao_prod
        let mercado_id = req.body.mercado_id
        let id_subCategoria = req.body.id_subCategoria

        foto_prod_mercado = foto_prod_mercado.split(".")
        let extensao = foto_prod_mercado[foto_prod_mercado.length-1]

        if(extensao === "jpg" || extensao === "png"){
            foto_prod_mercado = new Date().getTime()+"."+extensao
            let arquivo = req.files.foto_produto
        
            CadastroProdMercado.inserir(nome_prod_mercado,marca_mercado,peso_mercado,preco_mercado,foto_prod_mercado,descricao_prod,mercado_id,id_subCategoria,arquivo).then(resposta=>{
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

    comparar(req, res) {
        let { produtos } = req.body;
    
        if (!Array.isArray(produtos)) {
            return res.status(400).json({ error: "O formato da requisição é inválido." });
        }
    
        const compararProdutos = async () => {
            let respostas = [];
            for (let produto of produtos) {
                let { nome_prod, marca_prod } = produto;
                try {
                    let resposta = await CadastroProdMercado.comparacao(nome_prod, marca_prod);
                    respostas.push({ status: resposta[0], data: resposta[1] });
                } catch (erro) {
                    respostas.push({ status: erro[0], data: "Erro: " + erro[1].errno });
                }
            }
            res.send(respostas);
        };
    
        compararProdutos();
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
