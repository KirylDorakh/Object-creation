function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log('I say: ', this.saying)
}

// let crock ford = new Person('SEMICOLANS!!1one1')
// same
// create object by old way, it's like 'new' keyword works
function new1(constructor, ) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.from(arguments)
    return constructor.apply(obj, argsArray.slice(1)) || obj
}

var crockford = new1(Person, 'SEMICOLANS!!1one1')

crockford.talk()
console.log('end', crockford)
