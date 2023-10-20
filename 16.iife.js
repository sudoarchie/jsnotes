//Immediately Invoked Function Expressions(IIFE)
//it help us to protect from global scope pollution also it excute it just after decleration
(() =>{
    let user= {
        UserName: "shivamsinghcse",
        Email: "shivamsinghcse21@gmail.com"
    }
    console.log(user.UserName)
})();
((name)=>{
console.log(`HI ${name}`)
})("shivam");

//Named iife 
(function userData(username){
    console.log(`Hi my name is ${username}`)
})("Shivam"); 