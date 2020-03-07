const express = require("express");

const app = express();

app.use(express.json());

//giver client adgang til alt i public og videomappen
app.use(express.static('public'));
app.use(express.static('videos'));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});



app.get("/player/:id", (req, res) => {
    return res.sendFile(__dirname + "/public/player/player.html");
});


const port = process.env.port ? process.env.port : 3000;

app.listen(port, error => {
    if (error)
    {
        console.log("Not running");
    }
    else {
        console.log("Running on port", port);
    }
});