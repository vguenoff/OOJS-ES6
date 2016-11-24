export class Vehicle {
    constructor(licenseNum) {
        this.licenseNum = licenseNum;
        this.gpsEnabled = true;
    }
    start() {
        console.log('starting Vehicle');
    }
    static getCompanyName() {
        console.log('My Company');
    }
}
