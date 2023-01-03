let talk = function () {
    console.log(this.sound)
}

let boromir = {
    speak: talk,
    sound: 'One does not simply walk into mordor!'
}

let talkBountToBoromir = talk.bind(boromir)

talkBountToBoromir()    // One does not simply walk into mordor!
talk()                  // undefined

boromir.speak()         // One does not simply walk into mordor!

let blabber = boromir.speak
blabber()               // undefined

// but
boromir.talking = talk.bind(boromir)
let plapper = boromir.talking
plapper()               // One does not simply walk into mordor!


let gollum = {
    jabber: boromir.speak,
    sound: 'My preciousss...'
}

gollum.jabber()
