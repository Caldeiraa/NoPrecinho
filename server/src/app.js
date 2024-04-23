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
    }

    routes(){
        this.server.use(routes)
    }

}

module.exports = new App().server