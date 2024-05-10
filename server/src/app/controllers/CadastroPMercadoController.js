const CadastroProdMercado = require("../models/CadastroProdMercado")

class CadastroPMercadoController{
    create(req, res){
        let nome_prod_mercado = req.body.nome_prod_mercado
        let marca_mercado = req.body.marca_mercado
        let peso_mercado = req.body.peso_mercado
        let preco_mercado = req.body.preco_mercado
        let foto_prod_mercado = req.body.foto_prod_mercado
        let descircao_prod_mercado = req.body.descircao_prod_mercado
        let mercado_id = req.body.mercado_id
        let id_subCategoria = req.body.id_subCategoria

        CadastroProdMercado.inserir(nome_prod_mercado,marca_mercado,peso_mercado,preco_mercado,foto_prod_mercado,descircao_prod_mercado,mercado_id,id_subCategoria).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        }
        )
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
}

module.exports = new CadastroPMercadoController()