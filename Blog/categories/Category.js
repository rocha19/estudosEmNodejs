const Sequilize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories', {
    title: {
        type: Sequilize.STRING,
        allowNull: false
    }, slug: {
        type: Sequilize.STRING,
        allowNull: false
    }
});

// Category.sync({force: true}); // - força criação da tabela

module.exports = Category;