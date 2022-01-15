function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        }, 1500)
    })
};

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("email@email.com")
        }, 2000);
    })
};

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var ocorreuUmErro = false;
            if(!ocorreuUmErro){
                resolve({time: 6, to: "email@email.com"})
            }else{
                reject("Fila cheia") 
            }
        }, 4000)
    })
};


console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(error);
        })
    })
});
console.log("PROCESSO FINALIZADO");