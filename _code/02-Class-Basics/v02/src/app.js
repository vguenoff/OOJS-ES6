class Drone {
    constructor(id, name) {
        // instance propertyes
        // when a variable begins wit underscore -> this is a convension that means the variable is private 
        this._id = id;
        this.name = name;
    }
    get id() {
        // could be some validation, logging, etc. 
        console.log('in id getter');   
        return this._id + ' TEMPORARY';
    }
    set id(value) {
        this._id = value;
    }
    // static method - because it's a static method, it only exists in the class
    static getCompany() {
        console.log('in getCompany');
    }
    // instance method
    fly() {
        console.log(`Drone ${this._id} is flying.`);
    }
}
// static property (class property) directly on the class, not the Drone instance
Drone.maxHeight = 2000;
console.log(Drone.maxHeight);
Drone.getCompany();

// drone 1
let drone = new Drone('A123', 'Flyer');

drone.id = 'Z123';
console.log(`drone: ${drone.id} ${drone.name}`);
drone.fly();

// drone 2
let drone2 = new Drone('B456', 'Twirl');
drone2.fly();

console.log(`${drone.id} | ${drone2.id}`);
