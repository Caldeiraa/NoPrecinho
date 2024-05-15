const mysql = require("mysql2")
const dbConfig = require("../config")

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

    inserir(nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha_mercado){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO mercado (nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha) VALUE
             ('${nome_fantasia}','${razao_social}','${cnpj}','${telefone_mercado}','${cep_mercado}','${estado_mercado}','${cidade_mercado}','${bairro_mercado}','${rua_mercado}','${email_mercado}','${logo_mercado}','${descricao_mercado}','${senha_mercado}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro
               
                resolve([201,"Inserido"])
            })
        })
    }

    atualizar(nome_fantasia,id_mercado){
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE mercado SET nome_fantasia = '${nome_fantasia}' WHERE id_mercado = '${id_mercado}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro]) //erro                

                resolve([201,"Atualizado com sucesso"])
            })
        })
    }
    

    deletar(id_mercado){
        return new Promise((resolve,reject)=>{
            let sql = `DELETE FROM mercado WHERE id_mercado = '${id_mercado}'`
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])
                
                resolve([201,"Deletado com sucesso"])
            })
        })
    }


}

module.exports = new CadastroMercado()