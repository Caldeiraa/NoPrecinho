const CadastroUsuario = require("../models/CadastroUsuario")

class CadastroUController{
    create(req, res){
        let nome_usuario = req.body.nome_usuario
        let cpf_usuario = req.body.cpf_usuario
        let dataNascimento = req.body.dataNascimento
        let cep_usuario = req.body.cep_usuario
        let cidade_usuario = req.body.cidade_usuario
        let telefone_usuario = req.body.telefone_usuario
        let email_usuario = req.body.email_usuario
        let nomeUser_usuario = req.body.nomeUser_usuario
        let senha_usuario = req.body.senha_usuario

        CadastroUsuario.inserir(nome_usuario,cpf_usuario,dataNascimento,cep_usuario,cidade_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        }
        )
    }

    index(req,res){
        CadastroUsuario.mostrarTodos().then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }


}

module.exports = new CadastroUController()