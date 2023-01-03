const cat = {
    init: function(sound){
        this.sound = sound
        return this         //if put this we cab remove from our code mark.init('Meow')
                            // and write Object.create(cat).init("mrrrrrroooooow")
    },
    makeSound: function() {
        console.log(this.sound)
    }
}

const mark =
    Object.create(cat).init('Meow')
mark.makeSound()

const waffle =
    Object.create(cat).init("mrrrrrroooooow")
waffle.makeSound()

console.log('Is mark a cat?', cat.isPrototypeOf(mark))


//implement by our self
function objectCreate(proto) {
    const obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj
}

const newCat = objectCreate(cat)
newCat.sound = 'new meow'
newCat.makeSound()