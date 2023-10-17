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
const obj5 = Object.assign({}, obj1, obj2, obj3,obj4)
console.log(obj5)