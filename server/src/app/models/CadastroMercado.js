const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require('bcrypt');
const caminhoServer = require("path")

class CadastroMercado{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM mercado'
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])

                resolve([201,retorno])
            })
        })
    }

    inserir(arquivo,nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha_mercado){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(senha_mercado, salt)
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO mercado (nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha) VALUE
             ('${nome_fantasia}','${razao_social}','${cnpj}','${telefone_mercado}','${cep_mercado}','${estado_mercado}','${cidade_mercado}','${bairro_mercado}','${rua_mercado}','${email_mercado}','${logo_mercado}','${descricao_mercado}','${hash}');`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                   reject([400,erro]) //erro 
                } 
                arquivo.mv(caminhoServer+"/../public/img/"+logo_mercado)
                resolve([201,"Inserido"])
            })
        })
    }

    atualizar(nome_fantasia, id_mercado) {
        return new Promise((resolve, reject) => {
            // Verifica se o nome_fantasia está definido
            if (!nome_fantasia) {
                reject([400, "O nome_fantasia não foi fornecido"]);
                return;
            }
    
            let sql = `UPDATE mercado SET nome_fantasia = '${nome_fantasia}' WHERE id_mercado = '${id_mercado}'`;
    
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                    return;
                }
    
                // Verifica se a atualização afetou alguma linha
                if (retorno.affectedRows > 0) {
                    resolve([201, "Atualizado com sucesso"]);
                } else {
                    reject([404, "ID do mercado não encontrado"]);
                }
            });
        });
    }
    
    deletar(id_mercado) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM mercado WHERE id_mercado = '${id_mercado}'`;
    
            this.conexao.query(sql, function (erro, resultado) {
                if (erro) {
                    reject([400, erro]);
                    return;
                }
                if (resultado.affectedRows > 0) {
                    resolve([201, "Mercado deletado com sucesso"]);
                } else {
                    resolve([404, "Mercado não encontrado"]);
                }
            });
        });
    }

    
    verificaUsuarioSenha(email, senha) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM mercado WHERE email_mercado = ?';
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
                            let { id_mercado, nome_fantasia } = retorno[0]; 
                            resolve([200, "logado", id_mercado, nome_fantasia]); 
                        } else {
                            resolve([401, "usuario ou senha invalida"]);
                        }
                    }
                }
            });
        });
    }
    

    mostrarLogo(){
        return new Promise((resolve,reject)=>{
            let sql = ' SELECT logo_mercado FROM mercado;'
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])

                resolve([201,retorno])
            })
        })
    }

}

module.exports = new CadastroMercado()