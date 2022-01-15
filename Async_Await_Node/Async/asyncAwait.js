function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        }, 1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("email@email.com")
        }, 2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            let ocorreuUmErro = false;
            if(!ocorreuUmErro){
                resolve({time: 6, to: "email@email.com"})
            }else{
                reject("Fila cheia") 
            }
        }, 4000)
    })
};


function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "joao", lang:"Python"},
                {name: "jose", lang:"Lua"},
                {name: "jeremias", lang:"JavaScript"}
            ])
        }, 3000)
    })
}

/*

*/

async function principal(){
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Olá, como vai?", email);
        console.log("Email enviado com sucesso!");
    }catch(erro){   
        console.log(erro);
    }
}


principal();



/*
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
*/
