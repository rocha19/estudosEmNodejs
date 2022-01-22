const pdf = require('html-pdf');


let nome = 'Rocha';
let outro = 'outra informação';


pdf.create(conteudo, {}).toFile('./nomedopdf', (err, res) => {
    if (err){
        console.log('erro');
    }else{
        console.log(res);
    }
});