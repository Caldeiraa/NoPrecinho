const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")

class CadastroProdMercado{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = "SELECT produto_mercado.*, mercado.nome_fantasia AS nome_mercado FROM produto_mercado JOIN mercado ON produto_mercado.mercado_id = mercado.id_mercado;"
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])

                resolve([201,retorno])
            })
        })
    }

    inserir(arquivo,nome_prod_mercado,marca_mercado,peso_mercado,preco_mercado,foto_prod_mercado,descircao_prod_mercado,mercado_id,id_subCategoria){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO produto_mercado (nome_produto,marca_produto,peso_produto,preco_produto,foto_produto,descricao,mercado_id,sub,sub_categoria_id) VALUE
             ('${nome_prod_mercado}','${marca_mercado}','${peso_mercado}','${preco_mercado}','${foto_prod_mercado}','${descircao_prod_mercado}','${mercado_id},'${id_subCategoria}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro
                arquivo.mv(caminhoServer + "/../img"+foto_prod_mercado)
                resolve([201,"Inserido"])
            })
        })
    }

    comparacao(){
        /*async function verificarProdutos() {
            try {
              // Seleciona todos os registros da tabela produto_mercado
              const produtos = await knex('produto_mercado').select('*');
          
              // Percorre os resultados e verifica os valores
              produtos.forEach(produto => {
                // Lógica para verificar os valores do produto
                console.log(`Nome do Produto: ${produto.nome_produto}, Preço: ${produto.preco_produto}`);
              });
            } catch (error) {
              console.error('Erro ao verificar os produtos:', error);
            } finally {
              // Fecha a conexão com o banco de dados
              await knex.destroy();
            }
          }
          
          // Chama a função para verificar os produtos
          verificarProdutos();*/

        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO produto_mercado (nome_produto,marca_produto,peso_produto,preco_produto,foto_produto,descricao,mercado_id,sub,sub_categoria_id) VALUE
             ('${nome_prod_mercado}','${marca_mercado}','${peso_mercado}','${preco_mercado}','${foto_prod_mercado}','${descircao_prod_mercado}','${mercado_id},'${id_subCategoria}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro
                arquivo.mv(caminhoServer + "/../img"+foto_prod_mercado)
                resolve([201,"Inserido"])
            })
        })
    }

}

module.exports = new CadastroProdMercado()