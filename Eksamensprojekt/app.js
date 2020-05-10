// setting up express
const express = require("express");
const app = express();

// setting up parsing of json and form-data
app.use(express.json);
app.use(express.urlencoded({extended: false}));

// setting up static folders
app.use(express.static("public"));

// setting up the ORM
const { Model } = require("objection");

// the library Knex
const Knex = require("knex");

// the config file for the connection
const knexfile = require("./knexfile.js");

// the connection knex, based on the config file
const knex = Knex(knexfile.development);

// connecting the models to the db
Model.knex(knex);


// HUSK AT LAVE SERVERSIDE SERVING AF SIDERNE!!! = sandwich


app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});


// setting up the port and start to listen
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error)
    {
        console.log("Not running: " + error);
    }
    else {
        console.log("This server is running on port", server.address().port);
    }
});

