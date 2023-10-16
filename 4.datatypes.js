// js is dynamically typed language

//primitive : 7 types: string , Number , Boolean , null , undefined , symbol, BigInt

const score = "100";
const score1 = "10.40";
const isLoggedIn = false
const valueOfTemp = null


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigIntNumbers = 63784623786187624123846341789
console.log(bigIntNumbers)

//nonprimitive or referance type: Array, Objects, Fuctions


const arrayexample = ["Itachi", "Sasuke", "Naruto"]

const Objectsexample = {
    Name: "Shivam singh",
    age: 21,
    Inanimeworld: "Itachi Uchiha"
}

const fun = function(){
    console.log("hello")
}

//if you want to know which data type a variable is then you can use typeOf()

//Null--> Object
console.table([typeof(arrayexample),typeof(fun)])



//+++++++++++++++++++++++++++++++++++++++++

//stack (Primitive), Heap (Non-primitive)
//stack me data ka ek copy milta hai jabki heep mai wo refrance milta hai iske matlab agar tum kisi dusre variable me primitive data type ko assign karte ho aur dure value ko update karte ho to orignal value me koi change nahi hoga while agar tum heep memory wale me karte ho to usme orignal value bhi change ho jayega
