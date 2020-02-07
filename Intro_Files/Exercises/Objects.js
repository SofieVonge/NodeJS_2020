// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
//lørsning 1, dot notation, foretrækker denne notation!
console.log(myObj.message);

//løsning 2; by key, square notation
console.log(myObj["message"]);
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
var me = {name: "Sofie", age: 30};
console.log(me.name, me.age);
// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);
// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
thisSong.about = "Just a tribute";
delete thisSong.description;
console.log(thisSong);
// --------------------------------------

//objects er {}, arrays er []


