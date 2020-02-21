//import module express, return a function
const express = require("express");
//our server instance
const app = express();

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


//lytter på en port, error callback-metode
app.listen(3000, (error) => {
    if (error) //hvis error ikke er null, 0 eller undefined --> truesie
    //hvis vi får en fejl, returnerer den et json-objekt
    {
        console.log("Error running the server:", error);
    }
    console.log("Server is running on port", 3000);
});