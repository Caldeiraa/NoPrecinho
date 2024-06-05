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
          let sql = `SELECT
                      'usuario' AS tipo_conta,
                      l.id_login AS id,
                      u.nome_usuario,
                      u.email_usuario,
                      u.senha,
                      m.nome_mercado,
                      m.email_mercado,
                      m.senha,
                      a.nome_adm,
                      a.email_adm,
                      a.senha
                    FROM login l
                    LEFT JOIN usuario u ON l.usuario_id = u.id_usuario
                    LEFT JOIN mercado m ON l.mercado_id = m.id_mercado
                    LEFT JOIN adm a ON l.adm_id = a.id_adm
                    WHERE (u.email_usuario = '${email}' OR m.email_mercado = '${email}' OR a.email_adm = '${email}') AND (u.senha = '${senha}' OR m.senha = '${senha}' OR a.senha = '${senha}');`;
      
          this.conexao.query(sql, function (erro, retorno) {
            if (erro) {
              reject([400, erro]);
            } else {
              // Modify the response to include all attributes
              let modifiedResponse = [];
              retorno.forEach(row => {
                modifiedResponse.push({
                  tipo_conta: row.tipo_conta,
                  id: row.id,
                  id_login: row.id_login,
                  nome: row.nome_usuario || row.nome_mercado || row.nome_adm, // Include adm name
                  email: row.email_usuario || row.email_mercado || row.email_adm, // Include adm email
                  senha: row.senha
                });
              });
              resolve([201, modifiedResponse]);
            }
          });
        });
      }
      
   
}

module.exports = new Login()
