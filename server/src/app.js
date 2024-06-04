const express = require("express")
const routes = require("./routes")
const fileupload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())

        this.server.use(express.static("public"))

        this.server.use(fileupload())

        this.server.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.server.use("/public/img",express.static("public/img"))
        this.server.use(routes)
    }

}

module.exports = new App().server