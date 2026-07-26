class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");

    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name, " IS BARKING");

    }
}

let dog = new Dog("Lilly", "Retriever");
dog.eat();
dog.sleep();
dog.bark();

console.log(dog.breed);
console.log(dog.name);

