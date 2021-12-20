function Animal() {
    this.sound = 'animal sound';
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Dog() {
    this.sound = 'woof woof';
}

Dog.prototype = new Animal();

var dog = new Dog();
dog.makeSound(); // woof woof