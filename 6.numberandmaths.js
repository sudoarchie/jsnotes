//inplicite conversion
const score = 100
console.log(typeof(score))
const score1 = "100"
console.log(typeof(score1))

//explicite conversion
const abc = new Number(400)
console.log(abc)

console.log(abc.toString().length);
console.log(abc.toFixed(2));

const number = 123.457238
console.log(number.toPrecision(5))

const hund = 10000000
 console.log(hund.toLocaleString('en-IN'))

 //Maths===================================

 console.log(Math)
 console.log(Math.abs(-45))  //it convert -ve in +ve
 console.log(Math.round(43.8))
 console.log (Math.ceil(4.1))
 console.log(Math.floor(4.9))
 console.log(Math.min(2,4,1,4,7,8))
 console.log(Math.max(2,4,1,4,7,8))
 console.log(Math.random())

 const min = 10;
 const max = 20;
//for Gernating random number between max and min 
console.log(Math.floor(Math.random()*(max - min +1))+min)
