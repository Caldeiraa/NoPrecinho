const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")

class CadastroUsuario{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM usuario'
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])

                resolve([201,retorno])
            })
        })
    }

    inserir(nome_usuario,cpf_usuario,cep_usuario,estado_usuario,cidade_usuario,bairro_usuario,rua_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO usuario (nome_usuario,cpf_usuario,cep_usuario,estado_usuario,cidade_usuario,bairro_usuario,rua_usuario,telefone_usuario,email_usuario,nome_user_usuario,senha) VALUE
             ('${nome_usuario}','${cpf_usuario}','${cep_usuario}','${estado_usuario}','${cidade_usuario}','${bairro_usuario}','${rua_usuario}','${telefone_usuario}','${email_usuario}','${nomeUser_usuario}','${senha_usuario}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro
               
                resolve([201,"Inserido"])
            })
        })
    }
    atualizar(nome_usuario,id_usuario){
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE usuario SET nome_usuario = '${nome_usuario}' WHERE id_usuario = '${id_usuario}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro                

                resolve([201,"Atualizado com sucesso"])
            })
        })
    }

    deletar(id_usuario){
        return new Promise((resolve,reject)=>{
            let sql = `DELETE FROM usuario WHERE id_usuario = '${id_usuario}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])
                
                resolve([201,"Deletado com sucesso"])
            })
        })
    }

}

module.exports = new CadastroUsuario()