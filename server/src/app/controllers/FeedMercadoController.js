const FeedMercado = require("../models/FeedMercado")

class FeedMercadoController{

    index(req,res){
        FeedMercado.mostrarTodos().then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new FeedMercadoController()