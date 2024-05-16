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

routes.get("/cadastroU",cadastroUsuario.index)
routes.get("/login",Login.index)
routes.get("/cadastroM",cadastroMercado.index)
routes.get("/cadastroPM",CadastroPMercado.index)
routes.get("/feed",FeedMercado.index)

routes.put("/usuarios/:id",cadastroUsuario.update)
routes.put("/mercados/:id",cadastroMercado.update)

routes.delete("/usuarios/:id_usuario",cadastroUsuario.destroy)
routes.delete("/mercados/:id",cadastroMercado.destroy)
module.exports = routes