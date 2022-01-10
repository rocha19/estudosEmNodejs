const express = require("express");
const router = express.Router();

router.get("/articles", (request, response) => {
    response.send("Artigos")
});

router.get("/admin/articles/new", (request, response) => {
    response.send("CRIAR ARTIGOS!")
});

module.exports = router;