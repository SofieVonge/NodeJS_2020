const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded if we want to send a form
app.use(express.urlencoded({ extended: false }));
 
// parse application/json we need to parse the body in order to get it from req.body
app.use(express.json());

app.get("/", (req, res) => {
    return res.send({response: "Car Rest API version 0.0.1"});
});

let cars = [
    {id: 1, brand: "Tesla"}, 
    {id: 2, brand: "Fiat"}
];

let currentId = 2;

app.get("/cars", (req, res) => {
    return res.send({response: cars});
});

app.get("/cars/:id", (req, res) => {

    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({response: car});
});

// a post request for a specific car, the user doesn't know the id
app.post("/cars", (req, res) => {
    let newCar = req.body;
    newCar.id = ++currentId;

    cars.push(newCar);
  
    return res.send({response: cars});
});

app.put("/cars/:id", (req, res) => {
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    //make sure to delete the id from the body if there is any! since the client should not change the id
    delete req.body.id;

                //key value pair spread. It merges the two objects
    const updatedCar = { ...cars[foundIndex],...req.body}; 

    cars[foundIndex] = updatedCar;

    return res.send({response: cars});
});

app.delete("/cars/:id", (req, res) => {
    //filtrere altså bilen med id'et fra
    cars = cars.filter(car => car.id !== Number(req.params.id));
    

    return res.send({response: cars});
});



//oversigt over environment variabler
//console.log(process.env);

//hvis port er defined skal det være den port, hvis ikke skal det være 3000
//? er lig med if og : er lig med else
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) =>
{
    if (error)
    {
        console.log("Not connecting");
    }
    else {
        console.log("Listen on port", server.address().port);
    }
});