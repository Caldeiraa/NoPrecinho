const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const fileupload = require("express-fileupload");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static("public"));
    this.server.use(fileupload());
    this.server.use(express.urlencoded({ extended: false }));

    // Configuração do CORS apenas para permitir requisições do frontend em http://localhost:3000
    this.server.use(cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
  }

  routes() {
    this.server.use("/public/img", express.static("public/img"));
    this.server.use(routes);
  }
}

module.exports = new App().server;
