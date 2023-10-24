//for of
const arr = [1,2,3,4,5,6,6]

for (const num of arr) {
    console.log(num)
}

const greetings = "shivam singh"
for(const words of greetings){
    console.log(words)
}
const ourmap = new Map()
ourmap.set('Name','Shivam')
ourmap.set('age','21')
console.log(ourmap)

for(const [key, value] of ourmap){
    console.log(`${key} :- ${value}`)
}