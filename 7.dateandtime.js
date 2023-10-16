//Dates

let thedate = new Date()

console.log(thedate)
console.log(thedate.toString())
console.log(thedate.toDateString())
console.log(thedate.toLocaleString())

//creating Dates
let myDate = new Date(2023, 0, 2)
console.log(myDate.toLocaleString())//iss formate me month ka indexing 0 se hota hai matlab 0-> jan ke use hoga
 myDate = new Date(2023,0,12,5,3)
 console.log(myDate.toLocaleString())
 myDate = new Date("2023-01-14")
 console.log(myDate.toLocaleString())


 //To get current time
myDate = Date.now();
console.log(myDate)//it give time form 1970 in milisecouds
console.log(thedate.getTime())
//if you want to compair two values in secounds then you can divide it to 100 
console.log(Math.round(thedate.getTime()/1000))

//Similarly, you can get date day month also
let newdate = new Date()
console.log(newdate.getDay());//it will return the number of that day means for sunday you will get 0 and for saturday you will get 7
console.log(newdate.getMonth()+1)//i am adding 1 because for js the indexing of month starts from 0 so it not user friendly for making we add 1 to it
 console.log(newdate.toLocaleString('default', {
    year:"2-digit"
 })
 )
 //toLocaleSting have some very useful feature like you can get specfic item like what is year in that date or secound and many more.
 