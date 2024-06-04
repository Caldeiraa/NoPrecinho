const CadastroMercado = require("../models/CadastroMercado")
const jwt = require("jsonwebtoken")
const secret = "123"

class CadastroMController{
    create(req, res){
        console.log(req.file)
        let {nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,descricao_mercado,senha_mercado} = req.body
        let logo_mercado = req.files.logo_mercado.name

        logo_mercado = logo_mercado.split(".")
        let extensao = logo_mercado[logo_mercado.length-1]

        if(extensao === "jpg" || extensao === "png" || extensao === "jpeg" ){
            logo_mercado = new Date().getTime()+"."+ extensao
            let arquivo = req.files.logo_mercado
           
            CadastroMercado.inserir(arquivo,nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }).catch(
                resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            })
        }else{
            res.status(415).json({alert:"Arquivo nao suportado"})
        }
       
    }

    index(req,res){
        CadastroMercado.mostrarTodos().then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    update(req,res){
        let id_mercado = parseInt(req.params.id_mercado)
        let nome_fantasia = req.body.nome_fantasia

        console.debug("PUT :: /mercados/:id")
        CadastroMercado.atualizar(nome_fantasia,id_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }

    destroy(req,res){

        let  id_mercado = parseInt(req.params.id_mercado) 
        
        console.debug("DELETE :: /mercado/:id"+id_mercado)
        CadastroMercado.deletar(id_mercado).then(resposta=>{
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
                let mercado_id = resposta[2]
                let usuario_tipo = resposta[3]
                let token = ''
                if(resposta[0] === 200){
                    token = jwt.sign({mercado_id, usuario_tipo}, secret,{expiresIn:300})
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
                req.mercado_id = decoded.mercado_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id:"+ decoded.usuario_tipo + "Tipo:"+ decoded.mercado_id)
                next()
            }
        })                
    }

}

module.exports = new CadastroMController()