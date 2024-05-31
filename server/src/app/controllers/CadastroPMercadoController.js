const CadastroProdMercado = require("../models/CadastroProdMercado")

class CadastroPMercadoController{
    create(req, res){
        let nome_prod_mercado = req.body.nome_prod_mercado
        let marca_mercado = req.body.marca_mercado
        let peso_mercado = req.body.peso_mercado
        let preco_mercado = req.body.preco_mercado
        let foto_prod_mercado = req.files.imagem.name
        let descircao_prod_mercado = req.body.descircao_prod_mercado
        let mercado_id = req.body.mercado_id
        let id_subCategoria = req.body.id_subCategoria

        foto_prod_mercado = foto_prod_mercado.split(".")
        let extensao = foto_prod_mercado[foto_prod_mercado.length-1]

        if(extensao === "jpg" || extensao === "png"){
            foto_prod_mercado = new Date().getTime()+"."+[foto_prod_mercado.length-1]
            let arquivo = req.files.imagem
        
            CadastroProdMercado.inserir(arquivo,nome_prod_mercado,marca_mercado,peso_mercado,preco_mercado,foto_prod_mercado,descircao_prod_mercado,mercado_id,id_subCategoria).then(resposta=>{
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

    comparar(req,res){
        let {nome_prod,marca_prod} = req.body

        CadastroProdMercado.comparacao(nome_prod,marca_prod).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new CadastroPMercadoController()