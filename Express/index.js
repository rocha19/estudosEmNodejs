const express = require("express");
const app = express(); 



app.get("/", function(request, response){
    res.send("<h1>Bem vindo ao guia do programador</h1>");
});

app.get("/blog/:artigo?", function(request, response){

    var artigo = request.params.artigo;

    if(artigo){
        response.send(`<h2>Artigo: ${artigo} </h2>`);
    }else{
        response.send("<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com</h3>");
    }
});

app.get("/canal/youtube", function(request, response){
    var canal = request.query["canal"];

    if(canal){
        response.send(canal); 
    }else{
        response.send("Nenhum canal fornecido!");
    }
});

app.get("/ola/:nome/:empresa", function(request, response){
    var nome = request.params.nome;
    var empresa = request.params.empresa;
    response.send(`<h1>Oi ${nome} do ${empresa}</h1>`);
});


app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})

