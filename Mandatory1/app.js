// import express
const express = require("express");

// set up the server instance
const app = express();

//set the server to use public as a static folder
app.use(express.static('public'));


// sending the html index file when the root route is requested
app.get("/", (req, res) =>{
    return res.sendFile(__dirname + "/public/index.html");
});

app.get("/menu", (req, res) => {
    return res.sendFile(__dirname + "/public/menu.html");
});

app.get("/express", (req, res) => {
    return res.sendFile(__dirname + "/public/express.html");
});

app.get("/nodemon", (req, res) => {
    return res.sendFile(__dirname + "/public/nodemon.html");
});

app.get("/request", (req, res) => {
    return res.sendFile(__dirname + "/public/request.html");
});

app.get("/nodejs", (req, res) => {
    return res.sendFile(__dirname + "/public/nodejs.html");
});

app.get("/jquery", (req, res) => {
    return res.sendFile(__dirname + "/public/jquery.html");
});

app.get("/clientserver", (req, res) => {
    return res.sendFile(__dirname + "/public/clientserver.html");
});

app.get("/restapi", (req, res) => {
    return res.sendFile(__dirname + "/public/restapi.html");
});

app.get("/callback", (req, res) => {
    return res.sendFile(__dirname + "/public/callback.html");
});


const port = process.env.port ? process.env.port : 3000;

// listen on port 3000, logging possible errors
app.listen(port, error => {

    if (error) 
    {
        console.log("Error occured! Error:", error);
    }
    console.log("Server is running on port", port);
});
