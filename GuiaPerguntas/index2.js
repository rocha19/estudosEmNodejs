const express = require("express");
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang",(request, response) => {
    var nome = request.params.nome; //"Rocha"
    var lang = request.params.lang; //"Python"
    var exibirmsg = false;

    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Coca-cola",preco:5},
        {nome: "Leite",preco:1.45},
        {nome: "Carne", preco:15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    response.render("index2",{
        nome: nome,
        lang: lang,
        modulo: "Estagío",
        msg: exibirmsg,
        produtos: produtos
    });
});

app.listen(8080,()=>{
    console.log("App rodando!");
});