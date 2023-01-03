// prototype is the property on a function and only function that has this property,
// that is set as a property if use 'new' keyword

// __proto__ is the property on an object that actually points out the prototype that has been set
// for that object

let cat = {
    breed: 'munchkin'
}

let myCat = {
    name: 'Fluffy'
}

Object.setPrototypeOf(myCat, cat)

console.log(myCat.name)
console.log(myCat.breed)
console.log(myCat.__proto__)
console.log(myCat.prototype)

cat.taillength = 15

console.log(myCat.taillength)
console.log(myCat.__proto__)

function dog() {}
dog.prototype.breed = 'Bulldog'

let myDog = new dog()

console.log(myDog.breed)
console.log(1, myDog.__proto__)
console.log(2, myDog.prototype)
console.log(3, dog.prototype)

// 3
function Girrafe(){}
console.log(Girrafe.prototype)
let koala = {}
console.log(koala.prototype)
console.log(koala.__proto__)
console.log(koala.__proto__ === Object.prototype)
Object.setPrototypeOf(koala, dog)
console.log(koala.prototype)
console.log(koala.__proto__)
console.log(koala.__proto__ === Object.prototype)
