const express = require("express")
const router = express.Router

const routes = new router()

const cadastroUsuario = require("./app/controllers/CadastroUController")
const cadastroMercado = require("./app/controllers/CadastroMController")
const CadastroPMercado = require("./app/controllers/CadastroPMercadoController")

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
routes.get("/cadastroM",cadastroMercado.index)
routes.get("/cadastroPM",CadastroPMercado.index)

module.exports = routes