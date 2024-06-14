const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")

class FeedMercado{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    mostrarTodos(id_mercado) {
        return new Promise((resolve, reject) => {
            
            let sql = `SELECT
            mercado.logo_mercado,
            produto_mercado.foto_produto,
            produto_mercado.nome_produto,
            produto_mercado.marca_produto,
            produto_mercado.peso_produto,
            produto_mercado.preco_produto,
            mercado.nome_fantasia AS nome_mercado,
            'Ativo' AS status
        FROM
            produto_mercado
        JOIN
            mercado ON produto_mercado.mercado_id = mercado.id_mercado
        WHERE
            mercado.id_mercado =  ${id_mercado};`
        
            this.conexao.query(sql, function(erro, resultado) {
                if (erro) {
                    reject([400, erro]);
                } else {
                    resolve([200, resultado]);
                }
            });
        });
    }
    
    
    
    mostrarUm(id_prod) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT produto_mercado.*, mercado.nome_fantasia AS nome_mercado
            FROM produto_mercado
            JOIN mercado ON produto_mercado.mercado_id = mercado.id_mercado
            WHERE produto_mercado.id_produto_mercado = '${id_prod}';`;
            this.conexao.query(sql, function(erro, retorno) {
                if (erro) {
                    reject([400, erro]);
                } else {
                    resolve([201, retorno]);
                }
            });
        });
    }

}

module.exports = new FeedMercado()