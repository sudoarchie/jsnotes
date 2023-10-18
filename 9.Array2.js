const myFriendsinIT =["Krishna", "Aditya"]
const MyFriendsinEE = ["Aditya", "Badal Bhopu", "sunny deol", "Land Rajput", "Hardik", "Hashina"]

// myFriendsinIT.push(MyFriendsinEE)
// console.log(myFriendsinIT)
// console.log(myFriendsinIT[2])//this will provide the internal array
// console.log(myFriendsinIT[2][2])//this will provide the element in internal array whose postion is 2

// const allFriends = myFriendsinIT.concat(MyFriendsinEE)//It does not replaces the myFrinendinIT array it simply return a new array 
// console.log(allFriends)

//spread operator 
// const mynewFriends = [...MyFriendsinEE, ...myFriendsinIT]
// console.log(mynewFriends)

// const anotherArray = [1,2,3,[4,5,6],7,[8,[9,10]]]
// const realAnotherArray = anotherArray.flat(Infinity)//in () you have to put the dept at which you want to get
// console.log(realAnotherArray)

// console.log(Array.isArray(["shivam"]))//it will return whether the input is array or not
// console.log(Array.from("shivam"))//it will make a array from shivam means that it constain words as array element
// console.log(Array.from({name: "shivam"}))//this is an intesting case often ask in interview

let math =100
let physics =120
let chemistry = 110

console.log(Array.of(math, physics, chemistry))