var express = require("");
app = express()
var http = require("http").createServer(app);
var io = require("socket.io")(http);


io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log('desconectado ');
    })
});

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index");
});

http.listen(3000, () => {
    console.log("Servidor on!");
});