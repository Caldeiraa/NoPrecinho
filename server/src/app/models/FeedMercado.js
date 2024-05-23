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

}

module.exports = new FeedMercado()