const CadastroMercado = require("../models/CadastroMercado")

class CadastroMController{
    create(req, res){
        let {nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,descricao_mercado,senha_mercado} = req.body
        let logo_mercado = req.files.imagem.name

        logo_mercado = logo_mercado.split(".")
        let extensao = logo_mercado[logo_mercado.length-1]

        if(extensao === "jpg" || extensao === "png" ){
            logo_mercado = new Date().getTime()+"."+[logo_mercado.length-1]
            let arquivo = req.files.imagem
           
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

}

module.exports = new CadastroMController()