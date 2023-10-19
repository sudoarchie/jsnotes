//Immediately Invoked Function Expressions(IIFE)
//it help us to protect from global scope pollution also it excute it just after decleration
(() =>{
    let user= {
        UserName: "shivamsinghcse",
        Email: "shivamsinghcse21@gmail.com"
    }
    console.log(user.UserName)
})();