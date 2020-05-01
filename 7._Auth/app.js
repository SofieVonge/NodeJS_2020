const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth.js");

app.use(authRoutes);

//udpakker model fra objection, kunne også skrive const something = require("objection").Model;
const { Model } = require("objection");

//the library Knex
const Knex = require("knex");

const knexfile = require("./knexfile.js"); //the config file for the connection

//the connection knex, based on the config file
const knex = Knex(knexfile.development);

//all our models are now connected to the db
Model.knex(knex);

const userRoutes = require("./routes/users.js");

app.use(userRoutes);



//get users with knex, example:
/*app.get("/", async (req, res) => {
    //with promises:
   /* knex("users").select().then(users => {
    return res.send({response: users});
    });  */

    //with async await:
    /*return res.send({response: await knex("users").select()});
});*/


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