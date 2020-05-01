// // is used to make regEx
// i is a flag that ignores case
const myRegEx = /Hello/i;
const result = myRegEx.test("Hello world");

console.log(result);

// the pipe | is an or
const petString = "Sofie has a turtle";
const petRegEx = /dog|cat|bird|fish|turtle/;

console.log(petRegEx.test(petString)); //returns a boolean

// Match is a method on Strings to match the regex
const extractString = "Extract the word 'cow' from this string";
const cowRegEx = /cow/;

console.log(extractString.match(cowRegEx));

const stringRegEx = /string/;
console.log(extractString.match(stringRegEx));

//matching all and not just the first with a global flag
console.log("repeat, repeat, repeat".match(/repeat/g));

const twinkleStar = "Twinkle, twinkle, little star";
console.log(twinkleStar.match(/twinkle/ig)); //multiple flags at the same time

//wildcards, the dot . is one char after or before
const humString = "That's humbug!";
const hugString = "I need a hug.";
const huRegex = /hu/;

console.log(humString.match(huRegex));
console.log(hugString.match(huRegex));


const ex = "He's a fun 'un";
console.log(ex.match(/.un/g));

//wildcards - one of the following letters

console.log("I found big bugs in my bag".match(/b[aiu]g/g));

//find all vowels
console.log("I found big bugs in my bag".match(/[aiuyo]/gi));

//negated characters sets ^ means negative so it doesn't find bag and big
console.log("I found big bugs in my bag".match(/[^ai]/gi));

//Range is hyphen, matching in a range, can both be a range of numbers and letters
console.log("6kel4o5klg3k5k".match(/[0-9]/g));

console.log("6kel4o5klg3k5k".match(/[a-å]/gi));

console.log("6kel4o5klg3k5k".match(/[a-å0-9]/gi)); //all alfanumeric

//multiple matches with wildcard *
console.log("go goo goooo gooooo".match(/go*/ig));