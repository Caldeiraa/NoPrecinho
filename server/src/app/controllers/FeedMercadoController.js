const FeedMercado = require("../models/FeedMercado")

class FeedMercadoController{

    index(req,res){
        let {id_mercado} = req.body
        FeedMercado.mostrarTodos(id_mercado).then(resposta=>{
            
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
    show(req,res){
        let {id_prod} = req.params
        let {id_mercado} = req.body
        FeedMercado.mostrarUm(id_prod,id_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new FeedMercadoController()