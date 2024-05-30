const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")

class FeedMercado{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    mostrarTodos() {
        return new Promise((resolve, reject) => {
            let sql = `select * from vw_produtos_mercado;`;
            this.conexao.query(sql, function(erro, retorno) {
                if (erro) {
                    reject([400, erro]);
                } else {
                    resolve([201, retorno]);
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