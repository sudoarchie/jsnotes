const userLoggedIn = true
if(userLoggedIn){
    console.log("Hey! User is just Logged in")
}

//we can also use comparision operator for getting the boolean < > <= >= != !== ===
//you can compare by multiple statement or condition 
const userId = {
    Name: "shivam",
    Email: "shivamsinghcse21@gmail.com",
    age: 21
}
if(userId.Name=="shivam" && userId.age>=18){
    console.log(`Hey! ${userId.Name} is Logged in`)
}

//Switch 
const userNickName = "Ansh"

switch (userNickName) {
    case "shivam":
        console.log("shivam")
        break;
    case "Ansh":
        console.log(`Ansh`)
        break;
    case "Badal":
        console.log(`Badal`)
        break;
    case "shubham":
        console.log(`shubham`)
        break;

    default:
        console.log(`not found`)
        break;
}

//falsy values
//false, 0 , -0 , BigInt 0n, "",null,undefined,NaN

//Truthy values 
//"0", 'false', " ", [],{}, function(){}

const arr =[]
if(arr.length == 0){
    console.log(`Array is empty`)
}
const emptyObject = {}
if(Object.keys(emptyObject).length==0){
    console.log(`Object is empty`)
}

//Nullish Coalescing Operator (??): null undefined
//it is used for a case where if we are fetching values from backend but we are not getting the values, then for safe side we can return any value or any function or whatever suits best at that situation.

let val1;
val1= 5 ?? 10
console.log(val1)
val1 = null ?? 10 ?? 20
console.log(val1)
// val1 = {data from backend} ?? function ()=>{}

// Terniary Operator
const TeaPrice = 100
TeaPrice >=100 ? console.log(`Price of tea is greater then 100`) : console.log(`Price of tea is less then 100`)