const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./users/User");

// View engine
app.set('view engine','ejs');

// Sessions

app.use(session({
    secret: "qualquercoisa", cookie: { maxAge: 30000000 }
}))

// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })


app.use("/",categoriesController);    
app.use("/",articlesController);
app.use("/",usersController);


app.get("/", (request, response) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            response.render("index", {articles: articles, categories: categories});
        });
    });
})

app.get("/:slug", (request, response) => {
    var slug = request.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                response.render("article", {article: article, categories: categories});
            });
        }else{
            response.redirect("/");
        }
    }).catch( err => {
        response.redirect("/");
    });
})

app.get("/category/:slug", (request, response) => {
    var slug = request.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                response.render("index",{articles: category.articles,categories: categories});
            });
        }else{
            response.redirect("/");
        }
    }).catch( error => {
        response.redirect("/");
    })
})


app.listen(3000, () => {
    console.log("O servidor está rodando!")
})