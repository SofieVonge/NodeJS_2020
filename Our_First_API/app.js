//import module express, that returns a function
const express = require("express");
//our server instance
const app = express();

const request = require("request");

//proxy server
app.get("/google", (req, res) =>
{
    //med en callback blokerer man ikke
  request('http://www.google.com', (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    return res.send(body);
  });

    
});

//for at vise hvad der er i html siden
app.get("/documentationone", (req, res) =>
{
    //console.log(__dirname); //giver directory name over hvor man eksekverer filen
    const dir = __dirname;
    return res.sendFile(dir + "/public/documentationone.html");
    //return res.redirect("/documentationtwo"); //redirecter over til stien /documentationtwo serverside

});

app.get("/documentationtwo", (req, res) => {

    return res.sendFile(__dirname + "/public/documentationtwo.html");
});

//get method til at komme til root
            //callback function, smart da den ikke blokerer for trafikken!
app.get("/", (req, res) => //request og response
{
    //json objekt!
    const response =
    {
        message: "Hi",
        number: 42
    }

    res.send(response);
    
});

app.get("/aboutMe",(req, res) =>
{

    const response =
    {
        name: "Sofie",
        age: "Unknown",
        hobby: "computers"
    }

    res.send(response);

});

const weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

//man kan også bruge moments.js modulet for bedre kode med tid!
app.get("/time", (req, res) =>
{
    const today = new Date();
    //need to use toString to get the real current
    const now = today.toString();
    let month = today.getMonth();
    month++;
    const day = today.getDay();

    const response = 
    {
        time: now,
        month: month,
        day: day,
        weekday: weekdays[day]

    }

    //like a return statement, should end the get-method
    res.send(response);

});

//dynamisk path variable /:id
app.get("/users/:id", (req, res) => {

    //viser parameteret id i console når vi går ind på users/id
    //det er et json objekt
    console.log(req.params);

    const users = [{id: 1, name: "Bruger"}, {id: 2, name: "Endnu en"}];

    //finder path variablet id
    let id = req.params.id;

        for (let i=0; i < users.length; i++){
        {
            if (users[i].id === parseInt(id))
            {
                return res.send(users[i]);
            }
        }
    }

});

//query string ser sådan her ud i browseren: /search?q=chair&id=1
app.get("/search", (req, res) => {

    //req er et json
    console.log(req);

    const users = [{id: 1, name: "Bruger"}, {id: 2, name: "Endnu en"}];

    let query = req.query.id;

    let user;

    for (let i=0; i < users.length; i++)
        {
            if (users[i].id === parseInt(query))
            {
                user = users[i]
            }
        }

    if (user != null)
    {
        return res.send(user);
    }
    else {
        return res.send("No such user");
    }

});


//lytter på en port, error callback-metode
app.listen(3000, (error) => {
    if (error) //hvis error ikke er null, 0 eller undefined --> truesie
    //hvis vi får en fejl, returnerer den et json-objekt
    {
        console.log("Error running the server:", error);
    }
    console.log("Server is running on port", 3000);
});