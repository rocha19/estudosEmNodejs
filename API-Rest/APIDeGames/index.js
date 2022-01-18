const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "ahlkHDAajdhskljafhafjnsfjk43tytery";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(request, response, next){
    const authToken = request.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                response.status(401);
                response.json({err:"Token inválido!"});
            }else{

                request.token = token;
                request.loggedUser = {id: data.id,email: data.email};
                request.empresa = "Guia do programador";                
                next();
            }
        });
    }else{
        response.status(401);
        response.json({err:"Token inválido!"});
    } 
}

var DB = {
    games: [
        {
            id: 3003,
            title: "Breath of Fire IV",
            year: 2000,
            price: 15
        },
        {
            id: 871,
            title: "Final Fantasy VII",
            year: 1997,
            price: 40
        },
        {
            id: 3451,
            title: "Pokemon Ruby",
            year: 2002,
            price: 60
        }
    ],
    users: [
        {
            id: 1,
            name: "Joao",
            email: "joao@joao.com",
            password: "123"
        },
        {
            id: 2,
            name: "jose",
            email: "jose@jose.com",
            password: "456"
        }
    ]
}

app.get("/games",auth,(request, response) => {
    response.statusCode = 200;
    response.json(DB.games);
});

app.get("/game/:id",auth,(request, response) => {
    if(isNaN(request.params.id)){
        response.sendStatus(400);
    }else{
        
        var id = parseInt(request.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            response.statusCode = 200;
            response.json(game);
        }else{
            response.sendStatus(404);
        }
    }
});

app.post("/game",auth,(request, response) => { 
    var {title, price, year} = request.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    response.sendStatus(200);
})

app.delete("/game/:id",auth,(request, response) => {
    if(isNaN(request.params.id)){
        response.sendStatus(400);
    }else{
        var id = parseInt(request.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            response.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            response.sendStatus(200);
        }
    }
});

app.put("/game/:id", (request, response) => {

    if(isNaN(request.params.id)){
        response.sendStatus(400);
    }else{
        
        var id = parseInt(request.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = request.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            response.sendStatus(200);

        }else{
            response.sendStatus(404);
        }
    }

});

app.post("/auth",(request, response) => {

    var {email, password} = request.body;

    if(email != undefined){

        var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email},JWTSecret,{expiresIn:'2h'},(err, token) => {
                    if(err){
                        response.status(400);
                        response.json({err:"Falha interna"});
                    }else{
                        response.status(200);
                        response.json({token: token});
                    }
                })
            }else{
                response.status(401);
                response.json({err: "Credenciais inválidas!"});
            }
        }else{
            response.status(404);
            response.json({err: "O E-mail enviado não existe na base de dados!"});
        }

    }else{
        response.status(400);
        response.send({err: "O E-mail enviado é inválido"});
    }
});

app.listen(3000,() => {
    console.log("API RODANDO!");
});