const name = "Jugal Kishor"
const age = 18

console.log(name + age + " value"); // this is not recommended

console.log(`My name is ${name} and my age is ${age}`); //string interpolation // This is recommended


const gameName = new String("JugalJk") // One more way to define string
// IN this string create as a object and we can perform multiples predefined method on it like ChartAt, length etc

// Note: You can see all available method list on browser console. Just paste it and see in prototype option


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('l'));



const myString = "  jugal kishor   "

console.log(myString);
console.log(myString.trim());

const url = "https://jugal.com/jugal%20kishor"

console.log(url.replace('%20', '-'));

console.log(url.includes('jugal'));


const str = "user-jugal-kishor"

console.log(str.split('-'));