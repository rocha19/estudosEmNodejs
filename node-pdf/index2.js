const pdf = require('html-pdf');
const ejs = require('ejs');

let nome = 'Rocha';
let outro = 'outra informação';

ejs.renderFile('./views/index.ejs', {nome: nome, outro: outro}, (err, html) => {
    if (err){
        console.log('erro');
    }else{
        pdf.create(html, {}).toFile('./nomedopdf', (err, res) => {
            if (err){
                console.log('erro');
            }else{
                console.log(res);
            }
        });
    }
});

