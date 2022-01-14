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
}

enviarEmail("Olá, olá", "rocha@rocha.com")