const express = require("express");
const app = express();

const server = require("http").createServer(app); //we can create more than one server in this way
const io = require("socket.io")(server);

//prevents cross side scripting!
const escape = require("escape-html");

//on this event, connection is a default event
io.on("connection", socket => {
    //console.log(socket.id);
    //the a client wrote this is the key when sending the data from the client to the server
    socket.on("a client wrote this", (data) => {
        console.log(data);
        //the server is repeating the client, io means it emits it to ALL clients
       // io.emit("A client said", data);

       //socket means it only emits to the one client that fired the event
       socket.emit("A client said", {text: escape(data.text)});

        //broadcast to everyone except the socket itself!
      // socket.broadcast.emit("A client said", data);
    });
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});

server.listen(3000, (error) => {
    if (error) {
        console.log("Error running server");
    }
    console.log("The server is running on port", 3000);
});