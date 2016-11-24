import { Vehicle } from './Vehicle.js'; 
export class Car extends Vehicle {
    constructor(licenseNum) {
        super(licenseNum);
        this.gpsEnabled = false;
    }
    start() {
        // super.start(); // optional
        console.log('starting Car');
    }
    static getCompanyName() {
        // super.getCompanyName();
        console.log('My Car Company');
    }
}
