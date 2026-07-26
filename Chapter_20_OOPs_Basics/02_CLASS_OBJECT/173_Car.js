class Car {

    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }




    drive() {
        console.log("I am driving this car", this.name);
    }

}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("Grand i10");
i10.drive();


