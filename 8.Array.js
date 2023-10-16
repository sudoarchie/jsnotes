//Arrays 

const myArr = [0,1,2,3,4,5]
//js array can be resize 
//js array make shallow copies means on changing the copies the original array will change 
const superHero = ["spiderman","ironman"]

const myArr1 = new Array(2,43,433,2,3,4,3,5)
console.log(myArr1[5])
console.log(myArr1.length)

//Array Methods

myArr1.push(96)//add element to last 
myArr1.pop()//this will remove the last element 
myArr1.unshift(9)//This will add 9 as the first element other element are shifted accordingly
myArr1.shift()//This will remove the first element of the array
console.log(myArr1.includes(43))// It will return boolean true or false
console.log(myArr1.indexOf(3))//it will return the index of element which hit first and if there is no such element then it will return -1

const newArr = myArr1.join();


console.log(myArr1);
console.log(newArr);//This will stringfy the elements comma sperates

const shivamArr = myArr1.slice(1,3)
console.log(shivamArr)
console.log(myArr1)

const shubhamArray = myArr1.splice(1,3)//it will remove those element from old array which are spliced here
console.log(shubhamArray)
console.log(myArr1)
