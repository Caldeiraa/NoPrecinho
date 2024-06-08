const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require('bcrypt');
const caminhoServer = require("path")

class Login{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    mostrarTodos(email, senha) {
      
        return new Promise((resolve, reject) => {
            let sql = `SELECT 'usuario' AS tipo_conta, id_usuario AS id FROM usuario WHERE email_usuario = '${email}' AND senha = '${logado}'
                       UNION ALL
                       SELECT 'mercado' AS tipo_conta, id_mercado AS id FROM mercado WHERE email_mercado = '${email}' AND senha = '${senha}';`;
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

module.exports = new Login()