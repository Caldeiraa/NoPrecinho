const CadastroProdMercado = require("../models/CadastroProdMercado")

class CadastroPMercadoController{
    create(req, res){
        let nome_prod_mercado = req.body.nome_prod_mercado
        let marca_mercado = req.body.marca_mercado
        let peso_mercado = req.body.peso_mercado
        let preco_mercado = req.body.preco_mercado
        let foto_prod_mercado = req.files.imagem.name
        let descricao_prod = req.body.descricao_prod
        let mercado_id = req.body.mercado_id
        let id_subCategoria = req.body.id_subCategoria

        foto_prod_mercado = foto_prod_mercado.split(".")
        let extensao = foto_prod_mercado[foto_prod_mercado.length-1]

        if(extensao === "jpg" || extensao === "png"){
            foto_prod_mercado = new Date().getTime()+"."+extensao
            let arquivo = req.files.imagem
        
            CadastroProdMercado.inserir(nome_prod_mercado,marca_mercado,peso_mercado,preco_mercado,foto_prod_mercado,descricao_prod,mercado_id,id_subCategoria,arquivo).then(resposta=>{
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
        let { nome_prod, marca_prod, novos_produtos } = req.body;

        // Inicializa os arrays com os valores fornecidos
        let nome = [nome_prod];
        let marca = [marca_prod];
    
        // Adiciona novos produtos dinamicamente se fornecidos
        if (Array.isArray(novos_produtos)) {
            novos_produtos.forEach(produto => {
                nome.push(produto.nome);
                marca.push(produto.marca);
            });
        }
    
        // Verifica o tamanho dos arrays
        console.log(`Tamanho do array nome: ${nome.length}`);
        console.log(`Tamanho do array marca: ${marca.length}`);
    
        // Retorna os arrays e seus tamanhos na resposta
        res.send({
            nome: nome,
            tamanhoNome: nome.length,
            marca: marca,
            tamanhoMarca: marca.length
        });
    
        CadastroProdMercado.comparacao(nome_prod,marca_prod).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    update(req,res){
       
        let  id_produto = parseInt(req.params.id_produto) 
        let {preco_novo} = req.body

        CadastroProdMercado.atualizar(id_produto,preco_novo).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }

    destroy(req,res){
       
        let  id_produto = parseInt(req.params.id_produto) 
        
        CadastroProdMercado.deletar(id_produto).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
        
    }
}

module.exports = new CadastroPMercadoController()