const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const Pergunta = require("./database/Pergunta.js");

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão com banco de dados realizada com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Rotas
app.get("/",(require, response) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC'] //ordendando de crescente para decrescente
    ]}).then(perguntas => {
        response.render("index",{
            perguntas: perguntas
        });
    });
});

app.get("/perguntar",(require, response) => {
    response.render("perguntar");
})

app.post("/salvarpergunta",(require, response) => {

    var titulo = require.body.titulo;
    var descricao = require.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        response.redirect("/");
    });
});




app.listen(8080,()=>{console.log("App rodando!");});