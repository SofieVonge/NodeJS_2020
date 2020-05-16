const express = require("express");
const app = express();

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//session is a method that takes a json
const session = require("express-session");

const config = require("./config/config.json");

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

const rateLimit = require("express-rate-limit");

//rateLimit er en metode der tager et json
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutter
    max: 100 // hver ip har kun 100 forsøg per windowMs
});

app.use(limiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutter
    max: 8 // hver ip har kun 8 forsøg per windowMs
});

//set a specific limiter on specific routes
app.use("/signup", authLimiter);
app.use("/login", authLimiter);


app.use(express.static('public'));

//middelware, will be executed on ALL routes below this!
/*app.use((req, res, next) => {
    console.log("Time of request", new Date());
    next(); //next is a function that calls the next route below this
});*/

const authRoutes = require("./routes/auth.js");

app.use(authRoutes);

const userRoutes = require("./routes/users.js");

app.use(userRoutes);

const electiveRoutes = require("./routes/electives.js");

app.use(electiveRoutes);


//udpakker model fra objection, kunne også skrive const something = require("objection").Model;
const { Model } = require("objection");

//the library Knex
const Knex = require("knex");

const knexfile = require("./knexfile.js"); //the config file for the connection

//the connection knex, based on the config file
const knex = Knex(knexfile.development);

//all our models are now connected to the db
Model.knex(knex);

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/signup", (req, res) => {
    return res.sendFile(__dirname + "/public/signup/signup.html");  
});

app.get("/welcome", (req, res) => {
    if (req.session.signedIn) {
       return res.sendFile(__dirname + "/public/welcome/welcome.html"); 
    }
    return res.send({response: "You are not authorized to see this page"});
});

app.get("/seeelectives", (req, res) => {
    if (req.session.signedIn) {
        return res.sendFile(__dirname + "/public/electives/electives.html"); 
     }
     return res.send({response: "You are not authorized to see this page"});

});

app.get("/email", (req, res) => {
    if (req.session.signedIn) {
        return res.sendFile(__dirname + "/public/email/email.html"); 
     }
     return res.send({response: "You are not authorized to see this page"});
});





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