const { request, response } = require('express');
const express = require('express');
const { path } = require('express/lib/application');
const app = express();
const multer = require('multer');

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, 'src/upload');
    },
    filename: function(request, file, callback){
        callback(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage})


app.get('/', (request, response) => {
    response.render('index');
});

app.post('/src/upload', upload.single('file'), (request, response) => {
    response.send("Recebido!")
})

app.listen(3000, () => {
    console.log('pegou!');
});