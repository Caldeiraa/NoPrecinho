const Login = require("../models/Login")

class LoginController{

    index(req,res){
        let email = req.body.email
        let senha = req.body.senha
        Login.mostrarTodos(email,senha).then(resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }).catch(
            resposta =>{
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new LoginController()