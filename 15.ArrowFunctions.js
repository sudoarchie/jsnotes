
const data = {
    UserName: "shivam",
    age: 21,
    OnLoggedIn: function(){
        console.log(`${this.UserName}, You have Logged In `)
    }
}
data.OnLoggedIn()
data.UserName= "Badal"
data.OnLoggedIn()
//this only work with object not in function for example 

function Login(){
    let UserName ="Shivam"
    console.log(this.UserName)
}
Login()// in this case you are getting output as undefined

//Arrow Function 
const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(23,43))

//you can also return the values as implicite return or you can wrap num1 and num2 in () parentesis but whenever you use curly brasis {} then you have to use return
const addingTwoNumbers =(num1, num2) => num1 + num2
console.log(addingTwoNumbers(45,23))

//for returning object 
const userLogged = (userName) => ({message: `${userName} Logged in successful`})
console.log(userLogged('shivam').message)