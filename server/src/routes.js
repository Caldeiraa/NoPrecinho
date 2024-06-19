const express = require("express")
const router = express.Router

const routes = new router()

const cadastroUsuario = require("./app/controllers/CadastroUController")
const cadastroMercado = require("./app/controllers/CadastroMController")
const CadastroPMercado = require("./app/controllers/CadastroPMercadoController")
const Login = require("./app/controllers/LoginController")
const FeedMercado = require("./app/controllers/FeedMercadoController")

routes.get("/getCadastroUs",(req,res)=>{
    res.sendFile("usuario2.html",{root:'./public'})
})
routes.get("/getCadastroMe",(req,res)=>{
    res.sendFile("mercado2.html",{root:'./public'})
})
routes.get("/getCadastroPM",(req,res)=>{
    res.sendFile("mercado2.html",{root:'./public'})
})

routes.post("/cadastroUsuario",cadastroUsuario.create)
routes.post("/cadastroMercado",cadastroMercado.create)
routes.post("/cadastroPMer",CadastroPMercado.create)
routes.post("/loginU",cadastroUsuario.logar)
routes.post("/loginM",cadastroMercado.logar)
routes.post("/comparacao",CadastroPMercado.comparar)

routes.get("/cadastroU",cadastroUsuario.index)
routes.get("/produto/:id_prod",FeedMercado.show)
routes.get("/cadastroM",cadastroMercado.index)
routes.get("/cadastroPM",CadastroPMercado.index)
routes.get("/feed",FeedMercado.index)
routes.get("/feedSub/:id_subCategoria",FeedMercado.showSubCategorias)
routes.get("/mostrarSub/:categoria_id",CadastroPMercado.indexSubCategoria)
routes.get("/logos",cadastroMercado.indexLogo)
routes.get("/produtos",CadastroPMercado.indexMercado)

routes.put("/usuarios/:id_usuario",cadastroUsuario.update)
routes.put("/mercados/:id_mercado",cadastroMercado.update)
routes.put("/cadastroProdM/:id_produto",CadastroPMercado.update)

routes.delete("/usuarios/:id_usuario",cadastroUsuario.destroy)
routes.delete("/mercados/:id_mercado",cadastroMercado.destroy)
routes.put("/cadastroPM/:id_produto",CadastroPMercado.destroy)

module.exports = routes