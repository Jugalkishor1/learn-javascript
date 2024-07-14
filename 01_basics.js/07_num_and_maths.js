const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);   // U can see all properties of this by console.log in browsers console

// console.log(balance.toString().length);

const recharge = 123.442
// console.log(recharge.toFixed(2));

const newRecharge = 123.8421

// console.log(newRecharge.toPrecision(4));

const hundreds = 1056322

// console.log(hundreds.toLocaleString('en-IN'));

// Try different properties of Number in console by : Number.
// Number.MAX_VALUE/MIN_VALUE etc



// =====================  Maths ==============================================


// console.log(Math); // See all properties of this in browser

// console.log(Math.abs(-4));  We can change out negative value to positive(only neg values)

// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3)); // round of the value to top one
// console.log(Math.floor(4.9)); // round of the value to below one

// console.log(Math.min(3,5,2,7,9,5,4)); //returm minimum value


console.log(Math.random()); // It will return random value between 0 and 1 (both includes)

// console.log(Math.random() * 10 + 1);


const min = 10
const max = 20

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // when we want the value from 10 t0 20





