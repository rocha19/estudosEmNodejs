function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        let erro = false;

        if(erro){
            callback(12,"O Envio falhou!");
        }else{
            callback(12);
        }
    }, 3000)
}

console.log("Teste de envio de email, ANTES");

enviarEmail("Olá, olá", "rocha@rocha.com", (time, erro) => {
    if (erro == undefined){ 
        console.log("Teste de envio de email, DEPOIS");
        console.log(`Tempo: ${time}s`);
    } else{ 
        console.log("Erro: " + erro);
    }
});

