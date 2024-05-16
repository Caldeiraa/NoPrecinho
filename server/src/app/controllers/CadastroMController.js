const CadastroMercado = require("../models/CadastroMercado")

class CadastroMController{
    create(req, res){
        let nome_fantasia = req.body.nome_fantasia
        let razao_social = req.body.razao_social
        let cnpj = req.body.cnpj
        let telefone_mercado = req.body.telefone_mercado
        let cep_mercado = req.body.cep_mercado
        let estado_mercado = req.body.estado_mercado
        let cidade_mercado = req.body.cidade_mercado
        let bairro_mercado = req.body.bairro_mercado
        let rua_mercado = req.body.rua_mercado
        let email_mercado = req.body.email_mercado
        let logo_mercado = req.body.logo_mercado
        let descricao_mercado = req.body.descricao_mercado
        let senha_mercado = req.body.senha_mercado

        CadastroMercado.inserir(nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
        }
        )
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
        let  id_mercado = req.params.id_mercado

        console.debug("DELETE :: /usuario/:id")
        CadastroMercado.deletar(id_mercado).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
       ).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
       )
    }

}

module.exports = new CadastroMController()