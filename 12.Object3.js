const Product = {
    Name: "Nike Airmax v2",
    price: 2999,
    color: "red",
}
console.log(Product.price)
//But there is another method of calling this you don't have to write course.name or any thing 

const {Name}= Product
console.log(Name)//you can also make any shortname of name in this means instide of callling by Name you can call it by your shortname.
const {Name: nm}= Product
console.log(nm)

//In React or In Nextjs use this for example
//instide of writting like const navbar = (Props.company) =>{ we replace it by const navbar = ({company}) =>{
// const navbar = ({company}) =>{

// }
// navbar(company = "histesh")

