const CadastroUsuario = require("../models/CadastroUsuario")

class CadastroUController{
    create(req, res){
        let nome_usuario = req.body.nome_usuario
        let cpf_usuario = req.body.cpf_usuario
        let cep_usuario = req.body.cep_usuario
        let estado_usuario = req.body.estado_usuario
        let cidade_usuario = req.body.cidade_usuario
        let bairro_usuario = req.body.bairro_usuario
        let rua_usuario = req.body.rua_usuario
        let telefone_usuario = req.body.telefone_usuario
        let email_usuario = req.body.email_usuario
        let nomeUser_usuario = req.body.nomeUser_usuario
        let senha_usuario = req.body.senha_usuario

        let senha1 =req.body.senha1
        let senha2 = req.body.senha2

        if(senha1 == senha2){
            senha_usuario = senha2
        }
        CadastroUsuario.inserir(nome_usuario,cpf_usuario,cep_usuario,estado_usuario,cidade_usuario,bairro_usuario,rua_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        }
        )
    }

    index(req,res){
        CadastroUsuario.mostrarTodos().then(resposta=>{
            console.log(resposta[1])
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new CadastroUController()