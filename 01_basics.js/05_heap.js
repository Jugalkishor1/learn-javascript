// Memories in js 
// Stack and heap
// stack (Primitive data types): copy of an original value of an varaible
// Heap (Nob-Primitive data types): refrence of an original value

// source youtube video: https://www.youtube.com/watch?v=7gwc-1czolw

// Stack example
let myName = "jugal"
let myFullName = myName

myFullName = "Jugal kishor"

console.log(myName); // Jugal
console.log(myFullName); // Jugal Kishor

/*
In short, we got diffrent value by console.log because we change the value in copy of first varable,
not on original value or reference
*/



// Heap example

let userOne = {
    email: "jugal@gmail.com",
    age: 23
}

let userTwo = userOne;

userTwo.email = "jk@gmail.com"

console.log(userOne.email); // jk@gmail.com
console.log(userTwo.email); // jk@gmail.com

// explanation: Both returm same value because u have changed value of an refrence not an copy variable 



