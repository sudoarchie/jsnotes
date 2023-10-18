function shivam() {
  console.log("shivam");
}
console.log(shivam); //if you donot write () at the end of function then it will give referance to an object
shivam(); //This is how function is called

function addTwoNumber(Number1, Number2) {
  console.log(Number1 + Number2);
}
let newVari = addTwoNumber(23, 67);
console.log(newVari); //this will come undefined because you are not returning any value you are just logging value

function addingTwoNumber(Number1, Number2){
    return Number1 + Number2
}
console.log(addingTwoNumber(43,65))

function loginUserMessage(userName){
    if(!userName){
        return `Please Enter Your Email`
    }
    return `${userName} Just Logged in`
}
console.log(loginUserMessage("shivam"))