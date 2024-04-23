const express = require("express")
const router = express.Router

const routes = new router()

const cadastroUsuario = require("./app/controllers/CadastroUController")

routes.get("/getCadastro",(req,res)=>{
    res.sendFile("usuario2.html",{root:'./public'})
})
routes.post("/cadastroU",cadastroUsuario.create)

routes.get("/cadastro",cadastroUsuario.index)

module.exports = routes