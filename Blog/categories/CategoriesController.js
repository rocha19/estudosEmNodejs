const express = require("express");
const router = express.Router();

router.get("/categories", (request, response) => {
    response.send("CATERORIAS")
});

router.get("/admin/categories/new", (request, response) => {
    response.send("CRIAR CATEGORIAS")
});

module.exports = router;