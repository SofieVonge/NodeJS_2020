// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2

console.log(Number(numberOne) + Number(numberTwo));
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var decimal = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(decimal.toFixed(2));

// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var avg = (one + two + three) / 3;
console.log(avg.toFixed(5));


// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

//løsning 1
console.log(letters.charAt(2));

//løsning 2, en string er et array-object
console.log(letters[2]);
// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

//løsning 1
console.log(fact.replace(fact.charAt(17), "J"));


//løsning 2, replace returnerer en ny string. Her er det kun første j i stringen der laves om
console.log(fact.replace("j", "J"));
// --------------------------------------

//et objekt
var computer = {
    name: "bob"
};