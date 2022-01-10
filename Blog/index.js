const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response,send("Bem vindo!");
});

app.listen(8080, () => {
    console.log("Servidor ativo!")
});