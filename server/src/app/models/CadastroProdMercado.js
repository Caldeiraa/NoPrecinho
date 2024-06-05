const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")

class CadastroProdMercado{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = "SELECT produto_mercado.*, mercado.nome_fantasia AS nome_mercado FROM produto_mercado JOIN mercado ON produto_mercado.mercado_id = mercado.id_mercado;"
            this.conexao.query(sql,function(erro,retorno){
                if(erro) reject([400,erro])

                resolve([201,retorno])
            })
        })
    }

    inserir(nome_prod_mercado, marca_mercado, peso_mercado, preco_mercado, foto_prod_mercado, descricao_prod, mercado_id, id_subCategoria, arquivo) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO produto_mercado 
                       (nome_produto, marca_produto, peso_produto, preco_produto, foto_produto, descricao, mercado_id, sub_categoria_id) 
                       VALUES ('${nome_prod_mercado}', '${marca_mercado}', '${peso_mercado}', '${preco_mercado}', '${foto_prod_mercado}', '${descricao_prod}', '${mercado_id}', '${id_subCategoria}')`;
            this.conexao.query(sql, function(erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                } else {
                    arquivo.mv(caminhoServer + "/../Public/img/" + foto_prod_mercado);
                    resolve([201, "Inserido"]);
                }
            });
        });
    }
    

    comparacao(nome_prod, marca_prod) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT p1.id_produto_mercado, p1.nome_produto, p1.marca_produto, p1.preco_produto, p1.mercado_id
                FROM produto_mercado p1
                JOIN (
                    SELECT nome_produto, marca_produto
                    FROM produto_mercado
                    WHERE nome_produto = '${nome_prod}' AND marca_produto = '${marca_prod}'
                    GROUP BY nome_produto, marca_produto
                    HAVING COUNT(DISTINCT mercado_id) > 1
                ) p2 ON p1.nome_produto = p2.nome_produto AND p1.marca_produto = p2.marca_produto
                WHERE p1.nome_produto = '${nome_prod}' AND p1.marca_produto = '${marca_prod}'
                ORDER BY p1.nome_produto, p1.marca_produto, p1.mercado_id;`;
    
            this.conexao.query(sql, function(erro, resultados) {
                if (erro) {
                    reject([400, erro]);
                } else {
                    resolve([200, resultados]);
                }
            });
        });
    }    
    
    
    atualizar(id_produto,preco_novo) {
        return new Promise((resolve, reject) => {
            // Verifica se o nome_fantasia está definido
    
            let sql = `UPDATE produto_mercado
            SET preco_produto = '${preco_novo}'
            WHERE id_produto_mercado = '${id_produto}';`;
    
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                    return;
                }
                if (retorno.affectedRows > 0) {
                    resolve([201, "Atualizado com sucesso"]);
                } else {
                    reject([404, "ID do mercado não encontrado"]);
                }
            });
        });
    }

    deletar(id_produto) {
        return new Promise((resolve, reject) => {
            // Verifica se o nome_fantasia está definido
    
            let sql = `UPDATE produto_mercado
                SET status = 'Desativado'
                WHERE id_produto_mercado = '${id_produto}';`;
    
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                    return;
                }
                if (retorno.affectedRows > 0) {
                    resolve([201, "Atualizado com sucesso"]);
                } else {
                    reject([404, "ID do mercado não encontrado"]);
                }
            });
        });
    }
    
}

module.exports = new CadastroProdMercado()