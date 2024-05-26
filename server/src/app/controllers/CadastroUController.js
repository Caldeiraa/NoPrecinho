const CadastroUsuario = require("../models/CadastroUsuario")


class CadastroUController{
    create(req, res){
        console.log(req.body)
        let { nome_usuario, cpf_usuario, cep_usuario, estado_usuario, cidade_usuario, bairro_usuario, rua_usuario, telefone_usuario, email_usuario, 
            nomeUser_usuario, senha_usuario } = req.body;

        CadastroUsuario.inserir(nome_usuario,cpf_usuario,cep_usuario,estado_usuario,cidade_usuario,bairro_usuario,rua_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        })
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

    update(req,res){
        let id_usuario = parseInt(req.params.id_usuario)
        let nome_usuario = req.body.nome_usuario

        console.debug("PUT :: /usuarios/:id")
        CadastroUsuario.atualizar(nome_usuario,id_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }

    destroy(req,res){
        let  id_usuario = parseInt(req.params.id_usuario) 

        console.debug("DELETE :: /usuario/:id" +id_usuario)
        CadastroUsuario.deletar(id_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
       ).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
       )
    }

   
}

module.exports = new CadastroUController()