const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const Pergunta = require("./database/Pergunta.js");
const Resposta = require("./database/Resposta.js");
const { request } = require("express");


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

app.get("/pergunta/:id", (require, response) => {
    var id = require.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order:[ 
                    ['id','DESC'] 
                ]
            }).then(respostas => {
                response.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });

        }else{ // Não encontrada
            response.redirect("/");
        }
    });
})


app.post("/responder", (request, response) => {
    var corpo = request.body.corpo;
    var perguntaId= request.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        response.redirect("/pergunta/"+perguntaId);
    });
});

app.listen(8080,()=>{console.log("App rodando!");});