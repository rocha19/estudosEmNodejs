const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


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
    ]
}

app.get("/games",(request, response) => {
    response.statusCode = 200;
    response.json(DB.games);
});

app.get("/game/:id",(request, response) => {
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

app.post("/game",(request, response) => { 
    var {title, price, year} = request.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    response.sendStatus(200);
})

app.delete("/game/:id",(request, response) => {
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

app.put("/game/:id",(request, response) => {

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

app.listen(3000,() => {
    console.log("API RODANDO!");
});