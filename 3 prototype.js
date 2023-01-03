function talk1(sound) {
    console.log(sound)
}

talk1('woof from talk1')

function talk2() {
    //console.log(this)
    console.log(this.sound)
}

let animal = {
    sound: 'woof from animal',
    talk2                       //same talk2: talk2
}

animal.talk2()

let cat = {
    sound: 'Meow'
}
let dog = {
    sound: 'wooof!'
}
let prarierDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
animal.talk2 = function() {
    console.log('I am a little teapot ' + this.sound)
}
Object.setPrototypeOf(prarierDog, dog)

cat.talk2()
dog.talk2()
prarierDog.howl()