let firstNameSymbol = Symbol();
let lastNameSymbol = Symbol();

export class Person {
    constructor(firstName, lastName) {
        this[firstNameSymbol] = firstName;
        this[lastNameSymbol] = lastName;
    }
    greet(name){
        return `Oh, hi ${name}. My name is ${this[firstNameSymbol]} ${this[lastNameSymbol]}.`;
    }
    get firstName() {
        return this[firstNameSymbol];
    }
    get lastName() {
        return this[lastNameSymbol];
    }
    static renamePerson(person, lastName) {
        person[lastNameSymbol] = lastName;
    }
}