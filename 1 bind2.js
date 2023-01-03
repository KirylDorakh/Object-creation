let dog = {
    sound: 'woof',              //property
    talk: function() {          //method
        console.log(this.sound)
    }
}

let button = document.getElementById('myButton')

button.addEventListener('click', dog.talk.bind(dog))