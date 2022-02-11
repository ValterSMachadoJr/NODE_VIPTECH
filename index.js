const express = require ("express");
const app = express();

app.use(express.json());
const produto = require("./rotas/produto");
const cor = require("./rotas/cor")
const marca = require("./rotas/marca")
const { sequelize } = require ("./bd");

app.get("/", (req, res) =>{
    res.send({ mensagem: "Bem vindo!" });
})

app.use ("/produto", produto);
app.use ("/cor", cor)
app.use ("/marca", marca)

app.listen (3001, () => {
    console.log('Aplicação Iniciada');

});

