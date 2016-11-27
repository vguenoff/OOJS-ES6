import { Car } from '../classes/Car.js'; 
import { Drone } from '../classes/Drone.js';
import { DataError } from './data-error.js'; 

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    loadData(fleet) {
        for(let data of fleet) {
            switch(data.type) {
            case 'car': {
                let car = this.loadCar(data);
                this.cars.push(car);
                break;
            }
            case 'drone':
                this.drones.push(data);
                break; 
            default: 
                this.errors.push(new DataError('Invalid vehicle type.', data));
                break;
            }
        }
    }
    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLond);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch(e) {
            this.errors.push(new DataError('Error loading car.', data));
        }
        return null;
    }
}
