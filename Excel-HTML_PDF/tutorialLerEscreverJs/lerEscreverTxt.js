const fs = require("fs");

fs.readFile("./teste.txt",{encoding: 'utf-8'}, (erro, dados) => {
    if (erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log(dados);
    }
});

fs.writeFile("./teste.txt", "Novo conteúdo do arquivo", (error) => {
    if (error) {
        console.log("Ocorreu um erro na escrita");
    }
})