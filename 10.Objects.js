//object literals(Not Singleton)

const mySymbol = Symbol("key")

const User ={
    name: "shivam",
    "full name": "shivam singh",
    [mySymbol]: "this is a key",
    age: 21,
    location: "NewYork",
    isLoggedIn: false

}
console.log(User)
console.log(User.name)
// console.log(User."full name")this will throw error because this is not support instide we can use diffrent method for doing this
console.log(User["name"])
console.log(User["age"])
console.log(User["full name"])
console.log(User[mySymbol])

//You can update values of any key by:
User.name = "shubham"
console.log(User)
//but if you want that value of object cannot be changeable then you can use freeze
// Object.freeze(User)
User.name= "Ansh"
console.log(User)

User.greeting = function(){
    console.log("hello my name is shivam")
}
User.greeting = function(){
    console.log(`Hello My Name is ${this.name}`)
}
console.log(User.greeting())
