function enviarEmail(corpo, para){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ........................
            ${corpo}
            ........................
            De: Rocha
        `)
    }, 8000)
};

console.log("Teste de envio de email, ANTES");
enviarEmail("Olá, olá", "rocha@rocha.com");
console.log("Teste de envio de email, DEPOIS")