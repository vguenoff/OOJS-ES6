import { Car } from './classes/Car.js'; 
import { Drone } from './classes/Drone.js'; 
import { fleet } from 'fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

// for(let car of dataService.cars) {
//     console.log(car.license);
// }

// for(let e of dataService.errors) { 
// 	console.log(e.message);
// }

// let car = dataService.getCarByLicense('AT9900');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
// for(let car of cars)
//     console.log(car);

let cars = dataService.filterCarsByMake('e');
for(let car of cars)
    console.log(car.make);

for(let e of dataService.errors) {
    console.log(e.message);
}
