const Login = require("../models/Login")
const jwt = require("jsonwebtoken")
const secret = "123"

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
    
   
    logar(req, res){
        let{email, senha} = req.body
        Login.verificaUsuarioSenha(email, senha).
        then(
            resposta =>{
                console.log(resposta)
                let usuario_id = resposta[2]
                let usuario_tipo = resposta[3]
                let token = ''
                if(resposta[0] === 200){
                    token = jwt.sign({usuario_id, usuario_tipo}, secret,{expiresIn:300})
                }
                res.status(resposta[0]).json({token})
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1])
            }
        )
    }
    verificaToken(req, res, next){
        const token = req.headers['x-access-token']
        jwt.verify(token, secret, (erro, decoded)=>{
            if(erro){
                return res.status(401).json("Usuário não autenticado")
            }else{
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id:"+ decoded.usuario_tipo + "Tipo:"+ decoded.usuario_id)
                next()
            }
        })                
    }

}

module.exports = new LoginController()