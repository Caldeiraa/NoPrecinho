const CadastroProdUsuario = require("../models/CadastroProdUsuario")

class CadastroUController{
    create(req, res){
        let nome_produto_usuario = req.body.nome_produto_usuario
        let marca_usuario = req.body.marca_usuario
        let peso_prod_usuario = req.body.peso_prod_usuario
        let preco_prod_usuario = req.body.preco_prod_usuario
        let foto_prod_usuario = req.body.foto_prod_usuario
        let descircao_prod_usuario = req.body.descircao_prod_usuario
        let usuario_id = req.body.usuario_id

        CadastroProdUsuario.inserir(nome_produto_usuario,marca_usuario,peso_prod_usuario,preco_prod_usuario,foto_prod_usuario,descircao_prod_usuario,usuario_id).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        }
        )
    }

    index(req,res){
        CadastroProdUsuario.mostrarTodos().then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new CadastroUController()