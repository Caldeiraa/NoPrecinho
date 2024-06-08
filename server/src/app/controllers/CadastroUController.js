const CadastroUsuario = require("../models/CadastroUsuario")
const jwt = require("jsonwebtoken")
const secret = "123"

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
        let  id_usuario = req.params.id_usuario 

        console.debug(id_usuario)
        CadastroUsuario.deletar(id_usuario).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
       ).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
       )
    }

    logar(req, res){
        let{email, senha} = req.body
        CadastroUsuario.verificaUsuarioSenha(email, senha).
        then(
            resposta =>{
                console.log(resposta)
                let usuario_id = resposta[2]
                let tipo = resposta[3]
                let token = ''
                if(resposta[0] === 200){
                    token = jwt.sign({usuario_id, tipo}, secret,{expiresIn:300})
                }
                res.status(resposta[0]).json({token})
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1])
            }
        )
    }
    verificaToken(req, res, next){
        const token = req.headers['x-access-token']
        jwt.verify(token, secret, (erro, decoded)=>{
            if(erro){
                return res.status(401).json("Usuário não autenticado")
            }else{
                req.usuario_id = decoded.usuario_id
                req.tipo = decoded.tipo
                console.debug("Id:"+ decoded.tipo + "Tipo:"+ decoded.usuario_id)
                next()
            }
        })                
    }
   
}

module.exports = new CadastroUController()