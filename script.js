// part one
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

// part two
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// part three
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

// part four
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle) {
        if(newVehicle instanceof Vehicle) {
            if (this.vehicles.length >= this.capacity)
                return "Sorry, we're full.";
            
            this.vehicles.push(newVehicle);
            return "Vehicle added!";
        }
        return "Only vehicles are allowed in here!";
    }
}