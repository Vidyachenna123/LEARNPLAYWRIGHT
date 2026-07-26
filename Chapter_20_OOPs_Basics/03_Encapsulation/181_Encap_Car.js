class Car{
    #engine;
    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName;
    }

    getEngine(){
        return this.#engine;
    }
    setEngine(nameEngine){
        this.#engine = nameEngine;
    }
}

let telsa = new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());
