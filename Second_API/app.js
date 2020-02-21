const express = require("express");
const app = express();

app.get("/", (req, res) =>
{

    const response = {
        name: "Sofie",
        age: 30,
        hobby: "computer"
    }
    res.send(response);

});

app.listen(9000);
