const Sequelize = require("sequelize");
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define('Articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull:false
    }
});

// relacionamento 1 = n: hasMany;
// relacionamento 1 = 1: belongsTo;

Category.hasMany(Article);
Article.belongsTo(Category);

// Article.sync({force: true}); // - força criação da tabela

module.exports = Article;