const CadastroMercado = require("../models/CadastroMercado")

class CadastroMController{
    create(req, res){
        let nome_fantasia = req.body.nome_fantasia
        let razao_social = req.body.razao_social
        let cnpj = req.body.cnpj
        let telefone_mercado = req.body.telefone_mercado
        let cep_mercado = req.body.cep_mercado
        let cidade_mercado = req.body.cidade_mercado
        let email_mercado = req.body.email_mercado
        let logo = req.body.logo
        let descricao_mercado = req.body.descricao_mercado
        let senha_mercado = req.body.senha_mercado

        CadastroMercado.inserir(nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,cidade_mercado,email_mercado,logo,descricao_mercado,senha_mercado).then(resposta=>{
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
}

module.exports = new CadastroMController()