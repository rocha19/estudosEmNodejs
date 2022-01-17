function modificarJSON(nome, curso){
    fs.readFile("./usuario",{encoding: 'utf-8'}, (erro, dados) => {
        if (erro){
            console.log("Ocorreu um erro!");
        } else {
            var conteudo = JSON.parse(dados); //JSON.parse: texto para JSON
            conteudo.nome = nome;
            conteudo.curso = curso;
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (error) => {  //JSON.stringfy: JSON para texto
                if (error) {
                    console.log("Ocorreu um erro na escrita");
                }
            });
            console.log(conteudo);
        }
    });
}

modificarJSON("Marcelo Rocha", "Python");