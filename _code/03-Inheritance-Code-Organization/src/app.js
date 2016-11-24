import { Drone } from './classes/Drone.js'; 
import { Car } from './classes/Car.js'; 

Drone.getCompanyName();
Car.getCompanyName();

console.log('----------------');

let c = new Car('A123'); 
c.start();

console.log('----------------');

let d = new Drone('Z123'); 
d.start();

console.log('\nCar ----------------');

console.log('License Number: ', c.licenseNum);
console.log('GPS Enabled: ', c.gpsEnabled);
console.log('c instanceof Car: ', c instanceof Car);
// console.log('c instanceof Vehicle: ', c instanceof Vehicle);
console.log('c instanceof Object: ', c instanceof Object);

console.log('\nDrone ----------------');

console.log('License Number: ', d.licenseNum);
console.log('GPS Enabled: ', d.gpsEnabled);
console.log('d instanceof Drone: ', d instanceof Drone);
console.log('d instanceof Car: ', d instanceof Car);
// console.log('c instanceof Vehicle: ', c instanceof Vehicle);
console.log('c instanceof Object: ', d instanceof Object);
