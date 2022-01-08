const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Rotas
app.get("/",(require, response) => {
    response.render("index");
});

app.get("/perguntar",(require, response) => {
    response.render("perguntar");
})

app.post("/salvarpergunta",(require, response) => {
    var titulo = require.body.titulo;
    var descricao = require.body.descricao;
    response.send(`Formulário recebido! titulo: ${titulo}; descricao: ${descricao}.`);
});


app.listen(8080,()=>{console.log("App rodando!");});