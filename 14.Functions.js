function Price(...num1){//this ... is called rest operator 
    return num1
}
console.log(Price(200,300,789,457,345))

function ProductPrice(val1,val2, ...num1){
    return num1
}
console.log(ProductPrice(672,324,45,123,65,41234,1234))

const shivam = {
    Username: "shivamsinghcse",
    Email: "shivamsinghcse21@gmail.com"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} and email address is ${anyobject.Email}`)
}
handleObject(shivam)

//you can also pass direct values that can be used for example 
handleObject({
    Username: "shivamansh",
    Email: "rajputshivam377@gmail.com"
})

//similarly you can pass array to it
const abc = [673,31,4,63,4,23,12]
function abcaccepter(anyArr){
    return anyArr[3]
}
console.log(abcaccepter(abc))


///---------------------------------------------

//In this case you can call it before declerationm
addOne(78)
function addOne(num){
    return num + 1
}
addOne(78)
//this is also a function but some time it is called expression.But in this case you can't call it before decleration
const addTwo = function(num){
    return num + 2
}
addTwo(67)