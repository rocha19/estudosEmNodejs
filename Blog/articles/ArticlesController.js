const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");
const require = require("express/lib/request");

router.get("/admin/articles", (require, response) => {
    Article.findALL({
        include: [{model: Category}]
    }).then(article => {
        response.render("admin/articles/index", {article: article});
    })
});

router.get("/admin/articles/new", (require, response) => {
    Category.findALL().then(categories => {
        response.render("admin/articles/new", {categories: categories});
    })
    
});

router.post("/articles/save", (require, response) => {
    var title = require.body.title;
    var body = require.body.body;
    var category = require.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        response.redirect("/admin/articles");
    });

});

router.post("/articles/delete", (request, response) => {
    var id = request.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                response.redirect("/admin/articles");
            });
        }else{// NÃO FOR UM NÚMERO
            response.redirect("/admin/articles");
        }
    }else{ // NULL
        response.redirect("/admin/articles");
    }
});

router.get("/admin/articles/edit/:id", (request, response) => {
    var id = request.body.id;
    Article.findByPk(id).then(article => {
        if(Article != undefined){
            Category.findALL().then(categories => {
                response.render("admin/articles/edit", {categories: categories})
            })
            
        }else{ // NULL
            response.redirect("/");
        }
    }).catch(err => {
        response.redirect("/");
    })
});

router.post("/articles/update", (request, response) => {
    var id = request.body.id;
    var body = require.body.body;
    var title = require.body.title;
    var category = require.body.category;

    Article.update({
        title: title,
        body: body,
        cadegoryId: category,
        slug: slugify(title)
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.redirect("/admin/aticles");
    }).catch(err => {
        response.redirect("/");
    })
});

router.get("articles/page/:num", (request, response) => {
    var page = request.params.num;
    var offset = 0

    if(isNaN(page) || page == 1){
        offset = 0
    } else {
        offset = (parseInt(page) - 1) * 4;
    }
    Article.findAndCountAll({
        limit: 3,
        offset: offset,
        order:[
            ['id','DESC']
        ]
    }).then(articles => {
        var next;
        if(offset + 4 >= articles.count){
            next = false
        } else {
            next = true
        }
        var result = {
            articles: articles,
            next: next,
            page: parseInt(page)
        }

        Category.findALL().then(categories => {
            response.render("admin/articles/page", {result: result, categories: categories})
        })
    })
});

module.exports = router