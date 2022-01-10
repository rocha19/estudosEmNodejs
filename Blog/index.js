const express = require("express");
const app = express();
const bodyParser = requise("body-parser");
const connection = require("./database/connection");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController")
// view engien
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

// body-parser
app.use(bodyParser.urlenconded ({extended: false}));
app.use(bodyParser.json());

// database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!")
    }).catch((error) => {
        console.log("ocorreu um erro!")
    });

app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (request, response) => {
    response.render("index");
});

app.listen(8080, () => {
    console.log("Servidor ativo!")
});