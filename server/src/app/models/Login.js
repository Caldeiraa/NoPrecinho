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
    verificaUsuarioSenha(email,senha){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM usuario WHERE email_usuario = '${email}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }else{
                    if(retorno.length === 0){
                        resolve([401,"usuario ou senha invalida"])
                    }else{
                        let hash = retorno[0].senha
                        let logado = bcrypt.compareSync(senha, hash);
                        if(logado){
                            /*let usuario_id = retorno[0].usuario_id
                            let usuario_tipo = retorno[0].usuario_tipo*/

                            let {usuario_id,usuario_tipo} = retorno[0]
                            resolve([200,"logado", usuario_id, usuario_tipo])
                        }else{
                            resolve(401,"usuario ou senha Invalida")
                        }
                    }
                }
            })
        })
    }

}

module.exports = new Login()