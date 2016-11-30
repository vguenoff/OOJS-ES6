import { Car } from '../classes/Car.js'; 
import { Drone } from '../classes/Drone.js';
import { DataError } from './data-error.js'; 

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    getCarByLicense(license) {
        return this.cars.find(function(car) {
            return car.license === license; 
        });      
    }
    getCarsSortedByLicense() {
        return this.cars.sort(function(car1, car2) {
            if (car1.license > car2.license)
                return -1;
            if (car2.license > car1.license)
                return 1;
            return 0;
        });
    }
    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }
    loadData(fleet) {
        for(let data of fleet) {
            switch(data.type) {
            case 'car': {
                if (this.validaeCarData(data)) {
                    let car = this.loadCar(data);
                    if (car)
                        this.cars.push(car);
                } else {
                    let e = new DataError('invalid car data', data);
                    this.errors.push(e);
                }
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
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch(e) {
            this.errors.push(new DataError('Error loading car.', car));
        }
        return null;
    }
    validaeCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        for(let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`invalid field ${field}`), car);
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('invalid milage', car));
        }
        return !hasErrors;
    }
}