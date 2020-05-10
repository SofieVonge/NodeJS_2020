const express = require("express");

const app = express();

app.use(express.json());


//giver client adgang til alt i public og videomappen
app.use(express.static('public'));
app.use(express.static('videos'));
app.use(express.static("images"));

//file system that is included in node
const fs = require("fs");

//ssr server side rendering, an easy way to have a navbar and footer, also good for SEO
//getting all the html pages as strings to concatenate them into a sandwich
const navbarPage = fs.readFileSync("./public/navbar/navbar.html", "utf8");
const frontpage = fs.readFileSync("./public/frontpage/frontpage.html", "utf8");
const footer  = fs.readFileSync("./public/footer/footer.html", "utf8");
const player = fs.readFileSync("./public/player/player.html", "utf8");
const upload = fs.readFileSync("./public/upload/upload.html", "utf8");


app.get("/", (req, res) => {
    // using a sandwich method to serve the pages
    //sends html pages to the client
    return res.send(navbarPage + frontpage + footer);
});


app.get("/player/:id", (req, res) => {
    return res.send(navbarPage + player + footer);
});

app.get("/upload", (req, res) => {
    return res.send(navbarPage + upload + footer);
});

//import routes (from file)
const videosRoute = require("./routes/videos.js");

//use routes with our server
app.use(videosRoute);


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, error => {
    if (error)
    {
        console.log("Not running");
    }
    else {
        console.log("This server is running on port", server.address().port);
    }
});