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
    verificaUsuarioSenha(email, senha) {
        return new Promise((resolve, reject) => {
            // Consulta parametrizada para evitar injeção de SQL
            let sql = 'SELECT * FROM usuario WHERE email_usuario = ?';
    
            this.conexao.query(sql, [email], function(erro, retorno) {
                if (erro) {
                    console.debug(erro);
                    reject([400, erro]);
                } else {
                    if (retorno.length === 0) {
                        resolve([401, "usuario ou senha invalida"]);
                    } else {
                        let hash = retorno[0].senha;
                        let logado = bcrypt.compareSync(senha, hash);
                        if (logado) {
                            // Extração do id_usuario corretamente da tabela
                            let { id_usuario, nome_user_usuario } = retorno[0];
                            resolve([200, "logado", id_usuario, nome_user_usuario]);
                        } else {
                            resolve([401, "usuario ou senha invalida"]);
                        }
                    }
                }
            });
        });
    }

}

module.exports = new Login()