const Login = require("../models/Login")


class LoginController{

    index(req, res) {
        const { email, senha } = req.body;

        Login.mostrarTodos(email, senha)
            .then(resposta => {
            
                res.status(resposta[0]).json(resposta[1]);
            })
            .catch( resposta => {
                
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1].errno)
            });
    }
    
   
   

}

module.exports = new LoginController()