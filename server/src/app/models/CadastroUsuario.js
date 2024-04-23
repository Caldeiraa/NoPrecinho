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

    inserir(nome_usuario,cpf_usuario,dataNascimento,cep_usuario,cidade_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO aulas (nome_usuario,cpf_usuario,data_nascimento,cep_usuario,cidade_usuario,telefone_usuario,email_usuario,nomeUser_usuario,senha_usuario) VALUE
             ('${nome_usuario}','${cpf_usuario}','${dataNascimento}','${cep_usuario}','${cidade_usuario}','${telefone_usuario}','${email_usuario}','${nomeUser_usuario}','${senha_usuario}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro
               
                resolve([201,"Inserido"])
            })
        })
    }

}

module.exports = new CadastroUsuario()