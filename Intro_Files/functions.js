
//hoisting, alle funktioner gemmes i én stack som kaldes før alt andet 
//og derfor kan man skrive kald før selve funktionen er skrevet
addition(5, 45);

//hoisting, alle var-attributter der skabes, gemmes i en stack som bygges før man
//assigner attributter
test = "this is a test";
var test;

//med en const skal man skabe attributten samntidig med at man assigner den!
const konstant = "konstant";

//let er scoped hvor man definerer det hvor var er mere global, kan ikke hoistes
let enLet;



//no need for return type. First class citizens
function addition(a, b)
{
    return a + b;
}

var sum = addition(2, 6);
console.log(sum);

function introduce()
{
    console.log("hey!");
}

//funktioner som parametre!
function findPerson(whatToDoAfterFindingAPerson)
{
    console.log("Found a person")
    whatToDoAfterFindingAPerson();
}

findPerson(introduce);

//en konstant funktion!
const konstantFunktion = function()
{
    console.log("How do you do?");
}

findPerson(konstantFunktion);

//objekt som en konstant, kan ikke ændre referencen men man kan ændre key/value
const me = {"hobby": "computers"};

const aboutMe = function(myself)
{
    console.log("my hobby is", myself.hobby);
}

//funktionen er en variable men kan bruges som en funktion
aboutMe(me);

//arrow functions () => står i stedet for function()
//arrow functions kan kun bruges som en variabel
const anotherObject = 
{
    "myFav": () =>
    {
        console.log("my fav!");
    }
}

//myFav er en key hvis value er en funktion og derfor kan den kaldes som en funktion!
anotherObject.myFav()

//scope defineres ud fra {}, så dette er et scope i sig selv:
{
    console.log("Et scope!");
}

//arrow function that is called callingLater that takes the function calling as an argument
const calling = (name) =>
{
    return "ringringring to " + name;
};

//arrow function med parametre
const callingLater = (name, call) =>
{
    console.log(call(name));
}

callingLater("Anne", calling);


//nested functions
function lastThing() 
{
    function thisIsPossible()
    {
        console.log("Really??");
    }

    thisIsPossible();
}

lastThing();