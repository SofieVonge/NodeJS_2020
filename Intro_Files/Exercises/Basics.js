// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is", firstName, "and my last name is", lastName);
// Exercise 2 - Numbers and Strings

var year = "2019";
var number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

//løsning 1, vil forsøge at finde det første nummeret i en string af bogstaver og numre, hvis stringen starter med et tal
var yearNum = parseInt(year) + number;
console.log(yearNum);

//løsning 2 parser year til et nummer
console.log(+year + number);

//løsning 3, kan ikke finde nummeret hvis der også er bogstaver
var newYear = Number(year) + number;
console.log(newYear);