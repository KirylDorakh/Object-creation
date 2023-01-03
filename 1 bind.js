let dog = {
    sound: 'woof',              //property
    talk: function() {          //method
        console.log(this.sound)
    }
}

dog.talk()                      //woof

let talkFunction = dog.talk

talkFunction()                  //undefined


// bind
let boundFunction = talkFunction.bind(dog)

boundFunction()                 //woof