const name = "shivam"
const age = 21
console.log(name + age)//old method

//New method is by using interpolation

console.log(`hey there my name is ${name} and my age is ${age}`)

//Decleration of string new method 

const gameName = new String(`shivam`)
console.log(gameName)
//since gameName is a object so you can use like key value pair
 console.log(gameName[0])
 //you can also use some prototypes properties in this 
 console.log(gameName.__proto__)
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(3))

 const newString = gameName.substring(0,4)//it will not accept any negative index
 console.log(newString)

 const anotherStrng = gameName.slice(0,5)
 console.log(anotherStrng)

 const Namer = "    shivam    ";
 console.log(Namer)
 console.log(Namer.trim())

 const url = "https://retic.com/shivam"
 console.log(url.replace('shivam', 'badal'))
 console.log(url.includes('google'))
 console.log(url.includes('retic'))

 const world = "shivam_singh_cse"
 console.log(world.split("_"));