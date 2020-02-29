const app = require("express")();

app.get("/", (req, res) => {
    return res.send({info: "Car Rest API version 0.0.1"});
});

let cars = [
    {id: 1, brand: "Tesla"}, 
    {id: 2, brand: "Fiat"}
];

app.get("/cars", (req, res) => {
    return res.send({cars: cars});
});

app.get("/cars/:id", (req, res) => {

    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({car: car});
});

const server = app.listen(3000, (error) =>
{
    if (error)
    {
        console.log("Not connecting");
    }
    else {
        console.log("Listen on port", server.address().port);
    }
});