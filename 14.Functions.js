function Price(...num1){//this ... is called rest operator 
    return num1
}
console.log(Price(200,300,789,457,345))

function ProductPrice(val1,val2, ...num1){
    return num1
}
console.log(ProductPrice(672,324,45,123,65,41234,1234))