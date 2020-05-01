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

    cats.insertOne({species: "Bobcat", color: "brown", age: 7}, (error, result) => {
        console.log(result);
        client.close();
    });


    
});