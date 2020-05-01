const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "bigcatszoo";

mongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {

    if (error) {
        console.log("There was an error: " + error);
    }

    //connect to db
    const bigCatsDB = client.db(dbName);

    //connect to collection
    const cats = bigCatsDB.collection("cats");

    //find elements in the collection cats, limits limits the output to 3
    cats.find({species: "Liger"}, {projection: {_id: 0}}).limit(3).toArray((error, foundCats) => {
        console.log(foundCats);
    
        //don't need to close when running our actual server
        client.close();
    });
    
});