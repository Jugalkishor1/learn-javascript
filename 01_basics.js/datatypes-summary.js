// Interview perspective


/*
There are two types of datatypes:  Primitive and Non-Primitive

Primitive: Call by value
String, Number, boolean, null, Undefined, symbol, BigInt

Refrence type or Non-primitive
Arrays, objects, Functions

// if u want to master js then mater this things can help u to master js : Objects and DOM events

*/

// JS is statically typed of dynamically typed langaue


const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234'); // Even though id and anotherId looks same but they are not

// console.log(id == anotherId);

const bigNumber = 34567890567n



// array, object, functions

const heros = ["shaktiman", "nagraaj", "doga"];

let myObj = {
    name: "Jugal",
    age: 18
}

const myFunction = function(){
    console.log("You are inside myFunctionn");
}

myFunction();

console.log(typeof bigNumber);