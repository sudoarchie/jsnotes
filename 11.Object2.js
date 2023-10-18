const reticuser = new Object()//This is a singleton object
const reticuser1 ={}//this is a letral object
reticuser.id="12346"
reticuser1.id="723468"
console.log(reticuser)
console.log(reticuser1)

const regularuser = {
    fullname: {
        userfullname: {
            firstName: "shivam",
            lastName: "singh"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstName)

//merging two or more object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"c", 6:"d"}
const obj4 = {5:"e", 6:"d"}
const obj5 = Object.assign({}, obj1, obj2, obj3,obj4)//here {} is target where you want to store the result if you are not writting that it mean it will put result in 1st object for this case obj1
console.log(obj5)

//You can use spread method for making it in a object

const newObj = {...obj1,...obj2,...obj3,...obj4}
console.log(newObj)

//while getting data from backend you will get data something like this 
const users =[
    {
        id:1,
        name:"shivam",
        email:"shivamsinghcse21@gmail.com"
    },
    {
        id:2,
        name: "Badal",
        email:"bsgautam@gmail.com"
    }
]

console.log(users[1].name)

console.log(Object.keys(obj3))//this will return you the value of keys in obj3
console.log(Object.values(obj3))//this will return you the vlaue of obj3

console.log(obj3.hasOwnProperty('c'))